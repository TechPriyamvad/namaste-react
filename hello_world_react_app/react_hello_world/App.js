const parent1 = React.createElement('div',{className:'parent1',key:"p1"},[
    React.createElement('h1',{id:'p1h1',key:"h1"},"h1 of parent1"),
    React.createElement('h2',{id:'p1h2',key:"h2"},"h2 of parent1")
]);
const parent2 = React.createElement('div',{className:'parent2',key:"p2"},[
    React.createElement('h1',{id:'p2h1',key:"h1"},'h1 of parent2'),
    React.createElement('h2',{id:'p2h2',key:"h2"},'h2 of parent2')
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([parent1,parent2]);

// Arrow functions in javascript are a concise way to write anonymous function