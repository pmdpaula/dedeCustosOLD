import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3010',
})

// export const insertFund = payload => api.post(`/fund`, payload)
export const getAllProducts = () => api.get(`/crud`)
export const getView = () => api.get(`/view`)
// export const updateFundById = (id, payload) => api.put(`/fund/${id}`, payload)
// export const deleteFundById = id => api.delete(`/fund/${id}`)
// export const getFundById = id => api.get(`/fund/${id}`)
// export const getFundValuesbyId = id => api.get(`/fundv/${id}`)

const apis = {
    // insertFund,
    getAllProducts,
    getView,
    // updateFundById,
    // deleteFundById,
    // getFundById,
    // getFundValuesbyId,
}

export default apis