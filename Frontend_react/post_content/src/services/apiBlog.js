import api from '../api'


export async function getBlogs() {
    try{
        const response = await api.get("blog_list/")
        console.log(response.data)
        return response.data
    }catch(error) {
        return (error.massage)
    }
}