import React from 'react';
import * as sortingAlgorithms from './sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        array: [],
      };
    }
  
    componentDidMount() {
      this.resetArray();
    }
  
    resetArray() {
      for(let i = 0; i<310; i++){
        array.push(randomIntFromInterval(5, 730));
      }
      this.setState({array});
    }

    mergeSort() {
      const javaScriptSortedArray = this.state.array
      .slice()
      .sort((a, b) => a - b);  // we have to write this in javascript because for eg - 100 will come before 5 as 1 in 100 comes before 5
      const sortedArray = sortingAlgorithms.mergeSort(this.state.array);
      // console.log(sortedArray);

      console.log(arraysareEqual(javaScriptSortedArray, sortedArray));
    }

    quickSort() {}

    heapSort() {}

    bubbleSort() {}

    testSortingAlgorithms() {
      for(let i = 0; i<100; i++){
        const array = [];
        const length = randomIntFromInterval(1, 1000);
          for(let i = 0; i<length; i++){
            array.push(randomIntFromInterval(-1000, 1000));
          }
          const javaScriptSortedArray = array.slice().sort((a, b) => a-b);
          const mergeSortedArray = sortingAlgorithms.mergeSort(array.slice);
          console.log(arraysareEqual(javaScriptSortedArray, mergeSortedArray));
      }
    }

    render() {
        const {array} = this.state;

        return (
            <div className="array-container">
            {array.map((value, idx) => (
                <div className="array-bar" 
                key={idx}
                style={{height: `${value}px`}}>
                
                </div>
            ))}

            <button onClick={() => this.resetArray()}>Generate New Array</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => this.quickSort()}>Quick Sort</button>
            <button onClick={() => this.heapSort()}>Heap Sort</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button onClick={() => this.testSortingAlgorithms()}>Test Sorting Algorithms</button>


            </div>
        );
    } 
}  

function generateNewArray() {
      for(let i = 0; i<310; i++){
        array.push(randomIntFromInterval(5, 730));
      }
}
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
function arraysareEqual(arrayOne, arrayTwo){
  if(arrayOne.length !== arrayTwo.length) return false;
  for(let i = 0; i<arrayOne.length; i++){
    if(arrayOne[i] !== arrayTwo[i]) return false;
    // console.log(arrayOne[i], arrayTwo[i]);
  }
  return true;
}
 