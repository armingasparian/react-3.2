// let posts = [                                                         //moved to redux/state and put in state object
//   { message: "Hello, I am Tina!", likecount: 15 },
//   { message: "Hi, it's my first post", likecount: 23 }
// ]

// let dialogs = [
//   { id: 1, name: "Dimich" },
//   { id: 2, name: "Andrey" },
//   { id: 3, name: "Sveta" },
//   { id: 4, name: "Sasha" },
//   { id: 5, name: "Victor" },
//   { id: 6, name: "Valera" }
// ]  

// let messages = [
//   { message: "Hi" },
//   { message: "How is your React?" },
//   { message: "Hello" },
//   { message: "It's my birthday" },
//   { message: "I have finished the school" },
//   { message: "Congratulations" }
// ]

import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from "./redux/state";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} 
           dispatch={store.dispatch.bind(store)} 
      />
    </React.StrictMode>, document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();
