import React, {Component} from 'react';
import './App.css';

tRows = 50
tCols = 50

// need a new board function
// creates a grid, array of arrays
// rows will start at the first item in each array
// columns will start at each index in the first row
const newBoard = () => {
  const grid = []
  for (let r = 0; r< tRows; r++){
    grid[r] = []
    for (let c = 0; c< tCols; c++){
      grid[r][c] = cellStatus()
    }
  }
  return grid
}

class App extends Component {
  state = {}

  render() {
    return(

    )
  }
}

export default App;
