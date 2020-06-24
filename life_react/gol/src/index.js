import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './index.css';

const Button = styled.button`
  background-color: white;
  &:hover {
    background-color: grey;
    color: white
  }
  width: 30%;
  height: 3em;
  margin-top: 15px;
`;

const FlexRowWrapper = styled.div`
  display: flex;
  justify-content: center;
`

class Box extends React.Component{
  selectBox = () => {
    this.props.selectBox(this.props.row, this.props.col)
  }

  render(){
    return(
      <div className = {this.props.boxClass}
      id = {this.props.id}
      onClick = {this.selectBox}
      />  
    )
  }
}

class Grid extends React.Component{
  render(){
    const width = this.props.cols * 16
    var rowsArr = []

    var boxClass = ''
    for (var r = 0; r < this.props.rows; r++){
      for (var c = 0; c < this.props.cols; c++){
        let boxId = r + "_" + c
        boxClass = this.props.gridFull[r][c] ? "box on" : "box off"
        // push boxes on to arr
        rowsArr.push(
          <Box
          boxClass = {boxClass}
          key = {boxId}
          boxId = {boxId}
          row = {r}
          col = {c}
          selectBox = {this.props.selectBox}
          />
        )
      }
    }

    return(
      <div className = 'grid' style = {{width: width}}>
        {rowsArr}
      </div>
    )
  }
}

class Main extends React.Component{
  constructor(){
    super()
    this.speed = 300
    this.rows = 30
    this.cols = 44

    this.state = {
      generation: 0,
      // create an array that is as big as the number of rows we have, and intialize each cell to false/dead 
      gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    }
  }

  // function to select each box to make it active or inactive
  selectBox = (row, col) => {
    // make a copy of the grid
    let gridCopy = arrayClone(this.state.gridFull)
    gridCopy[row][col] = !gridCopy[row][col]
    this.setState({
      gridFull: gridCopy
    })
  }

  reset = () => {
    // make a copy again
    let gridCopy = arrayClone(this.state.gridFull)
    for (let r = 0; r < this.rows; r++){
      for (let c = 0; c < this.cols; c++){
        if (Math.floor(Math.random() * 4) === 1){
          gridCopy[r][c] = true
        }
      }
    }
    this.setState({
      gridFull: gridCopy
    })
  }

  resetButton = () => {
    this.clear()
    this.reset()
  }
  
  clearButton = () => {
    this.clear()
  }

  clear = () => {
    var grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    this.setState({
      gridFull: grid,
      generation: 0
    })
  }

  stopButton = () => {
    clearInterval(this.intervalId)
  }

  startButton = () => {
    clearInterval(this.intervalId)
    this.intervalId = setInterval(this.play, this.speed)
  }

  slowButton = () => {
    this.slow()
  }

  fastButton = () => {
    this.fast()
  }

  slow = () => {
    this.speed = 1000
    this.startButton()
  }

  fast = () => {
    this.speed = 100
    this.startButton()
  }

  play = () => {
    // current copy of grid
    let g = this.state.gridFull
    // copy of grid we're changing and setting the state to
    let g2 = arrayClone(this.state.gridFull)

    for (let r = 0; r < this.rows; r++){
      for (let c = 0; c < this.cols; c++){
        let count = 0
    // if there is a neighbor, increase the count
        // check if 
        if (r > 0) if (g[r - 1][c]) count++
        if (r> 0 && c> 0) if (g[r - 1][c - 1][c + 1]) count++
        if (r > 0 && c < this.cols - 1) if (g[r - 1][c + 1]) count++
        if (c < this.cols - 1) if (g[r][c + 1]) count++
        if (c > 0) if (g[r][c - 1]) count++
        if (r < this.rows - 1) if (g[r + 1][c - 1]) count++
        if (r < this.rows - 1 && c > 0) if (g[r + 1][c - 1]) count++
        if (r < this.rows - 1 && this.cols - 1) if (g[r + 1][c + 1]) count++ 
        // if there are less than two OR more than three, it dies
        if (g[r][c] && (count < 2 || count > 3)) g2[r][c] = false
        // if it is dead AND there are exactly three neighbors it lives
        if (!g[r][c] && count === 3) g2[r][c] = true
      }
    }
    this.setState({
      gridFull: g2,
      generation: this.state.generation + 1
    })
  }


  // once everything loads randomly populate living cells
  componentDidMount(){
    this.reset()
  }

  render(){
    return(
      <div>
        <h1 className = 'title'>Conway's Game of Life</h1>
        <Grid
        gridFull = {this.state.gridFull}
        rows = {this.rows}
        cols = {this.cols}
        selectBox = {this.selectBox}
        />
        <FlexRowWrapper>
        <Button
        onClick = {this.stopButton}
        >Stop</Button>
        <Button
        onClick = {this.startButton}
        >Start</Button>
        <Button
        onClick = {this.resetButton}
        >Reset Cells</Button>
        <Button
        onClick = {this.clearButton}
        >Clear Grid</Button>
        <Button
        onClick = {this.slowButton}
        >Slower</Button>
        <Button
        onClick = {this.fastButton}
        >Faster</Button>
        </FlexRowWrapper>
        <h2 className = 'gens'>Generations: {this.state.generation}</h2>
      </div>
    )
  }
}

function arrayClone(arr){
  // deep copy
  return JSON.parse(JSON.stringify(arr))
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
