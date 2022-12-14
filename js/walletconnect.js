// "use strict";

/**
 * Example JavaScript code that interacts with the page and Web3 wallets
 */

// Unpkg imports
const Web3Modal = window.Web3Modal.default
const WalletConnectProvider = window.WalletConnectProvider.default
const evmChains = window.evmChains

// Web3modal instance
let web3Modal

// Chosen wallet provider given by the dialog window
let provider

// Address of the selected account
let selectedAccount
let account = null

// Smart Contract

let SIMPLEWALLET // function kekal satu [ ]

/**
 * Setup the orchestra
 */
function init() {
   if (location.protocol !== 'https:') {
      const alert = document.querySelector('#alert-error-https')
      alert.style.display = 'block'
      document
         .querySelector('#btn-connect')
         .setAttribute('disabled', 'disabled')
      console.log('You can run this Dapp only over HTTPS connection.')
      return
   }

   const providerOptions = {
      walletconnect: {
         package: WalletConnectProvider,
         options: {
            rpc: {
               56: 'https://bsc-dataseed.binance.org/',
               97: 'https://data-seed-prebsc-1-s3.binance.org:8545/',
            },
            network: 'binance',
         },
      },
   }

   web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions,
      disableInjectedProvider: false,
   })

   // console.log("Web3Modal instance is", web3Modal);
}

async function fetchAccountData() {
   await window.ethereum.request({ method: 'eth_requestAccounts' })

   window.web3 = new Web3(window.ethereum)
   const web3 = new Web3(provider)

   const accounts = await web3.eth.getAccounts()

   console.log('Got accounts', accounts)
   selectedAccount = accounts[0]

   account = accounts[0]
   document.getElementById('wallet-address').textContent = account

   //----------------------------------------------------------------------------------------------
   SIMPLEWALLET = new web3.eth.Contract(EXP001, EXP002) // function kekal satu [ ]

   //----------------------------------------------------------------------------------------------

   document.querySelector('#prepare').style.display = 'none'
   document.querySelector('#connected').style.display = ''
}

async function refreshAccountData() {
   document.querySelector('#connected').style.display = 'none'
   document.querySelector('#prepare').style.display = ''

   document.querySelector('#btn-connect').setAttribute('disabled', 'disabled')
   await fetchAccountData(provider)
   document.querySelector('#btn-connect').removeAttribute('disabled')
}

async function onConnect() {
   try {
      provider = await web3Modal.connect()
   } catch (e) {
      return
   }

   provider.on('accountsChanged', (accounts) => {
      fetchAccountData()
   })

   provider.on('chainChanged', (chainId) => {
      fetchAccountData()
   })

   provider.on('disconnect', (chainId) => {})

   await refreshAccountData()
}

async function onDisconnect() {
   // TODO: Which providers have close method?
   if (provider.close) {
      await provider.close()

      await web3Modal.clearCachedProvider()
      provider = null
   }

   selectedAccount = null
   account = null

   document.querySelector('#prepare').style.display = ''
   document.querySelector('#connected').style.display = 'none'
   document.getElementById('wallet-address').textContent = ''
}

window.addEventListener('load', async () => {
   init()
   document.querySelector('#btn-connect').addEventListener('click', onConnect)
   document
      .querySelector('#btn-disconnect')
      .addEventListener('click', onDisconnect)
})
