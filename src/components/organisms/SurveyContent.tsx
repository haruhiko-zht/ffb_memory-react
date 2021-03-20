import { FC } from 'react';

type Props = {
  content: FC;
};

const SurveyContent: FC<Props> = ({ content }) => {
  const Content: FC = content;

  return <Content />;
};

export default SurveyContent;
