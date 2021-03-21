import { FC } from 'react';

type Props = {
  Content: FC;
};

const ArticleContent: FC<Props> = ({ Content }) => <Content />;

export default ArticleContent;
