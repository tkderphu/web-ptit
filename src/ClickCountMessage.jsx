import { useState } from "react"

function ClickCountMessage() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>Current count: <span style={{color:'red'}}>{count}</span></p>
            <button onClick={() => setCount((prev) => prev + 1)}>Count message</button>
        </div>
    )
}
export default ClickCountMessage