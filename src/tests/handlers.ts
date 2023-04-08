import { rest } from 'msw';
import { URL_USERS } from 'src/utils/const/const';
import { MOCK_USERS } from 'src/utils/mocks/mocks';

export const handlers = [
  rest.get(`${URL_USERS}`, (req, res, ctx) => {
    const name = req.url.searchParams.get('q');
    if (name === 'error path') {
      return res(ctx.status(404), ctx.json({ message: 'We couldnt find this page' }));
    }
    if (name) {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 1,
            name,
            username: 'Bret',
            email: 'Sincere@april.biz',
            address: {
              street: 'Kulas Light',
              suite: 'Apt. 556',
              city: 'Gwenborough',
              zipcode: '92998-3874',
            },
          },
        ])
      );
    } else {
      return res(ctx.status(200), ctx.json(MOCK_USERS));
    }
  }),
];
