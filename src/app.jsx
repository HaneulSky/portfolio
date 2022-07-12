import React from "react";
import { Route, Switch } from "react-router";
import Main from "./app/components/layouts/main";
import Projects from "./app/components/layouts/projects";
import NavBar from "./app/components/ui/navBar";
import Contacts from "./app/components/ui/contacts/contacts";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/portfolio" exact component={Main} />
                <Route path="/projects" component={Projects} />
                <Route path="/contacts" component={Contacts} />
            </Switch>
        </>
    );
}

export default App;
