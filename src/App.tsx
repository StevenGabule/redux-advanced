import './App.css';
import Counter from './components/Counter';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <TaskList />
      </header>
    </div>
  );
}

export default App;
