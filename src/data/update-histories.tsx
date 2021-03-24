export type UpdateHistory = {
  id: number;
  date: string;
  outline: string;
};

export type UpdateHistoryData = UpdateHistory[];

export const updateHistoryData: UpdateHistoryData = [
  { id: 6, date: '2018/10/16', outline: '改造レシピに折込機能追加' },
  { id: 5, date: '2018/10/15', outline: 'ステータス画像のプレビュー機能修正' },
  { id: 4, date: '2018/10/15', outline: 'ベータオープン' },
  { id: 3, date: '2018/10/15', outline: '改造レシピにフィルタ機能' },
  { id: 2, date: '2018/10/13', outline: 'プレオープン' },
  { id: 1, date: '2018/10/13', outline: '移転作業開始' },
];
