import React from "react";

import { Modal } from "react-materialize";

class AddTaskModal extends React.Component {
    render() {
        return (
            <Modal id="addTaskModal" header="Add Task">
                Some text here
            </Modal>
        );
    }
}

export default AddTaskModal;