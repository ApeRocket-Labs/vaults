const vaults = require("./vaults");
const platforms = require("./platforms");
const vaultTypes = require("./vaultTypes");

var vaultsByBlockchain = {
    56: vaults.filter(v => v.network === 56),
    250: vaults.filter(v => v.network === 250)
}

module.exports = {
    vaultsByBlockchain,
    vaults,
    platforms,
    vaultTypes,
    routers
}