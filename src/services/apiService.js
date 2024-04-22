const baseURL = "https://api.escuelajs.co/api/v1/products";

export const getAllProducts = async() => {
    try {
        const response = await fetch(`${baseURL}`)
        const data = await response.json();
        return data;

    } catch(err){
        console.error(err)
    }
}