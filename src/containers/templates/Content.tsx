import { FC } from 'react';
import { Navigate } from 'react-router';

import { articleData } from 'data/articles';
import Content from 'components/templates/Content';

type Props = {
  categoryCode: string;
};

const EnhancedContent: FC<Props> = ({ categoryCode }) => {
  const categoryCodeList = Object.keys(articleData);

  if (categoryCodeList.includes(categoryCode)) {
    const { category, articles } = articleData[categoryCode];

    return (
      <Content
        categoryCode={categoryCode}
        category={category}
        articles={articles}
      />
    );
  }

  return <Navigate to="/" replace />;
};

export default EnhancedContent;
