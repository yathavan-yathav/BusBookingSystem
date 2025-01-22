import axios from "axios";

export const postData = async (data) => {
    const response = await axios.post("http://localhost:3001",data)
};
export const getData = async (id) => {
    const response = await axios.get(`http://localhost:3001/user/{id}`)
};
