import {createRoot} from 'react-dom/client';
import App from './App';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <>
    <App />
  </>,
);

// import ReactDOM from "react-dom";
// import App from "./App";
// const rootElement = document.getElementbyId("root");
// // create a root
// const root = ReactDOM.createRoot(rootElement);
// // render app to root
// root.render(<App />);