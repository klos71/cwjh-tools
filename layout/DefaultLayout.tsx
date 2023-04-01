import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { FaGithub, FaCaretDown, FaCaretUp, FaWrench } from 'react-icons/fa';
import { SiWebassembly } from 'react-icons/si';
import { useState } from 'react';

const Stylednav = styled.nav`
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
    position: fixed;
    height: 100%;
    overflow: auto;
    a {
        display: block;
        color: black;
        padding: 16px;
        text-decoration: none;
    }
    a:hover:not(.active) {
        background-color: #555;
        color: white;
    }
    a.active {
        background-color: #2a2a2a;
        color: white;
    }
`;

const Content = styled.main`
    margin-left: 200px;
    padding: 1px 16px;
`;

export const DefaultLayout = ({ title, children }: { title: string; children: JSX.Element | JSX.Element[] }) => {
    const router = useRouter();

    const findRouteInAccordion = (routes: string[]) => {
        return routes.includes(router.asPath);
    };

    return (
        <>
            <Head>
                <title>{title} | CWJH Tools</title>
            </Head>

            <Stylednav>
                <Link href='/' className={router.asPath === '/' ? 'active' : ''}>
                    Home
                </Link>
                <Accordion title='Tools' icon={<FaWrench size='1em' />} open={findRouteInAccordion(['/tools/ascii-binary'])}>
                    <Link href='/tools/ascii-binary' className={router.asPath === '/tools/ascii-binary' ? 'active' : ''}>
                        ASCII {'=>'} Binary
                    </Link>
                </Accordion>
                <Accordion title='Github' icon={<FaGithub size='1em' />}>
                    <Link href='https://github.com/klos71/cwjh_wasm_tools' target='_blank' className={router.asPath === '/about' ? 'active' : ''}>
                        <SiWebassembly /> cwjh_wasm_tools
                    </Link>
                </Accordion>
            </Stylednav>
            <Content>{children}</Content>
        </>
    );
};

const AccordionWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const AccordionTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 1rem;
    &.open {
        background-color: #424242;
        color: white;
    }
    @media (hover: hover) and (pointer: fine) {
        :hover:not(.active) {
            background-color: #555;
            color: white;
        }
    }
    :active {
        background: white;
    }
`;

const Accordion = ({ children, title, open = false, icon }: { children: JSX.Element; title: string; open?: boolean; icon?: JSX.Element }) => {
    const [o, setO] = useState<boolean>(open);
    return (
        <AccordionWrapper>
            <AccordionTitleWrapper className={o ? 'open' : ''} onClick={() => setO(!o)}>
                <span>
                    {icon} {title}
                </span>
                {o ? <FaCaretUp /> : <FaCaretDown />}
            </AccordionTitleWrapper>
            {o && children}
        </AccordionWrapper>
    );
};
