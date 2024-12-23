import { Middleware } from '@reduxjs/toolkit';
import { rootReducer } from '../root-reducer';
import browserHistory from '../../browser-history';
import { Action, RedirectToRouteAction } from '../action';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
(_store) =>
  (next) =>
    (action: RedirectToRouteAction) => {
      if (action.type === Action.REDIRECT_TO_ROUTE) {
        browserHistory.push(action.payload);
      }

      return next(action);
    };
