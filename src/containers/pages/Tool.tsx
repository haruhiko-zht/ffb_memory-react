import { FC } from 'react';

import Tool from 'components/pages/Tool';
import { useOreCounter } from 'hooks/use-ore-counter';

const EnhancedTool: FC = () => {
  const [oreResult, textareaRef, count, reset] = useOreCounter();

  return (
    <Tool
      count={count}
      reset={reset}
      textareaRef={textareaRef}
      oreResult={oreResult}
    />
  );
};

export default EnhancedTool;
