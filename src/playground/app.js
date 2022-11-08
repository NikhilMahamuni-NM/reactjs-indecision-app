
class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleRemoveOptions = this.handleRemoveOptions.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            // options : props.options
            options : []
        }
    }

    componentDidMount() {

        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if (options) {
                this.setState(() => ({options : options}))
            }
        } catch (e) {
            // do nothing
        }
    }

    componentDidUpdate(prevProp, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    componentWillUnmount() {
        console.log("Component Unmounted")
    }

    handleRemoveOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     }
        // })
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption(optionToRemove) {
        
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    handlePickOption() {
        const random = Math.floor(Math.random() * this.state.options.length)
        const pick = this.state.options[random];
        alert(pick);
    }

    handleAddOption(option) {

        if (!option) {
            return "Enter Valid value to add Option"
        } else if (this.state.options.indexOf(option) > -1) {
            return "Option Already Exists!"
        }

        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat(option)
        //     }
        // })

        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }

    render() {
        const subtitle = "Put Your Life in the Hands of a Computer....!!!";
       

        return (
            <div>
                <Header subtitle={subtitle}/>      
                <Action hasOptions={this.state.options.length > 0} pickOption={this.handlePickOption} />
                <Options options={this.state.options} deleteOptions={this.handleRemoveOptions} deleteOption={this.handleDeleteOption} />
                <AddOptions addOption = {this.handleAddOption} />
            </div>
        )
    }
}

// IndecisionApp.defaultProps = {
//     options : []
// }

// Class Based Component
// class Header extends React.Component {      // creating component using es6 class by extending React.Component

//     render() {                              // required function by Component
             
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

// Stateless Functional Component
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}


Header.defaultProps = {
    title : "Indecision App"
}


const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.pickOption}>What Should I do?</button>
        </div>
    )
}


// class Action extends React.Component {

//     render() {
//         return (
//             <div>
//                 <button disabled={!this.props.hasOptions} onClick={this.props.pickOption}>What Should I do?</button>
//             </div>
//         )
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button onClick={props.deleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please Add options to get Started!!</p>}
            {props.options.map((option) => (
                <Option key={option} optionText={option} handleDeleteOption={props.deleteOption} />
            ))}
            
        </div>
    )
}

// class Options extends React.Component {

//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.deleteOptions}>Remove All</button>
//                 {this.props.options.map((option) => <Option key={option} optionText={option} />)}
                
//             </div>
//         )
//     }
// }

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}>
                Remove
            </button>
        </div>
    )    
}
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         )
//     }
// }

class AddOptions extends React.Component {

    constructor(props) {
        super(props);
        this.localAddOption = this.localAddOption.bind(this);
        this.state = {
            error : undefined
        }
    }

    localAddOption(e) {
        e.preventDefault();
        const data = e.target.elements.option.value.trim();
        const error = this.props.addOption(data)

        // this.setState(() => {
        //     return {
        //         error : error
        //     }
        // })

        this.setState(() => ({error}))

        if (!error) {
            e.target.elements.option.value = '';
        }
        
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.localAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}


const appRoot = document.getElementById('app');

ReactDOM.render(<IndecisionApp />, appRoot);