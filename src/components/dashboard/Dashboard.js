import React from "react";
import { connect } from "react-redux";

import { Row, Col, Button, Icon, Modal } from "react-materialize";

import ColumnHeader from "../reusables/ColumnHeader";
//import AddTaskModal from "../reusables/AddTaskModal";
import TaskCard from "../tasks/TaskCard";
import Input from "../reusables/Input";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.addTask = this.addTask.bind(this);
    this.inputChangeHanlder = this.inputChangeHanlder.bind(this);

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
      ],
      taskNameInput : "",
      taskPriorityInput : ""
    };
  }

  inputChangeHanlder(e) {
    this.setState({ [e.target.name] : e.target.value });
  }

  renderPriorityTasks(priority) {
    if (!this.state.tasks || priority > 3) return <h5>All done for now!</h5>;
    let highPrioirity = this.state.tasks.filter(
      task => task.taskPriority === priority
    );
    return highPrioirity.map((task, key) => {
      return <TaskCard task={task} key={key} />;
    });
  }

  addTask() {
    if (this.state.taskPriorityInput < 0) console.error("Number cannot be less than 0");
    
    let task = {
        taskName : this.state.taskNameInput,
        taskPriority : this.state.taskPriorityInput
    };

    let newList = this.state.tasks.concat(task);
    this.setState({ tasks : newList });
  }

  render() {
    return (
      <div className="container">
        <h2>Welcome, User!</h2>
        <div>
          <Modal
            id="add-task"
            header="Add Task"
            trigger={
              <Button>
                Add<Icon left>add</Icon>
              </Button>
            }
            actions={
              <div>
                <Button className="btn waves-effect waves-light btn-flat modal-action" onClick={this.addTask}>Add</Button>
                <Button className="btn waves-effect waves-light btn-flat modal-action modal-close">Cancel</Button>
              </div>
            }
          >
          <input type="text" placeholder="Task Name..." name="taskNameInput" onChange={this.inputChangeHanlder} />
          <input type="number" min="0" max="3" placeholder="Priority Level..." name="taskPriorityInput" onChange={this.inputChangeHanlder} />
          </Modal>
        </div>

        <Row>
          <Col m={4} s={12}>
            <ColumnHeader title={"High"} />
            {this.renderPriorityTasks(3)}
          </Col>
          <Col m={4} s={12}>
            <ColumnHeader title={"Medium"} />
            {this.renderPriorityTasks(2)}
          </Col>
          <Col m={4} s={12}>
            <ColumnHeader title={"Low"} />
            {this.renderPriorityTasks(1)}
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
