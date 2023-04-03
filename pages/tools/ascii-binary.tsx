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

const AsciiBinaryPage = () => {
    const wasmctx = useContext(WASMContext);

    const [text, setText] = useState<string>('');
    const [binary, setBinary] = useState('');
    const [textCode, setTextCode] = useState('');
    const [binarycode, setBinarycode] = useState('');

    useEffect(() => {
        wasmctx.wasm && setBinary(wasmctx.wasm.string_to_binary(text));
    }, [text, wasmctx.wasm]);

    useEffect(() => {
        try {
            wasmctx.wasm && setTextCode(wasmctx.wasm.binary_to_string(binarycode));
        } catch (e) {
            console.info(e);
        }
    }, [binarycode, wasmctx.wasm]);

    return (
        <DefaultLayout title='ASCII to Binary'>
            <h1>ASCII {'<=>'} Binary</h1>
            <h2>ASCII to Binary</h2>
            <StyledPage>
                <StyledTextArea value={text} onChange={(e) => setText(e.target.value)} placeholder='Super ASCII message...' />
                <StyledCode>
                    {binary}
                    <CopyButtonComponent text={binary} />
                </StyledCode>
                <h2>Binary to ASCII</h2>
                <StyledTextArea value={binarycode} onChange={(e) => setBinarycode(e.target.value)} placeholder='Super binary message...' />
                <StyledCode>
                    {textCode}
                    <CopyButtonComponent text={textCode} />
                </StyledCode>
            </StyledPage>
        </DefaultLayout>
    );
};

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

const CopyButtonComponent = ({ text }: { text: string }) => {
    const [copied, setCopied] = useState(false);

    const CopyToClip = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
    };

    useEffect(() => {
        setTimeout(() => {
            setCopied(false);
        }, 300);
    }, [copied]);

    return (
        <CopyButton onClick={() => CopyToClip(text)} className={copied ? 'copied' : ''}>
            <FaClipboard />
        </CopyButton>
    );
};
export default AsciiBinaryPage;
