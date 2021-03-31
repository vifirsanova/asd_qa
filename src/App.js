import React, { useReducer, useState } from 'react';
import Button from './components/Button.js';
import SelectBox from './components/SelectBox';
import TextBox from './components/TextBox';
import './styles.scss';
import { postGenerateTextEndpoint } from './utils';

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
    }, 50000);	  
}

  const handleChange = event => {
   const isCheckbox = event.target.type === 'checkbox';
   setFormData({
     name: event.target.name,
     value: isCheckbox ? event.target.checked : event.target.value,
   })
 }
 
  const [text, setText] = useState("");
  const [model, setModel] = useState('gpt2');
  const [generatedText, postGenerateText] = postGenerateTextEndpoint();

  const generateText = () => {
    postGenerateText({ text, model, userId: 1 });
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
		<p> <strong> Давайте познакомимся! </strong> </p>
		{submitting &&
		<div> 
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <a key={name}>{name}{value.toString()}. </a>
           ))}
         </ul>
		</div>
		}
		<form onSubmit={handleSubmit}>
		<fieldset>
			<label>
				<p>Введите Ваше имя</p>
				<input name="Приятно познакомиться, " onChange={handleChange}/>
			</label>
		</fieldset>
        <fieldset>
         <label>
           <p>Выберите систему</p>
           <select name="Вы выбрали систему " onChange={handleChange}>
               <option value="">--Выберите из списка--</option>
               <option value="System 1">System 1</option>
               <option value="System 2">System 2</option>
               <option value="System 3">System 3</option>
           </select>
         </label>
         <label>
           <p>Введите Ваш возраст</p>
           <input type="number" name="Ваш возраст: " onChange={handleChange} step="1"/>
         </label>
         <label>
           <p>Согласие на обработку данных</p>
           <input type="checkbox" name="Согласие на обработку данных: " onChange={handleChange} />
         </label>
       </fieldset>
		<button type="submit">Отправить</button>
		</form>		
      </header>
	  
	<div className='app-container'>
      <form noValidate autoComplete='off'>
        <h1>Тестирование GPT-2</h1>
        <SelectBox model={model} setModel={setModel} />
        <TextBox text={text} setText={setText} />
        <Button onClick={generateText} />
      </form>

      {generatedText.pending &&
        <div className='result pending'>Пожалуйста, подождите...</div>}

      {generatedText.complete &&
        (generatedText.error ?
          <div className='result error'>Ошибка</div> :
          <div className='result valid'>
            {generatedText.data.result}
          </div>)}
    </div>
    </div>  
  );
}

export default App;
