import "./App.scss";
import { useState, useEffect } from "react";
import Header from "./Header/header.jsx";
import Main from "./Main/main.jsx";
import Table from "./ListTable/table.jsx";
import date from "./Date/date.json";
import Card from "./Card/card.jsx";
import ChangeCard from "./Card/button.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
    let [currentState, setCurrentState] = useState(date);
    const [show, setShow] = useState(true);

    return (
        <>
            <Router>
                <Header show={show} setShow={setShow} />
                  <Routes>
                    <Route path="/" element={<Main />} />
                    <Route
                        path="/card"
                        element={
                            <ChangeCard
                                currentState={currentState}
                                setCurrentState={setCurrentState}
                            />
                        }
                    />
                    <Route path="/table" element={<Table date={date} />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
