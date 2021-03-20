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
              お金を盗む最大額っていうのはステータスからある程度把握できるけどなぜバラつくのか。それが命中率と関係しているのかっていうのを無謀にも調査しようとしているところ
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
};
