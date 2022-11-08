
var varName = 'Hello'
varName = "World"               // reassign
var varName = "Hello World!!"   // redefine
console.log('varName: ', varName);

let nameLet = "Jen";
nameLet = "Julie";
// let nameLet = "Jo"; // not possible

console.log('nameLet: ', nameLet);

const nameConst = 'Jen';
// nameConst = "Julie";  // not possible
// const nameConst = 'Jo'; // not possible


console.log('nameConst: ', nameConst);

var template = (
    <div>
        <h1>Hello From Playground</h1>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);