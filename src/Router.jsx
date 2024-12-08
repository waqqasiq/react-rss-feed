import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticleDetailsPage from './pages/ArticleDetailsPage';
import ArticlesHomePage from './pages/ArticlesHomePage';

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
