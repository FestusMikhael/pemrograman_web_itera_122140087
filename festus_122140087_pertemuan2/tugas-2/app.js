class ItemManager {
    constructor(key) {
      this.key = key;
      this.items = JSON.parse(localStorage.getItem(key)) || [];
    }
  
    addItem = (item) => {
      this.items.push(item);
      this.saveItems();
    }
  
    deleteItem = (index) => {
      this.items.splice(index, 1);
      this.saveItems();
    }
  
    getItems = () => this.items;
  
    saveItems = () => {
      localStorage.setItem(this.key, JSON.stringify(this.items));
    }
  }

const scheduleManager = new ItemManager('schedules');
const taskManager = new ItemManager('tasks');

const renderList = (elementId, items, onDelete) => {
    const list = document.getElementById(elementId);
    list.innerHTML = '';
    items.forEach((item, index) => {
      list.innerHTML += `
        <li id="${elementId}-item-${index}">
          <div class="item-display">
            <span>${item.name} - ${formatDate(item.time)}</span>
            <div>
              <button onclick="handleEdit('${elementId}', ${index})">✏️</button>
              <button onclick="handleDelete('${elementId}', ${index})">🗑️</button>
            </div>
          </div>
        </li>
      `;
    });
  };

const formatDate = (datetimeStr) => {
    const date = new Date(datetimeStr);
    return date.toLocaleString('id-ID', {
      day: 'numeric', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  };

const handleDelete = (listId, index) => {
    if (listId === 'schedule-list') {
      scheduleManager.deleteItem(index);
      renderList('schedule-list', scheduleManager.getItems(), handleDelete);
    } else {
      taskManager.deleteItem(index);
      renderList('task-list', taskManager.getItems(), handleDelete);
    }
  };

const handleEdit = (listId, index) => {
    const manager = listId === 'schedule-list' ? scheduleManager : taskManager;
    const item = manager.getItems()[index];
  
    const li = document.getElementById(`${listId}-item-${index}`);
    li.innerHTML = `
      <form onsubmit="handleSaveEdit(event, '${listId}', ${index})">
        <input type="text" id="edit-name-${index}" value="${item.name}" required />
        <input type="datetime-local" id="edit-time-${index}" value="${item.time}" required />
        <button type="submit">💾</button>
        <button type="button" onclick="renderList('${listId}', ${JSON.stringify(manager.getItems())}, handleDelete)">❌</button>
      </form>
    `;
  };

const handleSaveEdit = (e, listId, index) => {
    e.preventDefault();
    const manager = listId === 'schedule-list' ? scheduleManager : taskManager;
    const name = document.getElementById(`edit-name-${index}`).value;
    const time = document.getElementById(`edit-time-${index}`).value;
  
    if (name && time) {
      manager.items[index] = { name, time };
      manager.saveItems();
      renderList(listId, manager.getItems(), handleDelete);
    }
  };

const simulateAsyncAdd = async (manager, itemObj, renderFn, listId) => {
    await new Promise(resolve => setTimeout(resolve, 100));
    manager.addItem(itemObj);
    renderFn(listId, manager.getItems(), handleDelete);
  };

document.getElementById('schedule-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('schedule-input').value.trim();
    const time = document.getElementById('schedule-datetime').value;
    if (name && time) {
      simulateAsyncAdd(scheduleManager, { name, time }, renderList, 'schedule-list');
      e.target.reset();
    }
  });

  document.getElementById('task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('task-input').value.trim();
    const time = document.getElementById('task-datetime').value;
    if (name && time) {
      simulateAsyncAdd(taskManager, { name, time }, renderList, 'task-list');
      e.target.reset();
    }
  });

  renderList('schedule-list', scheduleManager.getItems(), handleDelete);
  renderList('task-list', taskManager.getItems(), handleDelete);

const updateDateTime = () => {
    const datetimeEl = document.getElementById('datetime');
    const now = new Date();
  
    const options = {
      weekday: 'long', year: 'numeric', month: 'long',
      day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
    };
  
    const formatted = now.toLocaleDateString('id-ID', options);
    datetimeEl.textContent = `${formatted}`;
  };
  
  setInterval(updateDateTime, 1000);
  updateDateTime();