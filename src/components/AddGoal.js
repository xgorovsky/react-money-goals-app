import React, { Component } from "react";
import Taglines from "./Taglines";

export class AddGoal extends Component {
  state = {
    title: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addGoal(this.state.title);
    this.setState({ title: "" });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onReset = e => {
    this.setState({ title: "" });
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid relative">
        <div className="arrow-scroll">
          <p onClick={this.props.useScroll}>&#8249;</p>
        </div>
        <div className="container-fluid">
          <h1
            style={{ textAlign: "center", margin: "25px" }}
            className="display-4"
          >
            Gain control, track your savings
          </h1>
          <Taglines />
          <form id="form1">
            <div className="form-group">
              <label style={{ fontSize: "2rem" }}>Add your goal here!</label>
              <input
                className="form-control form-control-lg"
                autoComplete="off"
                type="text"
                name="title"
                placeholder="Enter goal title..."
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group btns-bottom">
              <input
                type="submit"
                value="Add your goal!"
                className="btn btn-success"
                onClick={this.onSubmit}
                style={{ float: "right" }}
              />
              <div ref={this.props.refProp} className="btn-group" role="group">
                <button
                  onClick={this.onReset}
                  type="reset"
                  className="btn btn-warning"
                >
                  Reset input
                </button>
                <button onClick={this.props.delAll} className="btn btn-danger">
                  Delete all items
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddGoal;
