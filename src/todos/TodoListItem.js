import React from 'react';
import './TodoListItem.css';
const TodoListItem = ({ todo, onDeleteTodo, onMarkAsCompletedPressed }) => (
  <div className='todo-item-container'>
    <h3>{todo.text}</h3>
    <div className='buttons-container'>
      {todo.isCompleted ? null : (
        <button
          className='completed-button'
          onClick={() => onMarkAsCompletedPressed(todo.id)}
        >
          Mark as completed
        </button>
      )}

      <button onClick={() => onDeleteTodo(todo.id)} className='remove-button'>
        Remove
      </button>
    </div>
  </div>
);
export default TodoListItem;
