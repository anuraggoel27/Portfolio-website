import React from 'react'
import {Header, About, Projects, Skills, Footer, Contact} from "./components/index.js";

const App = () => {
    return (
        <div>
            <Header/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App
