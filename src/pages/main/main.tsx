import '../../styles/entry.scss';
import React from 'react';
import Header from 'src/components/header/header';
import { UsersType } from 'src/utils/types/types';
import Loader from 'src/components/loader/loader';
import Card from 'src/components/card/card';
import { URL_USERS } from 'src/utils/const/const';

interface MainState {
  readonly users: UsersType[];
}

export default class Main extends React.Component<{}, MainState> {
  constructor(props: {}) {
    super(props);
    this.state = { users: [] };
  }
  async componentDidMount(): Promise<void> {
    const response = await fetch(URL_USERS);
    const users = await response.json();
    this.setState({ users: Object.values(users) });
  }

  render() {
    return (
      <div>
        {this.state.users.length === 0 && <Loader />}
        {this.state.users.length &&
          this.state.users.map(({ id, ...rest }) => <Card key={id} user={rest} />)}
        <Header />
      </div>
    );
  }
}
