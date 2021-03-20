import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

import './Survey.scss';
import Header from 'components/templates/Header';
import Footer from 'components/templates/Footer';
import { Article } from 'data/articles';

type Props = {
  category: string;
  articles: Article[];
};

const Survey: FC<Props> = ({ category, articles }) => (
  <>
    <Header />
    <main>
      <div className="main-title">
        <div className="title-wrap">
          <h2>{category}</h2>
        </div>
      </div>
      <div className="contents">
        <div className="wrap">
          <div className="main-col">
            {/* left column */}
            <aside className="left-col">
              <ul>
                {articles.map((article) => (
                  <li key={article.id}>
                    <Link to={`/survey/${article.id}`}>{article.title}</Link>
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
    </main>
    <Footer />
  </>
);

export default Survey;
