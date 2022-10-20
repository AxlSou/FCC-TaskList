import './App.css';
import freeCodeCampLogo from './Images/freecodecamp-logo.png'
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="task-app">
      <div className='freecodecamp-logo-container'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='FreeCodeCamp Logo'
        />
      </div>
      <div className='primary-list'>
        <h1>My Tasks</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
