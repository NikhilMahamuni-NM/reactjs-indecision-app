
class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleRemoveOne = this.handleRemoveOne.bind(this);
        this.state = {
            count: 0          // initial state
        }
    }

    componentDidMount() {
        const stringCount = localStorage.getItem('count')
        const count = parseInt(stringCount, 10)
        if (!isNaN(count)) {
            this.setState(() => ({count : count}))
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            const count = this.state.count
            localStorage.setItem('count', count)
        }
        
    }

    handleAddOne() {
        this.setState((prevState)=> {  // prevState=previous values of the state which we can access
            return {
                count: prevState.count + 1      // changing state and re-rendering
            }
        })
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    handleRemoveOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count /* rendering the state */}</h1> 
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleReset}>Reset</button>
                <button onClick={this.handleRemoveOne}>-1</button>
            </div>
        )
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'));
















// let count = 0

// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count=0;
//     renderCounterApp();
// }
// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const template = (
//         <div>
//             <h1>Counter App</h1>
//             <h2>Count : {count}</h2>
//             <button onClick={addOne}>+1</button>
//             <button onClick={reset}>Reset</button>
//             <button onClick={minusOne}>-1</button>
//         </div>
//     );
    
//     ReactDOM.render(template, appRoot);
// }

// renderCounterApp();