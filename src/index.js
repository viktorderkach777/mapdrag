import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from "react-redux";
import App from './App';
//import store from "./store";

//const MAPBOX_TOKEN = 'pk.eyJ1IjoiZGVya2FjaCIsImEiOiJjanFjdWFzeGozejZnNDNvYmpsbXR1azJzIn0.03a1jcE5orWtncfaDCxuPA';

ReactDOM.render(
    // <Provider store={store}>
        <App />
    // </Provider>,https://blog.logrocket.com/how-to-use-mapbox-gl/
    ,
    document.getElementById('root'));