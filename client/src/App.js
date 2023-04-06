import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Adopt from './pages/Adopt';
import Index from './pages/Index';

const HomePetRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Index />} />
      <Route path='adopt' element={<Adopt />} />
    </Route>
  )
);

const App = () => <RouterProvider router={HomePetRouter} />;
export default App;
