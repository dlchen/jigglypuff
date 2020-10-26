const logger = (string) => {
  const flags = new Set(process.argv.slice(2))
  if (!flags.has('--silent') && !flags.has('-S')) {
    console.log(string)
  }
};

module.exports = {
  logger,
}
