import React from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { PagePath } from '../src/Other/Commons/Page';
import RegisterPage from '../src/View/Register/Component/main';

const App: React.FC = () => (
    <BrowserRouter>
      <Routes>
        <Route
          path={PagePath.Register}
          element={
              <RegisterPage />
          }
        />
      </Routes>
    </BrowserRouter>
);

export default App;
