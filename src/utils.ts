const logger = (...data: any[]) => {
  const flags = new Set(process.argv.slice(2))
  if (!flags.has('--silent') && !flags.has('-S')) {
    console.log(data)
  }
};

export { logger }
