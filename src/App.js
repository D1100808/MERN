import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import NewPlaces from './places/pages/NewPlaces';
import Users from './user/pages/Users';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} exact />
          <Route path='/:userId/places' element={<UserPlaces/>} exact/>
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/places/new" element={<NewPlaces />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
