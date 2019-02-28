import React from "react";
import { connect } from "react-redux";

import { Row, Col } from "react-materialize";

import ColumnHeader from "../reusables/ColumnHeader";
import TaskCard from "../tasks/TaskCard";

class Dashboard extends React.Component {
  constructor(props) {
      super(props);
    this.state = {
      tasks: [
        {
          taskName: "Do Laundrysfsfafasdfasdfsafsdfaasfsfasfsasf",
          taskPriority: 3
        },
        {
          taskName: "Do homework",
          taskPriority: 2
        },
        {
          taskName: "Voting study",
          taskPriority: 1
        },
        {
          taskName: "Yoga",
          taskPriority: 1
        },
        {
          taskName: "Workout",
          taskPriority: 0
        }
      ]
    };
  }

  renderPriorityTasks(priority) {
    if (!this.state.tasks || priority > 3) return <h5>All done for now!</h5>; 
    let highPrioirity = this.state.tasks.filter(task => task.taskPriority === priority);
    return highPrioirity.map((task, key) => {
      return <TaskCard task={task} key={key} />;
    });
  }

  
  render() {
    return (
      <div>
        <h2>Welcome, User!</h2>
        <Row>
          <Col m={3} s={12}>
            <ColumnHeader title={"High"} />
            {this.renderPriorityTasks(3)}
          </Col>
          <Col m={3} s={12}>
            <ColumnHeader title={"Medium"} />
            {this.renderPriorityTasks(2)}
          </Col>
          <Col m={3} s={12}>
          <ColumnHeader title={"Low"} />
          {this.renderPriorityTasks(1)}
          </Col>
          <Col m={3} s={12}>
            <ColumnHeader title={"Done"} />
            {this.renderPriorityTasks(0)}
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authentication } = state;
  const { user } = authentication;
  return {
    user
  };
}

export default connect(mapStateToProps)(Dashboard);
