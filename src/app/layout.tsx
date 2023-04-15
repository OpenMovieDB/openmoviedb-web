// components
import InitChacraUI from '@/components/InitChacraUI';
import Header from '@/components/Layout/Header/Header';
import Footer from '@/components/Layout/Footer/Footer';

// styles
import '@/styles/globals.css';

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => (
  <html lang="ru">
    <body>
      <InitChacraUI>
        <Header />
        <main>{children}</main>
        <Footer />
      </InitChacraUI>
    </body>
  </html>
);

export default RootLayout;
