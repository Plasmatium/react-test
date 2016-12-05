import React from 'react';
import ReactDOM from 'react-dom';

let Toggle = require('./toggle_button').Toggle;
let utils = require('./utils');

exports.Clock = class Clock extends React.Component {
  constructor(props) {
    super(props);
    let start_color = utils.getRandomColor();
    this.state = {
      date: new Date(),
      h1style: {
        "backgroundColor": start_color
      },
      h2style: {
        "backgroundColor": start_color
      }
    };
  }

  tick() {
    let prev_color = this.state.h1style.backgroundColor;
    let target_color = utils.getRandomColor();
    this.setState({
      date: new Date(),
      h1style: {
        "backgroundColor": target_color
      }
    });
    //this.varyH2BGC(prev_color, )
  }

  /*
  varyH2BGC(prev_color, target_color) {
    //change h2 backgroundColor gradually

    utils.vary(prev_color,
      target_color,
      10,
      500,
      (start, curr, end, div) => {
        //parser function
        //return curr(as mid_color here)
        //
        //1. split start & end to color => [r,g,b]
        function color2num(clr) {
          let rslt = new Array(3);
          let color = Number(clr.replace('#', '0x'));
          let r = color>>16;
          let g = (color>>8)%0x100;
          let b = color%0x100;
          rslt = [r, g, b];
          return rslt;
        }
        let start_rgb = color2num(start);
        let end_rgb = color2num(end);
        let curr_rgb = color2num(curr);

        let new_curr_rgb = new Array(3);
        for(let i=0; i<3; i++) {
          new_curr_rgb[i] = utils.intParser(
            start_rgb[i],
            curr_rgb[i],
            end_rgb[i],
            div);
        }
        return new_curr_rgb.reduce(
          function (r, val) {
            return r+Math.round(val).toString(16);
          },
          '#');
      },
      (mid_color) => {
        //cbFun
        console.log(mid_color);
        this.setState({
          h2style: {
            "backgroundColor": mid_color
          }
        });
      }
    );
  }
  */

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    let h1style = this.state.h1style;
    let h2style = this.state.h2style;
    let toggle = <Toggle toggled="false"/>;

    return (
      <div>
        {toggle}
        {
          true &&
            <div>
              <h1 style={h1style}>麻麻酱生日快乐:-D<p/>
                The color is {h1style.backgroundColor}</h1>
              <h2 style={h2style}>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        }
      </div>
    );
  }
}
