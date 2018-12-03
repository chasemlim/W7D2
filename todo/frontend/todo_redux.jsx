import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodos, receiveTodo } from "./actions/todo_actions";

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    window.store = store;
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    ReactDOM.render(
        <div className="content">

            <h1> Todos App </h1>

        </div>, 
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
    
