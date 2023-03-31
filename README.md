# CWJH tools

Simple WASM implementations of small things for fun.

## Ideas of tools to make:

-   Ascii -> binary and reverse
-   Quick lookup programs:
    -   Get the intro from a Wikipedia page
    -   Look up the levels of pollen in the air

## How to install and run

Assuming you have `rust` and `yarn` installed on your system:

1. Install [rust wasm](https://rustwasm.github.io/wasm-pack/installer/)
2. Run the commands:
    ```bash
    $ cd wasm && cargo build && cd ..
    $ yarn
    $ yarn build-wasm
    $ yarn dev
    ```

There should now be a server running which you can access by opening [http://localhost:3000](http://localhost:3000).

OBS!
the WASM module must be rebuilt with `yarn build-wasm` and then installed again into node_modules with `yarn` and then restart the application for the new module to load
