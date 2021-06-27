import './App.css';
import Header from "./Header"
import TinderCards from "./TinderCards"
import SwipeButtons from "./SwipeButtons"

function App() {
    return (
        // BEM class naming convention
        <div className="app">              
            
            {/* Header */}
            <Header />

            {/* TinderCards */}
            <TinderCards />

            {/* Swipe Buttons */}
            <SwipeButtons />

        </div>
    );
}

export default App;
