import { useEffect, useState } from "react"

const useBlogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('https://still-everglades-48937.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return blogs;
}
export default useBlogs;