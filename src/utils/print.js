/**
 * Print a JS object as pretty JSON.
 */
function printJson(obj) {
  console.log(JSON.stringify(obj, null, 2));
}

module.exports = printJson;
