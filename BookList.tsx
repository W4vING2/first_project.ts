import { useState } from 'react';
import Todo from './Book';

function TodoList() {
  const [todos, setTodos] = useState([
    { title: 'Гарри поттер', author:'хз', year: 3434, wasRead: false},
    { title: 'Приключение Алексея козлова', author:'тоже хз', year: 343, wasRead: false },
    { title: 'Мертвые души', author:'гоголь', year: 3434, wasread: false },
  ]);

  function changeTodo(index: number) {
    const newTodos = [...todos];
    newTodos[index].wasRead = true;
    setTodos(newTodos);
  }

  return (
    <>
      <div>
        {/* пример превращения массива с пропсами в компоненты */}
        {todos.map((todo, index) => (
          <div key={index}>
            <Todo title={index + ' ' + todo.title} author={todo.author} year={todo.year} wasRead/>
            <button disabled={todo.wasRead} onClick={() => changeTodo(index)}>
              Прочитать
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default TodoList;