import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';

const HomePetRouter = createBrowserRouter(
  createRoutesFromElements(<Route path='/' element={<MainLayout />}></Route>)
);

const App = () => <RouterProvider router={HomePetRouter} />;
export default App;
