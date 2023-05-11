import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Adopt, { petsLoader } from './pages/Adopt';
import Index from './pages/Index';
import Post, { LoadTopicData } from './pages/Post';
import PostDetail, { LoadPostData } from './pages/PostDetail';
import Errorpage from './pages/Errorpage';
import { getLastestPost } from './components/index/LatestPostList';
import PostEdit from './pages/PostEdit';

const HomePetRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} errorElement={<Errorpage />}>
      <Route index element={<Index />} loader={getLastestPost} />
      <Route path='adopt' element={<Adopt />} loader={petsLoader} />
      <Route path='post' element={<Post />} loader={LoadTopicData} />
      <Route path='post/:id' element={<PostDetail />} loader={LoadPostData} />
      <Route path='post/:id/edit' element={<PostEdit />} loader={LoadPostData} />
    </Route>
  )
);

const App = () => <RouterProvider router={HomePetRouter} />;
export default App;
