import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { FaGithub, FaCaretDown, FaCaretUp, FaWrench, FaHome } from 'react-icons/fa';
import { SiNextdotjs, SiWebassembly } from 'react-icons/si';
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

const StyledTitle = styled.h2`
    padding: 1rem;
`;

export const DefaultLayout = ({ title, description, children }: { title: string; description?: string; children: JSX.Element | JSX.Element[] }) => {
    const router = useRouter();

    const findRouteInAccordion = (routes: string[]) => {
        return routes.includes(router.asPath);
    };

    return (
        <>
            <Head>
                <title>{title} | CWJH Tools</title>
                <meta name='description' content={`Simple WASM implementations of small things for fun. ${description}`} />
                <meta name='author' content='Klos71 & cwinsnes' />
                <meta name='keywords' content='WASM, Next.JS' />
            </Head>

            <Stylednav>
                <StyledTitle>CWJH_Tools</StyledTitle>
                <Link href='/' className={router.asPath === '/' ? 'active' : ''}>
                    <FaHome /> Home
                </Link>
                <Accordion title='Tools' icon={<FaWrench size='1em' />} open={findRouteInAccordion(['/tools/ascii-binary'])}>
                    <Link href='/tools/ascii-binary' className={router.asPath === '/tools/ascii-binary' ? 'active' : ''}>
                        ASCII {'<=>'} Binary
                    </Link>
                </Accordion>
                <Accordion title='Github' icon={<FaGithub size='1em' />}>
                    <Link href='https://github.com/klos71/cwjh_wasm_tools' target='_blank'>
                        <SiWebassembly /> cwjh_wasm_tools
                    </Link>
                    <Link href='https://github.com/klos71/cwjh-tools' target='_blank'>
                        <SiNextdotjs /> cwjh_tools
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

const Accordion = ({
    children,
    title,
    open = false,
    icon,
}: {
    children: JSX.Element | JSX.Element[];
    title: string;
    open?: boolean;
    icon?: JSX.Element;
}) => {
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
