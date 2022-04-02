import { GrFormAdd } from 'react-icons/gr'
import { AiOutlineMinus } from 'react-icons/ai'
import { CountContext } from '../../App'
import { useContext } from 'react'

const SecondComponent = () => {
    const [count, setCount] = useContext(CountContext)
    return (
        <div className="second-component">
            <div className="counter-container">
                <h1>Second Component</h1>
                <div>
                    <button
                        title="Increase"
                        onClick={() => setCount(count + 1)}
                    >
                        <GrFormAdd size={20} />
                    </button>
                    <h1>Count:{count} </h1>
                    <button
                        title="Decrease"
                        onClick={() => setCount(count - 1)}
                    >
                        <AiOutlineMinus size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SecondComponent
