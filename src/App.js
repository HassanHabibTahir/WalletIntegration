import "./App.css";
import React from "react";
import Profile from "./Profile";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import ReadContract from "./ReadContract";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import CallContract from "./CallContract";
import { motion } from "framer-motion";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from "connectkit";
import UseToken from "./UseToken";
import WriteContract from "./WriteContract";
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

  const bsc_testnet = {
    id: 97,
    name: "Binance Smart Chain",
    network: "bsc",
    nativeCurrency: {
      decimals: 18,
      name: "Binance",
      symbol: "BNB",
    },
    rpcUrls: {
      default: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    },
    blockExplorers: {
      default: { name: "SnowTrace", url: "https://testnet.bscscan.com/" },
    },
    testnet: true,
  };
  const { chains, provider } = configureChains(
    [bsc_testnet],
    [
      jsonRpcProvider({
        rpc: (chain) => {
          if (chain.id !== bsc_testnet.id) return null;
          return { http: chain.rpcUrls.default };
        },
      }),
    ]
  );

  // rpc: (chain) => ({
  //   http:
  //     chain.id === 97
  //       ? `  https://data-seed-prebsc-1-s1.binance.org:8545/`
  //       : "https://bsc-dataseed1.binance.org/",
  // }),

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
        {/* <CallContract /> */}

        <ConnectKitButton />
        {/* <ReadContract /> */}
        {/* <UseToken /> */}
        <WriteContract />
      </ConnectKitProvider>

      {/* <SendTransaction /> */}
      {/* <ContractWrite /> */}
    </WagmiConfig>
  );
}
export default App;
