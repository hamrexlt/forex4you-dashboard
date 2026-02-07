"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[5279],{5279(e,t,i){i.r(t),i.d(t,{AppKitModal:()=>Ui,W3mListWallet:()=>Li,W3mModal:()=>Oi,W3mModalBase:()=>Wi,W3mRouterContainer:()=>Zi,W3mUsageExceededView:()=>Mi});var o=i(1348),a=i(2212),n=i(7028),r=i(2375),s=i(1917),c=i(267),l=i(7030),d=i(2949),u=i(5968),p=i(4922),h=i(9150);const m={isUnsupportedChainView:()=>"UnsupportedChain"===u.I.state.view||"SwitchNetwork"===u.I.state.view&&u.I.state.history.includes("UnsupportedChain"),async safeClose(){if(this.isUnsupportedChainView())return void s.W.shake();await h.U.isSIWXCloseDisabled()?s.W.shake():("DataCapture"!==u.I.state.view&&"DataCaptureOtpConfirm"!==u.I.state.view||p.x.disconnect(),s.W.close())}};var w=i(4544),g=i(9459),y=i(4190),f=i(4944),b=i(8707),v=i(8516),k=i(7735),x=i(3433),S=i(9292),T=i(9361),A=i(6050),I=i(1544);const P={getGasPriceInEther:(e,t)=>Number(t*e)/1e18,getGasPriceInUSD(e,t,i){const o=P.getGasPriceInEther(t,i);return b.S.bigNumber(e).times(o).toNumber()},getPriceImpact({sourceTokenAmount:e,sourceTokenPriceInUSD:t,toTokenPriceInUSD:i,toTokenAmount:o}){const a=b.S.bigNumber(e).times(t),n=b.S.bigNumber(o).times(i);return a.minus(n).div(a).times(100).toNumber()},getMaxSlippage(e,t){const i=b.S.bigNumber(e).div(100);return b.S.multiply(t,i).toNumber()},getProviderFee:(e,t=.0085)=>b.S.bigNumber(e).times(t).toString(),isInsufficientNetworkTokenForGas(e,t){const i=t||"0";return!!b.S.bigNumber(e).eq(0)||b.S.bigNumber(b.S.bigNumber(i)).gt(e)},isInsufficientSourceTokenForSwap(e,t,i){const o=i?.find((e=>e.address===t))?.quantity?.numeric;return b.S.bigNumber(o||"0").lt(e)}};var $=i(560),C=i(5259),E=i(495),N=i(5508);const R=15e4;Error;const q={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,switchingTokens:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:T.oU.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},W=(0,y.BX)({...q}),O={state:W,subscribe:e=>(0,y.B1)(W,(()=>e(W))),subscribeKey:(e,t)=>(0,f.u$)(W,e,t),getParams(){const e=c.W.state.activeChain,t=c.W.getAccountData(e)?.caipAddress??c.W.state.activeCaipAddress,i=A.w.getPlainAddress(t),o=(0,S.K1)(),a=l.a.getConnectorId(c.W.state.activeChain);if(!i)throw new Error("No address found to swap the tokens from.");const n=!W.toToken?.address||!W.toToken?.decimals,r=!W.sourceToken?.address||!W.sourceToken?.decimals||!b.S.bigNumber(W.sourceTokenAmount).gt(0),s=!W.sourceTokenAmount;return{networkAddress:o,fromAddress:i,fromCaipAddress:t,sourceTokenAddress:W.sourceToken?.address,toTokenAddress:W.toToken?.address,toTokenAmount:W.toTokenAmount,toTokenDecimals:W.toToken?.decimals,sourceTokenAmount:W.sourceTokenAmount,sourceTokenDecimals:W.sourceToken?.decimals,invalidToToken:n,invalidSourceToken:r,invalidSourceTokenAmount:s,availableToSwap:t&&!n&&!r&&!s,isAuthConnector:a===v.o.CONNECTOR_ID.AUTH}},async setSourceToken(e){if(!e)return W.sourceToken=e,W.sourceTokenAmount="",void(W.sourceTokenPriceInUSD=0);W.sourceToken=e,await U.setTokenPrice(e.address,"sourceToken")},setSourceTokenAmount(e){W.sourceTokenAmount=e},async setToToken(e){if(!e)return W.toToken=e,W.toTokenAmount="",void(W.toTokenPriceInUSD=0);W.toToken=e,await U.setTokenPrice(e.address,"toToken")},setToTokenAmount(e){W.toTokenAmount=e?b.S.toFixed(e,6):""},async setTokenPrice(e,t){let i=W.tokensPriceMap[e]||0;i||(W.loadingPrices=!0,i=await U.getAddressPrice(e)),"sourceToken"===t?W.sourceTokenPriceInUSD=i:"toToken"===t&&(W.toTokenPriceInUSD=i),W.loadingPrices&&(W.loadingPrices=!1),U.getParams().availableToSwap&&!W.switchingTokens&&U.swapTokens()},async switchTokens(){if(!W.initializing&&W.initialized&&!W.switchingTokens){W.switchingTokens=!0;try{const e=W.toToken?{...W.toToken}:void 0,t=W.sourceToken?{...W.sourceToken}:void 0,i=e&&""===W.toTokenAmount?"1":W.toTokenAmount;U.setSourceTokenAmount(i),U.setToTokenAmount(""),await U.setSourceToken(e),await U.setToToken(t),W.switchingTokens=!1,U.swapTokens()}catch(e){throw W.switchingTokens=!1,e}}},resetState(){W.myTokensWithBalance=q.myTokensWithBalance,W.tokensPriceMap=q.tokensPriceMap,W.initialized=q.initialized,W.initializing=q.initializing,W.switchingTokens=q.switchingTokens,W.sourceToken=q.sourceToken,W.sourceTokenAmount=q.sourceTokenAmount,W.sourceTokenPriceInUSD=q.sourceTokenPriceInUSD,W.toToken=q.toToken,W.toTokenAmount=q.toTokenAmount,W.toTokenPriceInUSD=q.toTokenPriceInUSD,W.networkPrice=q.networkPrice,W.networkTokenSymbol=q.networkTokenSymbol,W.networkBalanceInUSD=q.networkBalanceInUSD,W.inputError=q.inputError},resetValues(){const{networkAddress:e}=U.getParams(),t=W.tokens?.find((t=>t.address===e));U.setSourceToken(t),U.setToToken(void 0)},getApprovalLoadingState:()=>W.loadingApprovalTransaction,clearError(){W.transactionError=void 0},async initializeState(){if(!W.initializing){if(W.initializing=!0,!W.initialized)try{await U.fetchTokens(),W.initialized=!0}catch(e){W.initialized=!1,g.P.showError("Failed to initialize swap"),u.I.goBack()}W.initializing=!1}},async fetchTokens(){const{networkAddress:e}=U.getParams();await U.getNetworkTokenPrice(),await U.getMyTokensWithBalance();const t=W.myTokensWithBalance?.find((t=>t.address===e));t&&(W.networkTokenSymbol=t.symbol,U.setSourceToken(t),U.setSourceTokenAmount("0"))},async getTokenList(){const e=c.W.state.activeCaipNetwork?.caipNetworkId;if(W.caipNetworkId!==e||!W.tokens)try{W.tokensLoading=!0;const t=await I.s.getTokenList(e);W.tokens=t,W.caipNetworkId=e,W.popularTokens=t.sort(((e,t)=>e.symbol<t.symbol?-1:e.symbol>t.symbol?1:0));const i=(e&&T.oU.SUGGESTED_TOKENS_BY_CHAIN?.[e]||[]).map((e=>t.find((t=>t.symbol===e)))).filter((e=>Boolean(e))),o=(T.oU.SWAP_SUGGESTED_TOKENS||[]).map((e=>t.find((t=>t.symbol===e)))).filter((e=>Boolean(e))).filter((e=>!i.some((t=>t.address===e.address))));W.suggestedTokens=[...i,...o]}catch(e){W.tokens=[],W.popularTokens=[],W.suggestedTokens=[]}finally{W.tokensLoading=!1}},async getAddressPrice(e){const t=W.tokensPriceMap[e];if(t)return t;const i=await E.T.fetchTokenPrice({addresses:[e]}),o=i?.fungibles||[],a=[...W.tokens||[],...W.myTokensWithBalance||[]],n=a?.find((t=>t.address===e))?.symbol,r=o.find((e=>e.symbol.toLowerCase()===n?.toLowerCase()))?.price||0,s=parseFloat(r.toString());return W.tokensPriceMap[e]=s,s},async getNetworkTokenPrice(){const{networkAddress:e}=U.getParams(),t=await E.T.fetchTokenPrice({addresses:[e]}).catch((()=>(g.P.showError("Failed to fetch network token price"),{fungibles:[]}))),i=t.fungibles?.[0],o=i?.price.toString()||"0";W.tokensPriceMap[e]=parseFloat(o),W.networkTokenSymbol=i?.symbol||"",W.networkPrice=o},async getMyTokensWithBalance(e){const t=await x.Z.getMyTokensWithBalance({forceUpdate:e,caipNetwork:c.W.state.activeCaipNetwork,address:c.W.getAccountData()?.address}),i=I.s.mapBalancesToSwapTokens(t);i&&(await U.getInitialGasPrice(),U.setBalances(i))},setBalances(e){const{networkAddress:t}=U.getParams(),i=c.W.state.activeCaipNetwork;if(!i)return;const o=e.find((e=>e.address===t));e.forEach((e=>{W.tokensPriceMap[e.address]=e.price||0})),W.myTokensWithBalance=e.filter((e=>e.address.startsWith(i.caipNetworkId))),W.networkBalanceInUSD=o?b.S.multiply(o.quantity.numeric,o.price).toString():"0"},async getInitialGasPrice(){const e=await I.s.fetchGasPrice();if(!e)return{gasPrice:null,gasPriceInUSD:null};switch(c.W.state?.activeCaipNetwork?.chainNamespace){case v.o.CHAIN.SOLANA:return W.gasFee=e.standard??"0",W.gasPriceInUSD=b.S.multiply(e.standard,W.networkPrice).div(1e9).toNumber(),{gasPrice:BigInt(W.gasFee),gasPriceInUSD:Number(W.gasPriceInUSD)};case v.o.CHAIN.EVM:default:const t=e.standard??"0",i=BigInt(t),o=BigInt(R),a=P.getGasPriceInUSD(W.networkPrice,o,i);return W.gasFee=t,W.gasPriceInUSD=a,{gasPrice:i,gasPriceInUSD:a}}},async swapTokens(){const e=c.W.getAccountData()?.address,t=W.sourceToken,i=W.toToken,o=b.S.bigNumber(W.sourceTokenAmount).gt(0);if(o||U.setToTokenAmount(""),!i||!t||W.loadingPrices||!o||!e)return;W.loadingQuote=!0;const a=b.S.bigNumber(W.sourceTokenAmount).times(10**t.decimals).round(0).toFixed(0);try{const o=await E.T.fetchSwapQuote({userAddress:e,from:t.address,to:i.address,gasPrice:W.gasFee,amount:a.toString()});W.loadingQuote=!1;const n=o?.quotes?.[0]?.toAmount;if(!n)return void C.h.open({displayMessage:"Incorrect amount",debugMessage:"Please enter a valid amount"},"error");const r=b.S.bigNumber(n).div(10**i.decimals).toString();U.setToTokenAmount(r);U.hasInsufficientToken(W.sourceTokenAmount,t.address)?W.inputError="Insufficient balance":(W.inputError=void 0,U.setTransactionDetails())}catch(e){const t=await I.s.handleSwapError(e);W.loadingQuote=!1,W.inputError=t||"Insufficient balance"}},async getTransaction(){const{fromCaipAddress:e,availableToSwap:t}=U.getParams(),i=W.sourceToken,o=W.toToken;if(e&&t&&i&&o&&!W.loadingQuote)try{W.loadingBuildTransaction=!0;let t;return t=await I.s.fetchSwapAllowance({userAddress:e,tokenAddress:i.address,sourceTokenAmount:W.sourceTokenAmount,sourceTokenDecimals:i.decimals})?await U.createSwapTransaction():await U.createAllowanceTransaction(),W.loadingBuildTransaction=!1,W.fetchError=!1,t}catch(e){return u.I.goBack(),g.P.showError("Failed to check allowance"),W.loadingBuildTransaction=!1,W.approvalTransaction=void 0,W.swapTransaction=void 0,void(W.fetchError=!0)}},async createAllowanceTransaction(){const{fromCaipAddress:e,sourceTokenAddress:t,toTokenAddress:i}=U.getParams();if(e&&i){if(!t)throw new Error("createAllowanceTransaction - No source token address found.");try{const o=await E.T.generateApproveCalldata({from:t,to:i,userAddress:e}),a=A.w.getPlainAddress(o.tx.from);if(!a)throw new Error("SwapController:createAllowanceTransaction - address is required");const n={data:o.tx.data,to:a,gasPrice:BigInt(o.tx.eip155.gasPrice),value:BigInt(o.tx.value),toAmount:W.toTokenAmount};return W.swapTransaction=void 0,W.approvalTransaction={data:n.data,to:n.to,gasPrice:n.gasPrice,value:n.value,toAmount:n.toAmount},{data:n.data,to:n.to,gasPrice:n.gasPrice,value:n.value,toAmount:n.toAmount}}catch(e){return u.I.goBack(),g.P.showError("Failed to create approval transaction"),W.approvalTransaction=void 0,W.swapTransaction=void 0,void(W.fetchError=!0)}}},async createSwapTransaction(){const{networkAddress:e,fromCaipAddress:t,sourceTokenAmount:i}=U.getParams(),o=W.sourceToken,a=W.toToken;if(!(t&&i&&o&&a))return;const n=p.x.parseUnits(i,o.decimals)?.toString();try{const i=await E.T.generateSwapCalldata({userAddress:t,from:o.address,to:a.address,amount:n,disableEstimate:!0}),r=o.address===e,s=BigInt(i.tx.eip155.gas),c=BigInt(i.tx.eip155.gasPrice),l=A.w.getPlainAddress(i.tx.to);if(!l)throw new Error("SwapController:createSwapTransaction - address is required");const d={data:i.tx.data,to:l,gas:s,gasPrice:c,value:r?BigInt(n??"0"):BigInt("0"),toAmount:W.toTokenAmount};return W.gasPriceInUSD=P.getGasPriceInUSD(W.networkPrice,s,c),W.approvalTransaction=void 0,W.swapTransaction=d,d}catch(e){return u.I.goBack(),g.P.showError("Failed to create transaction"),W.approvalTransaction=void 0,W.swapTransaction=void 0,void(W.fetchError=!0)}},onEmbeddedWalletApprovalSuccess(){g.P.showLoading("Approve limit increase in your wallet"),u.I.replace("SwapPreview")},async sendTransactionForApproval(e){const{fromAddress:t,isAuthConnector:i}=U.getParams();W.loadingApprovalTransaction=!0;i?u.I.pushTransactionStack({onSuccess:U.onEmbeddedWalletApprovalSuccess}):g.P.showLoading("Approve limit increase in your wallet");try{await p.x.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:v.o.CHAIN.EVM}),await U.swapTokens(),await U.getTransaction(),W.approvalTransaction=void 0,W.loadingApprovalTransaction=!1}catch(e){const t=e;W.transactionError=t?.displayMessage,W.loadingApprovalTransaction=!1,g.P.showError(t?.displayMessage||"Transaction error"),N.E.sendEvent({type:"track",event:"SWAP_APPROVAL_ERROR",properties:{message:t?.displayMessage||t?.message||"Unknown",network:c.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:U.state.sourceToken?.symbol||"",swapToToken:U.state.toToken?.symbol||"",swapFromAmount:U.state.sourceTokenAmount||"",swapToAmount:U.state.toTokenAmount||"",isSmartAccount:(0,S.lj)(v.o.CHAIN.EVM)===k.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}},async sendTransactionForSwap(e){if(!e)return;const{fromAddress:t,toTokenAmount:i,isAuthConnector:o}=U.getParams();W.loadingTransaction=!0;const a=`Swapping ${W.sourceToken?.symbol} to ${b.S.formatNumberToLocalString(i,3)} ${W.toToken?.symbol}`,n=`Swapped ${W.sourceToken?.symbol} to ${b.S.formatNumberToLocalString(i,3)} ${W.toToken?.symbol}`;o?u.I.pushTransactionStack({onSuccess(){u.I.replace("Account"),g.P.showLoading(a),O.resetState()}}):g.P.showLoading("Confirm transaction in your wallet");try{const i=[W.sourceToken?.address,W.toToken?.address].join(","),a=await p.x.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:v.o.CHAIN.EVM});return W.loadingTransaction=!1,g.P.showSuccess(n),N.E.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:c.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:U.state.sourceToken?.symbol||"",swapToToken:U.state.toToken?.symbol||"",swapFromAmount:U.state.sourceTokenAmount||"",swapToAmount:U.state.toTokenAmount||"",isSmartAccount:(0,S.lj)(v.o.CHAIN.EVM)===k.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),O.resetState(),o||u.I.replace("Account"),O.getMyTokensWithBalance(i),a}catch(e){const t=e;return W.transactionError=t?.displayMessage,W.loadingTransaction=!1,g.P.showError(t?.displayMessage||"Transaction error"),void N.E.sendEvent({type:"track",event:"SWAP_ERROR",properties:{message:t?.displayMessage||t?.message||"Unknown",network:c.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:U.state.sourceToken?.symbol||"",swapToToken:U.state.toToken?.symbol||"",swapFromAmount:U.state.sourceTokenAmount||"",swapToAmount:U.state.toTokenAmount||"",isSmartAccount:(0,S.lj)(v.o.CHAIN.EVM)===k.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}},hasInsufficientToken:(e,t)=>P.isInsufficientSourceTokenForSwap(e,t,W.myTokensWithBalance),setTransactionDetails(){const{toTokenAddress:e,toTokenDecimals:t}=U.getParams();e&&t&&(W.gasPriceInUSD=P.getGasPriceInUSD(W.networkPrice,BigInt(W.gasFee),BigInt(R)),W.priceImpact=P.getPriceImpact({sourceTokenAmount:W.sourceTokenAmount,sourceTokenPriceInUSD:W.sourceTokenPriceInUSD,toTokenPriceInUSD:W.toTokenPriceInUSD,toTokenAmount:W.toTokenAmount}),W.maxSlippage=P.getMaxSlippage(W.slippage,W.toTokenAmount),W.providerFee=P.getProviderFee(W.sourceTokenAmount))}},U=(0,$.X)(O);var z=i(2026),D=i(61),M=i(2278),F=i(1057);const j=F.AH`
  :host {
    display: block;
    border-radius: clamp(0px, ${({borderRadius:e})=>e[8]}, 44px);
    box-shadow: 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    overflow: hidden;
  }
