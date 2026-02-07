import type { UniversalConnector } from "@reown/appkit-universal-connector";
import { useEffect, useState } from "react";
import { getUniversalConnector } from "./wallet-connect";
import { SessionTypes } from "@walletconnect/types";
import { Button } from "@/components/ui/button";

const App = () => {
	const [universalConnector, setUniversalConnector] =
		useState<UniversalConnector>();
	const [session, setSession] = useState<SessionTypes.Struct>();

	useEffect(() => {
		getUniversalConnector().then(setUniversalConnector);
	}, []);

	useEffect(() => {
		setSession(universalConnector?.provider.session);
	}, [universalConnector?.provider.session]);

	const handleConnect = async () => {
		if (!universalConnector) {
			return;
		}

		const { session: providerSession } = await universalConnector.connect();
		setSession(providerSession);
	};
	return <Button onClick={handleConnect}>Connect Wallet</Button>;
};

export default App;
