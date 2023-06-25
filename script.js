


const HelloWorldHeading = React.createElement("h1", null, "Hello");
console.log(HelloWorldHeading);

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(HelloWorldHeading);