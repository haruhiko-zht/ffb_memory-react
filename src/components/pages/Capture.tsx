import { FC } from 'react';
import { Helmet } from 'react-helmet';

import Header from 'components/templates/Header';
import Content from 'containers/templates/Content';
import Footer from 'components/templates/Footer';

const Capture: FC = () => (
  <>
    <Helmet>
      <title>攻略備忘録</title>
    </Helmet>
    <Header />
    <Content categoryCode="capture" />
    <Footer />
  </>
);

export default Capture;
