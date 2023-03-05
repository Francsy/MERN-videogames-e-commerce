import React, { useEffect } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';


const Main = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <main>
   {/*  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Details />} />
    </Routes> */}
  </main>;
};

export default Main;
