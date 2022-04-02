import './App.css'
import FirstComponent from './Components/FirstComponent/FirstComponent'
import SecondComponent from './Components/SecondComponent/SecondComponent'
import ThirdComponent from './Components/ThirdComponent/ThirdComponent'
import { GrFormAdd } from 'react-icons/gr'
import { AiOutlineMinus } from 'react-icons/ai'
import { createContext, useState } from 'react'
export const CountContext = createContext()

function App() {
    const [count, setCount] = useState(0)
    return (
        <CountContext.Provider value={[count, setCount]}>
            <div className="app">
                <div className="counter-container">
                    <h1>App</h1>
                    <div>
                        <button
                            title="Increase"
                            onClick={() => setCount(count + 1)}
                        >
                            <GrFormAdd size={20} />
                        </button>
                        <h1>Count: {count} </h1>
                        <button
                            title="Decrease"
                            onClick={() => setCount(count + 1)}
                        >
                            <AiOutlineMinus size={20} />
                        </button>
                    </div>
                </div>
                <FirstComponent />
                <SecondComponent />
                <ThirdComponent />
            </div>
        </CountContext.Provider>
    )
}

export default App
