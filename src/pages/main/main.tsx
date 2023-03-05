import React, { ChangeEvent } from 'react';
import Header from 'src/components/header/header';
import { UsersType } from 'src/utils/types/types';
import Loader from 'src/components/loader/loader';
import Card from 'src/components/card/card';
import { LocalStorageKeys, URL_USERS } from 'src/utils/const/const';
import { applyToLocalStorage, getFromLocalStorage } from 'src/utils/local-storage';
import '../../styles/entry.scss';
import styles from './main.module.scss';
import { Grid, TextField } from '@mui/material';

interface MainState {
  users: UsersType[];
  searchQuery: string;
}

export default class Main extends React.Component<{}, MainState> {
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
    const { page__body } = styles;
    return (
      <div className={page__body}>
        <Header />
        <TextField
          variant="outlined"
          label="Find something"
          inputProps={{ inputMode: 'search', placeholder: 'Type search words' }}
          onChange={this.handleChange}
          value={this.state.searchQuery}
          fullWidth
          helperText="Type words and you'll find!"
        />
        {this.state.users.length === 0 && <Loader />}
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {this.state.users.length &&
            this.state.users.map(
              ({ id, ...rest }) =>
                JSON.stringify(rest).includes(this.state.searchQuery) && (
                  <Grid item xs={3} key={id}>
                    <Card key={id} user={rest} />
                  </Grid>
                )
            )}
        </Grid>
      </div>
    );
  }
}
