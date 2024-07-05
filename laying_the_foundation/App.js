import React from "react";
import ReactDOM from "react-dom/client";

// const image = React.createElement("img",{key:"2",src:"https://www.google.com/u/0/ac/images/logo.gif?uid=111250899973979386063&service=google_gsuite",alt:"exathought"});
// const h1 = React.createElement("h1",{key:"3",id:"h1"},"laying the foundation");
// const h2 = React.createElement("h2",{id:"h2"},"header 2")
// const h3 = React.createElement("h3",{id:"h3"},"header 3")

const Image = (
    <img src="https://www.google.com/u/0/ac/images/logo.gif?uid=111250899973979386063&service=google_gsuite" alt="exathought"></img>
)

const H1 = (
    <h1 id="h1">header 1</h1>
)

const H2 = (
    <h2 id="h2">header 2</h2>
)

const H3 = (
    <h3 id="h3">header 3</h3>
)

const HF1 = ()=> (<h1 id="h1">header 1</h1>)
const HF2 = ()=>(<h2 id="h2">header 2</h2>)
const HF3 = ()=>(<h3 id="h3">header 3</h3>)

const Title = ()=>{return(
    <div>
        <HF1 />
        <HF2 />
        <HF3 />
    </div>
)}

const Logo = ()=>(
    <img src="./icon.png" alt="Icon"/>
)

const Search = ()=>(
    <input type="text" placeholder="Type something"/>
)

const Profile = ()=>(
    <img src="./profile.png" alt="Profile"/>
)

const HeaderComponent = ()=>(
    <header>
        <nav>
            <Logo/>
            <Search/>
            <Profile/>
        </nav>
    </header>
)

const foundation = ReactDOM.createRoot(document.getElementById('foundation'));
const headerComponent = ReactDOM.createRoot(document.getElementById('headerComponent'));
foundation.render(<Title></Title>);
headerComponent.render(<HeaderComponent className="headerComponent"/>);