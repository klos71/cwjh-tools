import { WASMContext } from '@/context/WASM';
import { useContext } from 'react';

export default function Home() {
    const wasmctx = useContext(WASMContext);
    if (!wasmctx.wasm) return <></>;

    return (
        <div>
            <p>
                <code>wasmctx.wasm.add(2,5)</code> = {wasmctx.wasm.add(2, 5)}
            </p>
        </div>
    );
}
