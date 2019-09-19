import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import ArticleMain from './articleMain.js';
import ArticlePage from './articlePage.js';


const styles = {
  container: {
    textAlign: "center", 
  }
}


function App(props) {
  const data = props.data; 
  return (
  <div className='App' style={styles.container}>
  	<Router>
  		<Route
      exact path='/'
      render={(props) => <ArticleMain {...props} data={data}/>}
      />
      <Route 
      exact path='/article/:id'
      render={(props) => <ArticlePage {...props} />}
      />
  	</Router>
  </div>
  );
}

export default App;

