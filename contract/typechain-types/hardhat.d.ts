/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "LavaEvmosProviderPaymentContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LavaEvmosProviderPaymentContract__factory>;

    getContractAt(
      name: "LavaEvmosProviderPaymentContract",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.LavaEvmosProviderPaymentContract>;

    deployContract(
      name: "LavaEvmosProviderPaymentContract",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.LavaEvmosProviderPaymentContract>;

    deployContract(
      name: "LavaEvmosProviderPaymentContract",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.LavaEvmosProviderPaymentContract>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
