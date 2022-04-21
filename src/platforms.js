const routers = require("./routers");

module.exports = platforms = {
  all: {
    label: 'All',
    displayLabel: 'All',
  },
  space: {
    label: 'Space',
    displayLabel: '🚀 Space',
    color: '#a1a4ff',
    textColor: '#ffffff',
  },
  apeswap: {
    label: 'ApeSwap',
    displayLabel: '🐵 ApeSwap',
    color: '#f8f5e7',
    textColor: '#0f1c36',
    router: routers[56].apeswap
  },
  biswap: {
    label: 'Biswap',
    displayLabel: 'Biswap',
    color: '#f93b5d',
    textColor: '#ffffff',
    router: routers[56].biswap
  },
  pancakeswap: {
    label: 'PancakeSwap',
    displayLabel: '🥞 PancakeSwap',
    color: '#77d4db',
    textColor: '#0f1c36',
    router: routers[56].pancakeswap
  },
  bluechips: {
    label: 'Blue Chips',
    displayLabel: 'Blue Chips',
    color: '#0089df',
    textColor: '#ffffff',
  },
}