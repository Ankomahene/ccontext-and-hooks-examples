import '../style/App.css';
import { NavBar } from './NavBar';
// import { Counter } from './Counter';
// import { Form } from './Form';
import { CounterWIthUseEffect } from './CounterWithUseEffect';

function App() {
  return (
    <>
      <NavBar theme="dark" />

      <main className="main">
        {/* <Counter /> */}
        <CounterWIthUseEffect />
        {/* <Form /> */}
      </main>
    </>
  );
}

export default App;
