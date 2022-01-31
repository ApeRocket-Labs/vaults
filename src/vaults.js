const platforms = require("./platforms");
const vaultTypes = require("./vaultTypes");

module.exports = vaults = [
    {
        pid: 0,
        network: 56,
        symbol: 'SPACE',
        address: '0x6A2E67e90280940A0b9fBBa8822050aA41d2C1e2',
        filter: { platform: platforms.space, vaultType: [vaultTypes.singleAsset] },
        isFeesRedistribution: true,
        tokenStacked: { symbol: 'xSPACE', address: '0xec8FE97F9212B2188963c91b0749669B57Bce39C' },
        tokenEarned: { symbol: 'WBNB', address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' },
        gradient: 'linear-gradient(90deg, rgba(161,164,255,0.2) 0%, rgba(11,23,46,0.2) 100%)',
    },
    {
        pid: 99,
        network: 56,
        symbol: 'SPACE-BNB LP',
        address: '0xC7e8c3E7c6db24e59fEB2e8083b36d24305ee73b',
        isOptimizer: true,
        boostMultiplier: 10,
        filter: { platform: platforms.apeswap, vaultType: [vaultTypes.lp] },
        basePoolPid: 65,
        baseTokenEarned: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        tokenStacked: { symbol: 'SPACE-BNB LP', address: '0xd0F82498051067E154d1dcd3d88fA95063949D7e' },
        tokenEarned: { symbol: 'SPACE-BNB LP', address: '0xd0F82498051067E154d1dcd3d88fA95063949D7e' },
        gradient: 'linear-gradient(90deg, rgba(161,164,255,0.2) 0%, rgba(11,23,46,0.2) 100%)',
    },
    {
        pid: 101,
        network: 56,
        filter: { platform: platforms.apeswap, vaultType: [vaultTypes.singleAsset] },
        symbol: 'BANANA',
        address: '0xFfDcD49d902d71445B93DCbFa51E2F9797de05C9',
        isSingleToken: true,
        basePoolPid: 0,
        baseTokenEarned: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        tokenStacked: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        tokenEarned: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        gradient: 'linear-gradient(90deg, rgba(248,245,231,0.2) 0%, rgba(11,23,46,0.2) 100%)',
        isMercuryVault: true,
        strategies: [
            {
                tokenFarmed: {
                    symbol: "BANANA",
                    address: "0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95"
                },
                sousChefAddress: "0x73d3D28cc018a89Fe6518d7B5EfbCfCF0695A0d9",
                strategyAddress: "0x5C8D727B265DBAFABA67E050F2F739CAEEB4A6F9"
            }
        ]
    },
    {
        pid: 102,
        network: 56,
        symbol: 'CAKE',
        address: '0x1dF3898f5d8B91EA483fD9d8b374dCaBb369C6A0',
        filter: { platform: platforms.pancakeswap, vaultType: [vaultTypes.singleAsset] },
        isSingleToken: true,
        basePoolPid: 0,
        baseTokenEarned: { symbol: 'CAKE', address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82' },
        tokenStacked: { symbol: 'CAKE', address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82' },
        tokenEarned: { symbol: 'CAKE', address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82' },
        gradient: 'linear-gradient(90deg, rgba(119,212,219,0.2) 0%, rgba(11,23,46,0.2) 100%)',
        isMercuryVault: true,
        strategies: [
            {
                tokenFarmed: {
                    symbol: "BCOIN",
                    address: "0x00e1656e45f18ec6747F5a8496Fd39B50b38396D"
                },
                sousChefAddress: "0x25ca61796D786014FfE15E42aC11C7721d46E120",
                strategyAddress: "0x6a65D6c06dEE2b614d959b6e0086C02Bae1a7398"
            }
        ]
    },
    {
        pid: 1,
        network: 56,
        filter: { platform: platforms.apeswap, vaultType: [vaultTypes.singleAsset] },
        symbol: 'BANANA',
        address: '0xa13eF34F11cD905A1aACe891e3Fd1b355D770e7F',
        isSingleToken: true,
        boostMultiplier: 3.24,
        basePoolPid: 0,
        baseTokenEarned: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        tokenStacked: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        tokenEarned: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        gradient: 'linear-gradient(90deg, rgba(248,245,231,0.2) 0%, rgba(11,23,46,0.2) 100%)',
        disable: true,
    },
    {
        pid: 2,
        network: 56,
        symbol: 'CAKE',
        address: '0x41b726444CcD5137A7Ec1Fbb870b9eFF57F89E89',
        filter: { platform: platforms.pancakeswap, vaultType: [vaultTypes.singleAsset] },
        isSingleToken: true,
        boostMultiplier: 6.48,
        basePoolPid: 0,
        baseTokenEarned: { symbol: 'CAKE', address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82' },
        tokenStacked: { symbol: 'CAKE', address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82' },
        tokenEarned: { symbol: 'CAKE', address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82' },
        gradient: 'linear-gradient(90deg, rgba(119,212,219,0.2) 0%, rgba(11,23,46,0.2) 100%)',
        disable: true,
    },
    {
        pid: 3,
        network: 56,
        filter: { platform: platforms.biswap, vaultType: [vaultTypes.singleAsset] },
        symbol: 'BSW',
        address: '0xA298f622E8B46491749C1ccDBe2DfFA13049A930',
        isSingleToken: true,
        basePoolPid: 0,
        baseTokenEarned: { symbol: 'BSW', address: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1' },
        tokenStacked: { symbol: 'BSW', address: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1' },
        tokenEarned: { symbol: 'BSW', address: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1' },
        gradient: 'linear-gradient(90deg, rgba(249, 59, 93,0.2) 0%, rgba(11,23,46,0.2) 100%)',
    },
    {
        pid: 4,
        network: 56,
        symbol: 'BANANA-BNB LP',
        address: '0xa126C7f00875343f233e3c2f95067c80ab5B068a',
        filter: { platform: platforms.apeswap, vaultType: [vaultTypes.lp] },
        isOptimizer: true,
        basePoolPid: 1,
        baseTokenEarned: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        tokenStacked: { symbol: 'BANANA-BNB LP', address: '0xF65C1C0478eFDe3c19b49EcBE7ACc57BB6B1D713' },
        tokenEarned: { symbol: 'BANANA-BNB LP', address: '0xF65C1C0478eFDe3c19b49EcBE7ACc57BB6B1D713' },
        gradient: 'linear-gradient(90deg, rgba(248,245,231,0.2) 0%, rgba(11,23,46,0.2) 100%)',
    },
    {
        pid: 5,
        network: 56,
        symbol: 'BANANA-BNB LP',
        address: '0xD259A715De1fB30AD76Cc9580e68A15Ee9D12Dc2',
        filter: { platform: platforms.apeswap, vaultType: [vaultTypes.lp] },
        isMaximizer: true,
        maximizerVaultPid: 1,
        basePoolPid: 1,
        baseTokenEarned: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        tokenStacked: { symbol: 'BANANA-BNB LP', address: '0xF65C1C0478eFDe3c19b49EcBE7ACc57BB6B1D713' },
        tokenEarned: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        gradient: 'linear-gradient(90deg, rgba(248,245,231,0.2) 0%, rgba(11,23,46,0.2) 100%)',
    },
    {
        pid: 6,
        network: 56,
        symbol: 'CAKE-BNB LP',
        address: '0x313adEc67e70a86Bd1166CCAcB8aCA932f28E95B',
        filter: { platform: platforms.pancakeswap, vaultType: [vaultTypes.lp] },
        isOptimizer: true,
        basePoolPid: 251,
        baseTokenEarned: { symbol: 'CAKE', address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82' },
        tokenStacked: { symbol: 'CAKE-BNB LP', address: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0' },
        tokenEarned: { symbol: 'CAKE-BNB LP', address: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0' },
        gradient: 'linear-gradient(90deg, rgba(119,212,219,0.2) 0%, rgba(11,23,46,0.2) 100%)',
        disable: true,
    },
    {
        pid: 7,
        network: 56,
        symbol: 'CAKE-BNB LP',
        address: '0xaC3184b1F2888caaB5A7dE1381707c15c153B04A',
        isMaximizer: true,
        maximizerVaultPid: 2,
        filter: { platform: platforms.pancakeswap, vaultType: [vaultTypes.lp] },
        basePoolPid: 251,
        baseTokenEarned: { symbol: 'CAKE', address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82' },
        tokenStacked: { symbol: 'CAKE-BNB LP', address: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0' },
        tokenEarned: { symbol: 'CAKE', address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82' },
        gradient: 'linear-gradient(90deg, rgba(119,212,219,0.2) 0%, rgba(11,23,46,0.2) 100%)',
    },
    {
        pid: 48,
        network: 56,
        symbol: 'SING-BUSD LP',
        address: '0xD61b0D30Ba0FBFC943Ebae35ff86eDf299E13B54',
        filter: { platform: platforms.singular, vaultType: [vaultTypes.lp] },
        isOptimizer: true,
        basePoolPid: 0,
        baseTokenEarned: { symbol: 'SING', address: '0x23894C0ce2d79B79Ea33A4D02e67ae843Ef6e563' },
        tokenStacked: { symbol: 'SING-BUSD LP', address: '0xdDdc245c62a0AA875893Ab53b52455aCdCd7f526' },
        tokenEarned: { symbol: 'SING-BUSD LP', address: '0xdDdc245c62a0AA875893Ab53b52455aCdCd7f526' },
        gradient: 'linear-gradient(90deg, rgba(247,148,29,0.2) 0%, rgba(11,23,46,0.2) 100%)',
        disable: true,
    },
    {
        pid: 8,
        network: 56,
        symbol: 'BSW-BNB LP',
        address: '0xB8469e8A7a8893E4c698B3De8163906386861B96',
        filter: { platform: platforms.biswap, vaultType: [vaultTypes.lp] },
        isOptimizer: true,
        basePoolPid: 10,
        baseTokenEarned: { symbol: 'BSW', address: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1' },
        tokenStacked: { symbol: 'BSW-BNB LP', address: '0x46492B26639Df0cda9b2769429845cb991591E0A' },
        tokenEarned: { symbol: 'BSW-BNB LP', address: '0x46492B26639Df0cda9b2769429845cb991591E0A' },
        gradient: 'linear-gradient(90deg, rgba(249, 59, 93,0.2) 0%, rgba(11,23,46,0.2) 100%)',
    },
    {
        pid: 9,
        network: 56,
        symbol: 'BSW-BNB LP',
        address: '0x76a3fE4350F13042EC179E5240bC68349d2AAD35',
        isMaximizer: true,
        maximizerVaultPid: 3,
        filter: { platform: platforms.biswap, vaultType: [vaultTypes.lp] },
        basePoolPid: 10,
        baseTokenEarned: { symbol: 'BSW', address: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1' },
        tokenStacked: { symbol: 'BSW-BNB LP', address: '0x46492B26639Df0cda9b2769429845cb991591E0A' },
        tokenEarned: { symbol: 'BSW', address: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1' },
        gradient: 'linear-gradient(90deg, rgba(249, 59, 93,0.2) 0%, rgba(11,23,46,0.2) 100%)',
    },
    {
        pid: 10,
        network: 56,
        symbol: 'BANANA-BUSD LP',
        address: '0x1c86DB4820Acb4Dd91A80a8874afb82251aeb937',
        filter: { platform: platforms.apeswap, vaultType: [vaultTypes.lp] },
        isOptimizer: true,
        basePoolPid: 2,
        baseTokenEarned: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        tokenStacked: { symbol: 'BANANA-BUSD LP', address: '0x7Bd46f6Da97312AC2DBD1749f82E202764C0B914' },
        tokenEarned: { symbol: 'BANANA-BUSD LP', address: '0x7Bd46f6Da97312AC2DBD1749f82E202764C0B914' },
        gradient: 'linear-gradient(90deg, rgba(248,245,231,0.2) 0%, rgba(11,23,46,0.2) 100%)',
    },
    {
        pid: 11,
        network: 56,
        symbol: 'BANANA-BUSD LP',
        address: '0xf3D78aE6A67D391fd894ee8f4da7842EC07CF446',
        isMaximizer: true,
        maximizerVaultPid: 1,
        basePoolPid: 2,
        filter: { platform: platforms.apeswap, vaultType: [vaultTypes.lp] },
        baseTokenEarned: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        tokenStacked: { symbol: 'BANANA-BUSD LP', address: '0x7Bd46f6Da97312AC2DBD1749f82E202764C0B914' },
        tokenEarned: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        gradient: 'linear-gradient(90deg, rgba(248,245,231,0.2) 0%, rgba(11,23,46,0.2) 100%)',
    },
    {
        pid: 12,
        network: 56,
        symbol: 'BSW-USDT LP',
        address: '0x34d1f4FA762c85f363cb5907Ca0BAcF53aBac866',
        filter: { platform: platforms.biswap, vaultType: [vaultTypes.lp] },
        isOptimizer: true,
        basePoolPid: 9,
        baseTokenEarned: { symbol: 'BSW', address: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1' },
        tokenStacked: { symbol: 'BSW-USDT LP', address: '0x2b30c317ceDFb554Ec525F85E79538D59970BEb0' },
        tokenEarned: { symbol: 'BSW-USDT LP', address: '0x2b30c317ceDFb554Ec525F85E79538D59970BEb0' },
        gradient: 'linear-gradient(90deg, rgba(249, 59, 93,0.2) 0%, rgba(11,23,46,0.2) 100%)',
    },
    {
        pid: 14,
        network: 56,
        symbol: 'BUSD-BNB LP',
        address: '0xcf02e68b900Ce87F8715CAEF8b8a9e212b9158A1',
        isOptimizer: true,
        filter: { platform: platforms.pancakeswap, vaultType: [vaultTypes.lp] },
        basePoolPid: 252,
        baseTokenEarned: { symbol: 'CAKE', address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82' },
        tokenStacked: { symbol: 'BUSD-BNB LP', address: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16' },
        tokenEarned: { symbol: 'BUSD-BNB LP', address: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16' },
        gradient: 'linear-gradient(90deg, rgba(240,185,11,0.2) 0%, rgba(11,23,46,0.2) 100%)',
        disable: true,
    },
    {
        pid: 15,
        network: 56,
        symbol: 'BUSD-BNB LP',
        address: '0x7dBB2b2Fd312710C805D4c78EE55ca1F8750Bace',
        filter: { platform: platforms.apeswap, vaultType: [vaultTypes.lp] },
        isOptimizer: true,
        basePoolPid: 3,
        baseTokenEarned: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        tokenStacked: { symbol: 'BUSD-BNB LP', address: '0x51e6d27fa57373d8d4c256231241053a70cb1d93' },
        tokenEarned: { symbol: 'BUSD-BNB LP', address: '0x51e6d27fa57373d8d4c256231241053a70cb1d93' },
        gradient: 'linear-gradient(90deg, rgba(240,185,11,0.2) 0%, rgba(11,23,46,0.2) 100%)',
    },
    {
        pid: 16,
        network: 56,
        symbol: 'BNB-BUSD LP',
        address: '0xa8A2c0aa4C050D2cB5C1Ac224A31c76492A35B80',
        filter: { platform: platforms.biswap, vaultType: [vaultTypes.lp] },
        isOptimizer: true,
        basePoolPid: 3,
        baseTokenEarned: { symbol: 'BSW', address: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1' },
        tokenStacked: { symbol: 'BNB-BUSD LP', address: '0xacaac9311b0096e04dfe96b6d87dec867d3883dc' },
        tokenEarned: { symbol: 'BNB-BUSD LP', address: '0xacaac9311b0096e04dfe96b6d87dec867d3883dc' },
        gradient: 'linear-gradient(90deg, rgba(240,185,11,0.2) 0%, rgba(11,23,46,0.2) 100%)',
    },
    {
        pid: 18,
        network: 56,
        symbol: 'BUSD-BNB LP',
        address: '0x101bCD396DDFb934072a171Bc4F625B85D505C78',
        filter: { platform: platforms.apeswap, vaultType: [vaultTypes.lp] },
        isMaximizer: true,
        maximizerVaultPid: 1,
        basePoolPid: 3,
        baseTokenEarned: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        tokenStacked: { symbol: 'BUSD-BNB LP', address: '0x51e6d27fa57373d8d4c256231241053a70cb1d93' },
        tokenEarned: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        gradient: 'linear-gradient(90deg, rgba(240,185,11,0.2) 0%, rgba(11,23,46,0.2) 100%)',
    },
    {
        pid: 19,
        network: 56,
        symbol: 'BNB-BUSD LP',
        address: '0xBC84830C42cedc1A32b665BfEaB3Fb16bcdFb8e3',
        filter: { platform: platforms.biswap, vaultType: [vaultTypes.lp] },
        isMaximizer: true,
        maximizerVaultPid: 3,
        basePoolPid: 3,
        baseTokenEarned: { symbol: 'BSW', address: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1' },
        tokenStacked: { symbol: 'BNB-BUSD LP', address: '0xacaac9311b0096e04dfe96b6d87dec867d3883dc' },
        tokenEarned: { symbol: 'BSW', address: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1' },
        gradient: 'linear-gradient(90deg, rgba(240,185,11,0.2) 0%, rgba(11,23,46,0.2) 100%)',
    },
    {
        pid: 23,
        network: 56,
        symbol: 'ETH-BNB LP',
        address: '0xd9137C7be7a3117941317d525B06c441eAC7380d',
        filter: { platform: platforms.apeswap, vaultType: [vaultTypes.lp] },
        isMaximizer: true,
        maximizerVaultPid: 1,
        basePoolPid: 5,
        baseTokenEarned: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        tokenStacked: { symbol: 'ETH-BNB LP', address: '0xA0C3Ef24414ED9C9B456740128d8E63D016A9e11' },
        tokenEarned: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        gradient: 'linear-gradient(90deg, rgba(245,243,243,0.2) 0%, rgba(11,23,46,0.2) 100%)',
    },
    {
        pid: 25,
        network: 56,
        symbol: 'BUSD-USDC LP',
        address: '0xe1F45D11B5D0Ddbe300cADFeFd7021Ac750a4281',
        isOptimizer: true,
        filter: { platform: platforms.apeswap, vaultType: [vaultTypes.lp, vaultTypes.stableLp] },
        basePoolPid: 8,
        baseTokenEarned: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        tokenStacked: { symbol: 'BUSD-USDC LP', address: '0xC087C78AbaC4A0E900a327444193dBF9BA69058E' },
        tokenEarned: { symbol: 'BUSD-USDC LP', address: '0xC087C78AbaC4A0E900a327444193dBF9BA69058E' },
        gradient: 'linear-gradient(90deg, rgba(240,185,11,0.2) 0%, rgba(11,23,46,0.2) 100%)',
    },
    {
        pid: 27,
        network: 56,
        symbol: 'BUSD-USDC LP',
        address: '0x1119FBECe0F576D318ce489886d05A098e94961F',
        isMaximizer: true,
        maximizerVaultPid: 1,
        filter: { platform: platforms.apeswap, vaultType: [vaultTypes.lp, vaultTypes.stableLp] },
        basePoolPid: 8,
        baseTokenEarned: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        tokenStacked: { symbol: 'BUSD-USDC LP', address: '0xC087C78AbaC4A0E900a327444193dBF9BA69058E' },
        tokenEarned: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        gradient: 'linear-gradient(90deg, rgba(240,185,11,0.2) 0%, rgba(11,23,46,0.2) 100%)',
    },
    {
        pid: 28,
        network: 56,
        symbol: 'ADA-BNB LP',
        address: '0x0Edf919fe5cDA4c7fA02AE7de77243cecedFd036',
        isOptimizer: true,
        filter: { platform: platforms.apeswap, vaultType: [vaultTypes.lp] },
        basePoolPid: 17,
        baseTokenEarned: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        tokenStacked: { symbol: 'ADA-BNB LP', address: '0x40d4543887E4170A1A40Cd8dB15A6b297c812Cb1' },
        tokenEarned: { symbol: 'ADA-BNB LP', address: '0x40d4543887E4170A1A40Cd8dB15A6b297c812Cb1' },
        gradient: 'linear-gradient(90deg, rgba(0,51,173,0.2) 0%, rgba(11,23,46,0.2) 100%)',
    },
    {
        pid: 29,
        network: 56,
        symbol: 'ADA-BNB LP',
        address: '0x8ADDf5FcE06B9F93cBf1F8B2ef580b25D1EDBE56',
        isMaximizer: true,
        maximizerVaultPid: 1,
        basePoolPid: 17,
        filter: { platform: platforms.apeswap, vaultType: [vaultTypes.lp] },
        baseTokenEarned: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        tokenStacked: { symbol: 'ADA-BNB LP', address: '0x40d4543887E4170A1A40Cd8dB15A6b297c812Cb1' },
        tokenEarned: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        gradient: 'linear-gradient(90deg, rgba(0,51,173,0.2) 0%, rgba(11,23,46,0.2) 100%)',
    },
    {
        pid: 31,
        network: 56,
        symbol: 'BUSD-USDT LP',
        address: '0x8747431ddFf6069f32ad8eE0Da51084432F8594C',
        filter: { platform: platforms.apeswap, vaultType: [vaultTypes.lp, vaultTypes.stableLp] },
        isOptimizer: true,
        basePoolPid: 34,
        baseTokenEarned: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        tokenStacked: { symbol: 'BUSD-USDT LP', address: '0x2e707261d086687470b515b320478eb1c88d49bb' },
        tokenEarned: { symbol: 'BUSD-USDT LP', address: '0x2e707261d086687470b515b320478eb1c88d49bb' },
        gradient: 'linear-gradient(90deg, rgba(240,185,11,0.2) 0%, rgba(11,23,46,0.2) 100%)',
        disable: true,
    },
    {
        pid: 33,
        network: 56,
        symbol: 'BUSD-USDT LP',
        address: '0xC8bba6AC77804b3b6b28D6C5890b98fb935F361F',
        isMaximizer: true,
        maximizerVaultPid: 1,
        basePoolPid: 34,
        filter: { platform: platforms.apeswap, vaultType: [vaultTypes.lp, vaultTypes.stableLp] },
        baseTokenEarned: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        tokenStacked: { symbol: 'BUSD-USDT LP', address: '0x2e707261d086687470b515b320478eb1c88d49bb' },
        tokenEarned: { symbol: 'BANANA', address: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95' },
        gradient: 'linear-gradient(90deg, rgba(240,185,11,0.2) 0%, rgba(11,23,46,0.2) 100%)',
    },
    {
        pid: 35,
        network: 56,
        symbol: 'BNB-USDT LP',
        address: '0x8E1fcB9b48A299b71d7a4CDc24F11439cF253126',
        filter: { platform: platforms.biswap, vaultType: [vaultTypes.lp] },
        isOptimizer: true,
        basePoolPid: 2,
        baseTokenEarned: { symbol: 'BSW', address: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1' },
        tokenStacked: { symbol: 'BNB-USDT LP', address: '0x8840c6252e2e86e545defb6da98b2a0e26d8c1ba' },
        tokenEarned: { symbol: 'BNB-USDT LP', address: '0x8840c6252e2e86e545defb6da98b2a0e26d8c1ba' },
        gradient: 'linear-gradient(90deg, rgba(240,185,11,0.2) 0%, rgba(11,23,46,0.2) 100%)',
    },
    {
        pid: 38,
        network: 56,
        symbol: 'ETH-BTCB LP',
        address: '0x681969eBfC476E8208CA551fA364e8FE6a19242F',
        filter: { platform: platforms.biswap, vaultType: [vaultTypes.lp] },
        isOptimizer: true,
        basePoolPid: 7,
        baseTokenEarned: { symbol: 'BSW', address: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1' },
        tokenStacked: { symbol: 'ETH-BTCB LP', address: '0x6216e04cd40db2c6fbed64f1b5830a98d3a91740' },
        tokenEarned: { symbol: 'ETH-BTCB LP', address: '0x6216e04cd40db2c6fbed64f1b5830a98d3a91740' },
        gradient: 'linear-gradient(90deg, rgba(245,243,243,0.2) 0%, rgba(11,23,46,0.2) 100%)',
        disable: true,
    },
    {
        pid: 39,
        network: 56,
        symbol: 'ETH-BTCB LP',
        address: '0x1AFB491895D301a7cea026a5c65316b2C05A56B4',
        isMaximizer: true,
        maximizerVaultPid: 3,
        filter: { platform: platforms.biswap, vaultType: [vaultTypes.lp] },
        basePoolPid: 7,
        baseTokenEarned: { symbol: 'BSW', address: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1' },
        tokenStacked: { symbol: 'ETH-BTCB LP', address: '0x6216e04cd40db2c6fbed64f1b5830a98d3a91740' },
        tokenEarned: { symbol: 'BSW', address: '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1' },
        gradient: 'linear-gradient(90deg, rgba(245,243,243,0.2) 0%, rgba(11,23,46,0.2) 100%)',
    }
]