"use strict";

console.log("app.js is running"); // JSX - JavaScript XML
// var template = (
//   <div>
//     <h2>Indecision App</h2> <p>Some paragraphs</p>
//     <ol>
//       <li>Item 1</li>
//       <li>Item 2</li>
//     </ol>
//   </div>
// );

var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Bob Smith"), /*#__PURE__*/React.createElement("p", null, "Age 26"), /*#__PURE__*/React.createElement("p", null, "Location: London"));
var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
