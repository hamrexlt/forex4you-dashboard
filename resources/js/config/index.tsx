import {
    CustomCaipNetwork,
} from "@reown/appkit-common";
import { UniversalConnector } from "@reown/appkit-universal-connector";

const projectId = "860565723b152e68347c7fc220cf247a";

const tronMainnet: CustomCaipNetwork = {
    id: "0x2b6653dc",
    chainNamespace: "tron",
    caipNetworkId: "tron:0x2b6653dc",
    name: "Tron Mainnet",
    nativeCurrency: { name: "TRX", symbol: "TRX", decimals: 6 },
    rpcUrls: { default: { http: ["https://api.trongrid.io"] } },
};
const ethMainnet: CustomCaipNetwork = {
    id: "1",
    chainNamespace: "eip155",
    caipNetworkId: "eip155:1",
    name: "Ethereum Mainnet",
    rpcUrls: {
        default: {
            http: [
                "https://mainnet.infura.io/v3/${INFURA_API_KEY}",
                "https://api.mycryptoapi.com/eth",
                "https://cloudflare-eth.com",
            ],
            webSocket: ["wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}"],
        },
    },
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
};
export const networks = [ethMainnet];


export async function getUniversalConnector() {
    return  await UniversalConnector.init({
            projectId,
            metadata: {
                name: "Forex4Yoult",
                description: "Forex4Yoult",
                url: window.location.origin,
                icons: [],
            },
            networks: [
                {
                    methods: ["tron_signTransaction", "tron_signMessage"],
                    chains: [tronMainnet],
                    events: [],
                    namespace: "tron",
                },
                {
                    methods: [
                        "eth_sendTransaction",
                        "eth_call",
                        "eth_sendTransaction",
                        "eth_estimateGas",
                    ],
                    chains: [ethMainnet],
                    events: [],
                    namespace: "eip155",
                },
            ],
        });
 
}
