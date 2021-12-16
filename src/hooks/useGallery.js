import { useEffect, useState } from "react"

const useGallery = () => {
    const [gallery, setGallery] = useState([])
    useEffect(() => {
        fetch('https://still-everglades-48937.herokuapp.com/gallery')
            .then(res => res.json())
            .then(data => setGallery(data))
    }, [])
    return gallery;
}
export default useGallery;