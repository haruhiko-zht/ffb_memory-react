import { FC, useRef, useState } from 'react';

import Tool from 'components/pages/Tool';

type Ore = {
  name: string;
  price: string;
  num: number;
};

const EnhancedTool: FC = () => {
  const [oreResult, updateResult] = useState<Ore[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const parse = (rawText: string): void => {
    const result: Ore[] = [];
    const topStr = '鉱石の価値</th><tr>';
    const botStr = '</table>';
    const splitStr = '<tr>';
    const re = new RegExp(
      '<td\\sclass=b1><input\\stype=radio\\sname=kai\\svalue=([0-9]+)><td\\sclass=b1>(.+)<td\\sclass=b1>([0-9]+)',
      'i',
    );

    const ores = rawText
      .substring(
        rawText.indexOf(topStr) + topStr.length,
        rawText.indexOf(botStr, rawText.indexOf(topStr)),
      )
      .split(splitStr)
      .map((str) => {
        const match = re.exec(str);

        return match ? { name: match[2], price: match[3] } : null;
      });

    ores.forEach((h) => {
      if (h) {
        const index = result.findIndex(
          (l) => l.name === h.name && l.price === h.price,
        );
        if (index > -1) {
          result[index].num += 1;
        } else {
          result.push({ name: h.name, price: h.price, num: 1 });
        }
      }
    });

    updateResult(result);
  };

  const count = (): void => {
    parse(textareaRef.current?.value ?? '');
  };

  const reset = (): void => {
    updateResult([]);
  };

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
