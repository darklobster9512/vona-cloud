import { Outlet } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';

const SiteLayout = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Outlet />
  </div>
);

export default SiteLayout;
