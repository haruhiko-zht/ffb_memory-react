import { FC } from 'react';

export type Article = {
  id: number;
  title: string;
  content: FC;
};

export type ArticleData = {
  [categoryCode: string]: {
    category: string;
    articles: Article[];
  };
};

export const articleData: ArticleData = {
  capture: {
    category: '攻略備忘録',
    articles: [
      {
        id: 1,
        title: '攻略チャート',
        content: () => (
          <>
            <h3 id="capture-chart">攻略チャート</h3>
            <p>文才無いので他サイトを参考にして下さい。</p>
            <p>
              1つ言えることは、
              <span className="magenta">
                どこのサイトの攻略チャートもその作者がベストだと考えている攻略方法で、自分にとってベストな攻略になるかは分かりません
              </span>
              。
            </p>
            <p>
              <span className="del">
                ここではチャンプ装備破壊が無くなった以降の大まかな攻略方法を書いておきます。
              </span>
            </p>
            <h4>1～7000</h4>
            <p>
              具体的には
              <a
                href="http://sherryffb.web.fc2.com/index.html"
                target="_blank"
                rel="noreferrer noopener"
              >
                Mustard(黒連)さんHPの【初中級者向け】項目の「1日でトレジャーハンターになろう！」
              </a>
              がオススメです。
            </p>
            <h4>7000～15000</h4>
            <p>
              具体的には
              <a
                href="http://sherryffb.web.fc2.com/index.html"
                target="_blank"
                rel="noreferrer noopener"
              >
                Mustard(黒連)さんHPの【上級者向け】項目
              </a>
              で予習しておくと最終試練のための防具強化やパーティ編成がしやすいと思います。
            </p>
            <h4>15000～</h4>
            <p>
              ようこそ廃人の世界へ。ひたすら最終試練を周回してレベあげ
              <br />
              改造したい人はe308を目指そう
            </p>
            <p>
              モチベーションが維持しにくい方は
              <a
                href="https://haruhiko.xsrv.jp/FFB_Level_Ranking/"
                target="_blank"
                rel="noreferrer noopener"
              >
                レベルランキング
              </a>
              に登録して他プレイヤーと競い合いましょう
            </p>
          </>
        ),
      },
      {
        id: 2,
        title: '最終試練クリア後',
        content: () => (
          <>
            <h3 id="after-gameclear">最終試練クリア後</h3>
            <p>何をやりたいかで大分変わると思います。</p>
            <p>
              現状、オークションが死んでいるためステータスの伸びがよく、技「お金を盗む」による金収集が可能な現人神の地位が下がっています。
            </p>
            <p>
              お金があってもやれることっていうのは殆どないと考えられます。
              <br />
              レベルをひたすら上げたいっていう方は現人神でも良いかもしれません。
            </p>
            <p>
              装備を作るのであればトレジャーハンターをとにかく多く採用すること。
            </p>
            <p>
              転職すればするほどステータスは下がるのでよく決める必要があります。
            </p>
          </>
        ),
      },
      {
        id: 3,
        title: '命中率と回避率',
        content: () => (
          <>
            {' '}
            <h3 id="acc-eva">命中率と回避率</h3>
            <p>
              装備によって数値が大きく変化するステータスに命中率と回避率があります。
              <br />
              両者とも高いほど良いです。
            </p>
            <h4>命中率</h4>
            <p>
              高ければ高いほど攻撃が当たりやすくなります。
              <br />
              モンスター戦において、合計命中500以上あれば、殆ど当たります。
            </p>
            <p>
              ☆命中率が高いと何が良いか？
              <br />
              ①戦闘(特に最終試練)を安定してこなせるようになります。
              <br />
              攻撃が命中していれば勝利できた(次へ進めた)のにということが少なくなり、効率が上がります。
            </p>
            <p>
              ②戦略を組みやすくなる(特に最終試練)
              <br />
              命中率が高くなれば、これぐらいの威力があれば安定して戦闘できるという目安が付きやすくなります。
            </p>
            <p>
              いくら、威力が高くても当たらなければ意味がないというのもあります。
              <br />
              「全体攻撃でぶっぱすればいいじゃん！」って思う方も居ると思いますが、後述。
            </p>
            <p>
              ③トレジャーハンターの効果、お金を盗むの効率が上がる。
              <br />
              諸説ありますが、トレジャーハンターは攻撃命中すればするほどドロップ確率が上がると考えています(人数も増えると上がると考えてる)。そのため、命中率を高くして攻撃を当てるというのは意味があると推測しています。
              <span className="magenta">要検証</span>
            </p>
            <p>
              「お金を盗む」に関しては攻撃が当たらなければ技が発動しないので命中率が高ければ「お金を盗む」効率も上がるということです。
            </p>
            <p>
              よって、各キャラの攻撃する回数が多いほど良い→低威力＆高命中の武器が理想となるわけです。しかし、全キャラ低威力武器にしてしまうと勝利できなくなるので火力の調整が必要になります。
            </p>
            <h4>回避率</h4>
            <p>
              高ければ高いほど敵の攻撃を回避します。
              <br />
              モンスター戦において、合計回避500以上が必須と言われています(イベントステージ除く)。
            </p>
          </>
        ),
      },
    ],
  },
  survey: {
    category: '調査備忘録',
    articles: [
      {
        id: 1,
        title: '第1回「お金を盗む」',
        content: () => (
          <>
            <h3>第1回、命中率とお金を盗む額に関係性があるのか</h3>
            <p>
              答えが出ているのならアレなんだけど（
              <br />
              お金を盗む最大額っていうのはステータスからある程度把握できるけどなぜバラつくのか。それが命中率と関係しているのかっていうのを無謀にも調査しようとしているところ。
            </p>

            <h4>条件</h4>
            <p>
              ①お金を盗む最大額の計算式は生命力×魅力
              <br />
              ②コピペするのが面倒いので3~4桁くらいで計算
              <br />
              ③伝播の誤差は考慮しない（めんどry）
              <br />
              ④レベルを上げないため魔の森を周回
            </p>

            <h4>調査</h4>
            <p>
              １．メインキャラ
              <br />
              お金を盗む最大額：生命力(56767344)×魅力(56960256)=3233482446680064≒3233兆(3.223e+15)
              <br />
              命中率：基本(150)+アクセ(30)+武器(220)=400
            </p>
            <p>
              2.酒キャラ
              <br />
              お金を盗む最大額:生命力(45066157)×魅力(44886685)=2022870393419545≒2023兆(2.023e+15)
              <br />
              命中率:基本(150)+アクセ(30)+武器(300)=480
            </p>

            <h4>結果</h4>
            <p>
              １．メインキャラ
              <br />
              盗む額の平均値=1679兆(1.679e+15)
              <br />
              試行回数n=3 （めんどry）
              <br />
              残差=12225
              <br />
              割増係数En=2.20
              <br />
              偶然誤差=1679±194.6[兆]（95%の信頼度で計算）
              <br />
              相対誤差=1679[兆]±47.9[%]
            </p>
            <p>
              ２．酒キャラ
              <br />
              盗む額の平均値=935兆(0.935e+15)
              <br />
              試行回数n=3
              <br />
              残差=40133
              <br />
              割増係数En=2.20
              <br />
              偶然誤差=935±352.8[兆]（95%の信頼度で計算）
              <br />
              相対誤差=935[兆]±53.8[%]
            </p>

            <h4>考察</h4>
            <p>
              まず、妥当でない点。
              <br />
              有効数字をきちんと定義していない、データが少なすぎる、etc.
              データ少ないせいか平均値が安定してないため残差も大きい→誤差が大きい。
              <br />
              この結果からだと命中率があがれば上がるほど盗む額のばらつきが出るようになる（
            </p>
            <p>
              レベル差があるのでおそらく命中率ではなく他の何かが関係していることはだいたい想像できた。っていうか盗む額の平均値ってだいたい最大額の半分なのね。
            </p>
            <p>
              もしかしたら普通にそういう風に定義されているのかもしれない。
              <br />
              条件をあんまり統一できてない。
            </p>

            <h4>結論</h4>
            <p>
              誤差の観点から言うと調査は妥当でないところだらけだが盗む額と命中率の関係性は薄いことが考えられた。
              <br />
              また、盗む最大額/2=盗む額の平均値という関係が浮上した。どうせまたカルマとか関係してんだろ（
            </p>
            <p>
              レベルが高くなればなるほど安定して最大額を盗める可能性が微レ存。
            </p>
          </>
        ),
      },
      {
        id: 3,
        title: 'test',
        content: () => <></>,
      },
    ],
  },
  oldServer: {
    category: '旧サーバー',
    articles: [
      {
        id: 1,
        title: '旧サーバー',
        content: () => (
          <>
            <p>
              現在(2019年)はプレイすることが不可能である。
              <br />
              しかし、旧はほかのミラーサーバーと違ってすごく特有があって面白かったので備忘録として書いておきたいと思います。
            </p>
            <p>また、管理人は旧鯖の復活を応援しています。</p>

            <h3>つるむ制度がなかった</h3>
            <p>
              現ミラーサーバーと大きく違うところでつるむ制度がなかった
              <br />
              そしてキャラも最初から3体と固定されており酒場もなかった
            </p>

            <h3>ステータスのジョブレベルは★で表してた</h3>
            <p>
              例えば現人神Lv50なら★★★★★☆みたいな感じだった
              <br />
              職Lv60にすればMaster★★★★★★みたいになってカッコ良かった
            </p>

            <h3>装備は使うたんびに数値が下がっていく</h3>
            <p>倉庫に戻したらどうなるか忘れt</p>

            <h3>コンフィグの重要な変更にキャラクター削除が存在した</h3>
            <p>
              即効キャラを削除出来ました。キャラパクされると消される末路を辿る方も・・・
            </p>

            <h3>オークションに24時間出品が存在した</h3>
            <p>邪魔です</p>

            <h3>7000レベルからの上級職でも装備屋に武具は売っていた</h3>
            <p>
              拳闘士だとカイザーナックルが武器屋に販売されてました
              <br />
              なんかの職ではアイスブランドが売ってた
              <br />
              他は忘れt
            </p>

            <h3>サルーインの体力はランダム</h3>
            <p>少ない時は1万？程度なのでワンチャン掛けて凸ってました</p>

            <h3>トレジャーハンターは無能</h3>
            <p>
              上の通りサルーインの体力はランダムなのでワンチャン狙ったほうが神職になりやすかったです。
              <br />
              そもそも鉱石と改造が存在したか覚えてないけど装備が使うたんびに劣化していくのでほぼ誰もならない職でした
            </p>

            <h3>カモキャラは既に存在した！</h3>
            <p>
              お世話になりました。
              <br />
              記憶をたどると、ミラ3にもいたヴァン?さん、シスカ?さん（同一人物な気が）
            </p>

            <h3>サルーインを倒さず神職になる裏技が存在した</h3>
            <p>
              おそらく現ミラーサーバーでは確実に対策されてると思います。
              <br />
              サポが存在したのかしてないのか覚えてないけどよく神職裏技を代行する人が結構いました
            </p>
            <p>
              その裏技作業中にログインするとキャラが消えるとかで嘆く人も多々・・・、みんなマクロやチートはだめだお！！！！
            </p>

            <h3>管理人最短ルート</h3>
            <p>現鯖では必須である召喚士を経由しなくても管理人になれた。</p>
          </>
        ),
      },
    ],
  },
};
