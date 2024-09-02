import "./App.scss";
import { useState, useEffect } from "react";

import Header from "./Header/Header.jsx";
import Main from "./Main/Mainpage.jsx";
import Table from "./ListTable/Table.jsx";

import ChangeCard from "./Card/Button.jsx";
import Context from "./Context.js";

import { useFetch } from "./Hooks/Fetch.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const [show, setShow] = useState(true);
    const [
        loadUpdate,
        setLoadUpdate,
        currentState,
        setCurrentState,
        getDates,
        isLoading,
        error,
        removeItem,
        postNewWord,
        newWord,
        setNewWord,
        editWord,
        changeWord,
        setChangeWord,
    ] = useFetch("/api/words");
    
    useEffect(() => {
      getDates()
    }, [loadUpdate])  
   
    return (
        <>
            <Context.Provider
                value={{
                    currentState,
                    setCurrentState,
                    show,
                    setShow,
                    isLoading,
                    getDates,
                    removeItem,
                    postNewWord,
                    newWord,
                    setNewWord,
                    editWord,
                    changeWord,
                    setChangeWord,
                }}
            >
                <Router>
                    <Header show={show} setShow={setShow} />
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/card" element={<ChangeCard />} />
                        <Route path="/table" element={<Table />} />
                    </Routes>
                </Router>
            </Context.Provider>
        </>
    );
}

export default App;
