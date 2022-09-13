import { AppProps } from 'next/app';
import '../styles/global.css';
import '/i18n';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
