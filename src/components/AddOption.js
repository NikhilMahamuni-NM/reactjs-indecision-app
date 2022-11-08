import React from 'react';

export default class AddOptions extends React.Component {

    state = {
        error : undefined
    }

    localAddOption = (e) => {
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
        
    };

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.localAddOption}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}