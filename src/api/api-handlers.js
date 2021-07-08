import { databaseURL } from './api-config';

const headers = {
    'Content-Type': 'application/json'
};

export const createTodo = post => {
    const { date, todoValue, dateTime, dateDMY } = post;
    return fetch(
        `${databaseURL}/todos.json`,
        {
            method: 'POST',
            headers,
            body: JSON.stringify({
                date,
                todoValue,
                dateDMY,
                dateTime
            })
        }
    )
        .then( response => response.json())
        .then( result => console.log(result))
};

export const getTodos = () => {
    return fetch(
        `${databaseURL}/todos.json`,
        {
            method: 'GET',  //get запрос идет по умолчанию, его можно не прописывать
            headers,
        }
    )
        .then( response => response.json())
        .then( result => {
            if(result) {
                const tranformedPostsArr = Object.keys(result).map( key => ({
                    ...result[key],
                    id: key
                }))
                return tranformedPostsArr;
            }

        })
};
