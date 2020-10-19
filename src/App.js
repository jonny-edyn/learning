import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";
import elderlyLady from "./elderly-lady.jpeg";
import teamSnap from "./team-snap.png";
import jonny from "./jonny.JPG";
// fetch("https://swapi.dev/api/people/1/")

// class App extends React.Component {
//     constructor(){
//         super ()
//         this.state = {
//             todos: todosData
//         };
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(id) {
//         console.log("changed",id)
//         this.setState(prevState => {
//             const updatedTodos = prevState.todos.map (todo => {
//                 if (todo.id === id) {
//                     return {
//                         ...todo,
//                         completed: !todo.completed
//                     }
//                 }
//                 return todo
//             })
//             return {
//                 todos: updatedTodos
//             }
//         })

//     }

//     render() {

//         const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

//         return (
//             <div className="todo-list">
//                 {todoItems}
//             </div>
//         )
//     }
// }

class App extends Component {
  render() {
    return (
      <div>
        <body>
          <div class="intro">
            <h1>Learn how to make the <strong>best BBQ ribs</strong> in town</h1>
            <p>Join us for this live webinar</p>
            <p class="top-text">Mouthwateringly delicious</p>
          </div>

          <div class="main-content">
            <h2>Become a BBQ master! </h2>
            <p>Register Today</p>
            <p>
              BBQ isn't just standing in front of your grill with it on full
              blast and hoping for the best. It's an art! One way to speed up
              the process is to learn from the best. You can do just that by
              signing up for this free webinar!
            </p>
            <p class="fine-print">
              We'll never share your information without your permission
            </p>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
