import React from 'react';

import { Button } from "react-materialize";

import "../../styles/Modal.css";

class Modal extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const {
            handleClose,
            show,
            children,
        } = this.props;
        const showHide = show ? "task-modal display-block" : "task-modal display-none";
        return(
            <div className={showHide}>
                <section className="modal-main">
                    {children}
                    <Button className="btns" onClick={handleClose}>close</Button>
                </section>
            </div>
        );
    }
}

export default Modal;