import Head from 'next/head';
import Link from 'next/link';

export const DefaultLayout = ({ title, children }: { title: string; children: JSX.Element | JSX.Element[] }) => {
    return (
        <>
            <Head>
                <title>{title} | CWJH Tools</title>
            </Head>
            <div>
                <nav>
                    <Link href='/'>Home</Link>
                </nav>
                <main>{children}</main>
            </div>
        </>
    );
};
