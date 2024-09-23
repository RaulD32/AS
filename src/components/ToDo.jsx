import React, { useReducer, useMemo, useCallback, useState } from 'react';

const initialState = [
  { id: 1, text: 'Aprender React', completed: false },
  { id: 2, text: 'Practicar useReducer', completed: false },
];

// Reducer
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState('');

  // Función para agregar tarea (memoizada con useCallback)
  const addTodo = useCallback(() => {
    if (newTodo.trim() === '') return;
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    setNewTodo('');
  }, [newTodo]);

  // Función para eliminar tarea (memoizada con useCallback)
  const removeTodo = useCallback(id => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  }, []);

  // Función para marcar como completada (memoizada con useCallback)
  const toggleTodo = useCallback(id => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  }, []);

  // Conteo de tareas completadas (optimizado con useMemo)
  const completedCount = useMemo(() => {
    return todos.filter(todo => todo.completed).length;
  }, [todos]);

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Lista de Tareas</h1>

      <form
        className="d-flex mb-3"
        onSubmit={e => {
          e.preventDefault();
          addTodo();
        }}
      >
        <input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="Nueva tarea"
          className="form-control me-2"
        />
        <button type="submit" className="btn btn-primary">Agregar Tarea</button>
      </form>

      <ul className="list-group">
        {todos.map(todo => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <div>
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`btn ${todo.completed ? 'btn-warning' : 'btn-success'} me-2`}
              >
                {todo.completed ? 'Desmarcar' : 'Completar'}
              </button>
              <button
                onClick={() => removeTodo(todo.id)}
                className="btn btn-danger"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-3">
        <strong>Tareas Completadas:</strong> {completedCount}/{todos.length}
      </div>
    </div>
  );
};

export default TodoList;
