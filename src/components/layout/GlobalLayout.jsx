import AppProviders from '@/providers/AppProviders';

function GlobalLayout({ children }) {
  return <AppProviders>{children}</AppProviders>;
}

export default GlobalLayout;
