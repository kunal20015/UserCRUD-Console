import axios from 'axios';

const base_url = "https://691d92c5d58e64bf0d36ad82.mockapi.io/api/v1/user";

export const createUser = async(user) => await axios.post(base_url, user);

const readUser = async() => await axios.get(base_url);

export const updateUser = async(id, user) => await axios.put(`${base_url}/${id}`, user);

export const deleteUser = async(id) => await axios.delete(`${base_url}/${id}`);

export const getUserById = async(id)=> await axios.get(`${base_url}/${id}`);

export default readUser;