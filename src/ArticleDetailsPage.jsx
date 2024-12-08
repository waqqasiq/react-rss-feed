import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';

import ArticleDetailCard from './components/ArticleDetailCard';  // Import the new component
import Navbar from './components/Navbar';
import useFetch from './hooks/useFetch';

const ArticleDetailsPage = () => {
    const { id: articleId } = useParams(); // Get the article ID from the URL
    const { data: article, loading } = useFetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/article/get-article/${articleId}`);

    if (loading) {
        return (
            <div style={{ width: '100vw', minHeight: '100vh' }}>
                <Navbar />
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: '15%' }}>
                    <CircularProgress color='inherit' />
                </Box>
            </div>
        )
    }

    if (!article) {
        return <div style={{ width: '100vw', minHeight: '100vh' }}><p style={{ textAlign: 'center' }}>Article not found.</p></div>
    }

    return (
        <div style={{ width: '100vw', minHeight: '100vh' }}>
            <Navbar />
            <ArticleDetailCard article={article} />  {/* Pass the fetched article to the new component */}
        </div>
    );
};

export default ArticleDetailsPage;
