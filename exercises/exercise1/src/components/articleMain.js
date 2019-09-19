import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ArticleCard from "./articleCard";

function ArticleMain(props) {
  return (
    <div> 
      <h1>Articles</h1>
      <Router>
        { props.data.map((elem) =>
          <div> 
            <ArticleCard
              title={elem.title}
              date={elem.publishedDate}
              blurb={elem.blurb}
              id={elem.id}
              image={elem.image}
            />
          </div>
        )}
      
      </Router>
    </div>
  );
}




export default ArticleMain;