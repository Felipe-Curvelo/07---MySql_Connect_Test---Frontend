import { useState, useEffect } from 'react';

import './App.css';
import ArticleList from './components/ArticleList';
import Form from './components/Form';

function App() {
  const [articles, setArticles] = useState([]);
  const [ editedArticle, setEditedArticle ] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_APP_SERVER + '/get', {
    'method': 'GET',
    headers: {
      'Content-Type': 'applications/json'
    }
    })
    .then(resp => resp.json())
    .then(resp => setArticles(resp))
    .catch(error => console.log(error))
  }, [])

  const editArticle = (article) => {
    setEditedArticle(article)
  }

  const openForm = () => {
    setEditedArticle({title: '', body: ''})
  }

  const insertedArticle = (article) => {
    const new_Articles = [...articles, article]
    setArticles(new_Articles)
  }

  const deleteArticle = (article) => {
    const new_Articles = articles.filter(myarticle => {
      if(myarticle.id === article.id){
        return false;
      }
      return true
    })
    setArticles(new_Articles)
  }

  return (
    <div className="App">
      <div>
        <button onClick={openForm}>ADICIONAR</button>
      </div>
    <h1>Flask and React Teste</h1>
      <ArticleList articles={articles} editArticle={editArticle} deleteArticle={deleteArticle} />
      {editedArticle ? <Form article={editedArticle} insertedArticle={insertedArticle}/> : null}
  </div>  
  );
}

export default App;
