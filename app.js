const H2 = React.createElement("h2",{},"Learn React.CreateElement()");
const P1 = React.createElement("p",{id: "para1" },"This is my first paragarph");
const div = React.createElement("div",{id:"1-division"},P1);

const P2 = React.createElement("p",{id: "para2" },"This is my second paragarph");
const div2 = React.createElement("div",{id:"2-division"},P2);

const P3 = React.createElement("p",{id: "para3" },"This is my first paragarph");
const div3 = React.createElement("div",{id:"3-division"},P3);

const Sub = React.createElement("div",{}, H2, div, div2, div3);

const root = document.querySelector(".root");
ReactDOM.render(Sub,root);

