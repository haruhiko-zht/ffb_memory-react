import { FC } from 'react';
import { Navigate } from 'react-router';

import { articleData } from 'data/articles';
import Survey from 'components/pages/Survey';

const EnhancedSurvey: FC = () => {
  const categoryCode = 'survey';
  const categoryCodeList = Object.keys(articleData);

  if (categoryCodeList.includes(categoryCode)) {
    const { category, articles } = articleData[categoryCode];

    return <Survey category={category} articles={articles} />;
  }

  return <Navigate to="/" replace />;
};

export default EnhancedSurvey;
