import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { Article } from 'data/articles';
import WideColumn from 'components/organisms/WideColumn';

type Props = {
  articles: Article[];
};

const EnhancedWideColumn: FC<Props> = ({ articles }) => {
  if (articles.length === 1) {
    return <WideColumn Content={articles[0].content} />;
  }

  return <Navigate to="/" replace />;
};

export default EnhancedWideColumn;
