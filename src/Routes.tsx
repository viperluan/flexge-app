import { useCookies } from 'react-cookie';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';

import { Home } from './pages/Home.page';
import { NewStudents } from './pages/new-students/NewStudents.page';
import { Students } from './pages/students/Students.page';

function NotFound() {
  return <div>Rota não existente</div>;
}

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

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRoutes };
