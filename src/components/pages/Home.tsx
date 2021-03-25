import { FC } from 'react';
import { Helmet } from 'react-helmet';

import 'components/pages/Home.scss';
import Header from 'components/templates/Header';
import LinksContent from 'containers/organisms/LinksContent';
import NewsContent from 'containers/organisms/NewsContent';
import Footer from 'components/templates/Footer';

const Home: FC = () => (
  <>
    <Helmet>
      <title>FFB memory</title>
    </Helmet>

    <Header />
    <main className="index">
      <p className="menu-desc">あたま悪いFFB偽攻略サイト</p>

      <LinksContent />

      <NewsContent />

      <div className="bottom-logo">FFB memory</div>
    </main>
    <Footer />
  </>
);

export default Home;
