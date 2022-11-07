import React, { useEffect } from "react";
import About from "./about/about";
import Contacts from "../ui/contacts/contacts";

const Main = () => {
    useEffect(() => {
        document.title = "Обо мне";
    }, []);

    return (
        <div className="pt-4">
            <About />
            <Contacts />
        </div>
    );
};

export default Main;
