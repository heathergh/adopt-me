const Pet = ({name, animal, breed}) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h1", {}, breed),
  ])
}

const App = () => {
  React.createElement(
    "div",
    { id: "something-important"},
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Luna",
        animal: "dog",
        breed: "Havanese"}
      ),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "bird",
        breed: "cockatiel"}
      ),
      React.createElement(Pet, {
        name: "Doink",
        animal: "cat",
        breed: "tabby"}
      ),
    ]
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));