`;var B=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let L=class extends o.WF{render(){return o.qy`<slot></slot>`}};L.styles=[D.W5,j],L=B([(0,M.E)("wui-card")],L);i(502),i(4525),i(6153),i(6623);const H=F.AH`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[6]};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};

      wui-icon {
        color: ${({tokens:e})=>e.theme.iconDefault};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderSuccess};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundWarning};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderWarning};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundError};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderError};
      }
    }
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: var(--local-icon-bg-value);
  }
`;var _=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const Z={info:"info",success:"checkmark",warning:"warningCircle",error:"warning"};let V=class extends o.WF{constructor(){super(...arguments),this.message="",this.type="info"}render(){return o.qy`
      <wui-flex
        data-type=${(0,n.J)(this.type)}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <wui-flex columnGap="2" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color="inherit" size="md" name=${Z[this.type]}></wui-icon>
          </wui-flex>
          <wui-text variant="md-medium" color="inherit" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="inherit"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){C.h.close()}};V.styles=[D.W5,H],_([(0,a.MZ)()],V.prototype,"message",void 0),_([(0,a.MZ)()],V.prototype,"type",void 0),V=_([(0,M.E)("wui-alertbar")],V);const K=z.AH`
  :host {
    display: block;
    position: absolute;
    top: ${({spacing:e})=>e[3]};
    left: ${({spacing:e})=>e[4]};
    right: ${({spacing:e})=>e[4]};
    opacity: 0;
    pointer-events: none;
  }
`;var Q=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const G={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"warning"}};let Y=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.open=C.h.state.open,this.onOpen(!0),this.unsubscribe.push(C.h.subscribeKey("open",(e=>{this.open=e,this.onOpen(!1)})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t}=C.h.state,i=G[t];return o.qy`
      <wui-alertbar
        message=${e}
        backgroundColor=${i?.backgroundColor}
        iconColor=${i?.iconColor}
        icon=${i?.icon}
        type=${t}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};Y.styles=K,Q([(0,a.wk)()],Y.prototype,"open",void 0),Y=Q([(0,z.EM)("w3m-alertbar")],Y);var J=i(4413),X=i(437);const ee=F.AH`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({tokens:e})=>e.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var te=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let ie=class extends o.WF{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return o.qy`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${(0,n.J)(this.iconSize)}></wui-icon>
    </button>`}};ie.styles=[D.W5,D.fD,ee],te([(0,a.MZ)()],ie.prototype,"icon",void 0),te([(0,a.MZ)()],ie.prototype,"variant",void 0),te([(0,a.MZ)()],ie.prototype,"type",void 0),te([(0,a.MZ)()],ie.prototype,"size",void 0),te([(0,a.MZ)()],ie.prototype,"iconSize",void 0),te([(0,a.MZ)({type:Boolean})],ie.prototype,"fullWidth",void 0),te([(0,a.MZ)({type:Boolean})],ie.prototype,"disabled",void 0),ie=te([(0,M.E)("wui-icon-button")],ie);i(1255);const oe=F.AH`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    border-radius: ${({borderRadius:e})=>e[32]};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-type='filled-dropdown'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    opacity: 0.5;
  }
`;var ae=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const ne={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},re={lg:"lg",md:"md",sm:"sm"};let se=class extends o.WF{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size="lg",this.type="text-dropdown",this.disabled=!1}render(){return o.qy`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){const e=ne[this.size];return this.text?o.qy`<wui-text color="primary" variant=${e}>${this.text}</wui-text>`:null}imageTemplate(){if(this.imageSrc)return o.qy`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;const e=re[this.size];return o.qy` <wui-flex class="left-icon-container">
      <wui-icon size=${e} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};se.styles=[D.W5,D.fD,oe],ae([(0,a.MZ)()],se.prototype,"imageSrc",void 0),ae([(0,a.MZ)()],se.prototype,"text",void 0),ae([(0,a.MZ)()],se.prototype,"size",void 0),ae([(0,a.MZ)()],se.prototype,"type",void 0),ae([(0,a.MZ)({type:Boolean})],se.prototype,"disabled",void 0),se=ae([(0,M.E)("wui-select")],se);i(1464),i(6322);const ce={ACCOUNT_TABS:[{label:"Tokens"},{label:"Activity"}],SECURE_SITE_ORIGIN:("undefined"!=typeof process&&void 0!==process.env?process.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150},VIEWS_WITH_LEGAL_FOOTER:["Connect","ConnectWallets","OnRampTokenSelect","OnRampFiatSelect","OnRampProviders"],VIEWS_WITH_DEFAULT_FOOTER:["Networks"]};i(9517),i(3236);const le=F.AH`
  button {
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button[data-variant='accent']:hover:enabled,
  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='primary']:hover:enabled,
  button[data-variant='primary']:focus-visible,
  button[data-variant='secondary']:hover:enabled,
  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button[data-size='xs'] > wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='xs'],
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'],
  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='md'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button:disabled {
    background-color: transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`;var de=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let ue=class extends o.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="default",this.variant="accent"}render(){return o.qy`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${{accent:"accent-primary",primary:"inverse",secondary:"default"}[this.variant]||this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `}};ue.styles=[D.W5,D.fD,le],de([(0,a.MZ)()],ue.prototype,"size",void 0),de([(0,a.MZ)({type:Boolean})],ue.prototype,"disabled",void 0),de([(0,a.MZ)()],ue.prototype,"icon",void 0),de([(0,a.MZ)()],ue.prototype,"iconColor",void 0),de([(0,a.MZ)()],ue.prototype,"variant",void 0),ue=de([(0,M.E)("wui-icon-link")],ue);i(1341),i(8685);const pe=o.JW`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var he=i(1928);const me=o.JW`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,we=F.AH`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({tokens:e})=>e.core.glass010};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var ge=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let ye=class extends o.WF{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:me,md:he.a,lg:pe},this.selected=!1,this.round=!1}render(){const e={sm:"4",md:"6",lg:"10"};return this.round?(this.dataset.round="true",this.style.cssText="\n      --local-width: var(--apkt-spacing-10);\n      --local-height: var(--apkt-spacing-10);\n      --local-icon-size: var(--apkt-spacing-4);\n    "):this.style.cssText=`\n\n      --local-path: var(--apkt-path-network-${this.size});\n      --local-width:  var(--apkt-width-network-${this.size});\n      --local-height:  var(--apkt-height-network-${this.size});\n      --local-icon-size:  var(--apkt-spacing-${e[this.size]});\n    `,o.qy`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:o.qy`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};ye.styles=[D.W5,we],ge([(0,a.MZ)()],ye.prototype,"size",void 0),ge([(0,a.MZ)()],ye.prototype,"name",void 0),ge([(0,a.MZ)({type:Object})],ye.prototype,"networkImagesBySize",void 0),ge([(0,a.MZ)()],ye.prototype,"imageSrc",void 0),ge([(0,a.MZ)({type:Boolean})],ye.prototype,"selected",void 0),ge([(0,a.MZ)({type:Boolean})],ye.prototype,"round",void 0),ye=ge([(0,M.E)("wui-network-image")],ye);const fe=F.AH`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:e})=>e.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  :host([data-bg-color='primary']) > wui-text {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  :host([data-bg-color='secondary']) > wui-text {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }
`;var be=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let ve=class extends o.WF{constructor(){super(...arguments),this.text="",this.bgColor="primary"}render(){return this.dataset.bgColor=this.bgColor,o.qy`${this.template()}`}template(){return this.text?o.qy`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};ve.styles=[D.W5,fe],be([(0,a.MZ)()],ve.prototype,"text",void 0),be([(0,a.MZ)()],ve.prototype,"bgColor",void 0),ve=be([(0,M.E)("wui-separator")],ve);i(9220);var ke=i(1890),xe=i(4141);const Se="INVALID_PAYMENT_CONFIG",Te="INVALID_RECIPIENT",Ae="INVALID_ASSET",Ie="INVALID_AMOUNT",Pe="UNKNOWN_ERROR",$e="UNABLE_TO_INITIATE_PAYMENT",Ce="INVALID_CHAIN_NAMESPACE",Ee="GENERIC_PAYMENT_ERROR",Ne="UNABLE_TO_GET_EXCHANGES",Re="ASSET_NOT_SUPPORTED",qe="UNABLE_TO_GET_PAY_URL",We="UNABLE_TO_GET_BUY_STATUS",Oe="UNABLE_TO_GET_TOKEN_BALANCES",Ue="UNABLE_TO_GET_QUOTE",ze="UNABLE_TO_GET_QUOTE_STATUS",De="INVALID_RECIPIENT_ADDRESS_FOR_ASSET",Me={[Se]:"Invalid payment configuration",[Te]:"Invalid recipient address",[Ae]:"Invalid asset specified",[Ie]:"Invalid payment amount",[De]:"Invalid recipient address for the asset selected",[Pe]:"Unknown payment error occurred",[$e]:"Unable to initiate payment",[Ce]:"Invalid chain namespace",[Ee]:"Unable to process payment",[Ne]:"Unable to get exchanges",[Re]:"Asset not supported by the selected exchange",[qe]:"Unable to get payment URL",[We]:"Unable to get buy status",[Oe]:"Unable to get token balances",[Ue]:"Unable to get quote. Please choose a different token",[ze]:"Unable to get quote status"};class Fe extends Error{get message(){return Me[this.code]}constructor(e,t){super(Me[e]),this.name="AppKitPayError",this.code=e,this.details=t,Error.captureStackTrace&&Error.captureStackTrace(this,Fe)}}var je=i(9477);const Be="reown_test";var Le=i(6982),He=i(6844);function _e(e){if(!e)return null;const t=e.steps[0];return t&&t.type===rt?t:null}function Ze(e,t=0){if(!e)return[];const i=e.steps.filter((e=>e.type===st)),o=i.filter(((e,i)=>i+1>t));return i.length>0&&i.length<3?o:[]}const Ve=new je.Z({baseUrl:A.w.getApiUrl(),clientId:null});class Ke extends Error{}function Qe(){const{projectId:e,sdkType:t,sdkVersion:i}=r.H.state;return{projectId:e,st:t||"appkit",sv:i||"html-wagmi-4.2.2"}}async function Ge(e,t){const i=`https://rpc.walletconnect.org/v1/json-rpc?projectId=${r.H.getSnapshot().projectId}`,{sdkType:o,sdkVersion:a,projectId:n}=r.H.getSnapshot(),s={jsonrpc:"2.0",id:1,method:e,params:{...t||{},st:o,sv:a,projectId:n}},c=await fetch(i,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}),l=await c.json();if(l.error)throw new Ke(l.error.message);return l}async function Ye(e){return(await Ge("reown_getExchanges",e)).result}async function Je(e){return(await Ge("reown_getExchangePayUrl",e)).result}async function Xe(e){const t=xe.y.isLowerCaseMatch(e.sourceToken.network,e.toToken.network),i=xe.y.isLowerCaseMatch(e.sourceToken.asset,e.toToken.asset);return t&&i?async function({sourceToken:e,toToken:t,amount:i,recipient:o}){const a=p.x.parseUnits(i,e.metadata.decimals),n=p.x.parseUnits(i,t.metadata.decimals);return Promise.resolve({type:nt,origin:{amount:a?.toString()??"0",currency:e},destination:{amount:n?.toString()??"0",currency:t},fees:[{id:"service",label:"Service Fee",amount:"0",currency:t}],steps:[{requestId:nt,type:"deposit",deposit:{amount:a?.toString()??"0",currency:e.asset,receiver:o}}],timeInSeconds:6})}(e):async function(e){const t=b.S.bigNumber(e.amount).times(10**e.toToken.metadata.decimals).toString(),{chainId:i,chainNamespace:o}=ke.C.parseCaipNetworkId(e.sourceToken.network),{chainId:a,chainNamespace:n}=ke.C.parseCaipNetworkId(e.toToken.network),r="native"===e.sourceToken.asset?(0,S.NH)(o):e.sourceToken.asset,s="native"===e.toToken.asset?(0,S.NH)(n):e.toToken.asset;return await Ve.post({path:"/appkit/v1/transfers/quote",body:{user:e.address,originChainId:i.toString(),originCurrency:r,destinationChainId:a.toString(),destinationCurrency:s,recipient:e.recipient,amount:t},params:Qe()})}(e)}const et=["eip155","solana"],tt={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};function it(e,t){const{chainNamespace:i,chainId:o}=ke.C.parseCaipNetworkId(e),a=tt[i];if(!a)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${i}`);let n=a.native.assetNamespace,r=a.native.assetReference;"native"!==t&&(n=a.defaultTokenNamespace,r=t);return`${`${i}:${o}`}/${n}:${r}`}function ot(e){const t=b.S.bigNumber(e,{safe:!0});return t.lt(.001)?"<0.001":t.round(4).toString()}const at="unknown",nt="direct-transfer",rt="deposit",st="transaction",ct=(0,y.BX)({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0,choice:"pay",tokenBalances:{[v.o.CHAIN.EVM]:[],[v.o.CHAIN.SOLANA]:[]},isFetchingTokenBalances:!1,selectedPaymentAsset:null,quote:void 0,quoteStatus:"waiting",quoteError:null,isFetchingQuote:!1,selectedExchange:void 0,exchangeUrlForQuote:void 0,requestId:void 0}),lt={state:ct,subscribe:e=>(0,y.B1)(ct,(()=>e(ct))),subscribeKey:(e,t)=>(0,f.u$)(ct,e,t),async handleOpenPay(e){this.resetState(),this.setPaymentConfig(e),this.initializeAnalytics(),function(){const{chainNamespace:e}=ke.C.parseCaipNetworkId(lt.state.paymentAsset.network);if(!A.w.isAddress(lt.state.recipient,e))throw new Fe(De,`Provide valid recipient address for namespace "${e}"`)}(),await this.prepareTokenLogo(),ct.isConfigured=!0,N.E.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:ct.exchanges,configuration:{network:ct.paymentAsset.network,asset:ct.paymentAsset.asset,recipient:ct.recipient,amount:ct.amount}}}),await s.W.open({view:"Pay"})},resetState(){ct.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},ct.recipient="0x0",ct.amount=0,ct.isConfigured=!1,ct.error=null,ct.isPaymentInProgress=!1,ct.isLoading=!1,ct.currentPayment=void 0,ct.selectedExchange=void 0,ct.exchangeUrlForQuote=void 0,ct.requestId=void 0},resetQuoteState(){ct.quote=void 0,ct.quoteStatus="waiting",ct.quoteError=null,ct.isFetchingQuote=!1,ct.requestId=void 0},setPaymentConfig(e){if(!e.paymentAsset)throw new Fe(Se);try{ct.choice=e.choice??"pay",ct.paymentAsset=e.paymentAsset,ct.recipient=e.recipient,ct.amount=e.amount,ct.openInNewTab=e.openInNewTab??!0,ct.redirectUrl=e.redirectUrl,ct.payWithExchange=e.payWithExchange,ct.error=null}catch(e){throw new Fe(Se,e.message)}},setSelectedPaymentAsset(e){ct.selectedPaymentAsset=e},setSelectedExchange(e){ct.selectedExchange=e},setRequestId(e){ct.requestId=e},setPaymentInProgress(e){ct.isPaymentInProgress=e},getPaymentAsset:()=>ct.paymentAsset,getExchanges:()=>ct.exchanges,async fetchExchanges(){try{ct.isLoading=!0;const e=await Ye({page:0});ct.exchanges=e.exchanges.slice(0,2)}catch(e){throw g.P.showError(Me.UNABLE_TO_GET_EXCHANGES),new Fe(Ne)}finally{ct.isLoading=!1}},async getAvailableExchanges(e){try{const t=e?.asset&&e?.network?it(e.network,e.asset):void 0;return await Ye({page:e?.page??0,asset:t,amount:e?.amount?.toString()})}catch(e){throw new Fe(Ne)}},async getPayUrl(e,t,i=!1){try{const o=Number(t.amount),a=await Je({exchangeId:e,asset:it(t.network,t.asset),amount:o.toString(),recipient:`${t.network}:${t.recipient}`});return N.E.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:o},currentPayment:{type:"exchange",exchangeId:e},headless:i}}),i&&(this.initiatePayment(),N.E.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:ct.paymentId||at,configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:o},currentPayment:{type:"exchange",exchangeId:e}}})),a}catch(e){if(e instanceof Error&&e.message.includes("is not supported"))throw new Fe(Re);throw new Error(e.message)}},async generateExchangeUrlForQuote({exchangeId:e,paymentAsset:t,amount:i,recipient:o}){const a=await Je({exchangeId:e,asset:it(t.network,t.asset),amount:i.toString(),recipient:o});ct.exchangeSessionId=a.sessionId,ct.exchangeUrlForQuote=a.url},async openPayUrl(e,t,i=!1){try{const o=await this.getPayUrl(e.exchangeId,t,i);if(!o)throw new Fe(qe);const a=e.openInNewTab??!0?"_blank":"_self";return A.w.openHref(o.url,a),o}catch(e){throw ct.error=e instanceof Fe?e.message:Me.GENERIC_PAYMENT_ERROR,new Fe(qe)}},async onTransfer({chainNamespace:e,fromAddress:t,toAddress:i,amount:o,paymentAsset:a}){if(ct.currentPayment={type:"wallet",status:"IN_PROGRESS"},!ct.isPaymentInProgress)try{this.initiatePayment();const n=c.W.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===a.network));if(!n)throw new Error("Target network not found");const r=c.W.state.activeCaipNetwork;switch(xe.y.isLowerCaseMatch(r?.caipNetworkId,n.caipNetworkId)||await c.W.switchActiveNetwork(n),e){case v.o.CHAIN.EVM:"native"===a.asset&&(ct.currentPayment.result=await async function(e,t,i){if(t!==v.o.CHAIN.EVM)throw new Fe(Ce);if(!i.fromAddress)throw new Fe(Se,"fromAddress is required for native EVM payments.");const o="string"==typeof i.amount?parseFloat(i.amount):i.amount;if(isNaN(o))throw new Fe(Se);const a=e.metadata?.decimals??18,n=p.x.parseUnits(o.toString(),a);if("bigint"!=typeof n)throw new Fe(Ee);return await p.x.sendTransaction({chainNamespace:t,to:i.recipient,address:i.fromAddress,value:n,data:"0x"})??void 0}(a,e,{recipient:i,amount:o,fromAddress:t})),a.asset.startsWith("0x")&&(ct.currentPayment.result=await async function(e,t){if(!t.fromAddress)throw new Fe(Se,"fromAddress is required for ERC20 EVM payments.");const i=e.asset,o=t.recipient,a=Number(e.metadata.decimals),n=p.x.parseUnits(t.amount.toString(),a);if(void 0===n)throw new Fe(Ee);return await p.x.writeContract({fromAddress:t.fromAddress,tokenAddress:i,args:[o,n],method:"transfer",abi:Le.v.getERC20Abi(i),chainNamespace:v.o.CHAIN.EVM})??void 0}(a,{recipient:i,amount:o,fromAddress:t})),ct.currentPayment.status="SUCCESS";break;case v.o.CHAIN.SOLANA:ct.currentPayment.result=await async function(e,t){if(e!==v.o.CHAIN.SOLANA)throw new Fe(Ce);if(!t.fromAddress)throw new Fe(Se,"fromAddress is required for Solana payments.");const i="string"==typeof t.amount?parseFloat(t.amount):t.amount;if(isNaN(i)||i<=0)throw new Fe(Se,"Invalid payment amount.");try{if(!He.G.getProvider(e))throw new Fe(Ee,"No Solana provider available.");const o=await p.x.sendTransaction({chainNamespace:v.o.CHAIN.SOLANA,to:t.recipient,value:i,tokenMint:t.tokenMint});if(!o)throw new Fe(Ee,"Transaction failed.");return o}catch(e){if(e instanceof Fe)throw e;throw new Fe(Ee,`Solana payment failed: ${e}`)}}(e,{recipient:i,amount:o,fromAddress:t,tokenMint:"native"===a.asset?void 0:a.asset}),ct.currentPayment.status="SUCCESS";break;default:throw new Fe(Ce)}}catch(e){throw ct.error=e instanceof Fe?e.message:Me.GENERIC_PAYMENT_ERROR,ct.currentPayment.status="FAILED",g.P.showError(ct.error),e}finally{ct.isPaymentInProgress=!1}},async onSendTransaction(e){try{const{namespace:t,transactionStep:i}=e;lt.initiatePayment();const o=c.W.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===ct.paymentAsset?.network));if(!o)throw new Error("Target network not found");const a=c.W.state.activeCaipNetwork;if(xe.y.isLowerCaseMatch(a?.caipNetworkId,o.caipNetworkId)||await c.W.switchActiveNetwork(o),t===v.o.CHAIN.EVM){const{from:e,to:o,data:a,value:n}=i.transaction;await p.x.sendTransaction({address:e,to:o,data:a,value:BigInt(n),chainNamespace:t})}else if(t===v.o.CHAIN.SOLANA){const{instructions:e}=i.transaction;await p.x.writeSolanaTransaction({instructions:e})}}catch(e){throw ct.error=e instanceof Fe?e.message:Me.GENERIC_PAYMENT_ERROR,g.P.showError(ct.error),e}finally{ct.isPaymentInProgress=!1}},getExchangeById:e=>ct.exchanges.find((t=>t.id===e)),validatePayConfig(e){const{paymentAsset:t,recipient:i,amount:o}=e;if(!t)throw new Fe(Se);if(!i)throw new Fe(Te);if(!t.asset)throw new Fe(Ae);if(null==o||o<=0)throw new Fe(Ie)},async handlePayWithExchange(e){try{ct.currentPayment={type:"exchange",exchangeId:e};const{network:t,asset:i}=ct.paymentAsset,o={network:t,asset:i,amount:ct.amount,recipient:ct.recipient},a=await this.getPayUrl(e,o);if(!a)throw new Fe($e);return ct.currentPayment.sessionId=a.sessionId,ct.currentPayment.status="IN_PROGRESS",ct.currentPayment.exchangeId=e,this.initiatePayment(),{url:a.url,openInNewTab:ct.openInNewTab}}catch(e){return ct.error=e instanceof Fe?e.message:Me.GENERIC_PAYMENT_ERROR,ct.isPaymentInProgress=!1,g.P.showError(ct.error),null}},async getBuyStatus(e,t){try{const i=await async function(e){return(await Ge("reown_getExchangeBuyStatus",e)).result}({sessionId:t,exchangeId:e});return"SUCCESS"!==i.status&&"FAILED"!==i.status||N.E.sendEvent({type:"track",event:"SUCCESS"===i.status?"PAY_SUCCESS":"PAY_ERROR",properties:{message:"FAILED"===i.status?A.w.parseError(ct.error):void 0,source:"pay",paymentId:ct.paymentId||at,configuration:{network:ct.paymentAsset.network,asset:ct.paymentAsset.asset,recipient:ct.recipient,amount:ct.amount},currentPayment:{type:"exchange",exchangeId:ct.currentPayment?.exchangeId,sessionId:ct.currentPayment?.sessionId,result:i.txHash}}}),i}catch(e){throw new Fe(We)}},async fetchTokensFromEOA({caipAddress:e,caipNetwork:t,namespace:i}){if(!e)return[];const{address:o}=ke.C.parseCaipAddress(e);let a=t;i===v.o.CHAIN.EVM&&(a=void 0);return await x.Z.getMyTokensWithBalance({address:o,caipNetwork:a})},async fetchTokensFromExchange(){if(!ct.selectedExchange)return[];const e=await async function(e){return await Ve.get({path:`/appkit/v1/transfers/assets/exchanges/${e}`,params:Qe()})}(ct.selectedExchange.id),t=Object.values(e.assets).flat();return await Promise.all(t.map((async e=>{const t={chainId:(i=e).network,address:`${i.network}:${i.asset}`,symbol:i.metadata.symbol,name:i.metadata.name,iconUrl:i.metadata.logoURI||"",price:0,quantity:{numeric:"0",decimals:i.metadata.decimals.toString()}};var i;const{chainNamespace:o}=ke.C.parseCaipNetworkId(t.chainId);let a=t.address;if(A.w.isCaipAddress(a)){const{address:e}=ke.C.parseCaipAddress(a);a=e}const n=await J.$.getImageByToken(a??"",o).catch((()=>{}));return t.iconUrl=n??"",t})))},async fetchTokens({caipAddress:e,caipNetwork:t,namespace:i}){try{ct.isFetchingTokenBalances=!0;const o=Boolean(ct.selectedExchange)?this.fetchTokensFromExchange():this.fetchTokensFromEOA({caipAddress:e,caipNetwork:t,namespace:i}),a=await o;ct.tokenBalances={...ct.tokenBalances,[i]:a}}catch(e){const t=e instanceof Error?e.message:"Unable to get token balances";g.P.showError(t)}finally{ct.isFetchingTokenBalances=!1}},async fetchQuote({amount:e,address:t,sourceToken:i,toToken:o,recipient:a}){try{lt.resetQuoteState(),ct.isFetchingQuote=!0;const n=await Xe({amount:e,address:ct.selectedExchange?void 0:t,sourceToken:i,toToken:o,recipient:a});if(ct.selectedExchange){const e=_e(n);if(e){const t=`${i.network}:${e.deposit.receiver}`,o=b.S.formatNumber(e.deposit.amount,{decimals:i.metadata.decimals??0,round:8});await lt.generateExchangeUrlForQuote({exchangeId:ct.selectedExchange.id,paymentAsset:i,amount:o.toString(),recipient:t})}}ct.quote=n}catch(e){let t=Me.UNABLE_TO_GET_QUOTE;if(e instanceof Error&&e.cause&&e.cause instanceof Response)try{const i=await e.cause.json();i.error&&"string"==typeof i.error&&(t=i.error)}catch{}throw ct.quoteError=t,g.P.showError(t),new Fe(Ue)}finally{ct.isFetchingQuote=!1}},async fetchQuoteStatus({requestId:e}){try{if(e===nt){const e=ct.selectedExchange,t=ct.exchangeSessionId;if(e&&t){switch((await this.getBuyStatus(e.id,t)).status){case"IN_PROGRESS":case"UNKNOWN":default:ct.quoteStatus="waiting";break;case"SUCCESS":ct.quoteStatus="success",ct.isPaymentInProgress=!1;break;case"FAILED":ct.quoteStatus="failure",ct.isPaymentInProgress=!1}return}return void(ct.quoteStatus="success")}const{status:t}=await async function(e){return await Ve.get({path:"/appkit/v1/transfers/status",params:{requestId:e.requestId,...Qe()}})}({requestId:e});ct.quoteStatus=t}catch{throw ct.quoteStatus="failure",new Fe(ze)}},initiatePayment(){ct.isPaymentInProgress=!0,ct.paymentId=crypto.randomUUID()},initializeAnalytics(){ct.analyticsSet||(ct.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",(e=>{if(ct.currentPayment?.status&&"UNKNOWN"!==ct.currentPayment.status){const e={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[ct.currentPayment.status];N.E.sendEvent({type:"track",event:e,properties:{message:"FAILED"===ct.currentPayment.status?A.w.parseError(ct.error):void 0,source:"pay",paymentId:ct.paymentId||at,configuration:{network:ct.paymentAsset.network,asset:ct.paymentAsset.asset,recipient:ct.recipient,amount:ct.amount},currentPayment:{type:ct.currentPayment.type,exchangeId:ct.currentPayment.exchangeId,sessionId:ct.currentPayment.sessionId,result:ct.currentPayment.result}}})}})))},async prepareTokenLogo(){if(!ct.paymentAsset.metadata.logoURI)try{const{chainNamespace:e}=ke.C.parseCaipNetworkId(ct.paymentAsset.network),t=await J.$.getImageByToken(ct.paymentAsset.asset,e);ct.paymentAsset.metadata.logoURI=t}catch{}}},dt=z.AH`
  wui-separator {
    margin: var(--apkt-spacing-3) calc(var(--apkt-spacing-3) * -1) var(--apkt-spacing-2)
      calc(var(--apkt-spacing-3) * -1);
    width: calc(100% + var(--apkt-spacing-3) * 2);
  }

  .token-display {
    padding: var(--apkt-spacing-3) var(--apkt-spacing-3);
    border-radius: var(--apkt-borderRadius-5);
    background-color: var(--apkt-tokens-theme-backgroundPrimary);
    margin-top: var(--apkt-spacing-3);
    margin-bottom: var(--apkt-spacing-3);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--apkt-spacing-2);
  }

  .left-image-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 40px;
    height: 40px;
  }

  .chain-image {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .payment-methods-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[8]};
    border-top-left-radius: ${({borderRadius:e})=>e[8]};
  }
