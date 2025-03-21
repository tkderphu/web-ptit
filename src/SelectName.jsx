import { useState } from "react"

function SelectName() {
    const [name, setName] = useState("")

    return (
        <div>
            <select onChange={(event) => setName(event.target.value)}>
                <option value={"hai"}>Hai</option>
                <option value={"nam"}>nam</option>
                <option value={"ha"}>ha</option>
                <option value={"trang"}>trang</option>
                <option value={"loa"}>loa</option>
            </select>
            <p>
                Ban da chon ten: {name}
            </p>
        </div>
    )
}

export default SelectName