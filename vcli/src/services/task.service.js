import axios from "axios";

const apiDomain = " http://localhost:2000"

const TaskService = {
    async index(params) {
        return await axios.get(`${apiDomain}/tasks`, {params})
    },
    async create(body) {
        return await axios.post(`${apiDomain}/tasks`, body)
    },
    async update(id, body) {
        return await axios.patch(`${apiDomain}/tasks/${id}`, body)
    },
    async delete(id) {
        return await axios.delete(`${apiDomain}/tasks/${id}`)
    },
}

export default TaskService