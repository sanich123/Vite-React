import '../../styles/entry.scss';
import React, { ChangeEvent } from 'react';
import Header from 'src/components/header/header';
import { UsersType } from 'src/utils/types/types';
import Loader from 'src/components/loader/loader';
import Card from 'src/components/card/card';
import { URL_USERS } from 'src/utils/const/const';
import SearchBar from 'src/components/search/search-bar';

interface MainState {
  readonly users: UsersType[];
  readonly searchQuery: string;
}

export default class Main extends React.Component<{}, MainState> {
  constructor(props: {}) {
    super(props);
    this.state = { users: [], searchQuery: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  async componentDidMount(): Promise<void> {
    const response = await fetch(URL_USERS);
    const users = await response.json();
    this.setState({ users: Object.values(users), searchQuery: this.state.searchQuery });
  }

  handleChange({ target: { value } }: ChangeEvent<HTMLInputElement>) {
    this.setState({ users: this.state.users, searchQuery: value });
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar handleChange={this.handleChange}/>
        {this.state.users.length === 0 && <Loader />}
        {this.state.users.length &&
          this.state.users.map(
            ({ id, ...rest }) =>
              JSON.stringify(rest).includes(this.state.searchQuery) && <Card key={id} user={rest} />
          )}
      </div>
    );
  }
}
