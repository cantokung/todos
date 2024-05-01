// src/todoItem.js

export function createTodoItem(title, description, dueDate, priority,type, notes) {
    return {
        title,
        description,
        dueDate,
        priority,
        type,
        notes,
        completed: false,
    };
}