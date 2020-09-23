import React, {Component} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };
  }

  componentDidMount() {
    fetch("../resumeData.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({resumeData: result});
        },
        (error) => {
          this.setState(error);
        }
      )
  }

  render(){
    return(
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
    </div>
    )
  }
}


export default App;
