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

export const filterProductsByRange = async(min, max) => {
    try {
        const response = await fetch(`${baseURL}/?price_min=${min}&price_max=${max}`)
        const data = await response.json();
        return data;

    } catch(err){
        console.error(err)
    }
}