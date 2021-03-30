import React, { useReducer, useState } from 'react';

import logo from './logo.svg';
import './App.css';

const formReducer = (state, event) => {
  return {
	  ...state,
	  [event.name]: event.value
    }
  }
function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
	  event.preventDefault();
	  setSubmitting(true);
	  
	  setTimeout(() => {
		  setSubmitting(false);
	  }, 3000)
	  
	  alert('Приятно познакомиться!')
}

const handleChange = event => {
  setFormData({
    name: event.target.name,
    value: event.target.value,
  });
}
  
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
		<p> Давайте познакомимся </p>
		{submitting &&
		<div> 
			<ul>
				{Object.entries(formData).map(([name, value]) => (
				<a key={name}>Приятно познакомиться, {value.toString()}</a>
				))}
			</ul>
		</div>
		}
		<form onSubmit={handleSubmit}>
		<fieldset>
			<label>
				<p>Введите Ваше имя</p>
				<input name="name" onChange={handleChange}/>
			</label>
		</fieldset>
		<button type="submit">Отправить</button>
		</form>	
			
      </header>
    </div>
  );
}

export default App;
