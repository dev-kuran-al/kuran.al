import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { AntdRegistry } from '@ant-design/nextjs-registry';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Lexo Kuran Shqip',
	description: 'LexoKuran.al është website faqe webi për përkthim dhe komentim e Kuran-it famëlartë',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
				{/* TODO ? dark mode */}
				<AntdRegistry>
					<Navbar />
					<div>{children}</div>
					<Footer />
				</AntdRegistry>
			</body>
		</html>
	);
}
