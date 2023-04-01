import { WASMContext } from '@/context/WASM';
import { DefaultLayout } from '@/layout/DefaultLayout';
import { useContext, useEffect, useState } from 'react';
import { FaClipboard } from 'react-icons/fa';
import styled from 'styled-components';

const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledTextArea = styled.textarea`
    width: 100%;
    resize: none;
    height: 200px;
`;

const StyledCode = styled.code`
    position: relative;
    background-color: whitesmoke;
    margin: 1rem;
    padding: 1rem;
    font-size: 1.2rem;
    min-height: 2rem;
`;

const CopyButton = styled.button`
    position: absolute;
    top: -7px;
    right: -7px;
    padding: 0.4rem;
    background-color: #191919;
    border-radius: 25%;
    color: white;
    cursor: pointer;
    border: 0;
    &:hover {
        background-color: #4f4d4d;
    }
    &:active {
        background-color: #888888;
    }
    &.copied {
        background-color: #00d865;
        border: 0;
    }
`;

const AsciiBinaryPage = () => {
    const wasmctx = useContext(WASMContext);

    const [text, setText] = useState<string>('');
    const [binary, setBinary] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        wasmctx.wasm && setBinary(wasmctx.wasm.string_to_binary(text));
    }, [text, wasmctx.wasm]);

    const CopyToClip = () => {
        navigator.clipboard.writeText(binary);
        setCopied(true);
    };

    useEffect(() => {
        setTimeout(() => {
            setCopied(false);
        }, 300);
    }, [copied]);

    if (!wasmctx.wasm) return <></>;
    return (
        <DefaultLayout title='ASCII to Binary'>
            <h1>ASCII to Binary</h1>
            <StyledPage>
                <StyledTextArea value={text} onChange={(e) => setText(e.target.value)} placeholder='Super binary message...' />
                <StyledCode>
                    {binary}
                    <CopyButton onClick={CopyToClip} className={copied ? 'copied' : ''}>
                        <FaClipboard />
                    </CopyButton>
                </StyledCode>
            </StyledPage>
        </DefaultLayout>
    );
};
export default AsciiBinaryPage;
