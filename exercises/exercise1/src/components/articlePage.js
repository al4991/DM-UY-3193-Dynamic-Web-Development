import React from 'react';
const articleData = require('./../data.json');

const styles = {
  titleImage: {
    marginLeft: "10%", 
    marginRight: "10%", 
    textAlign: "center", 
    maxWidth: '100%', 
  },
  titleText: {
    color: "white"
  },
  hide: {
    visibility: "hidden"
  },
  bodyText: { 
    marginLeft: "15%", 
    marginRight: "15%"
  }
}

function ArticlePage(props) {
  const article = (articleData.filter(
    elem => elem.id === props.match.params.id
  ))[0];
  return (
    <div> 
      <div style={{...styles.titleImage, backgroundImage: 'url(' + article['image']['url'] + ')'  } }>
        <h1 style={styles.titleText}> {article.title}</h1>
        <img src={article['image']['url']} style={styles.hide} alt='cute shibe' />
      </div> 
      <div style={styles.bodyText}>
        <p> {article.publishedDate} </p>
          <h2> {article.blurb}</h2>
          { 
            article.articleText.map((ele) => 
              {
                if (ele['type'] === "h2") { 
                  return <h2> {ele['data']} </h2>
                }
                else { 
                  return <p> {ele['data']} </p>
                }
              }
            )
          }
      </div>
    </div>
  );

}


export default ArticlePage;