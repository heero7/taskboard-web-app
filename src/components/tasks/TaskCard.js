import React from "react";

import { Card, Button } from "react-materialize";

import "../styles/TaskCard.css";
import "../styles/Button.css";

const Priority = {
  0: { value: "Done", textColor : "" },
  1: { value: "Low", textColor : "" },
  2: { value: "Medium", textColor : "" },
  3: { value: "High", textColor : "" }
};

class TaskCard extends React.Component {
  constructor(props) {
    super(props);
  }

  //todo: pass whole task as prop so when
  //clicking on edit it can update by id

  render() {
    let priorityLvl = this.props.task.taskPriority;
    return (
      <Card className="task-card" textClassName="white-text">
        <div className="content-container">
          <div className="content">
            <h5 className="task-card-text-wrapper">
              Task: {this.props.task.taskName}
            </h5>
            <h5 className="task-card-text-wrapper">
              Priority: {Priority[priorityLvl].value}
            </h5>
          </div>
          <div className="task-card-buttons">
            <Button
              floating
              id="complete-button"
              className="action-button"
              waves="light"
              icon="done"
            />
            <Button
              floating
              
              id="edit-button"
              className="action-button"
              waves="light"
              icon="edit"
            />
            <Button
              floating
              
              id="delete-button"
              className="action-button"
              waves="light"
              icon="delete"
            />
          </div>
        </div>
      </Card>
    );
  }
}

export default TaskCard;
