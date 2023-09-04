import tokens from "./tokens.json";
import tokenLogos from "./tokenLogos";

export const ROUTES = {
  ROOT: "/",
  FAUCET: "/faucet",
  DASHBOARD: "/dashboard",
  WALLET: "/wallet",
};

export const TOKENS_LIST: Array<IToken> = Object.values(tokens).map((t) => ({
  ...t,
  logo: tokenLogos[t.symbol],
}));
export const TOKENS_BY_SYMBOL: Record<string, IToken> = TOKENS_LIST.reduce(
  (acc, t) => ({ ...acc, [t.symbol]: t }),
  {}
);
export const TOKENS_BY_ASSET_ID: Record<string, IToken> = TOKENS_LIST.reduce(
  (acc, t) => ({ ...acc, [t.assetId]: t }),
  {}
);

export const NODE_URL = "https://beta-4.fuel.network/graphql";
export const EXPLORER_URL =
  "https://fuellabs.github.io/block-explorer-v2/beta-3/#";
export const FAUCET_URL = "https://faucet-beta-4.fuel.network";
export const SEED =
  "0x1586034a5486b0af22458ed29106865fee519b341bd260a2d9baad1d2a5c0d5b1505692de3ce6324ba5f306460d7db9a00ffebd5cefccf305da14c6c8fdde0f0";
export const CONTRACT_ADDRESSES: IContractsConfig = {
  priceOracle:
    "0x633fad7666495c53daa41cc329b78a554f215af4b826671ee576f2a30096999d",
  market: "0x2679d41c2981bcd6ab69d66f0ae656077efecac2c2dd729f88f5a6457ce1d5f1",
  tokenFactory:
    "0xd8c627b9cd9ee42e2c2bd9793b13bc9f8e9aad32e25a99ea574f23c1dd17685a",
};

export interface IToken {
  logo: string;
  assetId: string;
  name: string;
  symbol: string;
  decimals: number;
}

export interface IContractsConfig {
  priceOracle: string;
  market: string;
  tokenFactory: string;
}
