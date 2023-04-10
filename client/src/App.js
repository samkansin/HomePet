import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Adopt, { petsLoader } from './pages/Adopt';
import Index from './pages/Index';
import Post from './pages/Post';

const HomePetRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Index />} loader={petsLoader} />
      <Route path='adopt' element={<Adopt />} loader={petsLoader} />
      <Route path='post' element={<Post />} />
    </Route>
  )
);

const App = () => <RouterProvider router={HomePetRouter} />;
export default App;
