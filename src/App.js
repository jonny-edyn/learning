import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";
import elderlyLady from "./elderly-lady.jpeg";
import teamSnap from "./team-snap.png";

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
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {},
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.dev/api/people/1/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          character: data,
        });
      });
  }

  render() {
    const text = this.state.loading ? "loading..." : this.state.character.age;

    return (
      <div>
        {text}

        <body>
          <header>
            <div class="container container-flex">
              <div class="site-title">
                <h1>Living the social life</h1>
                <p class="subtitle">A blog exploring minimalism in life</p>
              </div>
              <nav>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About me</a>
                  </li>
                  <li>
                    <a href="#">Recent posts</a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <div class="container container-flex">
            <main role="main">
              <article class="article-featured">
                <h2 class="article-title">Finding simplicity in life</h2>
                <img
                  src={elderlyLady}
                  alt="jonny ain't showing"
                  class="article-image"
                ></img>
                <p class="article-info">July 23, 2019 | 3 comments</p>
                <p class="article-body">
                  <strong>
                    Life can get complicated really quickly, but it doesn't have
                    to be!{" "}
                  </strong>{" "}
                  There are many ways to simplify your life, a few of which
                  we've explored in the past. This week we're taking a bit of a
                  approach though, in how you can find simplicity in the life
                  you already living.
                </p>
                <a href="http://www.edyn.care" class="article-read-more">
                  CONTINUE READING{" "}
                </a>
              </article>

              <article class="article-recent">
                <div class="article-recent-main">
                  <h2 class="article-title">Keeping cooking simple</h2>
                  <p class="article-body">
                    Food is a very important part of everyone's life. If you
                    want to be healthy, you have to eat healthy. One of the
                    easiest ways to do that is to keep your cooking nice and
                    simple
                  </p>
                  <a href="#" class="article-read-more">
                    CONTINUE READING
                  </a>
                </div>
                <div class="article-recent-secondary">
                  <img src={teamSnap} alt="" class="article-image"></img>
                  <p class="article-info">July 19, 2019 | 3 comments</p>
                </div>
              </article>

              <article class="article-recent">
                <div class="article-recent-main">
                  <h2 class="article-title">Simplicity and work</h2>
                  <p class="article-body">
                    Work is often a major source of stress. People get
                    frustrated, it ruins their relationship with others and it
                    leads to burnout. By keeping your work life as simple as
                    possible, it will help balance everything out
                  </p>
                  <a href="#" class="article-read-more">CONTINUE READING</a>
                </div>
                <div class="article-recent-secondary">
                  <img src="" alt="" class="article-image"></img>
                  <p class="article-info">July 3, 2019 | 3 comments</p>
                </div>
              </article>

              <article class="article-recent">
                <div class="article-recent-main">
                  <h2 class="article-title"></h2>
                  <p class="article-body"></p>
                  <a href="#" class="article-read-more"></a>
                </div>
                <div class="article-recent-secondary">
                  <img src="" alt="" class="article-image"></img>
                  <p class="article-info"></p>
                </div>
              </article>
            </main>

            <aside class="sidebar">
              <div class="sidebar-widget">
                <h2 class="widget-title">ABOUT ME</h2>
                <img src="#" alt="" class="widget-image"></img>
                <p class="widget-body">I find life better, and I'm happier, when things are nice and simple.</p>
              </div>

              <div class="sidebar-widget">
                <h2 class="widget-title">RECENT POSTS</h2>
                <div class="widget-recent-post">
                  <h3 class="widget-recent-post-title">Keeping cooking simpl</h3>
                  <img src={elderlyLady} alt="" class="widget-image"></img>
                </div>
                <div class="widget-recent-post">
                  <h3 class="widget-recent-post-title"></h3>
                  <img src="" alt="" class="widget-image"></img>
                </div>
                <div class="widget-recent-post">
                  <h3 class="widget-recent-post-title"></h3>
                  <img src="" alt="" class="widget-image"></img>
                </div>
              </div>
            </aside>
          </div>

          <footer>
            <p></p>
            <p></p>
          </footer>
        </body>
      </div>
    );
  }
}

export default App;
