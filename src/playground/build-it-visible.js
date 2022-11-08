
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleShowDetails = this.handleShowDetails.bind(this);
        this.state = {
            details: "Here are your Details!!!",
            visibility: false
        }
    }

    handleShowDetails() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleShowDetails}>Show Details</button>
                {this.state.visibility ? <p>{this.state.details}</p>: undefined}
            </div>
        )
    }
}


ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));



// const details = "Here are your Details!!!";

// let visible = false;

// const showDetails = () => {
//     visible = !visible;
//     renderVisibilty()
// }

// const appRoot = document.getElementById('app');

// const renderVisibilty = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>

//             <button onClick={showDetails}>{visible ? "Hide Details" : "Show Details"}</button>

//             { visible ? <p>{details}</p> : undefined }
//         </div>
//     );

//     ReactDOM.render(template, appRoot);

// }

// renderVisibilty()