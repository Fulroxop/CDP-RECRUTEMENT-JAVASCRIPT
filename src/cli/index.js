const {data} = require('../data/data');
const filterData = require('../domain/filter');
const countData = require('../domain/count');
const printJson = require('../utils/print');

function parseArgs(args) {
  const filterArg = args.find(a => a.startsWith('--filter='));
  if (filterArg) {
    return { cmd: 'filter', pattern: filterArg.split('=')[1] };
  }
  if (args.includes('--count')) {
    return { cmd: 'count' };
  }
  return null;
}

function main() {
  const args = process.argv.slice(2);
  const parsed = parseArgs(args);
  if (!parsed) {
    console.log('Usage: node src/cli/index.js --filter=<pattern> | --count');
    process.exit(1);
  }
  if (parsed.cmd === 'filter') {
    const result = filterData(data, parsed.pattern);
    printJson(result);
  } else if (parsed.cmd === 'count') {
    const result = countData(data);
    printJson(result);
  }
}

if (require.main === module) main();

module.exports = main;
