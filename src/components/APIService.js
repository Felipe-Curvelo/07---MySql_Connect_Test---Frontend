

export default class APIService{
    static UpdateArticle(id,body) {
        return fetch(process.env.REACT_APP_APP_SERVER + `/update/${id}/`, {
            'method': 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(resp => resp.json())
    }

    static InsertArticle(body) {
        return fetch(process.env.REACT_APP_APP_SERVER + `/add`, {
            'method': 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(resp => resp.json())
    }

    static DeleteArticle(id) {
        return fetch(process.env.REACT_APP_APP_SERVER + `/delete/${id}/`, {
            'method': 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },

            })

    }
}