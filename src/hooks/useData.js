import { useEffect, useState } from "react"

const useData = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        fetch('https://still-everglades-48937.herokuapp.com/rooms')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])
    return rooms;
}
export default useData;