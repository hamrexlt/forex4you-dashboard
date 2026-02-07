import { UniversalConnector } from "@reown/appkit-universal-connector";

const projectId = "860565723b152e68347c7fc220cf247a";
export const networks = [];

export let universalConnector: UniversalConnector;

export async function getUniversalConnector() {
	if (!universalConnector) {
		universalConnector = await UniversalConnector.init({
			projectId,
			metadata: {
				name: "Forex4Yoult",
				description: "Forex4Yoult",
				url: window.location.origin,
				icons: [],
			},
			networks: [
				// {
				// 	methods: ["tron_signTransaction", "tron_signMessage"],
				// 	chains: [tronMainnet],
				// 	events: [],
				// 	namespace: "tron",
				// },
			],
		});
	}
	return universalConnector;
}
