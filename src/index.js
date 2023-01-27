import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';

const News = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <div>
                <pre>{props.extra}</pre>
                <p>{props.text}</p>
            </div>
            <div>
                <h1>{props.header}</h1>
            </div>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <News name='BBC News' extra='2000' text='Maftuna Boborakhimova' header='BigJob'/>
        </div>
    )}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
