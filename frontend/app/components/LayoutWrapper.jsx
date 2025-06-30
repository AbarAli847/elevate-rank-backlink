'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';
import Navbar from './Navbar';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Routes where Footer or Navbar should be hidden
  const hiddenRoutes = [
    '/admin-dashboard',
    '/add-website',
    '/all-websites',
  ];

  // Also hide on dynamic route like /edit-website/:id
  const hideForEditPage = pathname.startsWith('/edit-website/');

  const hideFooter = hiddenRoutes.includes(pathname) || hideForEditPage;
  const hideNavbar = hiddenRoutes.includes(pathname) || hideForEditPage;

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}
