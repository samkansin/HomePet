import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Adopt, { petsLoader } from './pages/Adopt';
import { getLastPet } from './components/index/LatestPetsList';
import Index from './pages/Index';
import Post from './pages/Post';
import Errorpage from './pages/Errorpage';

const HomePetRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} errorElement={<Errorpage />}>
      <Route index element={<Index />} loader={getLastPet} />
      <Route path='adopt' element={<Adopt />} loader={petsLoader} />
      <Route path='post' element={<Post />} />
    </Route>
  )
);

const App = () => <RouterProvider router={HomePetRouter} />;
export default App;