`;var ut=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let pt=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.amount=lt.state.amount,this.namespace=void 0,this.paymentAsset=lt.state.paymentAsset,this.activeConnectorIds=l.a.state.activeConnectorIds,this.caipAddress=void 0,this.exchanges=lt.state.exchanges,this.isLoading=lt.state.isLoading,this.initializeNamespace(),this.unsubscribe.push(lt.subscribeKey("amount",(e=>this.amount=e))),this.unsubscribe.push(l.a.subscribeKey("activeConnectorIds",(e=>this.activeConnectorIds=e))),this.unsubscribe.push(lt.subscribeKey("exchanges",(e=>this.exchanges=e))),this.unsubscribe.push(lt.subscribeKey("isLoading",(e=>this.isLoading=e))),lt.fetchExchanges(),lt.setSelectedExchange(void 0)}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.qy`
      <wui-flex flexDirection="column">
        ${this.paymentDetailsTemplate()} ${this.paymentMethodsTemplate()}
      </wui-flex>
    `}paymentMethodsTemplate(){return o.qy`
      <wui-flex flexDirection="column" padding="3" gap="2" class="payment-methods-container">
        ${this.payWithWalletTemplate()} ${this.templateSeparator()}
        ${this.templateExchangeOptions()}
      </wui-flex>
    `}initializeNamespace(){const e=c.W.state.activeChain;this.namespace=e,this.caipAddress=c.W.getAccountData(e)?.caipAddress,this.unsubscribe.push(c.W.subscribeChainProp("accountState",(e=>{this.caipAddress=e?.caipAddress}),e))}paymentDetailsTemplate(){const e=c.W.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===this.paymentAsset.network));return o.qy`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        .padding=${["6","8","6","8"]}
        gap="2"
      >
        <wui-flex alignItems="center" gap="1">
          <wui-text variant="h1-regular" color="primary">
            ${ot(this.amount||"0")}
          </wui-text>

          <wui-flex flexDirection="column">
            <wui-text variant="h6-regular" color="secondary">
              ${this.paymentAsset.metadata.symbol||"Unknown"}
            </wui-text>
            <wui-text variant="md-medium" color="secondary"
              >on ${e?.name||"Unknown"}</wui-text
            >
          </wui-flex>
        </wui-flex>

        <wui-flex class="left-image-container">
          <wui-image
            src=${(0,n.J)(this.paymentAsset.metadata.logoURI)}
            class="token-image"
          ></wui-image>
          <wui-image
            src=${(0,n.J)(J.$.getNetworkImage(e))}
            class="chain-image"
          ></wui-image>
        </wui-flex>
      </wui-flex>
    `}payWithWalletTemplate(){return function(e){const{chainNamespace:t}=ke.C.parseCaipNetworkId(e);return et.includes(t)}(this.paymentAsset.network)?this.caipAddress?this.connectedWalletTemplate():this.disconnectedWalletTemplate():o.qy``}connectedWalletTemplate(){const{name:e,image:t}=this.getWalletProperties({namespace:this.namespace});return o.qy`
      <wui-flex flexDirection="column" gap="3">
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${this.onWalletPayment}
          .boxed=${!1}
          ?chevron=${!0}
          ?fullSize=${!1}
          ?rounded=${!0}
          data-testid="wallet-payment-option"
          imageSrc=${(0,n.J)(t)}
          imageSize="3xl"
        >
          <wui-text variant="lg-regular" color="primary">Pay with ${e}</wui-text>
        </wui-list-item>

        <wui-list-item
          type="secondary"
          icon="power"
          iconColor="error"
          @click=${this.onDisconnect}
          data-testid="disconnect-button"
          ?chevron=${!1}
          boxColor="foregroundSecondary"
        >
          <wui-text variant="lg-regular" color="secondary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}disconnectedWalletTemplate(){return o.qy`<wui-list-item
      type="secondary"
      boxColor="foregroundSecondary"
      variant="icon"
      iconColor="default"
      iconVariant="overlay"
      icon="wallet"
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="lg-regular" color="primary">Pay with wallet</wui-text>
    </wui-list-item>`}templateExchangeOptions(){if(this.isLoading)return o.qy`<wui-flex justifyContent="center" alignItems="center">
        <wui-loading-spinner size="md"></wui-loading-spinner>
      </wui-flex>`;const e=this.exchanges.filter((e=>function(e){const t=c.W.getAllRequestedCaipNetworks().find((t=>t.caipNetworkId===e.network));return!!t&&Boolean(t.testnet)}(this.paymentAsset)?e.id===Be:e.id!==Be));return 0===e.length?o.qy`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:e.map((e=>o.qy`
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${()=>this.onExchangePayment(e)}
          data-testid="exchange-option-${e.id}"
          ?chevron=${!0}
          imageSrc=${(0,n.J)(e.imageUrl)}
        >
          <wui-text flexGrow="1" variant="lg-regular" color="primary">
            Pay with ${e.name}
          </wui-text>
        </wui-list-item>
      `))}templateSeparator(){return o.qy`<wui-separator text="or" bgColor="secondary"></wui-separator>`}async onWalletPayment(){if(!this.namespace)throw new Error("Namespace not found");this.caipAddress?u.I.push("PayQuote"):(await l.a.connect(),await s.W.open({view:"PayQuote"}))}onExchangePayment(e){lt.setSelectedExchange(e),u.I.push("PayQuote")}async onDisconnect(){try{await p.x.disconnect(),await s.W.open({view:"Pay"})}catch{console.error("Failed to disconnect"),g.P.showError("Failed to disconnect")}}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};const t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};const i=l.a.getConnector({id:t,namespace:e});if(!i)return{name:void 0,image:void 0};const o=J.$.getConnectorImage(i);return{name:i.name,image:o}}};pt.styles=dt,ut([(0,a.wk)()],pt.prototype,"amount",void 0),ut([(0,a.wk)()],pt.prototype,"namespace",void 0),ut([(0,a.wk)()],pt.prototype,"paymentAsset",void 0),ut([(0,a.wk)()],pt.prototype,"activeConnectorIds",void 0),ut([(0,a.wk)()],pt.prototype,"caipAddress",void 0),ut([(0,a.wk)()],pt.prototype,"exchanges",void 0),ut([(0,a.wk)()],pt.prototype,"isLoading",void 0),pt=ut([(0,z.EM)("w3m-pay-view")],pt);var ht=i(6566);const mt=F.AH`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-container {
    position: relative;
    width: var(--pulse-size);
    height: var(--pulse-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-rings {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .pulse-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid var(--pulse-color);
    opacity: 0;
    animation: pulse var(--pulse-duration, 2s) ease-out infinite;
  }

  .pulse-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.5);
      opacity: var(--pulse-opacity, 0.3);
    }
    50% {
      opacity: calc(var(--pulse-opacity, 0.3) * 0.5);
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
`;var wt=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const gt={"accent-primary":F.f.tokens.core.backgroundAccentPrimary};let yt=class extends o.WF{constructor(){super(...arguments),this.rings=3,this.duration=2,this.opacity=.3,this.size="200px",this.variant="accent-primary"}render(){const e=gt[this.variant];this.style.cssText=`\n      --pulse-size: ${this.size};\n      --pulse-duration: ${this.duration}s;\n      --pulse-color: ${e};\n      --pulse-opacity: ${this.opacity};\n    `;const t=Array.from({length:this.rings},((e,t)=>this.renderRing(t,this.rings)));return o.qy`
      <div class="pulse-container">
        <div class="pulse-rings">${t}</div>
        <div class="pulse-content">
          <slot></slot>
        </div>
      </div>
    `}renderRing(e,t){const i=`animation-delay: ${e/t*this.duration}s;`;return o.qy`<div class="pulse-ring" style=${i}></div>`}};yt.styles=[D.W5,mt],wt([(0,a.MZ)({type:Number})],yt.prototype,"rings",void 0),wt([(0,a.MZ)({type:Number})],yt.prototype,"duration",void 0),wt([(0,a.MZ)({type:Number})],yt.prototype,"opacity",void 0),wt([(0,a.MZ)()],yt.prototype,"size",void 0),wt([(0,a.MZ)()],yt.prototype,"variant",void 0),yt=wt([(0,M.E)("wui-pulse")],yt);const ft=[{id:"received",title:"Receiving funds",icon:"dollar"},{id:"processing",title:"Swapping asset",icon:"recycleHorizontal"},{id:"sending",title:"Sending asset to the recipient address",icon:"send"}],bt=["success","submitted","failure","timeout","refund"],vt=z.AH`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  .token-badge-container {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: ${({borderRadius:e})=>e[4]};
    z-index: 3;
    min-width: 105px;
  }

  .token-badge-container.loading {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 3px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .token-badge-container.success {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 3px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .token-image-container {
    position: relative;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 64px;
    height: 64px;
  }

  .token-image.success {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .token-image.error {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .token-image.loading {
    background: ${({colors:e})=>e.accent010};
  }

  .token-image wui-icon {
    width: 32px;
    height: 32px;
  }

  .token-badge {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .token-badge wui-text {
    white-space: nowrap;
  }

  .payment-lifecycle-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[6]};
    border-top-left-radius: ${({borderRadius:e})=>e[6]};
  }

  .payment-step-badge {
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  .payment-step-badge.loading {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .payment-step-badge.error {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  .payment-step-badge.success {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  .step-icon-container {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e.round};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .step-icon-box {
    position: absolute;
    right: -4px;
    bottom: -1px;
    padding: 2px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .step-icon-box.success {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }
`;var kt=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const xt={received:["pending","success","submitted"],processing:["success","submitted"],sending:["success","submitted"]};let St=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.pollingInterval=null,this.paymentAsset=lt.state.paymentAsset,this.quoteStatus=lt.state.quoteStatus,this.quote=lt.state.quote,this.amount=lt.state.amount,this.namespace=void 0,this.caipAddress=void 0,this.profileName=null,this.activeConnectorIds=l.a.state.activeConnectorIds,this.selectedExchange=lt.state.selectedExchange,this.initializeNamespace(),this.unsubscribe.push(lt.subscribeKey("quoteStatus",(e=>this.quoteStatus=e)),lt.subscribeKey("quote",(e=>this.quote=e)),l.a.subscribeKey("activeConnectorIds",(e=>this.activeConnectorIds=e)),lt.subscribeKey("selectedExchange",(e=>this.selectedExchange=e)))}connectedCallback(){super.connectedCallback(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling(),this.unsubscribe.forEach((e=>e()))}render(){return o.qy`
      <wui-flex flexDirection="column" .padding=${["3","0","0","0"]} gap="2">
        ${this.tokenTemplate()} ${this.paymentTemplate()} ${this.paymentLifecycleTemplate()}
      </wui-flex>
    `}tokenTemplate(){const e=ot(this.amount||"0"),t=this.paymentAsset.metadata.symbol??"Unknown",i=c.W.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===this.paymentAsset.network)),a="failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus;return"success"===this.quoteStatus||"submitted"===this.quoteStatus?o.qy`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image success">
          <wui-icon name="checkmark" color="success" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:a?o.qy`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image error">
          <wui-icon name="close" color="error" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:o.qy`
      <wui-flex alignItems="center" justifyContent="center">
        <wui-flex class="token-image-container">
          <wui-pulse size="125px" rings="3" duration="4" opacity="0.5" variant="accent-primary">
            <wui-flex justifyContent="center" alignItems="center" class="token-image loading">
              <wui-icon name="paperPlaneTitle" color="accent-primary" size="inherit"></wui-icon>
            </wui-flex>
          </wui-pulse>

          <wui-flex
            justifyContent="center"
            alignItems="center"
            class="token-badge-container loading"
          >
            <wui-flex
              alignItems="center"
              justifyContent="center"
              gap="01"
              padding="1"
              class="token-badge"
            >
              <wui-image
                src=${(0,n.J)(J.$.getNetworkImage(i))}
                class="chain-image"
                size="mdl"
              ></wui-image>

              <wui-text variant="lg-regular" color="primary">${e} ${t}</wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}paymentTemplate(){return o.qy`
      <wui-flex flexDirection="column" gap="2" .padding=${["0","6","0","6"]}>
        ${this.renderPayment()}
        <wui-separator></wui-separator>
        ${this.renderWallet()}
      </wui-flex>
    `}paymentLifecycleTemplate(){const e=this.getStepsWithStatus();return o.qy`
      <wui-flex flexDirection="column" padding="4" gap="2" class="payment-lifecycle-container">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">PAYMENT CYCLE</wui-text>

          ${this.renderPaymentCycleBadge()}
        </wui-flex>

        <wui-flex flexDirection="column" gap="5" .padding=${["2","0","2","0"]}>
          ${e.map((e=>this.renderStep(e)))}
        </wui-flex>
      </wui-flex>
    `}renderPaymentCycleBadge(){const e="failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus,t="success"===this.quoteStatus||"submitted"===this.quoteStatus;if(e)return o.qy`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge error"
          gap="1"
        >
          <wui-icon name="close" color="error" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="error">Failed</wui-text>
        </wui-flex>
      `;if(t)return o.qy`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge success"
          gap="1"
        >
          <wui-icon name="checkmark" color="success" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="success">Completed</wui-text>
        </wui-flex>
      `;const i=this.quote?.timeInSeconds??0;return o.qy`
      <wui-flex alignItems="center" justifyContent="space-between" gap="3">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge loading"
          gap="1"
        >
          <wui-icon name="clock" color="default" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="primary">Est. ${i} sec</wui-text>
        </wui-flex>

        <wui-icon name="chevronBottom" color="default" size="xxs"></wui-icon>
      </wui-flex>
    `}renderPayment(){const e=c.W.getAllRequestedCaipNetworks().find((e=>{const t=this.quote?.origin.currency.network;if(!t)return!1;const{chainId:i}=ke.C.parseCaipNetworkId(t);return xe.y.isLowerCaseMatch(e.id.toString(),i.toString())})),t=ot(b.S.formatNumber(this.quote?.origin.amount||"0",{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString()),i=this.quote?.origin.currency.metadata.symbol??"Unknown";return o.qy`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Payment Method</wui-text>

        <wui-flex flexDirection="column" alignItems="flex-end" gap="1">
          <wui-flex alignItems="center" gap="01">
            <wui-text variant="lg-regular" color="primary">${t}</wui-text>
            <wui-text variant="lg-regular" color="secondary">${i}</wui-text>
          </wui-flex>

          <wui-flex alignItems="center" gap="1">
            <wui-text variant="md-regular" color="secondary">on</wui-text>
            <wui-image
              src=${(0,n.J)(J.$.getNetworkImage(e))}
              size="xs"
            ></wui-image>
            <wui-text variant="md-regular" color="secondary">${e?.name}</wui-text>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderWallet(){return o.qy`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Wallet</wui-text>

        ${this.renderWalletText()}
      </wui-flex>
    `}renderWalletText(){const{image:e}=this.getWalletProperties({namespace:this.namespace}),{address:t}=this.caipAddress?ke.C.parseCaipAddress(this.caipAddress):{},i=this.selectedExchange?.name;return this.selectedExchange?o.qy`
        <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
          <wui-text variant="lg-regular" color="primary">${i}</wui-text>
          <wui-image src=${(0,n.J)(this.selectedExchange.imageUrl)} size="mdl"></wui-image>
        </wui-flex>
      `:o.qy`
      <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
        <wui-text variant="lg-regular" color="primary">
          ${z.Zv.getTruncateString({string:this.profileName||t||i||"",charsStart:this.profileName?16:4,charsEnd:this.profileName?0:6,truncate:this.profileName?"end":"middle"})}
        </wui-text>

        <wui-image src=${(0,n.J)(e)} size="mdl"></wui-image>
      </wui-flex>
    `}getStepsWithStatus(){return"failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus?ft.map((e=>({...e,status:"failed"}))):ft.map((e=>{const t=(xt[e.id]??[]).includes(this.quoteStatus)?"completed":"pending";return{...e,status:t}}))}renderStep({title:e,icon:t,status:i}){const a={"step-icon-box":!0,success:"completed"===i};return o.qy`
      <wui-flex alignItems="center" gap="3">
        <wui-flex justifyContent="center" alignItems="center" class="step-icon-container">
          <wui-icon name=${t} color="default" size="mdl"></wui-icon>

          <wui-flex alignItems="center" justifyContent="center" class=${(0,ht.H)(a)}>
            ${this.renderStatusIndicator(i)}
          </wui-flex>
        </wui-flex>

        <wui-text variant="md-regular" color="primary">${e}</wui-text>
      </wui-flex>
    `}renderStatusIndicator(e){return"completed"===e?o.qy`<wui-icon size="sm" color="success" name="checkmark"></wui-icon>`:"failed"===e?o.qy`<wui-icon size="sm" color="error" name="close"></wui-icon>`:"pending"===e?o.qy`<wui-loading-spinner color="accent-primary" size="sm"></wui-loading-spinner>`:null}startPolling(){this.pollingInterval||(this.fetchQuoteStatus(),this.pollingInterval=setInterval((()=>{this.fetchQuoteStatus()}),3e3))}stopPolling(){this.pollingInterval&&(clearInterval(this.pollingInterval),this.pollingInterval=null)}async fetchQuoteStatus(){const e=lt.state.requestId;if(!e||bt.includes(this.quoteStatus))this.stopPolling();else try{await lt.fetchQuoteStatus({requestId:e}),bt.includes(this.quoteStatus)&&this.stopPolling()}catch{this.stopPolling()}}initializeNamespace(){const e=c.W.state.activeChain;this.namespace=e,this.caipAddress=c.W.getAccountData(e)?.caipAddress,this.profileName=c.W.getAccountData(e)?.profileName??null,this.unsubscribe.push(c.W.subscribeChainProp("accountState",(e=>{this.caipAddress=e?.caipAddress,this.profileName=e?.profileName??null}),e))}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};const t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};const i=l.a.getConnector({id:t,namespace:e});if(!i)return{name:void 0,image:void 0};const o=J.$.getConnectorImage(i);return{name:i.name,image:o}}};St.styles=vt,kt([(0,a.wk)()],St.prototype,"paymentAsset",void 0),kt([(0,a.wk)()],St.prototype,"quoteStatus",void 0),kt([(0,a.wk)()],St.prototype,"quote",void 0),kt([(0,a.wk)()],St.prototype,"amount",void 0),kt([(0,a.wk)()],St.prototype,"namespace",void 0),kt([(0,a.wk)()],St.prototype,"caipAddress",void 0),kt([(0,a.wk)()],St.prototype,"profileName",void 0),kt([(0,a.wk)()],St.prototype,"activeConnectorIds",void 0),kt([(0,a.wk)()],St.prototype,"selectedExchange",void 0),St=kt([(0,z.EM)("w3m-pay-loading-view")],St);var Tt=i(1052);const At=F.AH`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    column-gap: ${({spacing:e})=>e[1]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({spacing:e})=>e[6]};
    height: ${({spacing:e})=>e[6]};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({tokens:e})=>e.core.textSuccess};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var It=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Pt=class extends o.WF{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.enableGreenCircle=!0,this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return o.qy`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){const e=this.icon?o.qy`<wui-icon
          size=${(0,n.J)(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:o.qy`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return o.qy`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${Boolean(this.icon)}
      >
        ${e}
        ${this.enableGreenCircle?o.qy`<wui-flex class="circle"></wui-flex>`:null}
      </wui-flex>
    `}textTemplate(){return o.qy`
      <wui-text variant="lg-regular" color="primary">
        ${Tt.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return o.qy`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`}};Pt.styles=[D.W5,D.fD,At],It([(0,a.MZ)()],Pt.prototype,"address",void 0),It([(0,a.MZ)()],Pt.prototype,"profileName",void 0),It([(0,a.MZ)()],Pt.prototype,"alt",void 0),It([(0,a.MZ)()],Pt.prototype,"imageSrc",void 0),It([(0,a.MZ)()],Pt.prototype,"icon",void 0),It([(0,a.MZ)()],Pt.prototype,"iconSize",void 0),It([(0,a.MZ)({type:Boolean})],Pt.prototype,"enableGreenCircle",void 0),It([(0,a.MZ)({type:Boolean})],Pt.prototype,"loading",void 0),It([(0,a.MZ)({type:Number})],Pt.prototype,"charsStart",void 0),It([(0,a.MZ)({type:Number})],Pt.prototype,"charsEnd",void 0),Pt=It([(0,M.E)("wui-wallet-switch")],Pt);i(7362);const $t=o.AH`
  :host {
    display: block;
  }
`;var Ct=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Et=class extends o.WF{render(){return o.qy`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-shimmer width="60px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Network Fee</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-shimmer
              width="75px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>

            <wui-flex alignItems="center" gap="01">
              <wui-shimmer width="14px" height="14px" rounded variant="light"></wui-shimmer>
              <wui-shimmer
                width="49px"
                height="14px"
                borderRadius="4xs"
                variant="light"
              ></wui-shimmer>
            </wui-flex>
          </wui-flex>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Service Fee</wui-text>
          <wui-shimmer width="75px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>
      </wui-flex>
    `}};Et.styles=[$t],Et=Ct([(0,z.EM)("w3m-pay-fees-skeleton")],Et);const Nt=z.AH`
  :host {
    display: block;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }
`;var Rt=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let qt=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.quote=lt.state.quote,this.unsubscribe.push(lt.subscribeKey("quote",(e=>this.quote=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=b.S.formatNumber(this.quote?.origin.amount||"0",{decimals:this.quote?.origin.currency.metadata.decimals??0,round:6}).toString();return o.qy`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-text variant="md-regular" color="primary">
            ${e} ${this.quote?.origin.currency.metadata.symbol||"Unknown"}
          </wui-text>
        </wui-flex>

        ${this.quote&&this.quote.fees.length>0?this.quote.fees.map((e=>this.renderFee(e))):null}
      </wui-flex>
    `}renderFee(e){const t="network"===e.id,i=b.S.formatNumber(e.amount||"0",{decimals:e.currency.metadata.decimals??0,round:6}).toString();if(t){const t=c.W.getAllRequestedCaipNetworks().find((t=>xe.y.isLowerCaseMatch(t.caipNetworkId,e.currency.network)));return o.qy`
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-text variant="md-regular" color="primary">
              ${i} ${e.currency.metadata.symbol||"Unknown"}
            </wui-text>

            <wui-flex alignItems="center" gap="01">
              <wui-image
                src=${(0,n.J)(J.$.getNetworkImage(t))}
                size="xs"
              ></wui-image>
              <wui-text variant="sm-regular" color="secondary">
                ${t?.name||"Unknown"}
              </wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      `}return o.qy`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>
        <wui-text variant="md-regular" color="primary">
          ${i} ${e.currency.metadata.symbol||"Unknown"}
        </wui-text>
      </wui-flex>
    `}};qt.styles=[Nt],Rt([(0,a.wk)()],qt.prototype,"quote",void 0),qt=Rt([(0,z.EM)("w3m-pay-fees")],qt);const Wt=z.AH`
  :host {
    display: block;
    width: 100%;
  }

  .disabled-container {
    padding: ${({spacing:e})=>e[2]};
    min-height: 168px;
  }

  wui-icon {
    width: ${({spacing:e})=>e[8]};
    height: ${({spacing:e})=>e[8]};
  }

  wui-flex > wui-text {
    max-width: 273px;
  }
`;var Ot=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Ut=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.selectedExchange=lt.state.selectedExchange,this.unsubscribe.push(lt.subscribeKey("selectedExchange",(e=>this.selectedExchange=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=Boolean(this.selectedExchange);return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
        class="disabled-container"
      >
        <wui-icon name="coins" color="default" size="inherit"></wui-icon>

        <wui-text variant="md-regular" color="primary" align="center">
          You don't have enough funds to complete this transaction
        </wui-text>

        ${e?null:o.qy`<wui-button
              size="md"
              variant="neutral-secondary"
              @click=${this.dispatchConnectOtherWalletEvent.bind(this)}
              >Connect other wallet</wui-button
            >`}
      </wui-flex>
    `}dispatchConnectOtherWalletEvent(){this.dispatchEvent(new CustomEvent("connectOtherWallet",{detail:!0,bubbles:!0,composed:!0}))}};Ut.styles=[Wt],Ot([(0,a.MZ)({type:Array})],Ut.prototype,"selectedExchange",void 0),Ut=Ot([(0,z.EM)("w3m-pay-options-empty")],Ut);const zt=z.AH`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    min-height: 60px;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .chain-image {
    position: absolute;
    bottom: -3px;
    right: -5px;
    border: 2px solid ${({tokens:e})=>e.theme.foregroundSecondary};
  }
`;var Dt=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Mt=class extends o.WF{render(){return o.qy`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.renderOptionEntry()} ${this.renderOptionEntry()} ${this.renderOptionEntry()}
      </wui-flex>
    `}renderOptionEntry(){return o.qy`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-shimmer
              width="32px"
              height="32px"
              rounded
              variant="light"
              class="token-image"
            ></wui-shimmer>
            <wui-shimmer
              width="16px"
              height="16px"
              rounded
              variant="light"
              class="chain-image"
            ></wui-shimmer>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-shimmer
              width="74px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
            <wui-shimmer
              width="46px"
              height="14px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}};Mt.styles=[zt],Mt=Dt([(0,z.EM)("w3m-pay-options-skeleton")],Mt);const Ft=z.AH`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    mask-image: var(--options-mask-image);
    -webkit-mask-image: var(--options-mask-image);
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    cursor: pointer;
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:e})=>e.round};
    width: 32px;
    height: 32px;
  }

  .chain-image {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  @media (hover: hover) and (pointer: fine) {
    .pay-option-container:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var jt=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Bt=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.options=[],this.selectedPaymentAsset=null}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.resizeObserver?.disconnect();const e=this.shadowRoot?.querySelector(".pay-options-container");e?.removeEventListener("scroll",this.handleOptionsListScroll.bind(this))}firstUpdated(){const e=this.shadowRoot?.querySelector(".pay-options-container");e&&(requestAnimationFrame(this.handleOptionsListScroll.bind(this)),e?.addEventListener("scroll",this.handleOptionsListScroll.bind(this)),this.resizeObserver=new ResizeObserver((()=>{this.handleOptionsListScroll()})),this.resizeObserver?.observe(e),this.handleOptionsListScroll())}render(){return o.qy`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.options.map((e=>this.payOptionTemplate(e)))}
      </wui-flex>
    `}payOptionTemplate(e){const{network:t,metadata:i,asset:a,amount:r="0"}=e,s=c.W.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===t)),l=`${t}:${a}`===`${this.selectedPaymentAsset?.network}:${this.selectedPaymentAsset?.asset}`,d=b.S.bigNumber(r,{safe:!0}),u=d.gt(0);return o.qy`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        @click=${()=>this.onSelect?.(e)}
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-image
              src=${(0,n.J)(i.logoURI)}
              class="token-image"
              size="3xl"
            ></wui-image>
            <wui-image
              src=${(0,n.J)(J.$.getNetworkImage(s))}
              class="chain-image"
              size="md"
            ></wui-image>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="lg-regular" color="primary">${i.symbol}</wui-text>
            ${u?o.qy`<wui-text variant="sm-regular" color="secondary">
                  ${d.round(6).toString()} ${i.symbol}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>

        ${l?o.qy`<wui-icon name="checkmark" size="md" color="success"></wui-icon>`:null}
      </wui-flex>
    `}handleOptionsListScroll(){const e=this.shadowRoot?.querySelector(".pay-options-container");if(!e)return;e.scrollHeight>300?(e.style.setProperty("--options-mask-image","linear-gradient(\n          to bottom,\n          rgba(0, 0, 0, calc(1 - var(--options-scroll--top-opacity))) 0px,\n          rgba(200, 200, 200, calc(1 - var(--options-scroll--top-opacity))) 1px,\n          black 50px,\n          black calc(100% - 50px),\n          rgba(155, 155, 155, calc(1 - var(--options-scroll--bottom-opacity))) calc(100% - 1px),\n          rgba(0, 0, 0, calc(1 - var(--options-scroll--bottom-opacity))) 100%\n        )"),e.style.setProperty("--options-scroll--top-opacity",z.z8.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--options-scroll--bottom-opacity",z.z8.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--options-mask-image","none"),e.style.setProperty("--options-scroll--top-opacity","0"),e.style.setProperty("--options-scroll--bottom-opacity","0"))}};Bt.styles=[Ft],jt([(0,a.MZ)({type:Array})],Bt.prototype,"options",void 0),jt([(0,a.MZ)()],Bt.prototype,"selectedPaymentAsset",void 0),jt([(0,a.MZ)()],Bt.prototype,"onSelect",void 0),Bt=jt([(0,z.EM)("w3m-pay-options")],Bt);const Lt=z.AH`
  .payment-methods-container {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:e})=>e[5]};
    border-top-left-radius: ${({borderRadius:e})=>e[5]};
  }

  .pay-options-container {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding: ${({spacing:e})=>e[1]};
  }

  w3m-tooltip-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  w3m-pay-options.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;var Ht=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const _t={eip155:{icon:"ethereum",label:"EVM"},solana:{icon:"solana",label:"Solana"},bip122:{icon:"bitcoin",label:"Bitcoin"},ton:{icon:"ton",label:"Ton"}};let Zt=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.profileName=null,this.paymentAsset=lt.state.paymentAsset,this.namespace=void 0,this.caipAddress=void 0,this.amount=lt.state.amount,this.recipient=lt.state.recipient,this.activeConnectorIds=l.a.state.activeConnectorIds,this.selectedPaymentAsset=lt.state.selectedPaymentAsset,this.selectedExchange=lt.state.selectedExchange,this.isFetchingQuote=lt.state.isFetchingQuote,this.quoteError=lt.state.quoteError,this.quote=lt.state.quote,this.isFetchingTokenBalances=lt.state.isFetchingTokenBalances,this.tokenBalances=lt.state.tokenBalances,this.isPaymentInProgress=lt.state.isPaymentInProgress,this.exchangeUrlForQuote=lt.state.exchangeUrlForQuote,this.completedTransactionsCount=0,this.unsubscribe.push(lt.subscribeKey("paymentAsset",(e=>this.paymentAsset=e))),this.unsubscribe.push(lt.subscribeKey("tokenBalances",(e=>this.onTokenBalancesChanged(e)))),this.unsubscribe.push(lt.subscribeKey("isFetchingTokenBalances",(e=>this.isFetchingTokenBalances=e))),this.unsubscribe.push(l.a.subscribeKey("activeConnectorIds",(e=>this.activeConnectorIds=e))),this.unsubscribe.push(lt.subscribeKey("selectedPaymentAsset",(e=>this.selectedPaymentAsset=e))),this.unsubscribe.push(lt.subscribeKey("isFetchingQuote",(e=>this.isFetchingQuote=e))),this.unsubscribe.push(lt.subscribeKey("quoteError",(e=>this.quoteError=e))),this.unsubscribe.push(lt.subscribeKey("quote",(e=>this.quote=e))),this.unsubscribe.push(lt.subscribeKey("amount",(e=>this.amount=e))),this.unsubscribe.push(lt.subscribeKey("recipient",(e=>this.recipient=e))),this.unsubscribe.push(lt.subscribeKey("isPaymentInProgress",(e=>this.isPaymentInProgress=e))),this.unsubscribe.push(lt.subscribeKey("selectedExchange",(e=>this.selectedExchange=e))),this.unsubscribe.push(lt.subscribeKey("exchangeUrlForQuote",(e=>this.exchangeUrlForQuote=e))),this.resetQuoteState(),this.initializeNamespace(),this.fetchTokens()}disconnectedCallback(){super.disconnectedCallback(),this.resetAssetsState(),this.unsubscribe.forEach((e=>e()))}updated(e){super.updated(e);e.has("selectedPaymentAsset")&&this.fetchQuote()}render(){return o.qy`
      <wui-flex flexDirection="column">
        ${this.profileTemplate()}

        <wui-flex
          flexDirection="column"
          gap="4"
          class="payment-methods-container"
          .padding=${["4","4","5","4"]}
        >
          ${this.paymentOptionsViewTemplate()} ${this.amountWithFeeTemplate()}

          <wui-flex
            alignItems="center"
            justifyContent="space-between"
            .padding=${["1","0","1","0"]}
          >
            <wui-separator></wui-separator>
          </wui-flex>

          ${this.paymentActionsTemplate()}
        </wui-flex>
      </wui-flex>
    `}profileTemplate(){if(this.selectedExchange){const e=b.S.formatNumber(this.quote?.origin.amount,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return o.qy`
        <wui-flex
          .padding=${["4","3","4","3"]}
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-text variant="lg-regular" color="secondary">Paying with</wui-text>

          ${this.quote?o.qy`<wui-text variant="lg-regular" color="primary">
                ${b.S.bigNumber(e,{safe:!0}).round(6).toString()}
                ${this.quote.origin.currency.metadata.symbol}
              </wui-text>`:o.qy`<wui-shimmer width="80px" height="18px" variant="light"></wui-shimmer>`}
        </wui-flex>
      `}const e=A.w.getPlainAddress(this.caipAddress)??"",{name:t,image:i}=this.getWalletProperties({namespace:this.namespace}),{icon:a,label:r}=_t[this.namespace]??{};return o.qy`
      <wui-flex
        .padding=${["4","3","4","3"]}
        alignItems="center"
        justifyContent="space-between"
        gap="2"
      >
        <wui-wallet-switch
          profileName=${(0,n.J)(this.profileName)}
          address=${(0,n.J)(e)}
          imageSrc=${(0,n.J)(i)}
          alt=${(0,n.J)(t)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        <wui-wallet-switch
          profileName=${(0,n.J)(r)}
          address=${(0,n.J)(e)}
          icon=${(0,n.J)(a)}
          iconSize="xs"
          .enableGreenCircle=${!1}
          alt=${(0,n.J)(r)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
      </wui-flex>
    `}initializeNamespace(){const e=c.W.state.activeChain;this.namespace=e,this.caipAddress=c.W.getAccountData(e)?.caipAddress,this.profileName=c.W.getAccountData(e)?.profileName??null,this.unsubscribe.push(c.W.subscribeChainProp("accountState",(e=>this.onAccountStateChanged(e)),e))}async fetchTokens(){if(this.namespace){let e;if(this.caipAddress){const{chainId:t,chainNamespace:i}=ke.C.parseCaipAddress(this.caipAddress),o=`${i}:${t}`;e=c.W.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===o))}await lt.fetchTokens({caipAddress:this.caipAddress,caipNetwork:e,namespace:this.namespace})}}fetchQuote(){if(this.amount&&this.recipient&&this.selectedPaymentAsset&&this.paymentAsset){const{address:e}=this.caipAddress?ke.C.parseCaipAddress(this.caipAddress):{};lt.fetchQuote({amount:this.amount.toString(),address:e,sourceToken:this.selectedPaymentAsset,toToken:this.paymentAsset,recipient:this.recipient})}}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};const t=this.activeConnectorIds[e];if(!t)return{name:void 0,image:void 0};const i=l.a.getConnector({id:t,namespace:e});if(!i)return{name:void 0,image:void 0};const o=J.$.getConnectorImage(i);return{name:i.name,image:o}}paymentOptionsViewTemplate(){return o.qy`
      <wui-flex flexDirection="column" gap="2">
        <wui-text variant="sm-regular" color="secondary">CHOOSE PAYMENT OPTION</wui-text>
        <wui-flex class="pay-options-container">${this.paymentOptionsTemplate()}</wui-flex>
      </wui-flex>
    `}paymentOptionsTemplate(){const e=this.getPaymentAssetFromTokenBalances();if(this.isFetchingTokenBalances)return o.qy`<w3m-pay-options-skeleton></w3m-pay-options-skeleton>`;if(0===e.length)return o.qy`<w3m-pay-options-empty
        @connectOtherWallet=${this.onConnectOtherWallet.bind(this)}
      ></w3m-pay-options-empty>`;const t={disabled:this.isFetchingQuote};return o.qy`<w3m-pay-options
      class=${(0,ht.H)(t)}
      .options=${e}
      .selectedPaymentAsset=${(0,n.J)(this.selectedPaymentAsset)}
      .onSelect=${this.onSelectedPaymentAssetChanged.bind(this)}
    ></w3m-pay-options>`}amountWithFeeTemplate(){return this.isFetchingQuote||!this.selectedPaymentAsset||this.quoteError?o.qy`<w3m-pay-fees-skeleton></w3m-pay-fees-skeleton>`:o.qy`<w3m-pay-fees></w3m-pay-fees>`}paymentActionsTemplate(){const e=this.isFetchingQuote||this.isFetchingTokenBalances,t=this.isFetchingQuote||this.isFetchingTokenBalances||!this.selectedPaymentAsset||Boolean(this.quoteError),i=b.S.formatNumber(this.quote?.origin.amount??0,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return this.selectedExchange?e||t?o.qy`
          <wui-shimmer width="100%" height="48px" variant="light" ?rounded=${!0}></wui-shimmer>
        `:o.qy`<wui-button
        size="lg"
        fullWidth
        variant="accent-secondary"
        @click=${this.onPayWithExchange.bind(this)}
      >
        ${`Continue in ${this.selectedExchange.name}`}

        <wui-icon name="arrowRight" color="inherit" size="sm" slot="iconRight"></wui-icon>
      </wui-button>`:o.qy`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="md-regular" color="secondary">Order Total</wui-text>

          ${e||t?o.qy`<wui-shimmer width="58px" height="32px" variant="light"></wui-shimmer>`:o.qy`<wui-flex alignItems="center" gap="01">
                <wui-text variant="h4-regular" color="primary">${ot(i)}</wui-text>

                <wui-text variant="lg-regular" color="secondary">
                  ${this.quote?.origin.currency.metadata.symbol||"Unknown"}
                </wui-text>
              </wui-flex>`}
        </wui-flex>

        ${this.actionButtonTemplate({isLoading:e,isDisabled:t})}
      </wui-flex>
    `}actionButtonTemplate(e){const t=Ze(this.quote),{isLoading:i,isDisabled:a}=e;let n="Pay";return t.length>1&&0===this.completedTransactionsCount&&(n="Approve"),o.qy`
      <wui-button
        size="lg"
        variant="accent-primary"
        ?loading=${i||this.isPaymentInProgress}
        ?disabled=${a||this.isPaymentInProgress}
        @click=${()=>{t.length>0?this.onSendTransactions():this.onTransfer()}}
      >
        ${n}
        ${i?null:o.qy`<wui-icon
              name="arrowRight"
              color="inherit"
              size="sm"
              slot="iconRight"
            ></wui-icon>`}
      </wui-button>
    `}getPaymentAssetFromTokenBalances(){if(!this.namespace)return[];return(this.tokenBalances[this.namespace]??[]).map((e=>{try{return function(e){const t=c.W.getAllRequestedCaipNetworks().find((t=>t.caipNetworkId===e.chainId));let i=e.address;if(!t)throw new Error(`Target network not found for balance chainId "${e.chainId}"`);if(xe.y.isLowerCaseMatch(e.symbol,t.nativeCurrency.symbol))i="native";else if(A.w.isCaipAddress(i)){const{address:e}=ke.C.parseCaipAddress(i);i=e}else if(!i)throw new Error(`Balance address not found for balance symbol "${e.symbol}"`);return{network:t.caipNetworkId,asset:i,metadata:{name:e.name,symbol:e.symbol,decimals:Number(e.quantity.decimals),logoURI:e.iconUrl},amount:e.quantity.numeric}}(e)}catch(e){return null}})).filter((e=>Boolean(e))).filter((e=>{const{chainId:t}=ke.C.parseCaipNetworkId(e.network),{chainId:i}=ke.C.parseCaipNetworkId(this.paymentAsset.network);return!!xe.y.isLowerCaseMatch(e.asset,this.paymentAsset.asset)||(!this.selectedExchange||!xe.y.isLowerCaseMatch(t.toString(),i.toString()))}))}onTokenBalancesChanged(e){this.tokenBalances=e;const[t]=this.getPaymentAssetFromTokenBalances();t&&lt.setSelectedPaymentAsset(t)}async onConnectOtherWallet(){await l.a.connect(),await s.W.open({view:"PayQuote"})}onAccountStateChanged(e){const{address:t}=this.caipAddress?ke.C.parseCaipAddress(this.caipAddress):{};if(this.caipAddress=e?.caipAddress,this.profileName=e?.profileName??null,t){const{address:e}=this.caipAddress?ke.C.parseCaipAddress(this.caipAddress):{};e?xe.y.isLowerCaseMatch(e,t)||(this.resetAssetsState(),this.resetQuoteState(),this.fetchTokens()):s.W.close()}}onSelectedPaymentAssetChanged(e){this.isFetchingQuote||lt.setSelectedPaymentAsset(e)}async onTransfer(){const e=_e(this.quote);if(e){if(!xe.y.isLowerCaseMatch(this.selectedPaymentAsset?.asset,e.deposit.currency))throw new Error("Quote asset is not the same as the selected payment asset");const t=this.selectedPaymentAsset?.amount??"0",i=b.S.formatNumber(e.deposit.amount,{decimals:this.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!b.S.bigNumber(t).gte(i))return void g.P.showError("Insufficient funds");if(this.quote&&this.selectedPaymentAsset&&this.caipAddress&&this.namespace){const{address:t}=ke.C.parseCaipAddress(this.caipAddress);await lt.onTransfer({chainNamespace:this.namespace,fromAddress:t,toAddress:e.deposit.receiver,amount:i,paymentAsset:this.selectedPaymentAsset}),lt.setRequestId(e.requestId),u.I.push("PayLoading")}}}async onSendTransactions(){const e=this.selectedPaymentAsset?.amount??"0",t=b.S.formatNumber(this.quote?.origin.amount??0,{decimals:this.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!b.S.bigNumber(e).gte(t))return void g.P.showError("Insufficient funds");const i=Ze(this.quote),[o]=Ze(this.quote,this.completedTransactionsCount);if(o&&this.namespace){await lt.onSendTransaction({namespace:this.namespace,transactionStep:o}),this.completedTransactionsCount+=1;this.completedTransactionsCount===i.length&&(lt.setRequestId(o.requestId),u.I.push("PayLoading"))}}onPayWithExchange(){if(this.exchangeUrlForQuote){const e=A.w.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!e)throw new Error("Could not create popup window");e.location.href=this.exchangeUrlForQuote;const t=_e(this.quote);t&&lt.setRequestId(t.requestId),lt.initiatePayment(),u.I.push("PayLoading")}}resetAssetsState(){lt.setSelectedPaymentAsset(null)}resetQuoteState(){lt.resetQuoteState()}};Zt.styles=Lt,Ht([(0,a.wk)()],Zt.prototype,"profileName",void 0),Ht([(0,a.wk)()],Zt.prototype,"paymentAsset",void 0),Ht([(0,a.wk)()],Zt.prototype,"namespace",void 0),Ht([(0,a.wk)()],Zt.prototype,"caipAddress",void 0),Ht([(0,a.wk)()],Zt.prototype,"amount",void 0),Ht([(0,a.wk)()],Zt.prototype,"recipient",void 0),Ht([(0,a.wk)()],Zt.prototype,"activeConnectorIds",void 0),Ht([(0,a.wk)()],Zt.prototype,"selectedPaymentAsset",void 0),Ht([(0,a.wk)()],Zt.prototype,"selectedExchange",void 0),Ht([(0,a.wk)()],Zt.prototype,"isFetchingQuote",void 0),Ht([(0,a.wk)()],Zt.prototype,"quoteError",void 0),Ht([(0,a.wk)()],Zt.prototype,"quote",void 0),Ht([(0,a.wk)()],Zt.prototype,"isFetchingTokenBalances",void 0),Ht([(0,a.wk)()],Zt.prototype,"tokenBalances",void 0),Ht([(0,a.wk)()],Zt.prototype,"isPaymentInProgress",void 0),Ht([(0,a.wk)()],Zt.prototype,"exchangeUrlForQuote",void 0),Ht([(0,a.wk)()],Zt.prototype,"completedTransactionsCount",void 0),Zt=Ht([(0,z.EM)("w3m-pay-quote-view")],Zt);const Vt=z.AH`
  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  .transfers-badge {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }
`;var Kt=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Qt=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.paymentAsset=lt.state.paymentAsset,this.amount=lt.state.amount,this.unsubscribe.push(lt.subscribeKey("paymentAsset",(e=>{this.paymentAsset=e})),lt.subscribeKey("amount",(e=>{this.amount=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=c.W.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===this.paymentAsset.network));return o.qy`<wui-flex
      alignItems="center"
      gap="1"
      .padding=${["1","2","1","1"]}
      class="transfers-badge"
    >
      <wui-image src=${(0,n.J)(this.paymentAsset.metadata.logoURI)} size="xl"></wui-image>
      <wui-text variant="lg-regular" color="primary">
        ${this.amount} ${this.paymentAsset.metadata.symbol}
      </wui-text>
      <wui-text variant="sm-regular" color="secondary">
        on ${e?.name??"Unknown"}
      </wui-text>
    </wui-flex>`}};Qt.styles=[Vt],Kt([(0,a.MZ)()],Qt.prototype,"paymentAsset",void 0),Kt([(0,a.MZ)()],Qt.prototype,"amount",void 0),Qt=Kt([(0,z.EM)("w3m-pay-header")],Qt);const Gt=z.AH`
  :host {
    height: 60px;
  }

  :host > wui-flex {
    box-sizing: border-box;
    background-color: var(--local-header-background-color);
  }

  wui-text {
    background-color: var(--local-header-background-color);
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-down-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-up-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-icon-button[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var Yt=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const Jt=["SmartSessionList"],Xt={PayWithExchange:z.f.tokens.theme.foregroundPrimary};function ei(){const e=u.I.state.data?.connector?.name,t=u.I.state.data?.wallet?.name,i=u.I.state.data?.network?.name,o=t??e,a=l.a.getConnectors(),n=1===a.length&&"w3m-email"===a[0]?.id,r=c.W.getAccountData()?.socialProvider;return{Connect:`Connect ${n?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",UsageExceeded:"Usage Exceeded",ConnectingExternal:o??"Connect Wallet",ConnectingWalletConnect:o??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview Convert",Downloads:o?`Get ${o}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a Wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",ProfileWallets:"Wallets",SwitchNetwork:i??"Switch Network",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade Your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose Name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select Token",SwapPreview:"Preview Swap",WalletSend:"Send",WalletSendPreview:"Review Send",WalletSendSelectToken:"Select Token",WalletSendConfirmed:"Confirmed",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a Wallet?",ConnectWallets:"Connect Wallet",ConnectSocials:"All Socials",ConnectingSocial:r?r.charAt(0).toUpperCase()+r.slice(1):"Connect Social",ConnectingMultiChain:"Select Chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch Chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Processing payment...",PayQuote:"Payment Quote",DataCapture:"Profile",DataCaptureOtpConfirm:"Confirm Email",FundWallet:"Fund Wallet",PayWithExchange:"Deposit from Exchange",PayWithExchangeSelectAsset:"Select Asset",SmartAccountSettings:"Smart Account Settings"}}let ti=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.heading=ei()[u.I.state.view],this.network=c.W.state.activeCaipNetwork,this.networkImage=J.$.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=u.I.state.view,this.viewDirection="",this.unsubscribe.push(X.j.subscribeNetworkImages((()=>{this.networkImage=J.$.getNetworkImage(this.network)})),u.I.subscribeKey("view",(e=>{setTimeout((()=>{this.view=e,this.heading=ei()[e]}),ce.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()})),c.W.subscribeKey("activeCaipNetwork",(e=>{this.network=e,this.networkImage=J.$.getNetworkImage(this.network)})))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=Xt[u.I.state.view]??z.f.tokens.theme.backgroundPrimary;return this.style.setProperty("--local-header-background-color",e),o.qy`
      <wui-flex
        .padding=${["0","4","0","4"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){N.E.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),u.I.push("WhatIsAWallet")}async onClose(){await m.safeClose()}rightHeaderTemplate(){const e=r.H?.state?.features?.smartSessions;return"Account"===u.I.state.view&&e?o.qy`<wui-flex>
      <wui-icon-button
        icon="clock"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${()=>u.I.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-button>
      ${this.closeButtonTemplate()}
    </wui-flex> `:this.closeButtonTemplate()}closeButtonTemplate(){return o.qy`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `}titleTemplate(){if("PayQuote"===this.view)return o.qy`<w3m-pay-header></w3m-pay-header>`;const e=Jt.includes(this.view);return o.qy`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="2"
      >
        <wui-text
          display="inline"
          variant="lg-regular"
          color="primary"
          data-testid="w3m-header-text"
        >
          ${this.heading}
        </wui-text>
        ${e?o.qy`<wui-tag variant="accent" size="md">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){const{view:e}=u.I.state,t="Connect"===e,i=r.H.state.enableEmbedded,a="ApproveTransaction"===e,s="ConnectingSiwe"===e,c="Account"===e,l=r.H.state.enableNetworkSwitch,d=a||s||t&&i;return c&&l?o.qy`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,n.J)(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,n.J)(this.networkImage)}
      ></wui-select>`:this.showBack&&!d?o.qy`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`:o.qy`<wui-icon-button
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`}onNetworks(){this.isAllowedNetworkSwitch()&&(N.E.sendEvent({type:"track",event:"CLICK_NETWORKS"}),u.I.push("Networks"))}isAllowedNetworkSwitch(){const e=c.W.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,i=e?.find((({id:e})=>e===this.network?.id));return t||!i}onViewChange(){const{history:e}=u.I.state;let t=ce.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=ce.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){const{history:e}=u.I.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){u.I.goBack()}};ti.styles=Gt,Yt([(0,a.wk)()],ti.prototype,"heading",void 0),Yt([(0,a.wk)()],ti.prototype,"network",void 0),Yt([(0,a.wk)()],ti.prototype,"networkImage",void 0),Yt([(0,a.wk)()],ti.prototype,"showBack",void 0),Yt([(0,a.wk)()],ti.prototype,"prevHistoryLength",void 0),Yt([(0,a.wk)()],ti.prototype,"view",void 0),Yt([(0,a.wk)()],ti.prototype,"viewDirection",void 0),ti=Yt([(0,z.EM)("w3m-header")],ti);i(8032),i(6307);const ii=F.AH`
  :host {
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${({tokens:e})=>e.theme.borderPrimary};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e.round} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    border-radius: ${({borderRadius:e})=>e.round} !important;
  }
`;var oi=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let ai=class extends o.WF{constructor(){super(...arguments),this.message="",this.variant="success"}render(){return o.qy`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return"loading"===this.variant?o.qy`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:o.qy`<wui-icon-box
      size="md"
      color=${{success:"success",error:"error",warning:"warning",info:"default"}[this.variant]}
      icon=${{success:"checkmark",error:"warning",warning:"warningCircle",info:"info"}[this.variant]}
    ></wui-icon-box>`}};ai.styles=[D.W5,ii],oi([(0,a.MZ)()],ai.prototype,"message",void 0),oi([(0,a.MZ)()],ai.prototype,"variant",void 0),ai=oi([(0,M.E)("wui-snackbar")],ai);const ni=o.AH`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var ri=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let si=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=g.P.state.open,this.unsubscribe.push(g.P.subscribeKey("open",(e=>{this.open=e,this.onOpen()})))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t}=g.P.state;return o.qy` <wui-snackbar message=${e} variant=${t}></wui-snackbar> `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),g.P.state.autoClose&&(this.timeout=setTimeout((()=>g.P.hide()),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};si.styles=ni,ri([(0,a.wk)()],si.prototype,"open",void 0),si=ri([(0,z.EM)("w3m-snackbar")],si);const ci=(0,y.BX)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),li={state:ci,subscribe:e=>(0,y.B1)(ci,(()=>e(ci))),subscribeKey:(e,t)=>(0,f.u$)(ci,e,t),showTooltip({message:e,triggerRect:t,variant:i}){ci.open=!0,ci.message=e,ci.triggerRect=t,ci.variant=i},hide(){ci.open=!1,ci.message="",ci.triggerRect={width:0,height:0,top:0,left:0}}},di=(0,$.X)(li),ui=o.AH`
  :host {
    width: 100%;
    display: block;
  }
`;var pi=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let hi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.text="",this.open=di.state.open,this.unsubscribe.push(u.I.subscribeKey("view",(()=>{di.hide()})),s.W.subscribeKey("open",(e=>{e||di.hide()})),di.subscribeKey("open",(e=>{this.open=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),di.hide()}render(){return o.qy`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return o.qy`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();if(!this.open){const t=document.querySelector("w3m-modal"),i={width:e.width,height:e.height,left:e.left,top:e.top};if(t){const o=t.getBoundingClientRect();i.left=e.left-(window.innerWidth-o.width)/2,i.top=e.top-(window.innerHeight-o.height)/2}di.showTooltip({message:this.text,triggerRect:i,variant:"shade"})}}onMouseLeave(e){this.contains(e.relatedTarget)||di.hide()}};hi.styles=[ui],pi([(0,a.MZ)()],hi.prototype,"text",void 0),pi([(0,a.wk)()],hi.prototype,"open",void 0),hi=pi([(0,z.EM)("w3m-tooltip-trigger")],hi);const mi=z.AH`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({spacing:e})=>e[3]} 10px ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({spacing:e})=>e[5]});
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var wi=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let gi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.open=di.state.open,this.message=di.state.message,this.triggerRect=di.state.triggerRect,this.variant=di.state.variant,this.unsubscribe.push(di.subscribe((e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){this.dataset.variant=this.variant;const e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`\n    --w3m-tooltip-top: ${e}px;\n    --w3m-tooltip-left: ${t}px;\n    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;\n    --w3m-tooltip-display: ${this.open?"flex":"none"};\n    --w3m-tooltip-opacity: ${this.open?1:0};\n    `,o.qy`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};gi.styles=[mi],wi([(0,a.wk)()],gi.prototype,"open",void 0),wi([(0,a.wk)()],gi.prototype,"message",void 0),wi([(0,a.wk)()],gi.prototype,"triggerRect",void 0),wi([(0,a.wk)()],gi.prototype,"variant",void 0),gi=wi([(0,z.EM)("w3m-tooltip")],gi);const yi={getTabsByNamespace:e=>Boolean(e)&&e===v.o.CHAIN.EVM?!1===r.H.state.remoteFeatures?.activity?ce.ACCOUNT_TABS.filter((e=>"Activity"!==e.label)):ce.ACCOUNT_TABS:[],isValidReownName:e=>/^[a-zA-Z0-9]+$/gu.test(e),isValidEmail:e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(e),validateReownName:e=>e.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,""),hasFooter(){const e=u.I.state.view;if(ce.VIEWS_WITH_LEGAL_FOOTER.includes(e)){const{termsConditionsUrl:e,privacyPolicyUrl:t}=r.H.state,i=r.H.state.features?.legalCheckbox;return!(!e&&!t||i)}return ce.VIEWS_WITH_DEFAULT_FOOTER.includes(e)}};i(6490);const fi=z.AH`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:e})=>e[3]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.core.textAccentPrimary};
    font-weight: 500;
  }
