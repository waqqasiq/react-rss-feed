import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ArticleList from './components/ArticleList';
import ArticleDetails from './components/ArticleDetails';
import App from './App';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
