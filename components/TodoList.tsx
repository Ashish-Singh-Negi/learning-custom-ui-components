"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "create a motion div",
      isCompleted: false,
    },
    {
      id: 2,
      content: "install framer motion",
      isCompleted: false,
    },
    {
      id: 3,
      content: "complete js assignment",
      isCompleted: false,
    },
    {
      id: 4,
      content: "complete advance js assignment",
      isCompleted: false,
    },
  ]);

  function handleTodoComplete(id: number) {
    setTodos((prev) => {
      const todoToMove = prev.find((todo) => todo.id === id);
      if (!todoToMove) return prev;

      const updatedTodo = {
        ...todoToMove,
        isCompleted: true,
      };

      const remaining = prev.filter((todo) => todo.id !== id);

      return [...remaining, updatedTodo];
    });
  }

  console.log(todos);

  return (
    <AnimatePresence>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-96 w-2xl bg-gray-200 rounded-md flex flex-col gap-1.5 p-2"
      >
        {todos.map((todo) => (
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            key={todo.id}
            onClick={() => handleTodoComplete(todo.id)}
            className="px-4 py-2.5 bg-white flex gap-4 rounded-md font-medium"
          >
            <motion.p
              animate={{
                textDecoration: todo.isCompleted ? "line-through red" : "none",
                opacity: todo.isCompleted ? 0.5 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {todo.content}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
