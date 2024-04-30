import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';

export const metadata: Metadata = {
	title: "Web3 Chess",
	description: "Web3 Chess",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<PageHeader />
				{children}
				<PageFooter />
			</body>
		</html>
	);
}
