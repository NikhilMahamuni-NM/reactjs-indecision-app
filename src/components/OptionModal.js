import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selected}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel = "Selected Option"
        closeTimeoutMS={200}
        className="modal"
        ariaHideApp={false}
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selected && <p className="modal__body">{props.selected}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
)

export default OptionModal;