import General from "./components/General/General";
import Header from "./components/Header/Header";
import "./App.css";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="app">
            <div>
                <div className="white-gradient"></div>
                <Header />
                <General />
            </div>
            <Companies />
            <Residencies />
            <Value />
            <Contact />
            <GetStarted />
            <Footer />
        </div>
    );
}

export default App;
