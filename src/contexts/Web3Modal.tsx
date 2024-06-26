'use client'

import { PropsWithChildren } from 'react';

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

createWeb3Modal({
	ethersConfig: defaultConfig({
		metadata: {
			name: 'Web3 Chess',
			description: 'Web3 Chess',
			url: process.env.NEXT_PUBLIC_FRONTEND_URL!,
			icons: []
		}
	}),
	chains: [{
		chainId: 0x89,
		name: 'Polygon',
		currency: 'MATIC',
		explorerUrl: 'https://polygonscan.com',
		rpcUrl: 'https://polycon-rpc.com',
	}],
	projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
});

type Web3ModalProps = PropsWithChildren;

export default function Web3Modal({ children }: Web3ModalProps) {
	return children;
}
