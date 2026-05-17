import { Routes, Route } from 'react-router-dom';
import { MusicRecord } from './MusicRecord';
import { Login } from './Login';
import { EditsMusicRecords } from './EditsMusicRecords';
import { ReqAuth } from '../Components/ReqAuth';
import { SingleMusicRecord } from './SingleMusicRecord';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MusicRecord />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/music/:id" element={<SingleMusicRecord />}></Route>
      <Route
        path="/music/:id/edit_music"
        element={
          <ReqAuth>
            <EditsMusicRecords />
          </ReqAuth>
        }
      ></Route>
      <Route path="*" element={<h1>Page not found...</h1>}></Route>
    </Routes>
  );
};
