import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodos, receiveTodo } from "./actions/todo_actions";
import App from './components/app';
import Root from './components/root';
import allTodos from './reducers/selectors'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('content');
    const store = configureStore();
    ReactDOM.render(
        <Root store = { store } />,
        root
    );
});

// function Root() {
//     return(
//         <div className="content">

//             <h1> Todos App </h1>

//         </div>
//     )
// }
    
