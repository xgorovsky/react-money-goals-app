import React from "react";
import "./App.css";
import Header from "./components/Header";
import AddGoal from "./components/AddGoal";
import Goals from "./components/Goals";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import UseScroll from "./components/UseScroll";
import { HashRouter as Router, Route } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.useScroll = UseScroll()
  }
  state = {
    goals: []
  };

  componentDidMount() {
    let lsGoals = JSON.parse(localStorage.getItem('myGoals'))
    if (lsGoals) {
      this.setState({ goals: lsGoals })
    };
  }


  addGoal = (title) => {
    let goals = localStorage.getItem('myGoals');
    let arr = [];
    if (goals) {
      arr = JSON.parse(goals);
      if (arr.includes(title)) {
        alert('Goal already on your goal map');
      }
      arr.push(title);
      let newSet = Array.from(new Set(arr));
      localStorage.setItem('myGoals', JSON.stringify(newSet));
      this.setState({ goals: newSet });
    } else {
      arr = [];
      arr.push(title)
      let newSet = Array.from(new Set(arr));
      localStorage.setItem('myGoals', JSON.stringify(newSet));
      this.setState({ goals: newSet });
    }
  }

  delAll = (e) => {
    if (window.confirm("Are you sure? This will delete all your goals")) {
      e.preventDefault();
      this.setState({ goals: [] })
      localStorage.clear();
    }
  }

  delGoal = (title) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      let arr = JSON.parse(localStorage.getItem('myGoals'));
      let newArr = [...arr.filter(goal => goal !== title)];
      this.setState({ goals: newArr });
      localStorage.setItem('myGoals', JSON.stringify(newArr));
      localStorage.removeItem(title);
    }
  }


  render() {
    return (
      <Router>
        <div className="bucket">
          <div className="App">
            <Header />
            <Route exact path="/" render={props => (<>
              <AddGoal
                addGoal={this.addGoal}
                delAll={this.delAll}
                useScroll={this.useScroll.executeScroll}
                refProp={this.useScroll.htmlElRef}
              />
              <Goals
                goals={this.state.goals}
                delGoal={this.delGoal}
              />
            </>)} />
            <Route path="/about" component={About} />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
