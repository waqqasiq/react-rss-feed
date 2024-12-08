import { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';

import ArticleList from './components/ArticleList';
import Navbar from './components/Navbar';
import useFetch from './hooks/useFetch';

const ArticlesHomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading, } = useFetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/article/get-articles`, currentPage, 10);

  const { articles, currentPage: fetchedPage, totalPages } = data || {};

  useEffect(() => {
    if (data) {
      setCurrentPage(fetchedPage);
    }
  }, [data, fetchedPage]);

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
    <div style={{ width: '100vw', minHeight: '100vh' }}>
      <Navbar />
      {/* <h1 style={{ textAlign: 'center' }}>FeedSync</h1> */}

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt:'3rem' }}>
          <CircularProgress color='inherit'/>
        </Box>
        // <p style={{ textAlign: 'center' }}>Loading...</p>
      ) : (
        <div>
          <ArticleList articles={articles} />
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
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
