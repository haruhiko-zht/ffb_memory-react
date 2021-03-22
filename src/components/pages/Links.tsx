import { FC } from 'react';
import { Helmet } from 'react-helmet';

import 'components/pages/Links.scss';
import Header from 'components/templates/Header';
import Footer from 'components/templates/Footer';

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
                      FF BATTLE
                    </a>
                  </th>
                  <td>ミラー３</td>
                </tr>
                <tr>
                  <th>
                    <a
                      href="http://kroko.jp/ffbxoops/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      FFB XOOPS
                    </a>
                  </th>
                  <td>総合コミュニティ</td>
                </tr>
                <tr>
                  <th>
                    <a
                      href="http://kroko.jp/static/gamereview.htm"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      レビュー注意事項
                    </a>
                  </th>
                  <td>
                    鉱石が欲しくてレビューする人は注意事項をまず読むといいです。
                  </td>
                </tr>
                <tr>
                  <th>
                    <a
                      href="http://kroko.jp/ffbxoops/modules/xpwiki/index.php?newffb%2F%A4%E8%A4%AF%A4%A2%A4%EB%BC%C1%CC%E4"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      FFBよくある質問
                    </a>
                  </th>
                  <td>わりとなうい情報だと思うので参考になると思います。</td>
                </tr>
                <tr>
                  <th>
                    <a
                      href="https://kroko.jp/ffbxoops/user.php?xoops_redirect=%2Fffbxoops%2Fmodules%2Fxpwiki%2Findex.php%3F%2525A5%2525C1%2525A5%2525E3%2525A5%2525C3%2525A5%2525C8%2525B3%2525D6%2525CE%2525A5%2525B4%2525F0%2525BD%2525E0"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      隔離基準
                    </a>
                  </th>
                  <td>守らないと罰を受ける基準。</td>
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
                      FF BATTLE資料小屋
                    </a>
                  </th>
                  <td>
                    武器や防具などの各種データが集まっています。貴重なサイト。
                  </td>
                </tr>
                <tr>
                  <th>
                    <a
                      href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRe_uSvjnXxeoOHUM5raepGoeKV-opnxaWiY4o3jwjznSNTFJ2D_tDL0XwOyYP3rQ7QdqhNuauujg0B/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      鉱石一覧表
                    </a>
                  </th>
                  <td>鉱石の種類・価格・倍率を一覧表にしたもの。</td>
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
                      <img
                        src="https://haruhiko.xsrv.jp/FFB/img/links/ruri_bana.jpg"
                        alt=""
                      />
                    </a>
                  </th>
                  <td>
                    瑠璃~StarFlower （健全な部隊）
                    <br />
                    更新は無期限停止ですが副隊長含め、隊員の反応はわりとあります。
                  </td>
                </tr>
                <tr>
                  <th>
                    <a
                      href="http://ks102793.wixsite.com/comrade-of-ffb"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        src="https://haruhiko.xsrv.jp/FFB/img/links/cof_bana.jpg"
                        alt=""
                      />
                    </a>
                  </th>
                  <td>
                    Comrade of FFB
                    <br />
                    専用ch「Y168」で活動しているそうです。会話好きな人はおすすめ。
                  </td>
                </tr>
                <tr>
                  <th>
                    <a
                      href="http://popopo2002.web.fc2.com/index.html"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        src="https://haruhiko.xsrv.jp/FFB/img/links/popopo_bana.jpg"
                        alt=""
                      />
                    </a>
                  </th>
                  <td>
                    ぽぽぽ隊
                    <br />
                    1st鯖を中心に2002年から活動している部隊です。
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
                    廃人の方が集まってくる部隊です。
                    <br />
                    露出頻度は少なめ、全盛期は3～4年前。
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
                    現存部隊では一番アクティブ数が多いです。
                    <br />
                    専用chは「gbi」だそうです。通話好きな人はおすすめ。
                  </td>
                </tr>
                <tr>
                  <th>
                    <a
                      href="https://plaza.rakuten.co.jp/usototinmoku/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        src="https://haruhiko.xsrv.jp/FFB/img/links/marimo_bana.jpeg"
                        alt=""
                      />
                    </a>
                  </th>
                  <td>
                    毬藻同盟
                    <br />
                    「一度はどこかで見た」という有名な人が多い部隊です。
                  </td>
                </tr>
                <tr>
                  <th>
                    <h3>破壊の揺り籠</h3>
                  </th>
                  <td>
                    チャンプの装備を破壊するという明確な意思を持った部隊。
                    <br />
                    部隊の目的が他と差別化されており、一際目立ちました。
                    <br />
                    誰かが怒ると怖い（サブ15体ぐらいでチャンプ奪還してくる）。
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
                    前人未到の500万レベルを達成した方のサイト。部隊は解散して個人運営の模様。
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
                  <td>あるとさんのブログ。500万レベルを目標にした軌跡です。</td>
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
