import React from 'react';
import { UsersType } from 'src/utils/types/types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default class ItemCard extends React.Component<{ user: Omit<UsersType, 'id'> }> {
  render() {
    const {
      user: {
        name,
        username,
        email,
        address: { street, suite, city, zipcode },
        phone,
      },
    } = this.props;

    return (
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div">
              {`User: ${name} aka ${username}`}
            </Typography>
            <Typography variant="h5" component="div">
              {}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {`Phone: ${phone}, Email: ${email}`}
            </Typography>
            <Typography variant="body2">
              {'Address'}
              <br />
              {street}
            </Typography>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="h5" component="div">
              {suite}
            </Typography>
            <Typography variant="h5" component="div">
              {city}
            </Typography>
            <Typography variant="h5" component="div">
              {zipcode}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }
}
