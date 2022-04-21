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
        pid: 104,
        network: 56,
        filter: { platform: platforms.bluechips, vaultType: [vaultTypes.singleAsset] },
        symbol: 'BTCB',
        address: '0xE19dE30b8EDF64484591eBA1b5e40a45a07fA140',
        isSingleToken: true,
        basePoolPid: "BTCB",
        baseTokenEarned: { symbol: 'BTCB', address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c' },
        tokenStacked: { symbol: 'BTCB', address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c' },
        tokenEarned: { symbol: 'BTCB', address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c' },
        gradient: 'linear-gradient(90deg, rgba(248,245,231,0.2) 0%, rgba(11,23,46,0.2) 100%)',
        isMercuryVault: true,
        strategies: [
            {
                tokenFarmed: {
                    symbol: "BTCB",
                    address: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c"
                },
                strategyAddress: "0x804896f7c8881233b49A2d79d996Dc5Ea5c1b641"
            }
        ]
    },
    {
        pid: 105,
        network: 56,
        filter: { platform: platforms.bluechips, vaultType: [vaultTypes.singleAsset] },
        symbol: 'BUSD',
        address: '0x65A945C18B9C0454C1ED447286E96Dc69083eDf5',
        isSingleToken: true,
        basePoolPid: "BUSD",
        baseTokenEarned: { symbol: 'BUSD', address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56' },
        tokenStacked: { symbol: 'BUSD', address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56' },
        tokenEarned: { symbol: 'BUSD', address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56' },
        gradient: 'linear-gradient(90deg, rgba(248,245,231,0.2) 0%, rgba(11,23,46,0.2) 100%)',
        isMercuryVault: true,
        strategies: [
            {
                tokenFarmed: {
                    symbol: "BUSD",
                    address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
                },
                strategyAddress: "0xA7Fc5a2D652296E155E9fDdBeE1De41335bF896d"
            }
        ]
    },
    {
        pid: 106,
        network: 56,
        filter: { platform: platforms.bluechips, vaultType: [vaultTypes.singleAsset] },
        symbol: 'USDC',
        address: '0xb39E83E35c313682bD2d19Ae7c37898aEf2711C6',
        isSingleToken: true,
        basePoolPid: "USDC",
        baseTokenEarned: { symbol: 'USDC', address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d' },
        tokenStacked: { symbol: 'USDC', address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d' },
        tokenEarned: { symbol: 'USDC', address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d' },
        gradient: 'linear-gradient(90deg, rgba(248,245,231,0.2) 0%, rgba(11,23,46,0.2) 100%)',
        isMercuryVault: true,
        strategies: [
            {
                tokenFarmed: {
                    symbol: "USDC",
                    address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"
                },
                strategyAddress: "0x81Bf7450E276c73f4c6B909fd73698351A2Ee6B7"
            }
        ]
    },
    {
        pid: 107,
        network: 56,
        filter: { platform: platforms.bluechips, vaultType: [vaultTypes.singleAsset] },
        symbol: 'USDT',
        address: '0x916938b1bD217cc59e0f213770e5A3C2dBa18Aae',
        isSingleToken: true,
        basePoolPid: "USDT",
        baseTokenEarned: { symbol: 'USDT', address: '0x55d398326f99059fF775485246999027B3197955' },
        tokenStacked: { symbol: 'USDT', address: '0x55d398326f99059fF775485246999027B3197955' },
        tokenEarned: { symbol: 'USDT', address: '0x55d398326f99059fF775485246999027B3197955' },
        gradient: 'linear-gradient(90deg, rgba(248,245,231,0.2) 0%, rgba(11,23,46,0.2) 100%)',
        isMercuryVault: true,
        strategies: [
            {
                tokenFarmed: {
                    symbol: "USDT",
                    address: "0x55d398326f99059fF775485246999027B3197955"
                },
                strategyAddress: "0xCa1E5c79D77A3ee07c2c4ea2755BaFBe60255861"
            }
        ]
    },
    {
        pid: 103,
        network: 56,
        filter: { platform: platforms.bluechips, vaultType: [vaultTypes.singleAsset] },
        symbol: 'ETH',
        address: '0xc373a495205bDBBb1E013880a3FEfC135E11A3aa',
        isSingleToken: true,
        basePoolPid: "eth",
        baseTokenEarned: { symbol: 'ETH', address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8' },
        tokenStacked: { symbol: 'ETH', address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8' },
        tokenEarned: { symbol: 'ETH', address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8' },
        gradient: 'linear-gradient(90deg, rgba(248,245,231,0.2) 0%, rgba(11,23,46,0.2) 100%)',
        isMercuryVault: true,
        strategies: [
            {
                tokenFarmed: {
                    symbol: "ETH",
                    address: "0x2170ed0880ac9a755fd29b2688956bd959f933f8"
                },
                strategyAddress: "0x8421A3B2720d494b199ABc79D6c9599E4Bcf76f8"
            }
        ]
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
                sousChefAddress: "0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9",
                strategyAddress: "0x98a3c995ca2244309baa817e9B05bC2b0C569834"
            },
            {
                tokenFarmed: {
                    symbol: "MANUFACTORY",
                    address: "0x36953b5ec00a13edceceb3af258d034913d2a79d"
                },
                sousChefAddress: "0x7a13FEb86802f979B536b8706C7c598ef2812294",
                strategyAddress: "0x7204E9ba4F22d0dC39B405B5a9E58705C2D6b1b2"
            },
            {
                tokenFarmed: {
                    symbol: "NFTY",
                    address: "0x8623e66bea0dce41b6d47f9c44e806a115babae0"
                },
                sousChefAddress: "0x0F555e92e9470d064F8A6D0b97a2E3F7d26A222d",
                strategyAddress: "0x2c81f03d9037A234078F797b4Da18e07e2Ac3034"
            },
            {
                tokenFarmed: {
                    symbol: "RANKER",
                    address: "0xdE4512Db1a7a7519818dA38DB86eC1363d70A711"
                },
                sousChefAddress: "0xc5a313375D986Ee70FA51a4890aEB8EeB8A5D33B",
                strategyAddress: "0x6d13ff5DCCb46C5Ef24AB24389d41bA216b04ACd"
            },
            {
                tokenFarmed: {
                    symbol: "DOSE",
                    address: "0x7837fd820ba38f95c54d6dac4ca3751b81511357"
                },
                sousChefAddress: "0xd0378c1b37D530a00E91764A7a41EfEB3d6A5fbC",
                strategyAddress: "0x43DD65c33e71682347F5c098FD35d03f3C16F699"
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
                    symbol: "ACH",
                    address: "0xBc7d6B50616989655AfD682fb42743507003056D"
                },
                sousChefAddress: "0xcD1Be742b04DB005e2C445A11BDe6d13DD9dd454",
                strategyAddress: "0x0b012e24e0001965E10E61B6Be33076559dd3dd8"
            },
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
        pid: 108,
        network: 56,
        symbol: "BANANA-BNB LP",
        address: "0x40E0c7d876455EAa50d4bB80C04bc47Ceebc17b8",
        filter: {
            platform: platforms.apeswap,
            vaultType: [vaultTypes.lp]
        },
        isMaximizer: true,
        isMercuryVault: true,
        maximizerVaultPid: 102,
        basePoolPid: 1,
        baseTokenEarned: {
            symbol: "BANANA",
            address: "0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95"
        },
        tokenStacked: {
            symbol: "BANANA-BNB LP",
            address: "0xF65C1C0478eFDe3c19b49EcBE7ACc57BB6B1D713"
        },
        tokenEarned: {
            symbol: "BANANA",
            address: "0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95"
        },
        gradient: "linear-gradient(90deg, rgba(119,212,219,0.2) 0%, rgba(11,23,46,0.2) 100%)",

    },
    {
        pid: 109,
        network: 56,
        symbol: "BANANA-BUSD LP",
        address: "0x8f76C55A52DC4E7e6352f3d70eFF47bb21B17E29",
        filter: {
            platform: platforms.apeswap,
            vaultType: [vaultTypes.lp]
        },
        isMaximizer: true,
        isMercuryVault: true,
        maximizerVaultPid: 102,
        basePoolPid: 2,
        baseTokenEarned: {
            symbol: "BANANA",
            address: "0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95"
        },
        tokenStacked: {
            symbol: "BANANA-BUSD LP",
            address: "0x7Bd46f6Da97312AC2DBD1749f82E202764C0B914"
        },
        tokenEarned: {
            symbol: "BANANA",
            address: "0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95"
        },
        gradient: "linear-gradient(90deg, rgba(119,212,219,0.2) 0%, rgba(11,23,46,0.2) 100%)",

    },
    {
        pid: 110,
        network: 56,
        symbol: "BUSD-BNB LP",
        address: "0xA847A81E870252f306605712b0692757fE16CaDC",
        filter: {
            platform: platforms.apeswap,
            vaultType: [vaultTypes.lp]
        },
        isMaximizer: true,
        isMercuryVault: true,
        maximizerVaultPid: 102,
        basePoolPid: 3,
        baseTokenEarned: {
            symbol: "BANANA",
            address: "0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95"
        },
        tokenStacked: {
            symbol: "BUSD-BNB LP",
            address: "0x51e6D27FA57373d8d4C256231241053a70Cb1d93"
        },
        tokenEarned: {
            symbol: "BANANA",
            address: "0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95"
        },
        gradient: "linear-gradient(90deg, rgba(119,212,219,0.2) 0%, rgba(11,23,46,0.2) 100%)",

    },
    {
        pid: 111,
        network: 56,
        symbol: "ETH-BNB LP",
        address: "0x6df847f9e8CB9279fc88cD1105b13da246d02C6a",
        filter: {
            platform: platforms.apeswap,
            vaultType: [vaultTypes.lp]
        },
        isMaximizer: true,
        isMercuryVault: true,
        maximizerVaultPid: 102,
        basePoolPid: 5,
        baseTokenEarned: {
            symbol: "BANANA",
            address: "0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95"
        },
        tokenStacked: {
            symbol: "ETH-BNB LP",
            address: "0xA0C3Ef24414ED9C9B456740128d8E63D016A9e11"
        },
        tokenEarned: {
            symbol: "BANANA",
            address: "0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95"
        },
        gradient: "linear-gradient(90deg, rgba(119,212,219,0.2) 0%, rgba(11,23,46,0.2) 100%)",

    },
    {
        pid: 112,
        network: 56,
        symbol: "BUSD-USDC LP",
        address: "0x2Dc4288FaF42A01516c376043E6320526BA8F620",
        filter: {
            platform: platforms.apeswap,
            vaultType: [vaultTypes.lp]
        },
        isMaximizer: true,
        isMercuryVault: true,
        maximizerVaultPid: 102,
        basePoolPid: 8,
        baseTokenEarned: {
            symbol: "BANANA",
            address: "0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95"
        },
        tokenStacked: {
            symbol: "BUSD-USDC LP",
            address: "0xC087C78AbaC4A0E900a327444193dBF9BA69058E"
        },
        tokenEarned: {
            symbol: "BANANA",
            address: "0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95"
        },
        gradient: "linear-gradient(90deg, rgba(119,212,219,0.2) 0%, rgba(11,23,46,0.2) 100%)",

    },
    {
        pid: 113,
        network: 56,
        symbol: "ADA-BNB LP",
        address: "0xC27B90a7097D658e3DfDcd351D898881b2B98ADD",
        filter: {
            platform: platforms.apeswap,
            vaultType: [vaultTypes.lp]
        },
        isMaximizer: true,
        isMercuryVault: true,
        maximizerVaultPid: 102,
        basePoolPid: 17,
        baseTokenEarned: {
            symbol: "BANANA",
            address: "0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95"
        },
        tokenStacked: {
            symbol: "ADA-BNB LP",
            address: "0x40d4543887E4170A1A40Cd8dB15A6b297c812Cb1"
        },
        tokenEarned: {
            symbol: "BANANA",
            address: "0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95"
        },
        gradient: "linear-gradient(90deg, rgba(119,212,219,0.2) 0%, rgba(11,23,46,0.2) 100%)",

    },
    {
        pid: 114,
        network: 56,
        symbol: "BUSD-USDT LP",
        address: "0x2fc3ACD83f0FB647AfD3Bbdb200FC475549b93bd",
        filter: {
            platform: platforms.apeswap,
            vaultType: [vaultTypes.lp]
        },
        isMaximizer: true,
        isMercuryVault: true,
        maximizerVaultPid: 102,
        basePoolPid: 34,
        baseTokenEarned: {
            symbol: "BANANA",
            address: "0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95"
        },
        tokenStacked: {
            symbol: "BUSD-USDT LP",
            address: "0x2e707261d086687470B515B320478Eb1C88D49bb"
        },
        tokenEarned: {
            symbol: "BANANA",
            address: "0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95"
        },
        gradient: "linear-gradient(90deg, rgba(119,212,219,0.2) 0%, rgba(11,23,46,0.2) 100%)",
    },

    /// NEW MAXIMIZERS 04/20
    {
        pid: 115,
        network: 56,
        symbol: "CAKE-BNB LP",
        address: "0x0dfD4BC139dD81D98257a0b5dC056f59D22d43F4",
        filter: {
            platform: platforms.pancakeswap,
            vaultType: [vaultTypes.lp]
        },
        isMaximizer: true,
        isMercuryVault: true,
        maximizerVaultPid: 102,
        basePoolPid: 2,
        baseTokenEarned: {
            symbol: "CAKE",
            address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"
        },
        tokenStacked: {
            symbol: "CAKE-BNB LP",
            address: "0x0eD7e52944161450477ee417DE9Cd3a859b14fD0"
        },
        tokenEarned: {
            symbol: "CAKE",
            address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"
        },
        gradient: "linear-gradient(90deg, rgba(119,212,219,0.2) 0%, rgba(11,23,46,0.2) 100%)",
        deployed: false
    },
    {
        pid: 116,
        network: 56,
        symbol: "BNB-BUSD LP",
        address: "0x602C250713F946B7F1339c6D20Fa064f8A81d3ec",
        filter: {
            platform: platforms.pancakeswap,
            vaultType: [vaultTypes.lp]
        },
        isMaximizer: true,
        isMercuryVault: true,
        maximizerVaultPid: 102,
        basePoolPid: 3,
        baseTokenEarned: {
            symbol: "CAKE",
            address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"
        },
        tokenStacked: {
            symbol: "BNB-BUSD LP",
            address: "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16"
        },
        tokenEarned: {
            symbol: "CAKE",
            address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"
        },
        gradient: "linear-gradient(90deg, rgba(119,212,219,0.2) 0%, rgba(11,23,46,0.2) 100%)",
        deployed: false
    },
    {
        pid: 117,
        network: 56,
        symbol: "ADA-BNB LP",
        address: "0xD9ac888a9bF2cB75f4b912a68adf964b6D267a38",
        filter: {
            platform: platforms.pancakeswap,
            vaultType: [vaultTypes.lp]
        },
        isMaximizer: true,
        isMercuryVault: true,
        maximizerVaultPid: 102,
        basePoolPid: 4,
        baseTokenEarned: {
            symbol: "CAKE",
            address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"
        },
        tokenStacked: {
            symbol: "ADA-BNB LP",
            address: "0x28415ff2C35b65B9E5c7de82126b4015ab9d031F"
        },
        tokenEarned: {
            symbol: "CAKE",
            address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"
        },
        gradient: "linear-gradient(90deg, rgba(119,212,219,0.2) 0%, rgba(11,23,46,0.2) 100%)",
        deployed: false
    },
    {
        pid: 118,
        network: 56,
        symbol: "DOT-BNB LP",
        address: "0x3006cf8E63E006A5189778eE1587b0e08C25FcA1",
        filter: {
            platform: platforms.pancakeswap,
            vaultType: [vaultTypes.lp]
        },
        isMaximizer: true,
        isMercuryVault: true,
        maximizerVaultPid: 102,
        basePoolPid: 5,
        baseTokenEarned: {
            symbol: "CAKE",
            address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"
        },
        tokenStacked: {
            symbol: "DOT-BNB LP",
            address: "0xDd5bAd8f8b360d76d12FdA230F8BAF42fe0022CF"
        },
        tokenEarned: {
            symbol: "CAKE",
            address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"
        },
        gradient: "linear-gradient(90deg, rgba(119,212,219,0.2) 0%, rgba(11,23,46,0.2) 100%)",
        deployed: false
    },
    {
        pid: 119,
        network: 56,
        symbol: "LINK-BNB LP",
        address: "0x9DE2d162E9213b45453000A47E4397Ae78811426",
        filter: {
            platform: platforms.pancakeswap,
            vaultType: [vaultTypes.lp]
        },
        isMaximizer: true,
        isMercuryVault: true,
        maximizerVaultPid: 102,
        basePoolPid: 6,
        baseTokenEarned: {
            symbol: "CAKE",
            address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"
        },
        tokenStacked: {
            symbol: "LINK-BNB LP",
            address: "0x824eb9faDFb377394430d2744fa7C42916DE3eCe"
        },
        tokenEarned: {
            symbol: "CAKE",
            address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"
        },
        gradient: "linear-gradient(90deg, rgba(119,212,219,0.2) 0%, rgba(11,23,46,0.2) 100%)",
        deployed: false
    },
    {
        pid: 120,
        network: 56,
        symbol: "USDT-BUSD LP",
        address: "0x14d61d88D5D37aaefd928c55be6f322a8ad8e5a5",
        filter: {
            platform: platforms.pancakeswap,
            vaultType: [vaultTypes.lp]
        },
        isMaximizer: true,
        isMercuryVault: true,
        maximizerVaultPid: 102,
        basePoolPid: 7,
        baseTokenEarned: {
            symbol: "CAKE",
            address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"
        },
        tokenStacked: {
            symbol: "USDT-BUSD LP",
            address: "0x7EFaEf62fDdCCa950418312c6C91Aef321375A00"
        },
        tokenEarned: {
            symbol: "CAKE",
            address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"
        },
        gradient: "linear-gradient(90deg, rgba(119,212,219,0.2) 0%, rgba(11,23,46,0.2) 100%)",
        deployed: false
    },
    {
        pid: 121,
        network: 56,
        symbol: "TWT-BNB LP",
        address: "0xf7EBc580c0DC192459Ba8B073E8D49D88cA52c05",
        filter: {
            platform: platforms.pancakeswap,
            vaultType: [vaultTypes.lp]
        },
        isMaximizer: true,
        isMercuryVault: true,
        maximizerVaultPid: 102,
        basePoolPid: 8,
        baseTokenEarned: {
            symbol: "CAKE",
            address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"
        },
        tokenStacked: {
            symbol: "TWT-BNB LP",
            address: "0x3DcB1787a95D2ea0Eb7d00887704EeBF0D79bb13"
        },
        tokenEarned: {
            symbol: "CAKE",
            address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"
        },
        gradient: "linear-gradient(90deg, rgba(119,212,219,0.2) 0%, rgba(11,23,46,0.2) 100%)",
        deployed: false
    },
    {
        pid: 122,
        network: 56,
        symbol: "XVS-BNB LP",
        address: "0xcDFeBc260359454578BF2446923876840cDe408A",
        filter: {
            platform: platforms.pancakeswap,
            vaultType: [vaultTypes.lp]
        },
        isMaximizer: true,
        isMercuryVault: true,
        maximizerVaultPid: 102,
        basePoolPid: 9,
        baseTokenEarned: {
            symbol: "CAKE",
            address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"
        },
        tokenStacked: {
            symbol: "XVS-BNB LP",
            address: "0x7EB5D86FD78f3852a3e0e064f2842d45a3dB6EA2"
        },
        tokenEarned: {
            symbol: "CAKE",
            address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"
        },
        gradient: "linear-gradient(90deg, rgba(119,212,219,0.2) 0%, rgba(11,23,46,0.2) 100%)",
        deployed: false
    },
    {
        pid: 123,
        network: 56,
        symbol: "ETH-BNB LP",
        address: "0xf633335C8Ae858CeA7AC8c8ab227062526Fd2bDf",
        filter: {
            platform: platforms.pancakeswap,
            vaultType: [vaultTypes.lp]
        },
        isMaximizer: true,
        isMercuryVault: true,
        maximizerVaultPid: 102,
        basePoolPid: 10,
        baseTokenEarned: {
            symbol: "CAKE",
            address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"
        },
        tokenStacked: {
            symbol: "ETH-BNB LP",
            address: "0x74E4716E431f45807DCF19f284c7aA99F18a4fbc"
        },
        tokenEarned: {
            symbol: "CAKE",
            address: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"
        },
        gradient: "linear-gradient(90deg, rgba(119,212,219,0.2) 0%, rgba(11,23,46,0.2) 100%)",
        deployed: false
    },

    ////
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
        disable: true,
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
        disable: true
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
        disable: true
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
        disable: true,
    },
    {
        pid: 48,
        network: 56,
        symbol: 'SING-BUSD LP',
        address: '0xD61b0D30Ba0FBFC943Ebae35ff86eDf299E13B54',
        filter: { platform: platforms.apeswap, vaultType: [vaultTypes.lp] },
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
        disable: true,
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
        disable: true,
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
        disable: true,
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
        disable: true,
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
        disable: true,
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
        disable: true

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
        disable: true
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
        disable: true
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
        disable: true,
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
        disable: true,
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
        disable: true,
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
        disable: true,
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
        disable: true,
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
        disable: true,
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
        disable: true,
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
        disable: true,
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
        disable: true,
    }
]
