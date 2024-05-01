// src/domHandler.js
import { addTodoItem, handleProjectClick, deleteTodoItem, editTodoItem } from './index.js';

// Get references to DOM elements
const addTaskBtn = document.getElementById('add-task-btn');
const inboxBtn = document.getElementById('inbox-btn');
const todayBtn = document.getElementById('today-btn');
const upcomingBtn = document.getElementById('upcoming-btn');
const gymBtn = document.getElementById('gym-btn');
const workBtn = document.getElementById('work-btn');
const personalBtn = document.getElementById('personal-btn');
const familyBtn = document.getElementById('family-btn');
const mainContentDiv = document.querySelector('.main-content');
const addTaskDialog = document.getElementById('add-task-dialog');
const addTaskForm = document.querySelector('.add-task-form');
const cancelBtn = document.getElementById('cancel-btn');

// Add event listeners to buttons
addTaskBtn.addEventListener('click', openModal);
inboxBtn.addEventListener('click', () => handleProjectClick('Inbox'));
todayBtn.addEventListener('click', () => handleProjectClick('Today'));
upcomingBtn.addEventListener('click', () => handleProjectClick('Upcoming'));
gymBtn.addEventListener('click', () => handleProjectClick('Gym'));
workBtn.addEventListener('click', () => handleProjectClick('Work'));
personalBtn.addEventListener('click', () => handleProjectClick('Personal'));
familyBtn.addEventListener('click', () => handleProjectClick('Family'));
addTaskForm.addEventListener('submit', handleAddTask);
cancelBtn.addEventListener('click', closeModal);

// Event handler for adding a new task
function handleAddTask(event) {
  event.preventDefault();

  const title = document.getElementById('title-input').value;
  const description = document.getElementById('description-input').value;
  const dueDate = document.getElementById('due-date-input').value;
  const priority = document.getElementById('priority-input').value;
  const type = document.getElementById('type-input').value;
  const notes = document.getElementById('notes-input').value;

  addTodoItem(title, description, dueDate, priority, type, notes);
  closeModal();
}

// Function to render the todo items
export function renderTodoItems(todoItems) {
  // Clear the main content
  mainContentDiv.innerHTML = '';

  // Create a container for the todo items
  const todoItemsContainer = document.createElement('div');
  todoItemsContainer.classList.add('todo-items-container');

  // Render each todo item
  todoItems.forEach(todoItem => {
    const todoItemElement = createTodoItemElement(todoItem);
    todoItemsContainer.appendChild(todoItemElement);
  });

  // Append the todo items container to the main content
  mainContentDiv.appendChild(todoItemsContainer);
}

// Function to create a todo item element
function createTodoItemElement(todoItem) {
  const todoItemElement = document.createElement('div');
  todoItemElement.classList.add('todo-item');

  const titleElement = document.createElement('h3');
  titleElement.textContent = todoItem.title;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = todoItem.description;

  const dueDateElement = document.createElement('p');
  dueDateElement.textContent = `Due: ${todoItem.dueDate}`;

  const priorityElement = document.createElement('p');
  priorityElement.textContent = `Priority: ${todoItem.priority}`;

  const typeElement = document.createElement('p');
  typeElement.textContent = `Type: ${todoItem.type}`;

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons-container');

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', () => {
      // Handle edit functionality
      console.log('Edit button clicked');
      openEditModal(todoItem);
  });

  const markCompleteButton = document.createElement('button');
  markCompleteButton.textContent = todoItem.completed ? 'Unmark' : 'Mark as Complete';
  markCompleteButton.addEventListener('click', () => {
      // Handle mark as complete functionality
      todoItem.completed = !todoItem.completed;
      markCompleteButton.textContent = todoItem.completed ? 'Unmark' : 'Mark as Complete';
      todoItemElement.classList.toggle('completed');
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
      // Handle delete functionality
      console.log('Delete button clicked');
      deleteTodoItem(todoItem);
  });

  buttonsContainer.appendChild(editButton);
  buttonsContainer.appendChild(markCompleteButton);
  buttonsContainer.appendChild(deleteButton);

  todoItemElement.appendChild(titleElement);
  todoItemElement.appendChild(descriptionElement);
  todoItemElement.appendChild(dueDateElement);
  todoItemElement.appendChild(priorityElement);
  todoItemElement.appendChild(typeElement);
  todoItemElement.appendChild(buttonsContainer);

  if (todoItem.completed) {
      todoItemElement.classList.add('completed');
  }

  return todoItemElement;
}

function openEditModal(todoItem) {
  document.getElementById('edit-title-input').value = todoItem.title;
  document.getElementById('edit-description-input').value = todoItem.description;
  document.getElementById('edit-due-date-input').value = todoItem.dueDate;
  document.getElementById('edit-priority-input').value = todoItem.priority;
  document.getElementById('edit-type-input').value = todoItem.type;
  document.getElementById('edit-notes-input').value = todoItem.notes;

  const editTaskForm = document.querySelector('.edit-task-form');
  editTaskForm.dataset.todoIndex = todoItems.indexOf(todoItem);

  const editTaskDialog = document.getElementById('edit-task-dialog');
  editTaskDialog.showModal();
}

const editTaskForm = document.querySelector('.edit-task-form');
editTaskForm.addEventListener('submit', handleEditTask);


function handleEditTask(event) {
  event.preventDefault();

  const index = parseInt(editTaskForm.dataset.todoIndex);
  const title = document.getElementById('edit-title-input').value;
  const description = document.getElementById('edit-description-input').value;
  const dueDate = document.getElementById('edit-due-date-input').value;
  const priority = document.getElementById('edit-priority-input').value;
  const type = document.getElementById('edit-type-input').value;
  const notes = document.getElementById('edit-notes-input').value;

  editTodoItem(index, title, description, dueDate, priority, type, notes);
  closeEditModal();
}

const cancelEditBtn = document.getElementById('cancel-edit-btn');
cancelEditBtn.addEventListener('click', closeEditModal);

function closeEditModal() {
  const editTaskDialog = document.getElementById('edit-task-dialog');
  editTaskDialog.close();
  editTaskForm.reset();
}

function openModal() {
  addTaskDialog.showModal();
  document.getElementById('title-input').focus();
}

function closeModal() {
  addTaskDialog.close();
  addTaskForm.reset();
}