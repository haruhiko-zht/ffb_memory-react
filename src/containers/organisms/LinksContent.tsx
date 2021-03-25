import { FC, SyntheticEvent, useState } from 'react';

import LinksContent from 'components/organisms/LinksContent';

const EnhancedLinksContent: FC = () => {
  const [state, setState] = useState(true);
  const toggle = (e: SyntheticEvent): void => {
    e.preventDefault();
    setState((prevState) => !prevState);
  };

  return <LinksContent state={state} toggle={toggle} />;
};

export default EnhancedLinksContent;
