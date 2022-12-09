import { useState } from "react";

type Todo = {
  description: string;
  done: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { description: "Estudar ts", done: false },
    { description: "Fazer compras", done: false },
    { description: "Pescar", done: false }
  ]);

  return (
    <ul>
      { todos.map((todo) => (
        <li>{todo.description}</li>
      )) }
    </ul>
  )
}
 