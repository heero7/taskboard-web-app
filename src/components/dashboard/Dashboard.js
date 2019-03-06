import React from "react";
import { connect } from "react-redux";

import { Row, Col, Button, Icon } from "react-materialize";

import ColumnHeader from "../reusables/ColumnHeader";
import TaskCard from "../tasks/TaskCard";
import TaskList from "../tasks/TaskList";
import Modal from "../reusables/modal/Modal";
import { taskActions } from "../../actions/taskActions";

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
      taskPriorityInput : "",
      show : false
    };
  }

  componentDidMount(){
    console.log("Hello");
    const { dispatch } = this.props;
    dispatch(taskActions.getAll());
    console.log(this.props);
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
    
    let input = parseInt(this.state.taskPriorityInput, 10);

    let task = {
        taskName : this.state.taskNameInput,
        taskPriority : input
    };

    this.setState({ tasks : this.state.tasks.concat(task) });
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    let x = this.props.tasks;
    if (x.tasks) {
      
    }
    return (
      <div className="container">
        <h2>Welcome, User!</h2>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <h3>Add Task</h3>
          <input type="text" placeholder="Task Name..." name="taskNameInput" onChange={this.inputChangeHanlder} />
          <input type="number" min="0" max="3" placeholder="Priority Level..." name="taskPriorityInput" onChange={this.inputChangeHanlder} />
        </Modal>
        <Button onClick={this.showModal}>Add</Button>
        <Row>
          <Col m={4} s={12}> 
            <ColumnHeader title={"High"} />
            <TaskList tasks={this.props.tasks.tasks ? this.props.tasks.tasks.filter(t => { return t.Priority === 3 }) : [{ Name : "Blah", Priority : 1}]} />
          </Col>
          <Col m={4} s={12}>
            <ColumnHeader title={"Medium"} />
            <TaskList tasks={this.props.tasks.tasks ? this.props.tasks.tasks.filter(t => { return t.Priority === 2 }) : [{ Name : "Blah", Priority : 1}]} />
          </Col>
          <Col m={4} s={12}>
            <ColumnHeader title={"Low"} />
            <TaskList tasks={this.props.tasks.tasks ? this.props.tasks.tasks.filter(t => { return t.Priority === 1 }) : [{ Name : "Blah", Priority : 1}]} />
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authentication, tasks } = state;
  const { user } = authentication;
  
  return {
    user,
    tasks
  };
}

export default connect(mapStateToProps)(Dashboard);
