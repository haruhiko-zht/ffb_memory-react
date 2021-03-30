import cof from 'images/links/cof.jpg';
import marimo from 'images/links/marimo.jpeg';
import popopo from 'images/links/popopo.jpg';
import ruri from 'images/links/ruri.jpg';

export const linkTypes = {
  official: '公式',
  nonofficial: '非公式',
  team: '部隊',
  individual: '個人',
};

export type LinkType = keyof typeof linkTypes;

export type LinkData = {
  id: number;
  type: LinkType;
  title: string;
  url: string;
  image?: string;
  overview: string;
};

export const linkData: LinkData[] = [
  {
    id: 1,
    type: 'official',
    title: 'FF BATTLE',
    url: 'https://kroko.jp/ffbattle/others.cgi',
    image: undefined,
    overview: 'ミラー3',
  },
  {
    id: 2,
    type: 'official',
    title: 'FFB XOOPS',
    url: 'https://kroko.jp/ffbxoops/',
    image: undefined,
    overview: '総合コミュニティ',
  },
  {
    id: 3,
    type: 'official',
    title: 'レビュー注意事項',
    url: 'https://kroko.jp/static/gamereview.htm',
    image: undefined,
    overview: '鉱石が欲しくてレビューする人は注意事項をまず読むといいです。',
  },
  {
    id: 6,
    type: 'nonofficial',
    title: 'FF BATTLE資料小屋',
    url: 'http://ffb.vs.land.to/',
    image: undefined,
    overview: '武器や防具などの各種データが集まっています。貴重なサイト。',
  },
  {
    id: 7,
    type: 'team',
    title: '瑠璃~StarFlower',
    url: 'https://plaza.rakuten.co.jp/ffbstarflower2/',
    image: ruri,
    overview: '健全な部隊でした。',
  },
  {
    id: 8,
    type: 'team',
    title: 'Comrade of FFB',
    url: 'https://ks102793.wixsite.com/comrade-of-ffb',
    image: cof,
    overview: '専用ch「Y168」で活動しているそうです。',
  },
  {
    id: 9,
    type: 'team',
    title: 'ぽぽぽ隊',
    url: 'http://popopo2002.web.fc2.com/index.html',
    image: popopo,
    overview: '1st鯖を中心に2002年から活動していた部隊です。',
  },
  {
    id: 10,
    type: 'team',
    title: 'ごごご隊',
    url: 'https://www4.hp-ez.com/hp/sonarpoke1203/page1',
    image: undefined,
    overview: '専用chは「gbi」だったそうです。',
  },
  {
    id: 11,
    type: 'team',
    title: '毬藻部隊',
    url: 'https://plaza.rakuten.co.jp/usototinmoku/',
    image: marimo,
    overview: '「一度はどこかで見た」という有名な人が多かった部隊です。',
  },
  {
    id: 13,
    type: 'individual',
    title: 'Mustard(黒連)のホームページ',
    url: 'http://sherryffb.web.fc2.com/index.html',
    image: undefined,
    overview: 'ここを見るだけでFFBのほとんどが完結します。',
  },
  {
    id: 14,
    type: 'individual',
    title: 'Limited Life(仮)',
    url: 'https://plaza.rakuten.co.jp/limffb/',
    image: undefined,
    overview:
      '前人未到の570万レベルを達成した方のサイト。部隊は解散して個人運営の模様。',
  },
  {
    id: 15,
    type: 'individual',
    title: 'あるとぶろぐ',
    url: 'https://plaza.rakuten.co.jp/r10blog/',
    image: undefined,
    overview: 'あるとさんのブログ。500万レベルを目標にした軌跡です。',
  },
  {
    id: 16,
    type: 'team',
    title: '紅月夜隊',
    url: 'https://ariakenotsuki.wixsite.com/pale-morning-moon',
    image: undefined,
    overview: '廃人の方が集まっていた部隊です。',
  },
];
