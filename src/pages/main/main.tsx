import { ChangeEvent, Component } from 'react';
import Header from 'src/components/header/header';
import { UsersType } from 'src/utils/types/types';
import Loader from 'src/components/loader/loader';
import Card from 'src/components/card/card';
import { LocalStorageKeys, URL_USERS } from 'src/utils/const/const';
import { applyToLocalStorage, getFromLocalStorage } from 'src/utils/local-storage';
import '../../styles/entry.scss';
import './main.scss';
import { TextField } from '@mui/material';
import React from 'react';
import InputSearch from 'src/components/search/input-search';

interface MainState {
  users: UsersType[];
  searchQuery: string;
}

export default class Main extends Component<{}, MainState> {
  constructor(props: {}) {
    super(props);
    this.state = { users: [], searchQuery: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  async componentDidMount() {
    const response = await fetch(URL_USERS);
    const users = await response.json();
    this.setState({ users: Object.values(users) });
    if (getFromLocalStorage(LocalStorageKeys.searchValue).length > 0) {
      this.setState({ searchQuery: getFromLocalStorage(LocalStorageKeys.searchValue) });
    }
  }

  handleChange({ target: { value } }: ChangeEvent<HTMLInputElement>) {
    this.setState({ searchQuery: value });
    applyToLocalStorage(LocalStorageKeys.searchValue, value);
  }

  render() {
    return (
      <div className="page__body">
        <Header />
        <InputSearch handleChange={this.handleChange} searchQuery={this.state.searchQuery} />

        {this.state.users.length === 0 && <Loader />}
        {this.state.users.length > 0 && (
          <section className="cards">
            {this.state.users.map(
              ({ id, ...rest }) =>
                JSON.stringify(rest).includes(this.state.searchQuery) && (
                  <Card key={id} user={rest} />
                )
            )}
          </section>
        )}
      </div>
    );
  }
}
