import { FC, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';

import 'App.scss';
import Home from 'components/pages/Home';
import Survey from 'containers/pages/Survey';
import SurveyContent from 'containers/organisms/SurveyContent';

const App: FC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [hash, pathname]);

  return (
    <>
      <div className="main-bg" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="survey" element={<Survey />}>
          <Route path="/" element={<></>} />
          <Route path=":articleId" element={<SurveyContent />} />
        </Route>
        <Route path="old-server" element={<></>} />
        <Route path="*" element={<Navigate to="/" replace />} />;
      </Routes>
    </>
  );
};

export default App;
