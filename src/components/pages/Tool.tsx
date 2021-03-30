import { FC, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';

import Header from 'components/templates/Header';
import Footer from 'components/templates/Footer';

type Ore = {
  name: string;
  price: string;
  num: number;
};

const Tool: FC = () => {
  const oreResultTemplate: Ore[] = [];
  const [oreResult, updateResult] = useState(oreResultTemplate);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const count = (): void => {
    const rawText = textareaRef.current?.value;

    if (rawText) {
      const result: Ore[] = [];
      const topStr = '鉱石の価値</th><tr>';
      const botStr = '</table>';
      const splitStr = '<tr>';
      const re = new RegExp(
        '<td\\sclass=b1><input\\stype=radio\\sname=kai\\svalue=([0-9]+)><td\\sclass=b1>(.+)<td\\sclass=b1>([0-9]+)',
        'i',
      );

      // if (rawText.indexOf(topStr) === -1) {
      //   updateResult([]);
      // }

      const ores = rawText
        .substring(
          rawText.indexOf(topStr) + topStr.length,
          rawText.indexOf(botStr, rawText.indexOf(topStr)),
        )
        .split(splitStr)
        .map((str) => {
          const match = re.exec(str);
          if (match) {
            return { name: match[2], price: match[3] };
          }

          return null;
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
    }
  };

  const reset = (): void => {
    updateResult([]);
  };

  return (
    <>
      <Helmet>
        <title>ツール | FFB memory</title>
      </Helmet>

      <Header />

      <main className="main-article">
        <div className="main-title">
          <div className="title-wrap">
            <h2>ツール</h2>
          </div>
        </div>

        <article className="contents">
          <div className="wrap wrap-1col">
            <h3>鉱石カウント</h3>
            <p>所持している鉱石をカウントします。</p>
            <p>
              使い方は鍛冶屋のページでWindowsなら&quot;Ctrl+U&quot;、Macなら&quot;⌥⌘U&quot;でソースコードを表示させます。
              出てきたサイトのコードを&quot;Ctrl+A(⌘A)&quot;で全選択し、&quot;Ctrl+C(⌘C)&quot;で全コピーします。
              後は以下のテキストボックスに&quot;Ctrl+V(⌘V)&quot;で貼付けして&quot;OK&quot;を押していただければ結果が表示されます。
            </p>
            <p>version:4.0</p>
            <form className="responsive-form">
              <textarea
                className="ore-calc-input"
                wrap="off"
                rows={5}
                ref={textareaRef}
              />
              <input type="button" value="カウント開始" onClick={count} />
              <input type="reset" value="クリア" onClick={reset} />
            </form>
            <div className="ore-calc-result">
              {oreResult.length === 0 ? (
                <></>
              ) : (
                oreResult.map((ore, i) => (
                  <>
                    {/* eslint-disable-next-line react/no-array-index-key */}
                    <span key={i}>
                      {ore.name}[{ore.price}]: {ore.num}
                    </span>
                    <br />
                  </>
                ))
              )}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};
export default Tool;
