
const app = {
    title: "Indecision App"
}

let options = []

const submitOptions = (e) => {
    e.preventDefault()

    const option = e.target.elements.options.value;
    if (option) {
        options.push(option);
        e.target.elements.options.value = '';
        renderApp()
    }
    
}

const clearOptions = () => {
    if (options.length > 0) {
        options = []
        console.log("Options Removed")
        renderApp()
    }
    
    
}

const chooseOptions = () => {
    const randonNum = Math.floor(Math.random() * options.length)
    const option = options[randonNum]
    alert(option);
}

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            

            <button disabled={options.length === 0} onClick={chooseOptions}>What Should I do?</button>
            <button onClick={clearOptions}>Clear All</button>
            
            <p>{options.length > 0 ? "Here are you Options" : "No Options Found!"}</p>
            <form onSubmit={submitOptions}>
                <input type="text" name="options"/>
                <button>Add</button>
            </form>

            <ol>
                {
                    options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            
            
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}

renderApp();