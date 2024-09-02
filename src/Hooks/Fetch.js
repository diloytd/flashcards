import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";


export function useFetch(adres = String, ...arg) {
    const [currentState, setCurrentState] = useState([
        {
            english: "",
            transcription: "",
            russian: "",
            id: uuidv4(),
            tags: "",
            tags_json: "",
        },
    ]);
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(null);
    const [loadUpdate, setLoadUpdate] = useState(false)
    const [newWord, setNewWord] = useState([
        {
            english: "",
            transcription: "",
            russian: "",
            id: uuidv4(),
            tags: "",
            tags_json: "",
        },
    ]);
    const [changeWord, setChangeWord] = useState({
        english: "",
        transcription: "",
        russian: "",
        id: uuidv4(),
        tags: "",
        tags_json: "",
    });
    function getDates() {
        try {
            setisLoading(true);
            setError(null);
            fetch(`/api/words/`)
                .then((res) => res.json())
                .then((res) => {
                   setCurrentState(res)
                });
        } catch {
            setError(error);
            console.error(error);
        } finally {
            setisLoading(false);
        }
    }

    function removeItem(id) {
        
        try {
            fetch(`/api/words/${id}/delete`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(currentState),
            })
                .then((res) => res.json())
                .then((res) => {
                    setLoadUpdate(!loadUpdate)
                });
        } catch {
            console.error("error");
        }
    }

    const editWord = (id) => {
        console.log(changeWord);
        try {
            fetch(`/api/words/${id}/update`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(changeWord),
               
            })
                .then((res) => {
                    console.log(res.json())})
                    //return res.json()})
                .then((data) =>  setLoadUpdate(!loadUpdate))
               
        } catch {
            console.error("error");
        }
    };

    const postNewWord = (e) => {
        try {
            fetch(`/api/words/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(newWord),
            })
                .then((res) => res.json())
                .then((res) => {
                    setLoadUpdate(!loadUpdate)
                });
        } catch {
            console.error("error");
        }
        setNewWord({
            english: "",
            transcription: "",
            russian: "",
        });
    };
   
    return [
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
    ];
}
