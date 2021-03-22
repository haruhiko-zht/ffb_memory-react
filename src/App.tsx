import { FC, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';

import 'App.scss';
import Home from 'components/pages/Home';
import Capture from 'components/pages/Capture';
import Survey from 'components/pages/Survey';
import OldServer from 'components/pages/OldServer';
import Links from 'components/pages/Links';
import ArticleContent from 'containers/organisms/ArticleContent';

const App: FC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [hash, pathname]);

  return (
    <>
      <div className="app-bg" />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="capture" element={<Capture />}>
            <Route path="/" element={<></>} />
            <Route
              path=":articleId"
              element={<ArticleContent categoryCode="capture" />}
            />
          </Route>
          <Route path="survey" element={<Survey />}>
            <Route path="/" element={<></>} />
            <Route
              path=":articleId"
              element={<ArticleContent categoryCode="survey" />}
            />
          </Route>
          <Route path="oldServer" element={<OldServer />}>
            <Route path="/" element={<></>} />
            <Route
              path=":articleId"
              element={<ArticleContent categoryCode="oldServer" />}
            />
          </Route>
          <Route path="links" element={<Links />} />
          <Route path="*" element={<Navigate to="/" replace />} />;
        </Routes>
      </div>
    </>
  );
};

export default App;
