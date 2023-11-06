const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('new-task');

function addTask(taskText) {
  const li = document.createElement('li');
  li.className = 'task-item';
  li.innerHTML = `
    <input type="text" value="${taskText}" readonly>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>`;
  taskList.appendChild(li);
}
function deleteTask(taskItem) {
  taskItem.remove();
  saveTasks();
}
function editTask(taskItem) {
  const taskText = taskItem.querySelector('input[type="text"]');
  taskText.removeAttribute('readonly');
  taskText.focus();
  taskText.addEventListener('blur', () => {
    taskText.setAttribute('readonly', true);
    saveTasks();
  });
}
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    saveTasks();
    taskInput.value = '';
  }
});
taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    deleteTask(e.target.parentElement);
  } else if (e.target.classList.contains('edit')) {
    editTask(e.target.parentElement);
  }
});
loadTasks();