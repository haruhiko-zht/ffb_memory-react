import { FC } from 'react';
import { Helmet } from 'react-helmet';

import Header from 'components/templates/Header';
import Footer from 'components/templates/Footer';

const Tool: FC = () => (
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
            使い方は鍛冶屋のページでWindowsなら&quot;Ctrl+U&quot;、Macなら&quot;⌥⌘U&quot;でソースコードを表示させます。出てきたサイトのコードを&quot;Ctrl+A(⌘A)&quot;で全選択し、&quot;Ctrl+C(⌘C)&quot;で全コピーします。後は以下のテキストボックスに&quot;Ctrl+V(⌘V)&quot;で貼付けして&quot;OK&quot;を押していただければ結果が表示されます。
          </p>
          <p>version:4.0</p>
          <form className="responsive-form">
            <textarea id="aucsrc" wrap="off" />
            <input id="ore-calc" type="button" value="OK" />
            <input id="ore-calc-clear" type="reset" value="クリア" />
          </form>
          <div id="ore-calc-result" />
        </div>
      </article>
    </main>

    <Footer />
  </>
);

export default Tool;
