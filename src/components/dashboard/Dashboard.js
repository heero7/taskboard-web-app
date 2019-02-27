import React from "react";
import { connect } from "react-redux";

import { Row, Col } from "react-materialize";

import ColumnHeader from "../reusables/ColumnHeader";
import TaskCard from "../tasks/TaskCard";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Tasks</h1>
        <Row>
          <Col m={4} s={12}>
            <ColumnHeader title={"High"}/>
            <TaskCard taskName={"Do Laundrysfsfafasdfasdfsafsdfaasfsfasfsasf "} taskPriority={"High"}/>
          </Col>
          <Col m={4} s={12}>
            <ColumnHeader title={"Medium"}/>
            <TaskCard taskName={"Do homework "} taskPriority={"Medium"}/>
          </Col>
          <Col m={4} s={12}>
            <ColumnHeader title={"Low"}/>
            <TaskCard taskName={"Voting study"} taskPriority={"Low"}/>
            <TaskCard taskName={"Yoga"} taskPriority={"Low"}/>
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
