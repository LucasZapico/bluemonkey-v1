import chalk from 'chalk'

export const log = (str, data, color = 'cyanBright') => {
  if (process.env.NODE_ENV.trim() !== 'production') {
    console.log(chalk.cyanBright(str, data))
  }
}

export const EnvCheckPoint = () => {
  if (process.env.NODE_ENV !== 'production') {
    const { NODE_ENV } = process.env
    const { PORT } = process.env
    const { SITE_URL } = process.env
    const API = process.env.SERVICE_URL
    console.log(`%cNode env ${NODE_ENV}.`, 'color:cyan')
    console.log(`%cListening on port: ${PORT}.`, 'color:cyan')
    console.log(`%cURL: ${SITE_URL}${PORT}`, 'color:cyan')
    console.log(`%cAPI url: ${API}`, 'color:cyan')
  }
}
