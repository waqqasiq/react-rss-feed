
# News Aggregator Frontend  

This is the frontend application for the News Aggregator system, built using React and Vite. The application allows users to view, filter, and paginate news articles, as well as navigate to detailed views for individual articles.  

## Features  

### Article Listing
- Articles are displayed in the form of responsive Material-UI (MUI) cards.  
- Each card shows essential details like the title, description, and a thumbnail image of the article.  

### Filtering  
- **Keyword Filtering:** Users can filter articles by keywords in the title or description.  
- **Date Filtering:** Articles can be filtered based on a start and end date, allowing users to find content within a specific time range.  

### Pagination  
- Supports seamless navigation through articles using "Previous" and "Next" buttons.  
- Pagination status is displayed (e.g., "Page 2 of 5").  

### Article Details  
- Users can click on an article to navigate to a detailed page that displays the full content, topics associated with the article, and a link to the full source.  

## Technical Overview  

### Technology Stack  
- **React**: Used to build the user interface.  
- **Vite**: Fast development environment and build tool for modern web applications.  
- **Material-UI (MUI)**: Used for styling and building reusable, consistent UI components.  
- **JavaScript**: Programming language used for the application.  

### Key Features in Development  

#### Custom Hooks  
- Implemented reusable custom hooks for fetching data from the backend.  
- Simplifies API integration and ensures cleaner code structure.  

#### Reusable Components  
- Common components like `ArticleList`, `ArticleCard`, `Navbar`, and `ArticleDetailCard` have been created for reusability and modularity.  
- All reusable components are stored in a separate directory for better organization.  

#### Filtering Functionality  
- The filtering logic uses controlled components and state management.  
- Filters can be applied using title/description keywords and date range inputs.  

#### Pagination  
- Pagination is handled by maintaining the current page state and fetching data for the selected page from the backend.  

## Application Structure  

```
src/
├── components/
│   ├── ArticleCard.jsx          # Reusable component for rendering individual article cards.
│   ├── ArticleList.jsx          # Component for displaying a list of articles.
│   ├── ArticleDetailCard.jsx    # Detailed view of a single article.
│   └── Navbar.jsx               # Navigation bar component.
├── hooks/
│   └── useFetch.jsx             # Custom hook for fetching data.
├── pages/
│   ├── ArticlesHomePage.jsx     # Main page displaying articles with filters and pagination.
│   └── ArticleDetailsPage.jsx   # Page displaying detailed view of an article.
├── main.jsx                     # Main entry point for the React application.
└── Router.jsx                   # Application entry point.
```

### Backend Integration  
The frontend communicates with the backend API for fetching articles, applying filters, and getting detailed information for specific articles.  

- **API Documentation**: The backend provides Swagger API documentation for reference.  

### Deployment  
The app is built and optimized for production using Vite's build process.  

## Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/waqqasiq/react-rss-feed
   cd react-rss-feed
   ```  

2. Install dependencies:  
   ```bash  
   npm install
   ```  

3. Set up environment variables:  
   Create a `.env` file in the root directory and add the backend URL:  
   ```env  
   VITE_BACKEND_BASE_URL=http://localhost:3010
   ```  

4. Run the development server:  
   ```bash  
   npm run dev
   ```  

5. Build for production:  
   ```bash  
   npm run build
   ```  


## Usage  
- **Home Page**: View all articles with options to filter and paginate.  
- **Details Page**: Click on an article card to view more information.  

---

This frontend application provides a dynamic and user-friendly interface for exploring articles. Its modular design and reusable components make it scalable and maintainable. Enjoy browsing through the news!
