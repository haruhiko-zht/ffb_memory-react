import { FC } from 'react';
import { Helmet } from 'react-helmet';

import Header from 'components/templates/Header';
import Content from 'containers/templates/Content';
import Footer from 'components/templates/Footer';

const Picture: FC = () => (
  <>
    <Helmet>
      <title>画像倉庫 | FFB memory</title>
    </Helmet>

    <Header />

    <Content categoryCode="picture" />

    <Footer />
  </>
);

export default Picture;
