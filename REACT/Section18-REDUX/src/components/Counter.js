import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux"; //connect is for class based components
import classes from "./Counter.module.css";

import { counterActions } from "../store/counter";

//we can also use connect for functional components, but useSelector is more convinient
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter); //will be executed for us by redux, counter is managfed by redux
  //first is are name of created action in store(bcs of mmultiple actions)
  const show = useSelector((state) => state.counter.showCounter);
  //when data is changed in redux, this component will be re-evaluated, and get the latest counter
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter()); //indentifier from store
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment()); //indentifier from store
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement()); //indentifier from store
  };
  const incraseHandler = () => {
    dispatch(counterActions.incrase(10)); //every kind of value can be passed {type: "unique key",  payload: 10}
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incraseHandler}>Increse by 5</button>

        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   //hooks are not usable in class bsed components
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
/*enshure that this keyword refert to the class */
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter, //bind state.value to the counter prop
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter); //with connect redux will setup the subscription
