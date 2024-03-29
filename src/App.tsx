import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import useScreenResize from './hooks/common/useScreenRezise';
import Chat from './pages/Chat/Chat';
import ChatDetail from './pages/Chat/ChatDetail/ChatDetail';
import FreeBoard from './pages/FreeBoard/FreeBoard';
import FreeBoardCreate from './pages/FreeBoard/FreeBoardCreate/FreeBoardCreate';
import FreeBoardDetail from './pages/FreeBoard/FreeBoardDetail/FreeBoardDetail';
import FreeBoardEdit from './pages/FreeBoard/FreeBoardEdit/FreeBoardEdit';
import Home from './pages/Home/Home';
import HomeCategoryCreate from './pages/Home/HomeCategoryCreate/HomeCategoryCreate';
import HomeCategoryDetail from './pages/Home/HomeCategoryDetail/HomeCategoryDetail';
import HomeCategoryEdit from './pages/Home/HomeCategoryEdit/HomeCategoryEdit';
import Login from './pages/Login/Login';
import MyProfile from './pages/MyProfile/MyProfile';
import Signup from './pages/Signup/Signup';
import SignupProfileSetting from './pages/SignupProfileSetting/SignupProfileSetting';
import Splash from './pages/Splash/Splash';
import Timer from './pages/Timer/Timer';
import UesrProfile from './pages/UserProfile/UserProfile';
import NotAuthRoutes from './router/NotAuthRoutes';
import PrivateRoute from './router/PrivateRoute';

import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Suspense, lazy } from 'react';

const ProfileEdit = lazy(() => import('./pages/ProfileEdit/ProfileEdit'));

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
        staleTime: Infinity,
        suspense: true,
        useErrorBoundary: true,
      },
    },
  });

  useScreenResize();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route element={<NotAuthRoutes />}>
            {/* Auth Page */}
            <Route path='/' element={<Splash />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/profilesetting' element={<SignupProfileSetting />} />
          </Route>
          <Route element={<PrivateRoute />}>
            {/* Profile Page */}
            <Route path='/myprofile' element={<MyProfile />} />
            <Route path='/profile/:id' element={<UesrProfile />} />
            <Route
              path='/myprofile/edit'
              element={
                <Suspense fallback={null}>
                  <ProfileEdit />
                </Suspense>
              }
            />

            {/* Category Page */}
            <Route path='/home' element={<Home />} />
            <Route path='/home/detail/:id' element={<HomeCategoryDetail />} />
            <Route path='/home/category/create' element={<HomeCategoryCreate />} />
            <Route path='/home/category/edit/:id' element={<HomeCategoryEdit />} />

            {/* FreeBoard Page */}
            <Route path='/freeboard' index element={<FreeBoard />} />
            <Route path='/freeboard/detail/:id' element={<FreeBoardDetail />} />
            <Route path='/freeboard/create' element={<FreeBoardCreate />} />
            <Route path='/freeboard/edit/:id' element={<FreeBoardEdit />} />

            {/* Other Page */}
            <Route path='/chat' element={<Chat />} />
            <Route path='/chatdetail' element={<ChatDetail />} />
            <Route path='/timer' element={<Timer />} />
          </Route>
        </Routes>

        <ToastContainer limit={1} theme='dark' position='top-center' />
        <ReactQueryDevtools />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
