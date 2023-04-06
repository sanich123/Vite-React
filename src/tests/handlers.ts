import { rest } from 'msw';
import { URL_USERS } from 'src/utils/const/const';
import { MOCK_USERS } from 'src/utils/mocks/mocks';

export const handlers = [rest.get(URL_USERS, (req, res, ctx) => res(ctx.status(200), ctx.json(MOCK_USERS)))];
