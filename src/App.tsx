import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import SignupProfileSetting from './pages/SignupProfileSetting/SignupProfileSetting';
import Home from './pages/Home/Home';
import useScreenResize from './hooks/common/useScreenRezise';
import HomeDetail from './pages/HomeDetail/HomeDetail';
import MyProfile from './pages/Profile/MyProfile/MyProfile';
import UesrProfile from './pages/Profile/UserProfile/UserProfile';
import FreeBoard from './pages/FreeBoard/FreeBoard';
import FreeBoardDetail from './pages/FreeBoardDetail/FreeBoardDetail';
import Timer from './pages/Timer/Timer';
import HomeCategoryCreate from './pages/HomeCategoryCreate/HomeCategoryCreate';

import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnMount: false,
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
          {/* Auth Page */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profilesetting' element={<SignupProfileSetting />} />

          {/* Profile Page */}
          <Route path='/myprofile' element={<MyProfile />} />
          <Route path='/profile/:id' element={<UesrProfile />} />

          {/* Category Page */}
          <Route path='/home' element={<Home />} />
          <Route path='/home/detail/:id' element={<HomeDetail />} />
          <Route path='/home/category/create' element={<HomeCategoryCreate />} />

          {/* FreeBoard Page */}
          <Route path='/freeboard' element={<FreeBoard />} />
          <Route path='/freeboard/detail/:id' element={<FreeBoardDetail />} />

          {/* Timer Page */}
          <Route path='/timer' element={<Timer />} />
        </Routes>
        <ToastContainer limit={1} theme='dark' position='top-center' />
        <ReactQueryDevtools />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
