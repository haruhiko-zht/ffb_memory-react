import { FC, SyntheticEvent } from 'react';

import 'components/organisms/NewsContent.scss';
import twitterBanner from 'images/home/twitter_banner.png';
import { UpdateHistoryData } from 'data/update-histories';

type Props = {
  state?: boolean;
  toggle?: (e: SyntheticEvent) => void;
  histories?: UpdateHistoryData;
};

const NewsContent: FC<Props> = ({
  state = true,
  toggle = () => undefined,
  histories = [],
}) => (
  <>
    <section
      className={`news-content ${
        state ? 'news-content-open' : 'news-content-close'
      }`}
    >
      <div className="news-content-main">
        <div className="news-banner">
          <a
            href="https://twitter.com/search?f=tweets&vertical=default&q=ffbattle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterBanner} alt="twitter banner" />
          </a>
        </div>
      </div>
      <div className="news-content-sub">
        <div
          className={`news-tab ${state ? 'news-tab-open' : 'news-tab-close'}`}
        >
          <a href="/" onClick={toggle}>
            <span className="hide">NEWS</span>
          </a>
        </div>
        <div className="news-update">
          {histories.map((history) => (
            <>
              <span key={history.id}>
                {history.date} --- {history.outline}
              </span>
              <br />
            </>
          ))}
        </div>
      </div>
    </section>
  </>
);
export default NewsContent;
