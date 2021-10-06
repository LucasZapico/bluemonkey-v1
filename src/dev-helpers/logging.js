import chalk from 'chalk'

export const log = (str, data, color = 'cyanBright') => {
  if (process.env.NODE_ENV.trim() !== 'production') {
    console.log(chalk.cyanBright(str, data))
  }
}

const {
  GATSBY_ENV, STAGING, GATSBY_LEAD_URL, GATSBY_SITE_URL,
  NODE_ENV, GATSBY_GOOGLE_ANALYTIC_ID,
 PORT,
} = process.env;


export const EnvCheckPoint = () => {
  if (process.env.NODE_ENV !== 'production') {
    
    console.log(`%c
Node env ${NODE_ENV},
staging env ${STAGING},
Listening on port: ${PORT},
URL: ${GATSBY_SITE_URL},
lead url: ${GATSBY_LEAD_URL},
gatsby env: ${GATSBY_ENV},
google analytic: ${GATSBY_GOOGLE_ANALYTIC_ID}
`, 'color:cyan')
  }
}
