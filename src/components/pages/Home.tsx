import { FC } from 'react';
import { Helmet } from 'react-helmet';

import 'components/pages/Home.scss';
import Header from 'components/templates/Header';
import LinksContent from 'containers/organisms/LinksContent';
import Footer from 'components/templates/Footer';
import twitterBanner from 'images/home/twitter_banner.png';
import { updateHistoryData } from 'data/update-histories';

const Home: FC = () => (
  <>
    <Helmet>
      <title>FFB memory</title>
    </Helmet>
    <Header />
    <main className="index">
      <p className="menu-desc">あたま悪いFFB偽攻略サイト</p>

      {/* link contents */}
      <LinksContent />

      {/* news contents */}
      <section className="news-content">
        <div className="news-content-main">
          <div className="news-banner">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={twitterBanner} alt="twitter banner" />
            </a>
          </div>
        </div>
        <div className="news-content-sub">
          <div className="news-tab">
            <a href="/">
              <span className="hide">NEWS</span>
            </a>
          </div>
          <div className="news-update">
            {updateHistoryData ? (
              updateHistoryData.map((history) => (
                <>
                  <span key={history.id}>
                    {history.date} --- {history.outline}
                  </span>
                  <br />
                </>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
      <div className="bottom-logo">FFB memory</div>
    </main>
    <Footer />
  </>
);

export default Home;
