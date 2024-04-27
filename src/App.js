import React, {useLayoutEffect, useState} from 'react';
import MainPage from "./pages/mainPage/MainPage";
import ErrorPage from "./pages/errorPage/ErrorPage";


function App(props) {

    const [users, setUsers] = useState({name: '', lastname: ''})

    useLayoutEffect(() => {
        const name = prompt("Введите своё имя:")
        const lastname = prompt("Введите свою фамилию:")


        if (name === 'John' && lastname === 'Johns') {
            setUsers({name, lastname});
        } else {
            setUsers({name, lastname});
        }
    }, []);

    return (
        <div className="App">
            {users.name === 'John' && users.lastname === 'Johns' ? (
                <MainPage user={users}/>
            ) : (
                <ErrorPage user={users}/>
            )}
        </div>
    );
}

export default App;