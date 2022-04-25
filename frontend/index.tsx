import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import axios from "axios";
import App from "./App";

const localHostURL = "http://localhost:5000";
let baseURL = localHostURL + "/api";

// proxy in package.json doesnt work but this adds localhost 5000 to all requests
// this isnt working now, idk why, fix it later: todo
//if (process) {
//  baseURL = process.env.baseURL + "/api";
//}
axios.defaults.baseURL = baseURL;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

