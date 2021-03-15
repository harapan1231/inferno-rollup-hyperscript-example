function App(props) {
    return h("div", {class: "container"}, [
        h("h4", "inferno-plain-hyperscript-example"),
        h("div", {class: "row"}, [
            h("span", {class: "column", style: "text-align: center;"}, "Welcome!"),
            h("i", {class: "column"}, "Have a nice petit time..."),
        ]),
    ]);
}

Inferno.render(Inferno.createElement(App), document.getElementById("app"));

