import { FC, SyntheticEvent } from 'react';

import 'components/organisms/LinksContent.scss';
import ffbBanner from 'images/home/ffb_banner.jpg';
import rankingBanner from 'images/home/ranking_banner.jpg';

type Props = {
  state?: boolean;
  toggle?: (e: SyntheticEvent) => void;
};

const LinksContent: FC<Props> = ({
  state = true,
  toggle = () => undefined,
}) => (
  <>
    <section
      className={`links-content ${
        state ? 'links-content-open' : 'links-content-close'
      }`}
    >
      <div className="links-content-main">
        <div className="links-content-banner">
          <a
            href="https://kroko.jp/ffbattle/others.cgi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ffbBanner} alt="ff battle banner" />
          </a>
        </div>
        <div className="links-content-banner">
          <a
            href="https://ffb-level-ranking-gg.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={rankingBanner} alt="ffb level ranking banner" />
          </a>
        </div>
      </div>
      <div
        className={`links-content-tab ${
          state ? 'links-content-tab-open' : 'links-content-tab-close'
        }`}
      >
        <a href="/" onClick={toggle}>
          <span className="hide">LINKS</span>
        </a>
      </div>
    </section>
  </>
);

export default LinksContent;
