
import React from 'react';
import ReactDOM from 'react-dom';


///////////////////// INVESTMENT (SLIDER IMAGE )////////////////////////////////
class SlideOne extends React.Component {
render(){

  return (<div className="slide_One"><h1 style={{zIndex:1, color:'green'}}>Lorem ipsum dolor sit amet enim. Etiam ullamcorper.</h1></div>)
  }
}

class SlideTwo extends React.Component{
render(){

  return (<div className="slide_Two"><h1 style={{zIndex:1, color:'#800000'}}>Lorem ipsum dolor sit amet enim. Etiam ullamcorper.</h1></div>)
  }
}

class SlideThree extends React.Component{
render(){

  return (<div className="slide_Three"><h1 style={{zIndex:1, color:'#b91581'}}>Lorem ipsum dolor sit amet enim. Etiam ullamcorper.</h1></div>)
  }
}


class RightArrow extends React.Component {
  render(){

    return (
      <div onClick={this.props.nextSlide} className="nextArrow">
      </div>
    );
  }
}

/* Pretend these are in their own separate files */

class LeftArrow extends React.Component {
  render(){

    return (
      <div onClick={this.props.previousSlide} className="backArrow">
      </div>
    );
  }
}


class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slideCount: 1
    }

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  render() {
    return (<div className="slider">

          { this.state.slideCount === 1 ? <SlideOne /> : null }
          { this.state.slideCount === 2 ? <SlideTwo /> : null }
          { this.state.slideCount === 3 ? <SlideThree /> : null }

          <RightArrow nextSlide={this.nextSlide} />
          <LeftArrow previousSlide={this.previousSlide} />

        </div>);
  }

	// I have ocd sometimes and put my functions below the JSX. You can put them above if you'd like.

  nextSlide() {
    if(this.state.slideCount < 3){
      this.setState({ slideCount: this.state.slideCount + 1 })
    }
    else{
      this.setState({ slideCount: 1})
    }
  }

  previousSlide() {
    if(this.state.slideCount > 1){
      this.setState({ slideCount: this.state.slideCount - 1 })
    }
    else{
      this.setState({ slideCount: 3 })
    }
  }
}




  class App extends React.Component {
     render() {
        return (<Slider/>);
      }
    }

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
