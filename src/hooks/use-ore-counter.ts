import { RefObject, useRef, useState } from 'react';

export type Ore = {
  name: string;
  price: string;
  num: number;
};

export const useOreCounter = (): [
  Ore[],
  RefObject<HTMLTextAreaElement>,
  () => void,
  () => void,
] => {
  const [oreResult, updateResult] = useState<Ore[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const parse = (rawText: string): Ore[] => {
    const result: Ore[] = [];
    const topStr = '鉱石の価値</th><tr>';
    const botStr = '</table>';
    const splitStr = '<tr>';
    const re = new RegExp(
      '<td\\sclass=b1><input\\stype=radio\\sname=kai\\svalue=([0-9]+)><td\\sclass=b1>(.+)<td\\sclass=b1>([0-9]+)',
      'i',
    );

    return rawText
      .substring(
        rawText.indexOf(topStr) + topStr.length,
        rawText.indexOf(botStr, rawText.indexOf(topStr)),
      )
      .split(splitStr)
      .reduce((accumulator, currentValue) => {
        const match = re.exec(currentValue);
        if (match) {
          const index = accumulator.findIndex(
            (ore) => ore.name === match[2] && ore.price === match[3],
          );
          if (index > -1) {
            accumulator[index].num += 1;
          } else {
            accumulator.push({ name: match[2], price: match[3], num: 1 });
          }
        }

        return accumulator;
      }, result)
      .sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;

        const priceA = Number.parseFloat(a.price);
        const priceB = Number.parseFloat(b.price);
        if (priceA < priceB) return -1;
        if (priceA > priceB) return 1;

        return 0;
      });
  };

  const count = (): void => {
    const result = parse(textareaRef.current?.value ?? '');
    updateResult(result);
  };

  const reset = (): void => {
    updateResult([]);
  };

  return [oreResult, textareaRef, count, reset];
};
