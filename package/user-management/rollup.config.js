import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';

export default {
    input: 'index.ts',
    output: {
        file: 'publish/user-management.bundle.js',
        format: 'cjs'
    },
    plugins: [
        resolve({
            // pass custom options to the resolve plugin
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        }),
        typescript()
    ],
    // indicate which modules should be treated as external
    external: [
        '@ngrx/store',
        '@ngrx/entity'
    ]
};