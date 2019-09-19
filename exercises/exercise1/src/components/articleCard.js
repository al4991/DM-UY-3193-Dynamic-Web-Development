import React from 'react';

const styles = {
    container: {
      display: "flex", 
      flexDirection: "row",  
      justifyContent: "space-evenly",
      alignItems: "center",
      border: "black 1px solid",
      marginLeft: "10%",
      marginRight: "10%",
      marginTop: "1%"
    },
    imageBox: {
      flex: 1,
      paddingLeft: "5%"
    }, 
    articlePreviewBox: { 
      flex: 3,
      padding: "2%"
    },
    imageCard: {
      maxWidth: "100%"
    }
}


function ArticleCard(props) {
  return (
    <div style={styles.container}> 
      <div style={styles.imageBox}>
        <img style={styles.imageCard} src={props['image']['url']} />
      </div>  
      <div style={styles.articlePreviewBox} key={props.id} >
        <h2> {props.title} </h2>
        <h4> {props.date} </h4>
        <p> {props.blurb} </p>
        <a href={`/article/${props.id}`}>read more</a>
      </div>
    </div> 
  );
}

export default ArticleCard;
