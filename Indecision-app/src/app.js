console.log("app.js is running");
// JSX - JavaScript XML
const app = {
  title: "This is the title",
  subtitle: "This is the subtitle",
  options: ["one", "two"],
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options:" : "no options"}</p>
    <ol>
      <li>Option 1</li>
      <li>Option 2</li>
    </ol>
  </div>
);

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);

// const user = {
//   //   name: "Jim",
//   age: 18,
//   location: "London",
// };

// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   }
// }
// const templateTwo = (
//   <div>
//     <h1>Name: {user.name ? user.name : "Anonymous"}</h1>
//     {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );
// const appRoot = document.getElementById("app");

// ReactDOM.render(templateTwo, appRoot);
