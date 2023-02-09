import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ProfileSetting from './pages/ProfileSetting/ProfileSetting';
import Home from './pages/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import useScreenResize from './hooks/common/useScreenRezise';
import HomeDetail from './pages/HomeDetail/HomeDetail';

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
      },
    },
  });

  useScreenResize();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profilesetting' element={<ProfileSetting />} />
          <Route path='/home' element={<Home />} />
          <Route path='/home/detail/:id' element={<HomeDetail />} />
        </Routes>
        <ToastContainer limit={1} />
        <ReactQueryDevtools />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
