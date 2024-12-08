import { Typography, Chip } from '@mui/material';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(date);
};

const ArticleDetailCard = ({ article }) => {
    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <img style={{ borderRadius: '4px' }} src={article.thumbnail_url} width={'50%'} height={'auto'} />
            <Typography variant="h2" sx={{ marginTop: '1rem', marginBottom: '1rem', fontSize: '2rem' }}>
                {article.title}
            </Typography>

            <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                {article.description}
            </Typography>

            <Typography variant="body1" sx={{ marginBottom: '0.6rem' }}>
                <strong>Published on: </strong>{formatDate(article.pub_date)}
            </Typography>

            <Typography variant="body1" sx={{ marginBottom: '0.6rem' }}>
                <strong>Author: </strong>{article.creator || 'Unknown'}
            </Typography>

            <div style={{ marginBottom: '20px' }}>
                <Typography variant="body1"><strong>Topics:</strong></Typography>
                {article.articleTopics && article.articleTopics.length > 0 ? (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
                        {article.articleTopics.map((articleTopic) => (
                            <Chip
                                key={articleTopic.id}
                                label={articleTopic.topic.name}
                                color="primary"
                                variant="outlined"
                            />
                        ))}
                    </div>
                ) : (
                    <Typography variant="body2" color="textSecondary">
                        No topics available for this article.
                    </Typography>
                )}
            </div>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
                Read Full Article
            </a>
        </div>
    );
};

export default ArticleDetailCard;
