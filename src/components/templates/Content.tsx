import { FC } from 'react';

import './Content.scss';

type Props = {
  title: string;
};

const Content: FC<Props> = ({ title }) => (
  <main>
    <div className="main-title">
      <div className="title-wrap">
        <h2>{title}</h2>
      </div>
    </div>

    <div className="contents">
      <div className="wrap">
        <div className="main-col">
          {/* left column */}
          <aside className="left-col">
            <ul>
              <li>test1</li>
              <li>test2</li>
              <li>test3</li>
              <li>test4</li>
              <li>test5</li>
            </ul>
          </aside>
          <div className="left-col-back" />

          {/* right column */}
          <article className="right-col">text.</article>
        </div>
      </div>
    </div>
  </main>
);

export default Content;
