import { Header } from '@/components/header/Header';
import '../styles/globals.css';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import { ThemeProviderComponent } from '../providers/ThemeProvider';

const NunitoSans = Nunito_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Rest Countries',
    description: 'Query for countries',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={NunitoSans.className}>
                <ThemeProviderComponent>
                    <Header />
                    {children}
                </ThemeProviderComponent>
            </body>
        </html>
    );
}
