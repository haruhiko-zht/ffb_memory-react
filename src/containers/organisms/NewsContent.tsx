import { FC, SyntheticEvent, useState } from 'react';

import NewsContent from 'components/organisms/NewsContent';
import { updateHistoryData } from 'data/update-histories';

const EnhancedNewsContent: FC = () => {
  const [state, setState] = useState(true);
  const toggle = (e: SyntheticEvent): void => {
    e.preventDefault();
    setState((prevState) => !prevState);
  };

  return (
    <NewsContent state={state} toggle={toggle} histories={updateHistoryData} />
  );
};

export default EnhancedNewsContent;
