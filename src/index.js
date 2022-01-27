const vaults = require("./vaults");

var vaultsByBlockchain = {
    56: vaults.filter(v => v.network === 56),
    250: vaults.filter(v => v.network === 250)
}

module.exports = {
    vaultsByBlockchain,
    vaults
}