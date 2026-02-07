import { BlockChainEnum } from "../../app/Enums/BlockChainEnum";
import { WalletEnum } from "../../app/Enums/WalletEnum";
import { getUniversalConnector, universalConnector } from "./wallet-connect";
import type { SessionTypes } from "@walletconnect/types";

let session: SessionTypes.Struct | null = null;
let clientAddress = null;

export async function setup() {
	const universalConnector = await getUniversalConnector();

	// check if session is already connected
	if (universalConnector?.provider.session) {
		session = universalConnector?.provider.session;
	}
}

export async function handleConnect() {
	// universalConnector is the universal connector instance from the implementation section
	if (!universalConnector) {
		return;
	}
	console.log(universalConnector);

	// const { session: providerSession } = await universalConnector.connect();
	// get the address from the session
	// if(providerSession.namespaces.usdt) {}
	// console.log(providerSession.namespaces);
	// if (providerSession?.namespaces?.sui?.accounts?.[0]?.split(":")[2]) {
	// 	address = providerSession?.namespaces?.sui?.accounts?.[0]?.split(":")[2];
	// } else if (
	// 	providerSession?.namespaces?.stacks?.accounts?.[0]?.split(":")[2]
	// ) {
	// 	addressStacks =
	// 		providerSession?.namespaces?.stacks?.accounts?.[0]?.split(":")[2];
	// }
	// update the session
	// session = providerSession;
	universalConnector.connect().then(({ session: providerSession }) => {
		console.log(providerSession.namespaces);
		session = providerSession;
	});
}

$(document).ready(async () => {
	$(".select-coin").select2({
		placeholder: "Select coin",
		data: Object.keys(WalletEnum)
			.filter((key) => Number.isNaN(Number(key)))
			.map((key) => {
				return {
					id: key,
					namespace: WalletEnum[key],
					text: key,
				};
			}),
		// allowClear: true,
	});
	let coinSelect = $(".select-coin");
	let coinSelectTouched = false;
	let chainSelect = $(".select-chain");
	coinSelect.on("select2:opening", () => {
		coinSelectTouched = true;
	});
	coinSelect.on("select2:select", (e) => {
		if (coinSelectTouched) {
			const namespace = e.params.data.namespace;
			chainSelect.prop("disabled", false).select2({
				// data: [{ id: 2, text: e.params.data.id }],
				ajax: {
					url: "https://explorer-api.walletconnect.com/v3/chains?projectId=860565723b152e68347c7fc220cf247a&testnets=false",
					data: (params) => {
						var query = {
							// search: params.term,
							// page: params.page || 1
							namespaces: namespace,
						};

						// Query parameters will be ?search=[term]&page=[page]
						return query;
					},
					processResults: (data, params) => {
						const results = Object.entries(data.chains).map(([key, value]) => ({
							id: JSON.stringify({
								name: value.name,
								rpc: value.rpc,
								namespace,
							}),
							text: value.name,
						}));
						return {
							results,
						};
					},
				},
			});
		}
	});
	chainSelect.prop("disabled", true).select2({
		placeholder: "Select chain",
	});

	$("form[name='withdraw-direct']").on("submit", async (e) => {
		e.preventDefault();
		const form = e.target;
		if (!(form instanceof HTMLFormElement)) return;
		const formData = new FormData(form);
		await setup();
		await handleConnect();
		// console.log(formData);
	});
	$("form[name='withdraw-direct']").validate({
		// submitHandler: (form: HTMLFormElement) => {
		// 	console.log(form);
		// },
	});
});
