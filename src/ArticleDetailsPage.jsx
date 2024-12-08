import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ArticleDetailCard from './components/ArticleDetailCard';  // Import the new component
import Navbar from './components/Navbar';
import useFetch from './hooks/useFetch';

const ArticleDetailsPage = () => {
    const { id: articleId } = useParams(); // Get the article ID from the URL
    const { data: article, loading } = useFetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/article/get-article/${articleId}`);

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
