import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ProfileSetting from './pages/ProfileSetting/ProfileSetting';
import Home from './pages/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import useScreenResize from './hooks/common/useScreenRezise';

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
        </Routes>
        <ToastContainer limit={1} />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
