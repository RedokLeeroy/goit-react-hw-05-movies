import { useState } from "react"

export const SearchBar = ({onSubmit}) => {
const [search, setSearch] = useState("")

    const handleSubmit = (event) =>{
        event.preventDefault()
        onSubmit(search)
    }

    const handleInput = (event) =>{
        setSearch(event.target.value)
    }

    return <>
        <form onSubmit={handleSubmit}>
        <label>
            <input value={search} onChange={handleInput} type="text" />
        </label>
        <button >submit</button>
        </form>
        </>
}
