import React, { Component } from "react";
import GoalProperties from "./GoalProperties";
import TripLg from "./img/icons/trip.svg";
import VehLg from "./img/icons/vehicle.svg";
import EstLg from "./img/icons/estate.svg";
import CloLg from "./img/icons/clothes.svg";
import ElecLg from "./img/icons/electronics.svg";
import OtherLg from "./img/icons/other.svg";

export class Goal extends Component {
  state = {
    price: "",
    type: "",
    tillWhen: "",
    money: 0,
    addValue: 0,
    show: true,
    isDone: false
  };

  componentDidMount(id) {
    let data = JSON.parse(localStorage.getItem(this.props.id));
    this.setState(data);
    if (data !== null) {
      this.setState({ show: false });
    }
  }

  updateGoal = e => {
    e.preventDefault();
    if (this.state.price && this.state.tillWhen && this.state.type) {
      localStorage.setItem(this.props.id, JSON.stringify(this.state));
      window.location.reload(false);
    } else {
      alert("Please fill all the inputs!");
    }
  };

  resGoal = () => {
    localStorage.removeItem(this.props.id);
    window.location.reload(false);
  };

  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  addMoney = e => {
    let data = JSON.parse(localStorage.getItem(this.props.id));
    data.money += Number(this.state.addValue);
    this.setState({
      money: data.money
    });
    localStorage.setItem(this.props.id, JSON.stringify(data));
    if (data.price <= data.money) {
      this.setState({
        isDone: true
      });
    }
  };

  subMoney = () => {
    let data = JSON.parse(localStorage.getItem(this.props.id));
    data.money -= Number(this.state.addValue);
    this.setState({
      price: data.price,
      type: data.type,
      tillWhen: data.tillWhen,
      money: data.money
    });
    localStorage.setItem(this.props.id, JSON.stringify(data));
    if (data.price >= data.money) {
      this.setState({
        isDone: false
      });
    }
  };

  pickIcon = e => {
    let data = JSON.parse(localStorage.getItem(this.props.id));
    if (data) {
      switch (data.type) {
        case "Trip":
          return (
            <div
              className={
                data.price !== ""
                  ? data.price <= data.money
                    ? "icon animated tada"
                    : "icon"
                  : "icon"
              }
            >
              <img src={TripLg} alt="Trip Icon"></img>
            </div>
          );
        case "Vehicle":
          return (
            <div
              className={
                data.price !== ""
                  ? data.price <= data.money
                    ? "icon animated tada"
                    : "icon"
                  : "icon"
              }
            >
              <img src={VehLg} alt="Vehicle Icon"></img>
            </div>
          );
        case "Clothes":
          return (
            <div
              className={
                data.price !== ""
                  ? data.price <= data.money
                    ? "icon animated tada"
                    : "icon"
                  : "icon"
              }
            >
              <img src={CloLg} alt="Clothes Icon"></img>
            </div>
          );
        case "Real Estate":
          return (
            <div
              className={
                data.price !== ""
                  ? data.price <= data.money
                    ? "icon animated tada"
                    : "icon"
                  : "icon"
              }
            >
              <img src={EstLg} alt="Real Estate Icon"></img>
            </div>
          );
        case "Electronics":
          return (
            <div
              className={
                data.price !== ""
                  ? data.price <= data.money
                    ? "icon animated tada"
                    : "icon"
                  : "icon"
              }
            >
              <img src={ElecLg} alt="Electronics Icon"></img>
            </div>
          );
        case "Other":
          return (
            <div
              className={
                data.price !== ""
                  ? data.price <= data.money
                    ? "icon animated tada"
                    : "icon"
                  : "icon"
              }
            >
              <img src={OtherLg} alt="Others Icon"></img>
            </div>
          );
        default:
          return null;
      }
    }
  };

  showHide = () => {
    return {
      display: this.state.show ? "block" : "none",
      animation: this.state.show ? "slide_in 0.2s" : null
    };
  };

  changeShowHide = e => {
    e.preventDefault();
    const show = this.state.show;
    this.setState({ show: !show });
  };

  render() {
    return (
      <div
        className={
          this.state.price !== ""
            ? this.state.price <= this.state.money
              ? "jumbotron completed-goal-style"
              : "jumbotron goal-style"
            : "jumbotron goal-style"
        }
      >
        <div className="goal-header">
          <h1
            className={
              this.state.price !== ""
                ? this.state.price <= this.state.money
                  ? "goal-title completedStyle"
                  : "goal-title"
                : "goal-title"
            }
          >
            {this.props.title}
          </h1>
          <div className="goal-icon">{this.pickIcon()}</div>
        </div>
        <GoalProperties
          addMoney={this.addMoney}
          subMoney={this.subMoney}
          id={this.props.id}
          onChange={this.onChange}
        />
        <button
          className="btn-show btn btn-secondary "
          id="btn-show"
          onClick={this.changeShowHide}
        >
          &#8250; Show/Hide inputs
        </button>
        <form style={this.showHide()}>
          <div className="inputs-group form-group">
            <label>Price:</label>
            <input
              name="price"
              type="number"
              className="form-control"
              placeholder="How many kidneys it will cost you?"
              value={this.state.price}
              onChange={this.onChange}
            />
            <label>Deadline:</label>
            <input
              name="tillWhen"
              type="date"
              className="form-control"
              value={this.state.tillWhen}
              onChange={this.onChange}
            />
            <label>Type:</label>
            <select
              className="form-control"
              name="type"
              value={this.state.type}
              onChange={this.onChange}
            >
              <option value="" disabled selected>
                Select your option
              </option>
              <option>Trip</option>
              <option>Vehicle</option>
              <option>Real Estate</option>
              <option>Clothes</option>
              <option>Electronics</option>
              <option>Other</option>
            </select>
          </div>

          <hr className="my-4" />
          <div className="btns-bottom">
            <div className="btn-group" role="group">
              <button
                type="button"
                id={this.props.key}
                className="btn btn-danger"
                onClick={this.props.delGoal.bind(this, this.props.title)}
              >
                Delete this goal
              </button>
              <button
                type="button"
                id={this.props.key}
                className="btn btn-warning"
                onClick={this.resGoal.bind(this, this.props.title)}
              >
                Reset properties
              </button>
            </div>
            <input
              type="submit"
              onClick={this.updateGoal}
              id={this.props.id}
              className="btn btn-primary"
              value="Update this goal"
              style={{ float: "right" }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Goal;
