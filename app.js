// Header Component
const HeaderComponent = {
  data() {
    return { darkMode: false };
  },
  template: `
    <header class="header">
      <h1>My Vue App</h1>
      <button @click="toggleTheme">
        {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
      </button>
    </header>
  `,
  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode;
      document.body.classList.toggle('dark-mode', this.darkMode);
    },
  },
};

// Footer Component
const FooterComponent = {
  template: `
    <footer class="footer">
      <p>&copy; 2024 My Vue App</p>
    </footer>
  `,
};

// Counter Component with LocalStorage
const CounterComponent = {
  data() {
    return { count: Number(localStorage.getItem('count')) || 0 };
  },
  watch: {
    count(val) {
      localStorage.setItem('count', val);
    },
  },
  template: `
    <div class="counter">
      <p>Counter: {{ count }}</p>
      <button @click="count++" class="btn">Increment</button>
      <button @click="count--" class="btn">Decrement</button>
    </div>
  `,
};

// List Component
const ListComponent = {
  data() {
    return { items: JSON.parse(localStorage.getItem('items')) || [], newItem: '' };
  },
  methods: {
    addItem() {
      if (this.newItem.trim()) {
        this.items.push(this.newItem.trim());
        this.newItem = '';
        this.saveItems();
      }
    },
    removeItem(index) {
      this.items.splice(index, 1);
      this.saveItems();
    },
    saveItems() {
      localStorage.setItem('items', JSON.stringify(this.items));
    },
  },
  template: `
    <div>
      <h2>Dynamic List</h2>
      <input v-model="newItem" placeholder="Add an item" />
      <button @click="addItem">Add</button>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          {{ item }}
          <button @click="removeItem(index)">Remove</button>
        </li>
      </ul>
    </div>
  `,
};

// Modal Component
const ModalComponent = {
  data() {
    return { showModal: false };
  },
  template: `
    <div>
      <button @click="showModal = true">Show Modal</button>
      <div v-if="showModal" class="modal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center;">
        <div style="background: white; padding: 20px; text-align: center;">
        
          <h2>Modal Content {{item}}</h2>
          <p>This is a simple modal example!</p>
          <button @click="showModal = false">Close</button>
        </div>
      </div>
    </div>
  `,
};

// Main App Component
const App = {
  components: {
    HeaderComponent,
    FooterComponent,
    CounterComponent,
    ListComponent,
    ModalComponent,
  },
  template: `
    <div>
      <HeaderComponent />
      <main>
        <h1>Welcome to Vue App</h1>
        <CounterComponent />
        <ListComponent />
        <ModalComponent />
      </main>
      <FooterComponent />
    </div>
  `,
};

// Mount the App
Vue.createApp(App).mount('#app');
