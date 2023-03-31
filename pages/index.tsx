import { useEffect } from 'react';
import Init, { add } from '../wasm/pkg';
export default function Home() {
    useEffect(() => {
        Init().then(() => {
            console.log('From WASM:', add(1, 2));
        });
    });
    return (
        <div>
            <p>Test</p>
        </div>
    );
}
