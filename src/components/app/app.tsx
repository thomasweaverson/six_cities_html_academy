import { Routes, Route } from 'react-router-dom';

import Main from '../../pages/main/main';
import Login from '../../pages/login-screen/login-screen';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { AppRoute } from '../../const';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
// const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
//   authorizationStatus === AuthorizationStatus.Unknown;

function App(): JSX.Element {

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          index
          element={<Main />}
        />

        <Route
          path={AppRoute.Login}
          element={<Login />}
        />

        <Route
          path={`${AppRoute.Offer}/:id`}
          element={<Room />}
        />

        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />

        <Route
          path='*'
          element={<NotFoundScreen />}
        />

      </Routes>

    </HistoryRouter>
  );
}

export default App;
