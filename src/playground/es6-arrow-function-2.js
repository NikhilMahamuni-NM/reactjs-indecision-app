

const add = function(a,b) {
    console.log(arguments)
    return a+b
}

console.log(add(44,55,1000));


const addArrow = (a,b) => {
    // console.log(arguments) - not possible in arrow function
    return a+b;
}

console.log(addArrow(1,2));


const user = {
    name : 'Java',
    cities : ['NY', 'GB', 'UK'],

    getLivedPlaces: function() {
        this.cities.forEach(function (city) {
            //console.log(this.name + " has lived in " + city); - not possible in normal function
        }) 
    },

    getLivedPlacesArrow: function() {
        this.cities.forEach((city) => {
            console.log(this.name + " has lived in " + city);
        })
    }

}

user.getLivedPlaces();
user.getLivedPlacesArrow();


const multiplier = {
    numbers : [10,20,30],
    multiplyBy : 30,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())

const template = (
    <div>
        <h1>Hello from Arrow Function - Part 2</h1>
    </div>


)

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);