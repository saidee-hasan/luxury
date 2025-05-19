import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

function MainLayout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MainLayout;
