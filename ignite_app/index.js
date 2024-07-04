import React from "react"
import ReactDOM from 'react-dom/client'


const h1 = React.createElement('h1',{id:"h1"},'Making a production ready react app');

// select div with class root as react root element where react will place other react components
const root = ReactDOM.createRoot(document.getElementById('root'));

// console.log(h1+"\n"+root);
root.render(h1);
