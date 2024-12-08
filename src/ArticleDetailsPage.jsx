import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ArticleDetailCard from './components/ArticleDetailCard';  // Import the new component
import Navbar from './components/Navbar';

const ArticleDetailsPage = () => {
    const { id: articleId } = useParams(); // Get the article ID from the URL
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticleDetails = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_BASE_URL}/api/article/get-article/${articleId}`
                );
                setArticle(response.data);
            } catch (error) {
                console.error('Error fetching article details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticleDetails();
    }, [articleId]);

    if (loading) {
        return <div style={{ width: '100vw', minHeight: '100vh' }}><p style={{ textAlign: 'center' }}>Loading article details...</p></div>
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
