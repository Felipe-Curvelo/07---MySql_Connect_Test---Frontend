import React, { useState } from 'react'
import APIService from './APIService';

function Form({ article, props }) {
    const [title, setTitle] = useState(article.title);
    const[ body, setBody ] = useState(article.body)
    const updateArticle = () => {
        APIService.UpdateArticle(article.id, {title, body})
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
    }

    const insertArticle = () => {
        APIService.InsertArticle({ title, body})
        .then(resp=> props.insertedArticle(resp))
        .catch(error => console.log(error))
    }

  return (
    <div>
        {article ? (
            <div>
                <label>Tittle</label>
                <input 
                type="text" 
                className='form-control' 
                placeholder='Titulo'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Descricao</label>
                <textarea className='form-control' placeholder='Digita ai' value={body} onChange={(e) => setBody(e.target.value)}/>

                {
                    article.id ?
                    <button onClick={updateArticle}>Manda bala</button>
                    : <button onClick={insertArticle}>Incluir</button>
                }
            </div>
        ): null}
    </div>
  )
}

export default Form