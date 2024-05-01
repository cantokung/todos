// src/project.js

export function createProject(name) {
    return {
        name,
        getFilteredTodoItems(todoItems) {
            switch (name) {
                case 'Inbox':
                    return todoItems;
                case 'Today':
                    return todoItems.filter(item => isToday(item.dueDate));
                case 'Upcoming':
                    return todoItems.filter(item => isUpcoming(item.dueDate));
                case 'Gym':
                    return todoItems.filter(item => item.type === 'gym');
                case 'Work':
                    return todoItems.filter(item => item.type === 'work');
                case 'Personal':
                    return todoItems.filter(item => item.type === 'personal');
                case 'Family':
                    return todoItems.filter(item => item.type === 'family');
                default:
                    return [];
            }
        },
    };
}

function isToday(date) {
    const today = new Date();
    return date === today.toISOString().slice(0, 10);
}

function isUpcoming(date) {
    const today = new Date();
    return date > today.toISOString().slice(0, 10);
}