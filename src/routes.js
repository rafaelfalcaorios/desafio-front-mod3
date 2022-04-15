import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Main from "./pages/Main";
import Register from './pages/Register';
import SingIn from "./pages/SingIn";
import { getItem } from './utils/localStorage';

function ProtectedRoutes({ redirectTo }) {
  const isAuthenticated = getItem('token');

  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
}

function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<SingIn />} />
      <Route path='/cadastro' element={<Register />} />


      <Route element={<ProtectedRoutes redirectTo='/' />}>
        <Route path='/main' element={<Main />} />
      </Route>


    </Routes>

  );
}

export default MainRoutes;