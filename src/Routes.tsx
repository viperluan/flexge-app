import { useCookies } from 'react-cookie';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';

import Error404 from './pages/404/Error404.page';
import { Home } from './pages/Home.page';
import { NewStudents } from './pages/new-students/NewStudents.page';
import { Students } from './pages/students/Students.page';

function RequireAuth({ children }: { children: JSX.Element }) {
  const location = useLocation();
  const [cookies] = useCookies();
  const { token } = cookies;

  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/students"
          element={
            <RequireAuth>
              <Students />
            </RequireAuth>
          }
        />
        <Route
          path="/students/new"
          element={
            <RequireAuth>
              <NewStudents />
            </RequireAuth>
          }
        />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRoutes };
