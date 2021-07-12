import Sidebar from "./sidebar/sidebar";
import LoginPage from "./LoginPage/LoginPage";
import Register from "./Register/Register";
import { BrowserRouter, Route } from 'react-router-dom'

function App() {


    return ( <
        BrowserRouter >

        <
        Route exact path = '/'
        component = { LoginPage }
        /> <
        Route path = '/register'
        component = { Register }
        /> <
        Route path = '/mainpage'
        component = { Sidebar }
        />  < /
        BrowserRouter >
    )
}

export default App;