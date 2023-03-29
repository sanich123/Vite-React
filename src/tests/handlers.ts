import { rest } from 'msw';
import { URL_USERS } from 'src/utils/const/const';
import { MOCK_USERS } from 'src/utils/mocks/mocks';

export const handlers = [
  rest.get(URL_USERS, (req, res, ctx) => res(ctx.status(200), ctx.json(MOCK_USERS))),
  rest.get(`${URL_USERS}?q=превед`, (req, res, ctx) => {
    res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: 'превед',
          username: 'Bret',
          email: 'Sincere@april.biz',
          address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
              lat: '-37.3159',
              lng: '81.1496',
            },
          },
        },
      ])
    );
  }),
];
