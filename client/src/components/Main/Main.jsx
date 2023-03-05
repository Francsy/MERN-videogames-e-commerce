import React, { useEffect } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Store from './Store'
import Details from './Details'

const Main = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <main>
    <Routes>
      <Route path="/" element={<Store />} />
      <Route path="/:id" element={<Details />} />
    </Routes>
  </main>;
};

export default Main;
