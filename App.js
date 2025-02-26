const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "heading" }, "Hello World! from React1"),
        React.createElement("h1", { id: "heading" }, "Hello World! from React2")
        ]),
    React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "heading" }, "Hello World! from React11"),
        React.createElement("h1", { id: "heading" }, "Hello World! from React22")
        ])]);




// const heading = React.createElement("h1", { id: "heading" }, "Hello World! from React");
// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);