import { FC, useEffect, useRef } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router';

import { Article } from 'data/articles';

type Props = {
  categoryCode: string;
  articles: Article[];
};

const SplitColumn: FC<Props> = ({ categoryCode, articles }) => {
  const { hash, pathname } = useLocation();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hash) divRef.current?.scrollTo(0, 0);
  }, [hash, pathname, divRef]);

  return (
    <>
      <div className="contents">
        <div className="wrap">
          <div className="main-col" ref={divRef}>
            {/* left column */}
            <aside className="left-col">
              <ul>
                {articles.map((article) => (
                  <li key={article.id}>
                    <Link to={`/${categoryCode}/${article.id}`}>
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
            <div className="left-col-back" />

            {/* right column */}
            <article className="right-col">
              <Outlet />
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default SplitColumn;
