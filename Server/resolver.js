const axios = require('axios')
module.exports =
{
    post: async () => {
        let { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return data
    },
    user: async () => {
        let { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
        return data.map(data => { return { id: data.id, name: data.name, companyName: data.company.name } })
    },
    deletePost: async (value) => {
        let flag = Math.random() > 0.5 ? true : false
        return { id: value.id, deleted: flag }
    }
};