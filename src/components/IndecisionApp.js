import React from 'react';

//components
import Action from './Action';
import AddOptions from './AddOption';
import Options from './Options';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

    state = {
        options : [],
        selectedOption : undefined
    }

    handleRemoveOptions = () => {
        // this.setState(() => {
        //     return {
        //         options: []
        //     }
        // })
        this.setState(() => ({ options: [] }))
    };

    handleDeleteOption = (optionToRemove) => {
        
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => optionToRemove !== option)
        }))
    };

    handlePickOption = () =>  {
        const random = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[random];
        this.setState(() => ({
            selectedOption : option
        }))
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption : undefined}))
    }

    handleAddOption = (option) => {

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
    };

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


    render() {
        const title = "Indecision App"
        const subtitle = "Put Your Life in the Hands of a Computer....!!!";

        return (
            <div>
                <Header title={title} subtitle={subtitle}/> 
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} pickOption={this.handlePickOption} />
                    <div className="widget">
                        <Options options={this.state.options} deleteOptions={this.handleRemoveOptions} deleteOption={this.handleDeleteOption} />
                        <AddOptions addOption = {this.handleAddOption} />
                    </div>
                    
                </div>     
                
                <OptionModal selected = {this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption} />
            </div>
        )
    }
}