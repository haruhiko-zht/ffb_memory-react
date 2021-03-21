import { FC } from 'react';
import { Helmet } from 'react-helmet';

import Header from 'components/templates/Header';
import Footer from 'components/templates/Footer';
import Content from 'containers/templates/Content';

const Survey: FC = () => (
  <>
    <Helmet>
      <title>調査備忘録 | FFB memory</title>
    </Helmet>
    <Header />
    <Content categoryCode="survey" />
    <Footer />
  </>
);

export default Survey;
