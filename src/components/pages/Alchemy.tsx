import { FC } from 'react';
import { Helmet } from 'react-helmet';

import Header from 'components/templates/Header';
import Content from 'containers/templates/Content';
import Footer from 'components/templates/Footer';

const Alchemy: FC = () => (
  <>
    <Helmet>
      <title>レシピ&鉱石 | FFB memory</title>
    </Helmet>

    <Header />

    <Content categoryCode="alchemy" />

    <Footer />
  </>
);

export default Alchemy;
