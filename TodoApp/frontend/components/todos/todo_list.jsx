import React from 'react';
import TodoListItem from "../todo_list/todo_list_item";
import TodoForm from '../todo_list/todo_form';
import uniqueId from '../../util/todo_util';

export default (props) => {
    return (
        <div>
            <ul>
                {props.todos.map((todo, idx) => {
                    return <li key={idx} id="li"><TodoListItem todo={todo} /></li>
                })}
            </ul>
            <TodoForm receiveTodo={props.receiveTodo} />
        </div>
    )
}