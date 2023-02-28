const LOG_DIVIDER_CHAR = '#'
const LOG_DIVIDER_SHORT = LOG_DIVIDER_CHAR.repeat(10)
const LOG_DIVIDER_LINE = LOG_DIVIDER_CHAR.repeat(40)

export const toLogTitle = (title: string) => `${LOG_DIVIDER_SHORT} ${title} ${LOG_DIVIDER_SHORT}`

export const toLogMessage = (value: any, desc: string, title: string = 'Log Message') => {
  console.debug(`\t${LOG_DIVIDER_SHORT} ${title} ${LOG_DIVIDER_SHORT} `)
  console.debug(`\t${LOG_DIVIDER_CHAR}\tDescription: ${desc}`)
  console.debug(`\t${LOG_DIVIDER_CHAR}\tType: ${typeof value}`)
  console.debug(`\t${LOG_DIVIDER_CHAR}\tValue: `, value)
  console.debug(`\t${LOG_DIVIDER_LINE}`)
}
