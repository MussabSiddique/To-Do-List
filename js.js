document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('todo-input');
  const addButton = document.getElementById('add-button');
  const todoList = document.getElementById('todo-list');

  // Function to create a new to-do item
  function createTodoItem(text) {
      const li = document.createElement('li');
      li.textContent = text;

      // Create a button to mark as completed
      const completeButton = document.createElement('button');
      completeButton.textContent = '✔';
      completeButton.addEventListener('click', () => {
          li.classList.toggle('completed');
      });
      li.appendChild(completeButton);

      // Create a button to remove the item
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-btn');
      removeButton.addEventListener('click', () => {
          todoList.removeChild(li);
      });
      li.appendChild(removeButton);

      return li;
  }

  // Add item when button is clicked
  addButton.addEventListener('click', () => {
      const text = input.value.trim();
      if (text) {
          const todoItem = createTodoItem(text);
          todoList.appendChild(todoItem);
          input.value = ''; // Clear the input field
      }
  });

  // Add item when Enter key is pressed
  input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
          addButton.click();
      }
  });
});
