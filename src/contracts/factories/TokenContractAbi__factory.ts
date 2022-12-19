/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.26.0
  Forc version: 0.31.3
  Fuel-Core version: 0.14.0
*/

import { Interface, Contract } from "fuels";
import type { Provider, BaseWalletLocked, AbstractAddress } from "fuels";
import type {
  TokenContractAbi,
  TokenContractAbiInterface,
} from "../TokenContractAbi";

const _abi = {
  types: [
    {
      typeId: 0,
      type: "()",
      components: [],
      typeParameters: null,
    },
    {
      typeId: 1,
      type: "b256",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 2,
      type: "enum Error",
      components: [
        {
          name: "AddressAlreadyMint",
          type: 0,
          typeArguments: null,
        },
        {
          name: "CannotReinitialize",
          type: 0,
          typeArguments: null,
        },
        {
          name: "MintIsClosed",
          type: 0,
          typeArguments: null,
        },
        {
          name: "NotOwner",
          type: 0,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 3,
      type: "str[4]",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 4,
      type: "str[9]",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 5,
      type: "struct Address",
      components: [
        {
          name: "value",
          type: 1,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 6,
      type: "struct ContractId",
      components: [
        {
          name: "value",
          type: 1,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 7,
      type: "u64",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 8,
      type: "u8",
      components: null,
      typeParameters: null,
    },
  ],
  functions: [
    {
      inputs: [
        {
          name: "burn_amount",
          type: 7,
          typeArguments: null,
        },
      ],
      name: "burn_coins",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
    },
    {
      inputs: [],
      name: "decimals",
      output: {
        name: "",
        type: 8,
        typeArguments: null,
      },
    },
    {
      inputs: [],
      name: "get_balance",
      output: {
        name: "",
        type: 7,
        typeArguments: null,
      },
    },
    {
      inputs: [],
      name: "get_mint_amount",
      output: {
        name: "",
        type: 7,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: "asset_id",
          type: 6,
          typeArguments: null,
        },
      ],
      name: "get_token_balance",
      output: {
        name: "",
        type: 7,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: "mint_amount",
          type: 7,
          typeArguments: null,
        },
        {
          name: "owner",
          type: 5,
          typeArguments: null,
        },
      ],
      name: "initialize",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
    },
    {
      inputs: [],
      name: "mint",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: "mint_amount",
          type: 7,
          typeArguments: null,
        },
      ],
      name: "mint_coins",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
    },
    {
      inputs: [],
      name: "name",
      output: {
        name: "",
        type: 4,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: "mint_amount",
          type: 7,
          typeArguments: null,
        },
      ],
      name: "set_mint_amount",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
    },
    {
      inputs: [],
      name: "symbol",
      output: {
        name: "",
        type: 3,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: "coins",
          type: 7,
          typeArguments: null,
        },
        {
          name: "address",
          type: 5,
          typeArguments: null,
        },
      ],
      name: "transfer_coins",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: "coins",
          type: 7,
          typeArguments: null,
        },
        {
          name: "asset_id",
          type: 6,
          typeArguments: null,
        },
        {
          name: "address",
          type: 5,
          typeArguments: null,
        },
      ],
      name: "transfer_token_to_output",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
    },
  ],
  loggedTypes: [
    {
      logId: 0,
      loggedType: {
        name: "",
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 1,
      loggedType: {
        name: "",
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 2,
      loggedType: {
        name: "",
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 3,
      loggedType: {
        name: "",
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 4,
      loggedType: {
        name: "",
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 5,
      loggedType: {
        name: "",
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 6,
      loggedType: {
        name: "",
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 7,
      loggedType: {
        name: "",
        type: 2,
        typeArguments: [],
      },
    },
  ],
  messagesTypes: [],
};

export class TokenContractAbi__factory {
  static readonly abi = _abi;

  static createInterface(): TokenContractAbiInterface {
    return new Interface(_abi) as unknown as TokenContractAbiInterface;
  }

  static connect(
    id: string | AbstractAddress,
    walletOrProvider: BaseWalletLocked | Provider
  ): TokenContractAbi {
    return new Contract(
      id,
      _abi,
      walletOrProvider
    ) as unknown as TokenContractAbi;
  }
}
