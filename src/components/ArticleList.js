import React from 'react'
import APIService from './APIService'

function ArticleList(props) {
    const editArticle = (article) => {
        props.editArticle(article)
    }

    const deleteArticle = (article) => {
        APIService.DeleteArticle(article.id)
        .then(() => props.deleteArticle(article))
    }

  return (
    <div>
    {props.articles && props.articles.map(article => {
        return (
          <div key= {article.id}>
            <h2>{article.title}</h2>
            <p>{article.body}</p>

            <div className='row'>
                <button
                onClick={() => editArticle(article)}
                >Update</button>
                <button
                onClick = {() => deleteArticle(article)}
                >Delete</button>
            </div>
          </div>  
  
        )
      })}
    </div>
  )
}

export default ArticleList