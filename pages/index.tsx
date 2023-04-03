import { WASMContext } from '@/context/WASM';
import { DefaultLayout } from '@/layout/DefaultLayout';
import { useContext } from 'react';

export default function Home() {
    const wasmctx = useContext(WASMContext);
    const wasmResult = wasmctx.wasm && wasmctx.wasm.add(2, 5);

    return (
        <DefaultLayout title='Home'>
            <h1>CWJH Tools & Projects</h1>
            <div>
                <p>
                    <span>WASM example:</span>
                    <code> wasmctx.wasm.add(2,5) = {wasmResult}</code>
                </p>
            </div>
        </DefaultLayout>
    );
}
