import axios from 'axios'

const {GATSBY_LEAD_URL} = process.env

export const axiosLeads = axios.create({
  baseURL: GATSBY_LEAD_URL,
})

export const axiosContact = axios.create({
  baseURL: GATSBY_LEAD_URL,
})
