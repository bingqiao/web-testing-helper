import React from 'react'; // esbuild doesn't bundle this if not imported here?
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.sass';

ReactDOM.render(
    <div>
      <App />
    </div>,
  document.querySelector('#root')
);
