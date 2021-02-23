console.log("app.js is running");

// JSX - JavaScript XML
// var template = (
//   <div>
//     <h2>Indecision App</h2> <p>Some paragraphs</p>
//     <ol>
//       <li>Item 1</li>
//       <li>Item 2</li>
//     </ol>
//   </div>
// );
var templateTwo = (
  <div>
    <h1>Bob Smith</h1>
    <p>Age 26</p>
    <p>Location: London</p>
  </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
