import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";

// JSX Style of React
class App extends React.Component {
  render() {
    return <div>Hello World!</div>;
  }
}

/* 
Regular React method calls without JSX
class App extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            "Hello World"
        )
    }
}
*/

const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