`;var bi=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let vi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=r.H.state.remoteFeatures,this.unsubscribe.push(r.H.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=r.H.state,i=r.H.state.features?.legalCheckbox;return!e&&!t||i?o.qy`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `:o.qy`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=r.H.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=r.H.state;return e?o.qy`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){const{privacyPolicyUrl:e}=r.H.state;return e?o.qy`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(e=!1){return this.remoteFeatures?.reownBranding?e?o.qy`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:o.qy`<wui-ux-by-reown></wui-ux-by-reown>`:null}};vi.styles=[fi],bi([(0,a.wk)()],vi.prototype,"remoteFeatures",void 0),vi=bi([(0,z.EM)("w3m-legal-footer")],vi);i(2077);const ki=o.AH``;var xi=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Si=class extends o.WF{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=r.H.state;return e||t?o.qy`
      <wui-flex
        .padding=${["4","3","3","3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return o.qy` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){N.E.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:(0,S.lj)(c.W.state.activeChain)===k.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),u.I.push("WhatIsABuy")}};Si.styles=[ki],Si=xi([(0,z.EM)("w3m-onramp-providers-footer")],Si);const Ti=z.AH`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`;var Ai=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Ii=class extends o.WF{constructor(){super(...arguments),this.resizeObserver=void 0,this.unsubscribe=[],this.status="hide",this.view=u.I.state.view}firstUpdated(){this.status=yi.hasFooter()?"show":"hide",this.unsubscribe.push(u.I.subscribeKey("view",(e=>{if(this.view=e,this.status=yi.hasFooter()?"show":"hide","hide"===this.status){document.documentElement.style.setProperty("--apkt-footer-height","0px")}}))),this.resizeObserver=new ResizeObserver((e=>{for(const t of e)if(t.target===this.getWrapper()){const e=`${t.contentRect.height}px`;document.documentElement.style.setProperty("--apkt-footer-height",e)}})),this.resizeObserver.observe(this.getWrapper())}render(){return o.qy`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `}templatePageContainer(){return yi.hasFooter()?o.qy` ${this.templateFooter()}`:null}templateFooter(){switch(this.view){case"Networks":return this.templateNetworksFooter();case"Connect":case"ConnectWallets":case"OnRampFiatSelect":case"OnRampTokenSelect":return o.qy`<w3m-legal-footer></w3m-legal-footer>`;case"OnRampProviders":return o.qy`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;default:return null}}templateNetworksFooter(){return o.qy` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`}onNetworkHelp(){N.E.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),u.I.push("WhatIsANetwork")}getWrapper(){return this.shadowRoot?.querySelector("div.container")}};Ii.styles=[Ti],Ai([(0,a.wk)()],Ii.prototype,"status",void 0),Ai([(0,a.wk)()],Ii.prototype,"view",void 0),Ii=Ai([(0,z.EM)("w3m-footer")],Ii);const Pi=z.AH`
  :host {
    display: block;
    width: inherit;
  }
`;var $i=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Ci=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.viewState=u.I.state.view,this.history=u.I.state.history.join(","),this.unsubscribe.push(u.I.subscribeKey("view",(()=>{this.history=u.I.state.history.join(","),document.documentElement.style.setProperty("--apkt-duration-dynamic","var(--apkt-durations-lg)")})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),document.documentElement.style.setProperty("--apkt-duration-dynamic","0s")}render(){return o.qy`${this.templatePageContainer()}`}templatePageContainer(){return o.qy`<w3m-router-container
      history=${this.history}
      .setView=${()=>{this.viewState=u.I.state.view}}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`}viewTemplate(e){switch(e){case"AccountSettings":return o.qy`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return o.qy`<w3m-account-view></w3m-account-view>`;case"AllWallets":return o.qy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return o.qy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return o.qy`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return o.qy`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return o.qy`<w3m-connect-view></w3m-connect-view>`;case"Create":return o.qy`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return o.qy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return o.qy`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return o.qy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return o.qy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return o.qy`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return o.qy`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return o.qy`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"DataCapture":return o.qy`<w3m-data-capture-view></w3m-data-capture-view>`;case"DataCaptureOtpConfirm":return o.qy`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case"Downloads":return o.qy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return o.qy`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return o.qy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return o.qy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return o.qy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return o.qy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return o.qy`<w3m-network-switch-view></w3m-network-switch-view>`;case"ProfileWallets":return o.qy`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case"Transactions":return o.qy`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return o.qy`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampTokenSelect":return o.qy`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return o.qy`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return o.qy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return o.qy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return o.qy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return o.qy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return o.qy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return o.qy`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return o.qy`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return o.qy`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return o.qy`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return o.qy`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return o.qy`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WalletSendConfirmed":return o.qy`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;case"WhatIsABuy":return o.qy`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return o.qy`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return o.qy`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return o.qy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return o.qy`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return o.qy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return o.qy`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return o.qy`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return o.qy`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return o.qy`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return o.qy`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return o.qy`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return o.qy`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return o.qy`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return o.qy`<w3m-pay-loading-view></w3m-pay-loading-view>`;case"PayQuote":return o.qy`<w3m-pay-quote-view></w3m-pay-quote-view>`;case"FundWallet":return o.qy`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;case"PayWithExchange":return o.qy`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;case"PayWithExchangeSelectAsset":return o.qy`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;case"UsageExceeded":return o.qy`<w3m-usage-exceeded-view></w3m-usage-exceeded-view>`;case"SmartAccountSettings":return o.qy`<w3m-smart-account-settings-view></w3m-smart-account-settings-view>`}}};Ci.styles=[Pi],$i([(0,a.wk)()],Ci.prototype,"viewState",void 0),$i([(0,a.wk)()],Ci.prototype,"history",void 0),Ci=$i([(0,z.EM)("w3m-router")],Ci);const Ei=z.AH`
  :host {
    z-index: ${({tokens:e})=>e.core.zIndex};
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: ${({tokens:e})=>e.theme.overlay};
    backdrop-filter: blur(0px);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      backdrop-filter ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--apkt-modal-width);
    width: 100%;
    position: relative;
    outline: none;
    transform: translateY(4px);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    transition:
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: var(--local-modal-padding);
    box-sizing: border-box;
  }

  :host(.open) wui-card {
    transform: translateY(0px);
  }

  wui-card::before {
    z-index: 1;
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    transition-delay: ${({durations:e})=>e.md};
    will-change: box-shadow;
  }

  :host([data-mobile-fullscreen='true']) wui-card::before {
    border-radius: 0px;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.theme.borderPrimaryDark};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-border var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-default var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: var(--apkt-modal-width);
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      w3m-shake ${({durations:e})=>e.xl}
        ${({easings:e})=>e["ease-out-power-2"]};
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--apkt-spacing-6) 0px;
    }
  }

  @media (max-width: 430px) {
    :host([data-mobile-fullscreen='true']) {
      height: 100dvh;
    }
    :host([data-mobile-fullscreen='true']) wui-flex {
      align-items: stretch;
    }
    :host([data-mobile-fullscreen='true']) wui-card {
      max-width: 100%;
      height: 100%;
      border-radius: 0;
      border: none;
    }
    :host(:not([data-mobile-fullscreen='true'])) wui-flex {
      align-items: flex-end;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card {
      max-width: 100%;
      border-bottom: none;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card[data-embedded='true'] {
      border-bottom-left-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
      border-bottom-right-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card:not([data-embedded='true']) {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    wui-card[shake='true'] {
      animation: w3m-shake 0.5s ${({easings:e})=>e["ease-out-power-2"]};
    }
  }

  @keyframes fade-in {
    0% {
      transform: scale(0.99) translateY(4px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes card-background-border {
    from {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
  }
`;var Ni=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const Ri="scroll-lock",qi={PayWithExchange:"0",PayWithExchangeSelectAsset:"0",Pay:"0",PayQuote:"0",PayLoading:"0"};class Wi extends o.WF{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=r.H.state.enableEmbedded,this.open=s.W.state.open,this.caipAddress=c.W.state.activeCaipAddress,this.caipNetwork=c.W.state.activeCaipNetwork,this.shake=s.W.state.shake,this.filterByNamespace=l.a.state.filterByNamespace,this.padding=z.f.spacing[1],this.mobileFullScreen=r.H.state.enableMobileFullScreen,this.initializeTheming(),d.N.prefetchAnalyticsConfig(),this.unsubscribe.push(s.W.subscribeKey("open",(e=>e?this.onOpen():this.onClose())),s.W.subscribeKey("shake",(e=>this.shake=e)),c.W.subscribeKey("activeCaipNetwork",(e=>this.onNewNetwork(e))),c.W.subscribeKey("activeCaipAddress",(e=>this.onNewAddress(e))),r.H.subscribeKey("enableEmbedded",(e=>this.enableEmbedded=e)),l.a.subscribeKey("filterByNamespace",(e=>{this.filterByNamespace===e||c.W.getAccountData(e)?.caipAddress||(d.N.fetchRecommendedWallets(),this.filterByNamespace=e)})),u.I.subscribeKey("view",(()=>{this.dataset.border=yi.hasFooter()?"true":"false",this.padding=qi[u.I.state.view]??z.f.spacing[1]})))}firstUpdated(){if(this.dataset.border=yi.hasFooter()?"true":"false",this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.caipAddress){if(this.enableEmbedded)return s.W.close(),void this.prefetch();this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.onRemoveKeyboardListener()}render(){return this.style.setProperty("--local-modal-padding",this.padding),this.enableEmbedded?o.qy`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?o.qy`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return o.qy` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,n.J)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-footer></w3m-footer>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){if(e.target===e.currentTarget){if(this.mobileFullScreen)return;await this.handleClose()}}async handleClose(){await m.safeClose()}initializeTheming(){const{themeVariables:e,themeMode:t}=w.W.state,i=z.Zv.getColorTheme(t);(0,z.RF)(e,i)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),g.P.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=Ri,e.textContent="\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${Ri}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",(t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){const{tagName:i}=t.target;!i||i.includes("W3M-")||i.includes("WUI-")||e?.focus()}}),this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(e){const t=c.W.state.isSwitchingNamespace,i="ProfileWallets"===u.I.state.view;!e&&!t&&!i&&s.W.close(),await h.U.initializeIfEnabled(e),this.caipAddress=e,c.W.setIsSwitchingNamespace(!1)}onNewNetwork(e){const t=this.caipNetwork,i=t?.caipNetworkId?.toString(),o=e?.caipNetworkId?.toString(),a=i!==o,n="UnsupportedChain"===u.I.state.view,r=s.W.state.open;let c=!1;this.enableEmbedded&&"SwitchNetwork"===u.I.state.view&&(c=!0),a&&U.resetState(),r&&n&&(c=!0),c&&"SIWXSignMessage"!==u.I.state.view&&u.I.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(d.N.prefetch(),d.N.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}Wi.styles=Ei,Ni([(0,a.MZ)({type:Boolean})],Wi.prototype,"enableEmbedded",void 0),Ni([(0,a.wk)()],Wi.prototype,"open",void 0),Ni([(0,a.wk)()],Wi.prototype,"caipAddress",void 0),Ni([(0,a.wk)()],Wi.prototype,"caipNetwork",void 0),Ni([(0,a.wk)()],Wi.prototype,"shake",void 0),Ni([(0,a.wk)()],Wi.prototype,"filterByNamespace",void 0),Ni([(0,a.wk)()],Wi.prototype,"padding",void 0),Ni([(0,a.wk)()],Wi.prototype,"mobileFullScreen",void 0);let Oi=class extends Wi{};Oi=Ni([(0,z.EM)("w3m-modal")],Oi);let Ui=class extends Wi{};Ui=Ni([(0,z.EM)("appkit-modal")],Ui);const zi=z.AH`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: ${({borderRadius:e})=>e[5]};
    background-color: ${({colors:e})=>e.semanticError010};
  }
`;var Di=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Mi=class extends o.WF{constructor(){super()}render(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding="${["1","3","4","3"]}"
      >
        <wui-flex justifyContent="center" alignItems="center" class="icon-box">
          <wui-icon size="xxl" color="error" name="warningCircle"></wui-icon>
        </wui-flex>

        <wui-text variant="lg-medium" color="primary" align="center">
          The app isn't responding as expected
        </wui-text>
        <wui-text variant="md-regular" color="secondary" align="center">
          Try again or reach out to the app team for help.
        </wui-text>

        <wui-button
          variant="neutral-secondary"
          size="md"
          @click=${this.onTryAgainClick.bind(this)}
          data-testid="w3m-usage-exceeded-button"
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try Again
        </wui-button>
      </wui-flex>
    `}onTryAgainClick(){u.I.goBack()}};Mi.styles=zi,Mi=Di([(0,z.EM)("w3m-usage-exceeded-view")],Mi);var Fi=i(6265);i(8484);const ji=z.AH`
  :host {
    width: 100%;
  }
`;var Bi=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Li=class extends o.WF{constructor(){super(...arguments),this.hasImpressionSent=!1,this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100",this.rdnsId="",this.displayIndex=void 0,this.walletRank=void 0,this.namespaces=[]}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver()}updated(e){super.updated(e),(e.has("name")||e.has("imageSrc")||e.has("walletRank"))&&(this.hasImpressionSent=!1);e.has("walletRank")&&this.walletRank&&!this.intersectionObserver&&this.setupIntersectionObserver()}setupIntersectionObserver(){this.intersectionObserver=new IntersectionObserver((e=>{e.forEach((e=>{!e.isIntersecting||this.loading||this.hasImpressionSent||this.sendImpressionEvent()}))}),{threshold:.1}),this.intersectionObserver.observe(this)}cleanupIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}sendImpressionEvent(){this.name&&!this.hasImpressionSent&&this.walletRank&&(this.hasImpressionSent=!0,(this.rdnsId||this.name)&&N.E.sendWalletImpressionEvent({name:this.name,walletRank:this.walletRank,rdnsId:this.rdnsId,view:u.I.state.view,displayIndex:this.displayIndex}))}handleGetWalletNamespaces(){return Object.keys(Fi.q.state.adapters).length>1?this.namespaces:[]}render(){return o.qy`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${(0,n.J)(this.imageSrc)}
        name=${this.name}
        size=${(0,n.J)(this.size)}
        tagLabel=${(0,n.J)(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
        .namespaces=${this.handleGetWalletNamespaces()}
      ></wui-list-wallet>
    `}};Li.styles=ji,Bi([(0,a.MZ)({type:Array})],Li.prototype,"walletImages",void 0),Bi([(0,a.MZ)()],Li.prototype,"imageSrc",void 0),Bi([(0,a.MZ)()],Li.prototype,"name",void 0),Bi([(0,a.MZ)()],Li.prototype,"size",void 0),Bi([(0,a.MZ)()],Li.prototype,"tagLabel",void 0),Bi([(0,a.MZ)()],Li.prototype,"tagVariant",void 0),Bi([(0,a.MZ)()],Li.prototype,"walletIcon",void 0),Bi([(0,a.MZ)()],Li.prototype,"tabIdx",void 0),Bi([(0,a.MZ)({type:Boolean})],Li.prototype,"disabled",void 0),Bi([(0,a.MZ)({type:Boolean})],Li.prototype,"showAllWallets",void 0),Bi([(0,a.MZ)({type:Boolean})],Li.prototype,"loading",void 0),Bi([(0,a.MZ)({type:String})],Li.prototype,"loadingSpinnerColor",void 0),Bi([(0,a.MZ)()],Li.prototype,"rdnsId",void 0),Bi([(0,a.MZ)()],Li.prototype,"displayIndex",void 0),Bi([(0,a.MZ)()],Li.prototype,"walletRank",void 0),Bi([(0,a.MZ)({type:Array})],Li.prototype,"namespaces",void 0),Li=Bi([(0,z.EM)("w3m-list-wallet")],Li);const Hi=z.AH`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${({durations:e})=>e.lg};
    --local-transition: ${({easings:e})=>e["ease-out-power-2"]};
  }

  .container {
    display: block;
    overflow: hidden;
    overflow: hidden;
    position: relative;
    height: var(--local-container-height);
    transition: height var(--local-duration-height) var(--local-transition);
    will-change: height, padding-bottom;
  }

  .container[data-mobile-fullscreen='true'] {
    overflow: scroll;
  }

  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    width: inherit;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-bottom-left-radius: var(--local-border-bottom-radius);
    border-bottom-right-radius: var(--local-border-bottom-radius);
    transition: border-bottom-left-radius var(--local-duration) var(--local-transition);
  }

  .page[data-mobile-fullscreen='true'] {
    height: 100%;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .footer {
    height: var(--apkt-footer-height);
  }

  div.page[view-direction^='prev-'] .page-content {
    animation:
      slide-left-out var(--local-duration) forwards var(--local-transition),
      slide-left-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }
`;var _i=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Zi=class extends o.WF{constructor(){super(...arguments),this.resizeObserver=void 0,this.transitionDuration="0.15s",this.transitionFunction="",this.history="",this.view="",this.setView=void 0,this.viewDirection="",this.historyState="",this.previousHeight="0px",this.mobileFullScreen=r.H.state.enableMobileFullScreen,this.onViewportResize=()=>{this.updateContainerHeight()}}updated(e){if(e.has("history")){const e=this.history;""!==this.historyState&&this.historyState!==e&&this.onViewChange(e)}e.has("transitionDuration")&&this.style.setProperty("--local-duration",this.transitionDuration),e.has("transitionFunction")&&this.style.setProperty("--local-transition",this.transitionFunction)}firstUpdated(){this.transitionFunction&&this.style.setProperty("--local-transition",this.transitionFunction),this.style.setProperty("--local-duration",this.transitionDuration),this.historyState=this.history,this.resizeObserver=new ResizeObserver((e=>{for(const t of e)if(t.target===this.getWrapper()){let e=t.contentRect.height;const i=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");if(this.mobileFullScreen){e=(window.visualViewport?.height||window.innerHeight)-this.getHeaderHeight()-i,this.style.setProperty("--local-border-bottom-radius","0px")}else{e=e+i,this.style.setProperty("--local-border-bottom-radius",i?"var(--apkt-borderRadius-5)":"0px")}this.style.setProperty("--local-container-height",`${e}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${e}px`}})),this.resizeObserver.observe(this.getWrapper()),this.updateContainerHeight(),window.addEventListener("resize",this.onViewportResize),window.visualViewport?.addEventListener("resize",this.onViewportResize)}disconnectedCallback(){const e=this.getWrapper();e&&this.resizeObserver&&this.resizeObserver.unobserve(e),window.removeEventListener("resize",this.onViewportResize),window.visualViewport?.removeEventListener("resize",this.onViewportResize)}render(){return o.qy`
      <div class="container" data-mobile-fullscreen="${(0,n.J)(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${(0,n.J)(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}onViewChange(e){const t=e.split(",").filter(Boolean),i=this.historyState.split(",").filter(Boolean),o=i.length,a=t.length,n=t[t.length-1]||"",r=z.Zv.cssDurationToNumber(this.transitionDuration);let s="";a>o?s="next":a<o?s="prev":a===o&&t[a-1]!==i[o-1]&&(s="next"),this.viewDirection=`${s}-${n}`,setTimeout((()=>{this.historyState=e,this.setView?.(n)}),r),setTimeout((()=>{this.viewDirection=""}),2*r)}getWrapper(){return this.shadowRoot?.querySelector("div.page")}updateContainerHeight(){const e=this.getWrapper();if(!e)return;const t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");let i=0;if(this.mobileFullScreen){i=(window.visualViewport?.height||window.innerHeight)-this.getHeaderHeight()-t,this.style.setProperty("--local-border-bottom-radius","0px")}else i=e.getBoundingClientRect().height+t,this.style.setProperty("--local-border-bottom-radius",t?"var(--apkt-borderRadius-5)":"0px");this.style.setProperty("--local-container-height",`${i}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${i}px`}getHeaderHeight(){return 60}};Zi.styles=[Hi],_i([(0,a.MZ)({type:String})],Zi.prototype,"transitionDuration",void 0),_i([(0,a.MZ)({type:String})],Zi.prototype,"transitionFunction",void 0),_i([(0,a.MZ)({type:String})],Zi.prototype,"history",void 0),_i([(0,a.MZ)({type:String})],Zi.prototype,"view",void 0),_i([(0,a.MZ)({attribute:!1})],Zi.prototype,"setView",void 0),_i([(0,a.wk)()],Zi.prototype,"viewDirection",void 0),_i([(0,a.wk)()],Zi.prototype,"historyState",void 0),_i([(0,a.wk)()],Zi.prototype,"previousHeight",void 0),_i([(0,a.wk)()],Zi.prototype,"mobileFullScreen",void 0),Zi=_i([(0,z.EM)("w3m-router-container")],Zi)}}]);