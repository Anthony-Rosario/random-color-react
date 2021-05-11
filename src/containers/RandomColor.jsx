import React, { Component } from 'react';
import Square from '../components/app/colors/Square';


export default class RandomColor extends Component {
  state = {
    colorsArr: ['#78463B', '#21A670', '#19A493', '#AB1096', '#861CD0', '#B6650B'],
    bgColor: '#78463B',
    textArr: ['Domo', 'arigato', 'misuta', 'Robotto', 'himitsu', 'wo', 'shiritai'],
    bgText: '',
    bgImage: ''
  }


  componentDidMount(){
    setInterval(() => {
      const { colorsArr, bgColor, textArr, bgText } = this.state;
      const bgNewColor = this.randomColor(colorsArr);
      const bgNewText = this.randomText(textArr); 
      console.log(bgNewText);
      console.log(bgNewColor);
      if(bgNewColor === bgColor){
        this.setState({
          bgColor: '',
          bgImage: 'url(https://www.fillmurray.com/300/300)',
          bgText: 'test  '
        });
      } else this.setState({ bgColor: bgNewColor, bgImage: '', bgText: bgNewText })
    }, 700);
  }

  randomColor = (colorsArr) => {
    return colorsArr[Math.floor(Math.random() * colorsArr.length)];
  }

  randomText = (textArr) => {
    return textArr[Math.floor(Math.random() * textArr.length)];
  }


  render() {
    const { bgColor, bgImage, bgText } = this.state;
    return (
        <Square 
        colorsArr={bgColor}
        bgImage={bgImage}
        textArr={bgText}
        />
    )
  }
}
