import { FormEvent, useEffect, useRef, useState } from "react"

export const SearchBox = ({handleSearch} : {handleSearch: (e: FormEvent<HTMLFormElement>, CITY: string) => void }) => {
    const [search, setSearch] = useState("");
    const inputRefer = useRef<HTMLInputElement>(null);

    const handleChange = (e: FormEvent) => {
        const {value} = e.target as HTMLInputElement;
        setSearch(value);
    }

    useEffect(() => {
        inputRefer.current!.focus();
    }, [])
    

    return (
        <form id="form" onSubmit={(e) => {
            handleSearch(e, search);
            setSearch("");
        }}>
            <label htmlFor="search"></label>
            <input type="search" ref={inputRefer} name="search" id="search" placeholder="Buscar ubicación..." autoComplete="off"
            className="w-72 h-8 absolute mt-12 p-3 rounded-full" value={search} onChange={handleChange}/>
        </form>
    )
}