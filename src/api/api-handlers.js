require('firebase/auth');
import firebase from 'firebase/app';
import { databaseURL, firebaseConfig, authURL } from './api-config';

const headers = {
    'Content-Type': 'application/json'
};

export const initApi = async () => {
    firebase.initializeApp(firebaseConfig);
};

initApi();

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

export const signIn = (email, password) => {
    return fetch ( authURL, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            email,
            password,
            returnSecureToken: true
        })
    })
        .then( response => response.json())
        .catch( err => console.log(err));
};

export const signUp = async (name, surname, birth, gender, email, password) => {
    await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then( response => response);

    await fetch (`${databaseURL}/users.json`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            name,
            surname,
            birth,
            gender,
            email,
        })
    })
        .then(response => response);

    await signIn(email, password);
};
