import React from 'react';
import TodoListItem from "../todo_list/todo_list_item";

export default (props) => {
    return (
        <ul>
            {props.todos.map((todo, idx) => {
                return <TodoListItem todo={todo} key={idx}/>
            })}
        </ul>
    )
}