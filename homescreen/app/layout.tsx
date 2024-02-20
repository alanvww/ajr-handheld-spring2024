import type { Metadata, Viewport } from 'next';

import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
	themeColor: '#609F5A',
	colorScheme: 'light',
};

export const metadata: Metadata = {
	title: 'Homescreen - Alan Ren',
	description: 'Homescreen by Alan, Handheld Spring 2024',
	appleWebApp: {
		title: 'Homescreen - Alan Ren',
		statusBarStyle: 'default',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
