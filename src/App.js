import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import NewPlaces from './places/pages/NewPlaces';
import Users from './user/pages/Users';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} exact />
          <Route path="/:userId/places" element={<UserPlaces />} exact />
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/places/new" element={<NewPlaces />} />
          <Route path="/places/:placeId" element={<UpdatePlace />} />
          <Route path='/auth' element={<Auth/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
