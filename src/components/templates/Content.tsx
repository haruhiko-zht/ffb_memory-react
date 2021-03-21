import { FC } from 'react';

import 'components/templates/Content.scss';
import { Article } from 'data/articles';
import SplitColumn from 'components/organisms/SplitColumn';
import WideColumn from 'containers/organisms/WideColumn';

type Props = {
  categoryCode: string;
  category: string;
  articles: Article[];
};

const Content: FC<Props> = ({ categoryCode, category, articles }) => (
  <>
    <main>
      <div className="main-title">
        <div className="title-wrap">
          <h2>{category}</h2>
        </div>
      </div>

      {articles.length > 1 ? (
        <SplitColumn articles={articles} categoryCode={categoryCode} />
      ) : (
        <WideColumn articles={articles} />
      )}
    </main>
  </>
);

export default Content;
