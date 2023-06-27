import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import {counterReducer} from './redux/reducer.ts'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const store = createStore(counterReducer);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
