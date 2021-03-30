import { FC, RefObject } from 'react';
import { Helmet } from 'react-helmet';

import Header from 'components/templates/Header';
import Footer from 'components/templates/Footer';

type Ore = {
  name: string;
  price: string;
  num: number;
};

type Props = {
  count: () => void;
  reset: () => void;
  textareaRef?: RefObject<HTMLTextAreaElement>;
  oreResult: Ore[];
};

const Tool: FC<Props> = ({
  count = () => undefined,
  reset = () => undefined,
  textareaRef = undefined,
  oreResult = [],
}) => (
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
              oreResult.map((ore) => (
                <>
                  <span key={`${ore.name}_${ore.price}`}>
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

export default Tool;
