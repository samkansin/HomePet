import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

//? Layout
import MainLayout from './layouts/MainLayout';
import AuthenLayout from './layouts/AuthenLayout';

//? Component
import { getLastestPost } from './components/index/LatestPostList';

//? Pages
import Adopt, { petsLoader } from './pages/Adopt';
import Index from './pages/Index';
import Post, { LoadTopicData } from './pages/Post';
import PostDetail, { LoadPostData } from './pages/PostDetail';
import Errorpage from './pages/Errorpage';
import Chat from './pages/Chat';
import Login from './pages/Login';
import PostEdit from './pages/PostEdit';

//? Authentication Component and utils
import { AuthProvider } from './utils/AuthProvider';
import RequireAuth from './components/RequireAuth';
import useFetchPrivate from './hooks/useFetchPrivate';
import usePermission from './hooks/usePermission';
import ROLES_LIST from './utils/rolesList';


function HomePetApp() {
  const fetchPrivate = useFetchPrivate();
  const { hasPermission } = usePermission();

  const HomePetRouter = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<MainLayout />} errorElement={<Errorpage />}>
          <Route index element={<Index />} loader={getLastestPost} />
          <Route path='adopt' element={<Adopt />} loader={petsLoader} />
          <Route element={<RequireAuth allowedRoles={[ROLES_LIST.User]} />}>
            <Route path='post' element={<Post />} loader={LoadTopicData} />
          </Route>
          <Route
            path='post/:id'
            element={<PostDetail />}
            loader={LoadPostData}
          />
        </Route>
        <Route
          path='/authen'
          element={<AuthenLayout />}
          errorElement={<Errorpage />}
        >
          <Route index element={<Login />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={HomePetRouter} />;
}
export default function App() {
  return (
    <AuthProvider>
      <HomePetApp />
    </AuthProvider>
  );
}
