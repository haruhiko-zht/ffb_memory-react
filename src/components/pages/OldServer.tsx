import { FC } from 'react';
import { Helmet } from 'react-helmet';

import Header from 'components/templates/Header';
import Footer from 'components/templates/Footer';
import Content from 'containers/templates/Content';

const OldServer: FC = () => (
  <>
    <Helmet>
      <title>旧サーバー | FFB memory</title>
    </Helmet>
    <Header />
    <Content categoryCode="oldServer" />
    <Footer />
  </>
);

export default OldServer;
