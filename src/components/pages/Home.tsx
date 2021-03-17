import { FC } from 'react';
import Header from '../templates/Header';
import Footer from '../templates/Footer';
import './Home.scss';
import ffbBanner from '../../images/home/ffb_banner.jpg';
import rankingBanner from '../../images/home/ranking_banner.jpg';
import twitterBanner from '../../images/home/twitter_banner.png';

const Home: FC = () => (
  <>
    <Header />
    <main className="index">
      <p>あたま悪いFFB偽攻略サイト</p>

      {/* link contents */}
      <section className="links-content">
        <div className="links-content-main">
          <div className="links-content-banner">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={ffbBanner} alt="ff battle banner" />
            </a>
          </div>
          <div className="links-content-banner">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={rankingBanner} alt="ffb level ranking banner" />
            </a>
          </div>
        </div>
        <div className="links-content-tab">
          <a href="/">
            <span className="hide">LINKS</span>
          </a>
        </div>
      </section>

      {/* news contents */}
      <section className="news-content">
        <div className="news-content-main">
          <div className="news-banner">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={twitterBanner} alt="twitter banner" />
            </a>
          </div>
          <div className="news-content-sub">
            <div className="news-tab">
              <a href="/">
                <span className="hide">NEWS</span>
              </a>
            </div>
            <div className="news-update">update here.</div>
          </div>
        </div>
      </section>
    </main>
    <div className="bottom-logo">FFB memory</div>
    <Footer />
  </>
);

export default Home;
