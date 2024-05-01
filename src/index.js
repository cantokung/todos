// index.js
import './style.css';
import { createTodoItem } from './todoItem.js';
import { createProject } from './project.js';
import { renderTodoItems } from './domHandler.js';

let todoItems = [];
let projects = [];

function initializeApp() {
    // Initialize your app here
    todoItems = [
        createTodoItem('Buy groceries', 'Buy milk, bread, and eggs', '2024-06-15', 'high', 'personal', 'grocery list'),
        createTodoItem('Doctor Appointment', 'Annual checkup', '2024-07-01', 'high', 'personal', ''),
        createTodoItem('Finish project report', 'Complete the quarterly project report', '2024-04-21', 'high', 'work', ''),
        createTodoItem('Gym workout', 'Cardio and strength training', '2024-06-16', 'medium', 'gym', ''),
    ];

    projects = [
        createProject('Inbox'),
        createProject('Today'),
        createProject('Upcoming'),
        createProject('Gym'),
        createProject('Work'),
        createProject('Personal'),
        createProject('Family'),
    ];

    // Render your app with the initial "Inbox" project
    console.log(projects)
    renderProject(projects[0]);
}


function renderProject(selectedProject) {
    const filteredTodoItems = selectedProject.getFilteredTodoItems(todoItems);
    renderTodoItems(filteredTodoItems);
}

// Function to add a new todo item
export function addTodoItem(title, description, dueDate, priority, type, notes) {
    const newTodoItem = createTodoItem(title, description, dueDate, priority, type, notes);
    todoItems.push(newTodoItem);
    renderProject(projects[0]); // Re-render the current project
}
export function handleProjectClick(projectName) {
    const selectedProject = projects.find(project => project.name === projectName);
    renderProject(selectedProject);
}

function renderApp(selectedProject, todoItems) {
    const mainContentDiv = document.querySelector('.main-content');
    // Clear the main content
    mainContentDiv.innerHTML = '';
    
    // Get the filtered todo items based on the selected project
    const filteredTodoItems = selectedProject.getFilteredTodoItems(todoItems);
    
    // Create a container for the todo items
    const todoItemsContainer = document.createElement('div');
    todoItemsContainer.classList.add('todo-items-container');
    
    // Render each filtered todo item
    filteredTodoItems.forEach(todoItem => {
        const todoItemElement = createTodoItemElement(todoItem);
        todoItemsContainer.appendChild(todoItemElement);
    });
    
    // Append the todo items container to the main content
    mainContentDiv.appendChild(todoItemsContainer);
}

export function deleteTodoItem(todoItem) {
    const index = todoItems.indexOf(todoItem);
    if (index !== -1) {
      todoItems.splice(index, 1);
      renderProject(projects[0]);
    }
}

export function editTodoItem(index, title, description, dueDate, priority, type, notes) {
    if (index >= 0 && index < todoItems.length) {
      const todoItem = todoItems[index];
      todoItem.title = title;
      todoItem.description = description;
      todoItem.dueDate = dueDate;
      todoItem.priority = priority;
      todoItem.type = type;
      todoItem.notes = notes;
      renderProject(projects[0]);
    }
}
// Initialize the app when the DOM content is loaded
document.addEventListener('DOMContentLoaded', initializeApp);