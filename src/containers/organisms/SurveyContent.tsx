import { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { articleData } from 'data/articles';
import SurveyContent from 'components/organisms/SurveyContent';

const EnhancedSurveyContent: FC = () => {
  const categoryCode = 'survey';
  const { articleId } = useParams();
  const { articles } = articleData[categoryCode];
  const article = articles.find(
    ({ id }) => id === Number.parseInt(articleId, 10),
  );

  if (article) {
    return <SurveyContent content={article.content} />;
  }

  return <Navigate to="/" replace />;
};

export default EnhancedSurveyContent;
