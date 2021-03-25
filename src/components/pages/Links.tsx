import { FC } from 'react';
import { Helmet } from 'react-helmet';

import 'components/pages/Links.scss';
import Header from 'components/templates/Header';
import Footer from 'components/templates/Footer';

import cof from 'images/links/cof.jpg';
import marimo from 'images/links/marimo.jpeg';
import popopo from 'images/links/popopo.jpg';
import ruri from 'images/links/ruri.jpg';

const Links: FC = () => (
  <>
    <Helmet>
      <title>リンク | FFB memory</title>
    </Helmet>
    <Header />
    <main className="main-article">
      <div className="main-title">
        <div className="title-wrap">
          <h2>リンク</h2>
        </div>
      </div>

      <article className="contents">
        <div className="wrap wrap-1col link-wrap">
          <input id="tab1" type="radio" name="link_btn" defaultChecked />
          <input id="tab2" type="radio" name="link_btn" />
          <input id="tab3" type="radio" name="link_btn" />
          <input id="tab4" type="radio" name="link_btn" />

          <div id="link-tab">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="link1_label" htmlFor="tab1">
              公式
            </label>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="link2_label" htmlFor="tab2">
              非公式
            </label>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="link3_label" htmlFor="tab3">
              部隊
            </label>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="link4_label" htmlFor="tab4">
              個人
            </label>
          </div>

          <div id="link-area">
            <div id="link1">
              <table>
                <tr>
                  <th>
                    <a
                      href="http://kroko.jp/ffbattle/others.cgi"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <h3>FF BATTLE</h3>
                    </a>
                  </th>
                  <td>
                    ミラー３
                    <br />
                    現存する最後のkroko氏運営によるFF BATTLEサーバー。
                  </td>
                </tr>
                <tr>
                  <th>
                    <a
                      href="http://kroko.jp/static/gamereview.htm"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <h3>レビュー注意事項</h3>
                    </a>
                  </th>
                  <td>
                    レビュー鉱石が欲しくてレビューする人は注意事項をまず読むといいです。
                    <br />
                    2021年3月22日現在、XOOPS削除に伴いレビューが機能しているかは不明。
                  </td>
                </tr>
              </table>
            </div>
            <div id="link2">
              <table>
                <tr>
                  <th>
                    <a
                      href="http://ffb.vs.land.to/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <h3>FF BATTLE資料小屋</h3>
                    </a>
                  </th>
                  <td>
                    武器や防具などの各種データが集まっています。
                    <br />
                    2021年3月22日のXOOPS削除に伴い現存する唯一のデータサイトになっていると思います。
                  </td>
                </tr>
              </table>
            </div>
            <div id="link3">
              <table>
                <tr>
                  <th>
                    <a
                      href="https://plaza.rakuten.co.jp/ffbstarflower2/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img src={ruri} alt="ruri banner" />
                    </a>
                  </th>
                  <td>
                    瑠璃~StarFlower （健全な部隊）
                    <br />
                    レベルランキング始まりの地。
                  </td>
                </tr>
                <tr>
                  <th>
                    <a
                      href="http://ks102793.wixsite.com/comrade-of-ffb"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img src={cof} alt="cof banner" />
                    </a>
                  </th>
                  <td>
                    Comrade of FFB
                    <br />
                    専用ch「Y168」で活動しているそうです。
                  </td>
                </tr>
                <tr>
                  <th>
                    <a
                      href="http://popopo2002.web.fc2.com/index.html"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img src={popopo} alt="popopo banner" />
                    </a>
                  </th>
                  <td>
                    ぽぽぽ隊
                    <br />
                    1st鯖を中心に2002年から活動していた部隊です。
                  </td>
                </tr>
                <tr>
                  <th>
                    <a
                      href="http://ariakenotsuki.wixsite.com/pale-morning-moon"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <h3>紅月夜隊</h3>
                    </a>
                  </th>
                  <td>
                    紅月夜隊
                    <br />
                    廃人の方が集まっていた部隊です。
                  </td>
                </tr>
                <tr>
                  <th>
                    <a
                      href="https://www4.hp-ez.com/hp/sonarpoke1203/page1"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <h3>ごごご部隊</h3>
                    </a>
                  </th>
                  <td>
                    ごごご部隊
                    <br />
                    専用chは「gbi」だったそうです。
                  </td>
                </tr>
                <tr>
                  <th>
                    <a
                      href="https://plaza.rakuten.co.jp/usototinmoku/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img src={marimo} alt="marimo banner" />
                    </a>
                  </th>
                  <td>
                    毬藻同盟
                    <br />
                    「一度はどこかで見た」という有名な人が多い部隊でした。
                  </td>
                </tr>
              </table>
            </div>
            <div id="link4">
              <table>
                <tr>
                  <th>
                    <a
                      href="http://sherryffb.web.fc2.com/index.html"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <h3>Mustard(黒連)のホームページ</h3>
                    </a>
                  </th>
                  <td>ここを見るだけでFFBのほとんどが完結します。</td>
                </tr>
                <tr>
                  <th>
                    <a
                      href="https://plaza.rakuten.co.jp/limffb/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <h3>Limited Life(仮)</h3>
                    </a>
                  </th>
                  <td>
                    前人未到の570万レベルを達成した方のサイト。
                    <br />
                    部隊は解散して個人運営の模様。
                  </td>
                </tr>
                <tr>
                  <th>
                    <a
                      href="https://plaza.rakuten.co.jp/r10blog/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <h3>あるとぶろぐ</h3>
                    </a>
                  </th>
                  <td>
                    あるとさんのブログ。
                    <br />
                    500万レベルの軌跡です。
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default Links;
