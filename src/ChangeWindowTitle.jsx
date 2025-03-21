import { useEffect, useState } from "react"

function ChangeWindowTitle() {
    
    const [title, setTitle] = useState('')

    useEffect(() => {
        document.title = title
    }, [title])

    return (
        <div>
            <input placeholder="Enter your title page" onChange={(event) => setTitle(event.target.value)}></input>
            <p>Hay xem tieu de trang</p>
        </div>
    )

}
export default ChangeWindowTitle