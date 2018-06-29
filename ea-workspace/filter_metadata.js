/**
 * @param f {string} - filename
 * @returns {bool} - return false if you want to "silent" ignore file changes
 */
module.exports = exports = function(f) {
  //exclude temp file *.metadata.json that cause infinite loop of watch->build
  return !f.endsWith(".metadata.json");
};
