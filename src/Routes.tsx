import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home.page';
import { NewStudents } from './pages/new-students/NewStudents.page';
import { Students } from './pages/students/Students.page';

function NotFound() {
  return <div>Rota não existente</div>;
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/new" element={<NewStudents />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRoutes };
