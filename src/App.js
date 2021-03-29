import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Вопросно-ответная система ASD QA
        </p>
        <a
          className="App-link"
          href="https://ods.ai/projects/asd_qa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Страница проекта на Open Data Science
        </a>
      </header>
    </div>
  );
}

export default App;
