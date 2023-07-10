import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import SignupProfileSetting from './pages/SignupProfileSetting/SignupProfileSetting';
import Splash from './pages/Splash/Splash';
import Timer from './pages/Timer/Timer';
import Home from './pages/Home/Home';
import useScreenResize from './hooks/common/useScreenRezise';
import HomeCategoryCreate from './pages/Home/HomeCategoryCreate/HomeCategoryCreate';
import HomeCategoryDetail from './pages/Home/HomeCategoryDetail/HomeCategoryDetail';
import HomeCategoryEdit from './pages/Home/HomeCategoryEdit/HomeCategoryEdit';
import MyProfile from './pages/MyProfile/MyProfile';
import UesrProfile from './pages/UserProfile/UserProfile';
import FreeBoard from './pages/FreeBoard/FreeBoard';
import FreeBoardDetail from './pages/FreeBoard/FreeBoardDetail/FreeBoardDetail';
import FreeBoardCreate from './pages/FreeBoard/FreeBoardCreate/FreeBoardCreate';
import FreeBoardEdit from './pages/FreeBoard/FreeBoardEdit/FreeBoardEdit';
import ProfileEdit from './pages/ProfileEdit/ProfileEdit';
import NotAuthRoutes from './router/NotAuthRoutes';
import PrivateRoute from './router/PrivateRoute';

import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
            <Route path='/myprofile/edit' element={<ProfileEdit />} />

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

            {/* Timer Page */}
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
