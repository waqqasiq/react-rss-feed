import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticleDetailsPage from './ArticleDetailsPage';
import ArticlesHomePage from './ArticlesHomePage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArticlesHomePage />} />
        <Route path="/article/:id" element={<ArticleDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
