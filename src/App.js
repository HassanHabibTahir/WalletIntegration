import "./App.css";
import React from "react";
import Profile from "./Profile";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";

import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import CallContract from "./CallContract";
import { motion } from "framer-motion";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from "connectkit";
// import {
//   WagmiConfig,
//   createClient,
//   defaultChains,
//   configureChains,
//   chain,
// } from "wagmi";
import {
  WagmiConfig,
  Chain,
  chain,
  createClient,
  useNetwork,
  configureChains,
  defaultChains,
} from "wagmi";
import { getDefaultProvider } from "ethers";
import { infuraProvider } from "wagmi/providers/infura";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { InjectedConnector } from "wagmi/connectors/injected";
// import { SendTransaction } from "./SendTransaction";
// import { alchemyProvider } from "wagmi/providers/alchemy";
// import { publicProvider } from "wagmi/providers/public";
// import ContractWrite from "./Contractwrite";
// import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
// import { InjectedConnector } from "wagmi/connectors/injected";
// import { MetaMaskConnector } from "wagmi/connectors/metaMask";
// import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
// // import { InfuraProvider } from "@ethersproject/providers";
// import { infuraProvider } from "wagmi/providers/infura";

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
// const INFURA_ID = "36fc2665f5504bc18c3b7f9fab0e0c46";
// const { chains, provider, webSocketProvider } = configureChains(
//   [chain.mainnet, chain.kovan],
//   [infuraProvider({ INFURA_ID })]
// );

// Set up client
// const client = createClient({
//   autoConnect: true,
//   connectors: [
//     new MetaMaskConnector({ chains }),
//     new CoinbaseWalletConnector({
//       chains,
//       options: {
//         appName: "wagmi",
//       },
//     }),
//     new WalletConnectConnector({
//       chains,
//       options: {
//         qrcode: true,
//       },
//     }),
//     new InjectedConnector({
//       chains,
//       options: {
//         name: "Injected",
//         shimDisconnect: true,
//       },
//     }),
//   ],
//   provider,
//   webSocketProvider,
// });

function App() {
  const bnbSmartChain = {
    id: 56,
    name: "BNB Smart Chain Mainnet",
    network: "BNB Smart Chain Mainnet",
    nativeCurrency: {
      decimals: 18,
      name: "BNB",
      symbol: "BNB",
    },
    rpcUrls: {
      default: "https://bsc-dataseed1.binance.org/",
    },
    blockExplorers: {
      default: { name: "BnbTrace", url: "https://bscscan.com/" },
    },
    testnet: false,
  };

  const bnbSmartChainText = {
    id: 97,
    name: "BNB Smart Chain textnet",
    network: "BNB Smart Chain Mainnet",
    nativeCurrency: {
      decimals: 18,
      name: "BNB",
      symbol: "tBNB",
    },
    rpcUrls: {
      default: "ttps://data-seed-hprebsc-1-s1.binance.org:",
    },
    blockExplorers: {
      default: { name: "BnbTrace", url: "https://testnet.bscscan.com/" },
    },
    testnet: false,
  };

  const { chains, provider } = configureChains(
    [bnbSmartChain, bnbSmartChainText],
    [
      jsonRpcProvider({
        rpc: (chain) => ({
          http:
            chain.id === 56
              ? `https://bsc-dataseed1.binance.org/`
              : "https://data-seed-prebsc-1-s1.binance.org:8545/",
        }),
      }),
    ]
  );

  // const client = createClient(
  //   getDefaultClient({
  //     connectors: [
  //       new InjectedConnector({ chains }),
  //       // new WalletConnectConnector({
  //       //   chains,
  //       //   options: {
  //       //     qrcode: true,
  //       //   },
  //       // }),
  //     ],
  //     provider,
  //   })
  // );

  const client = createClient({
    connectors: [
      new MetaMaskConnector({ chains }),
      new CoinbaseWalletConnector({
        chains,
        options: {
          appName: "wagmi",
        },
      }),
      new WalletConnectConnector({
        chains,
        options: {
          qrcode: true,
        },
      }),
      new InjectedConnector({
        chains,
        options: {
          name: "Injected",
          shimDisconnect: true,
        },
      }),
    ],
    provider,
  });

  // console.log(client, "client-->");
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider theme="default" mode="dark">
        <Profile />
        <ConnectKitButton />
      </ConnectKitProvider>

      {/* <SendTransaction /> */}
      {/* <ContractWrite /> */}
    </WagmiConfig>
  );
}
export default App;
