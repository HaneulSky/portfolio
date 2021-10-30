import React from "react";
import { Route, Switch } from "react-router";
import Main from "./app/components/layouts/main";
import Projects from "./app/components/layouts/projects";
import NavBar from "./app/components/ui/navBar";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" component={Main} />
                <Route path="/projects" component={Projects} />
            </Switch>
        </>
    );
}

export default App;
