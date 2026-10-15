import Footer from '@/components/common/Footer';
import Navigation from '@/components/common/Navigation';

function ServiceLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}

export default ServiceLayout;
