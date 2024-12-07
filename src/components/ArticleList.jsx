import React, { useState } from 'react';
import { Card, CardContent,CardMedia, Typography, TextField } from '@mui/material';

const ArticleList = ({ articles }) => {
    const [filterText, setFilterText] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    // Handle filter text change
    const handleFilterChange = (e) => {
        setFilterText(e.target.value);
    };

    // Handle date changes
    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    // Filter articles based on the filterText and date range
    const filteredArticles = articles.filter((article) => {
        const articleDate = new Date(article.pub_date);
        const isInDateRange =
            (!startDate || articleDate >= new Date(startDate)) &&
            (!endDate || articleDate <= new Date(endDate));

        return (
            (article.title.toLowerCase().includes(filterText.toLowerCase()) ||
                article.description.toLowerCase().includes(filterText.toLowerCase())) &&
            isInDateRange
        );
    });

    return (
        <div style={{ padding: '20px'}}>

            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', width:'100%', justifyContent:'center' }}>
                <TextField
                    label="Filter by Title or Description"
                    variant="outlined"
                    value={filterText}
                    onChange={handleFilterChange}
                    style={{ marginBottom: '20px' }}
                />
                <TextField
                    type="date"
                    label="Start Date"
                    variant="outlined"
                    value={startDate}
                    onChange={handleStartDateChange}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    type="date"
                    label="End Date"
                    variant="outlined"
                    value={endDate}
                    onChange={handleEndDateChange}
                    InputLabelProps={{ shrink: true }}
                />
            </div>

            {/* Display Filtered Articles */}
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px',
                    justifyContent: 'center',
                    padding: '20px',
                }}
            >
                {filteredArticles.map((article) => (
                    <Card key={article.id} style={{ width: '300px', height: '350px', position: 'relative' }}>
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
                            <Typography variant="h6" component="div">
                                {article.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {article.description.substring(0, 100)}...
                            </Typography>
                            <Typography variant="caption" display="block" color="text.secondary">
                                {new Date(article.pubDate).toLocaleDateString()}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ArticleList;
