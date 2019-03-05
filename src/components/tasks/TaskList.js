import React from "react";
import TaskCard from "./TaskCard";

const NoItems = () => {
    return (
        <React.Fragment>
            <h4>No tasks to be done!!</h4>
        </React.Fragment>
    );
}

class TaskList extends React.Component {
    render() {
        let items = this.props.tasks.map((task, index) => {
            return (
                <TaskCard task={task} key={index} />
            );
        });

        return (
            <React.Fragment>
                {items ? items : <NoItems />}
            </React.Fragment>
        );
    }
}

export default TaskList;