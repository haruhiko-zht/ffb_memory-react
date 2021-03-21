import { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { articleData } from 'data/articles';
import ArticleContent from 'components/organisms/ArticleContent';

type Props = {
  categoryCode: string;
};

const EnhancedArticleContent: FC<Props> = ({ categoryCode }) => {
  const { articleId } = useParams();
  const { articles } = articleData[categoryCode];
  const article = articles.find(
    ({ id }) => id === Number.parseInt(articleId, 10),
  );

  if (article) {
    return <ArticleContent Content={article.content} />;
  }

  return <Navigate to="/" replace />;
};

export default EnhancedArticleContent;
