import { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleList from './components/ArticleList';
import Navbar from './components/Navbar';

const ArticlesHomePage = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchArticles = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(import.meta.env.VITE_BACKEND_BASE_URL + `/api/article/get-articles?page=${page}&limit=10`); // Adjust limit as needed
      console.log('response.data ', response.data);
      setArticles(response.data.articles);
      setCurrentPage(response.data.currentPage);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div style={{ width: '100vw', minHeight:'100vh' }}>
      <Navbar />
      {/* <h1 style={{ textAlign: 'center' }}>FeedSync</h1> */}

      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading...</p>
      ) : (
        <div>
          <ArticleList articles={articles} />
          <div style={{ textAlign: 'center', marginBottom:'20px' }}>
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              style={{ marginRight: '10px' }}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              style={{ marginLeft: '10px' }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticlesHomePage;
