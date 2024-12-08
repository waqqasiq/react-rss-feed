import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ArticleCard({ article }) {
    return (
        <Card key={article.id} style={{ width: '300px', height: '380px', position: 'relative' }}>
            {/* Optionally add a media thumbnail if needed */}
            {article.thumbnail_url && (
                <CardMedia
                    component="img"
                    height="140"
                    image={article.thumbnail_url}
                    alt={article.title}
                />
            )}
            <CardContent>
                <Typography sx={{ marginBottom: '4px' }} variant="h6" component="div">
                    {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {article.description.substring(0, 80)}...
                </Typography>
                <div
                    style={{
                        position: 'absolute',
                        bottom: '20px',
                        left:'0',
                        width: '100%',
                        textAlign: 'center',
                    }}
                >
                    <Button
                        variant="contained"
                        size="small"
                        component={Link}
                        to={`/article/${article.id}`}
                    >
                        Read More
                    </Button>
                </div>

            </CardContent>
        </Card>
    );
}
