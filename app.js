

  
    // Define os componentes
    const HeaderComponent = {
      template: `<header class="header">
                    <h1>My Vue App</h1>
                 </header>`,
    };

    const FooterComponent = {
      template: `<footer class="footer">
                    <p>&copy; 2024 My Vue App</p>
                 </footer>`,
    };

    const CounterComponent = {
      data() {
        return {
          count: 0,
        };
      },
      template: `<div class="counter">
                   <p>Counter: {{ count }}</p>
                   <button @click="count++" class="btn">Increment</button>
                   <button @click="count--" class="btn">Decrement</button>
                 </div>`,
    };

    // Cria a aplicação Vue
    const App = {
      components: {
        HeaderComponent,
        FooterComponent,
        CounterComponent,
      },
      template: `<div>
                   <HeaderComponent />
                   <main class="main-content">
                     <h1>Welcome to Vue Simple Project</h1>
                     <CounterComponent />
                   </main>
                   <FooterComponent />
                 </div>`,
    };

    // Monta a aplicação
    Vue.createApp(App).mount('#app');
  
