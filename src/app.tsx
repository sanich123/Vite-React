import { Routes, Route } from 'react-router-dom';
import Main from './pages/main/main';
import AboutUs from './pages/about-us/about-us';
import Forms from './pages/forms/forms';

export default function App() {
  return (
    <Routes>
      <Route element={<Main />} path={'/'} />
      <Route element={<AboutUs />} path={'/about-us'} />
      <Route element={<Forms />} path={'/forms'} />
    </Routes>
  );
}
