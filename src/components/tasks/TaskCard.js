import React from "react";

import { Card, Button } from "react-materialize";

import "../styles/TaskCard.css";
import "../styles/Button.css";

class TaskCard extends React.Component {
  constructor(props) {
    super(props);
  }

  //todo: pass whole task as prop so when 
  //clicking on edit it can update by id

  render() {
    return (
        <Card className="task-card" textClassName="white-text">
          <div className="content-container">
            <div className="content">
              <h5 className="task-card-text-wrapper">Task: {this.props.taskName}</h5>
              <h5 className="task-card-text-wrapper">Priority: {this.props.taskPriority}</h5>
            </div>
            <div className="task-card-buttons">
              <Button
              floating medium
                id="complete-button"
                className="action-button"
                waves="light"
                icon="done"
              />
              <Button
              floating medium
                id="edit-button"
                className="action-button"
                waves="light"
                icon="edit"
              />
              <Button
              floating medium
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
