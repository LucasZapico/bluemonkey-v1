import axios from 'axios'

export const axiosLeads = axios.create({
  baseURL: process.env.SERVICE_URL,
})

export const axiosContact = axios.create({
  baseURL: process.env.SERVICE_URL,
})
