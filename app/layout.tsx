import type { Metadata } from 'next';
import './globals.css';
import { baiJamjuree } from './ui/fonts';

export const metadata: Metadata = {
    applicationName: 'Mango Habanero',
    authors: [{ name: 'Philip Wafula', url: 'https://mango-habanero.dev/' }],
    generator: 'Next.js',
    title: 'Mango Habanero',
    description: 'A portfolio app for Philip Wafula.',
    icons: {
        icon: [
            { url: '/images/favicon/favicon-32x32.png' },
            new URL('/images/favicon/favicon-32x32.png', 'https://mango-habanero.dev/'),
        ],
        other: [
            {
                rel: 'apple-touch-icon',
                url: '/images/favicon/apple-touch-icon.png',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${baiJamjuree.className} anti-aliased bg-black`}>{children}</body>
        </html>
    );
}
