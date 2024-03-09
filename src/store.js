import create from "zustand";

const useStore = create((set) => ({
  todos: [],
  addTodo: (text) =>
    set((state) => ({ todos: [...state.todos, { text, completed: false }] })),
  toggleTodo: (index) =>
    set((state) => ({
      todos: state.todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  removeTodo: (index) =>
    set((state) => ({ todos: state.todos.filter((todo, i) => i !== index) })),
}));

export default useStore;