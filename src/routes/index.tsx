import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../screens/Home';
import RepoDetail from '../components/RepoDetail';

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
