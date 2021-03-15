import Inferno from "inferno";
import Component from "inferno-component";
import { createElement } from "inferno-create-element";

function App(props) {
    return (
        <div className="container">
            <h4>Example</h4>
            <div className="row">Hello, world.</div>
        </div>
    );
}

Inferno.render(<App />, document.getElementById("app"));

