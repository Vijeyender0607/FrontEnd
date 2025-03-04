import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

import dotenv from 'dotenv';
dotenv.config();

const apiUrl = process.env.VITE_API_URL;
const apiKey = process.env.VITE_API_KEY;
const useLegacy = process.env.VITE_USE_LEGACY === 'true';
const port = parseInt(process.env.VITE_PORT, 10) || 3000;
const nn=process.env.VITE_API_WA;
console.log("print"+nn)

export default defineConfig({
    plugins: [
        react(),
        useLegacy && legacy({
            targets: ['defaults', 'not IE 11']
        }),
    ].filter(Boolean),
    define: {
        __API_URL__: JSON.stringify(apiUrl),
        __API_KEY__: JSON.stringify(apiKey),
    },
    server: {
        port: port,
        proxy: {
            '/api': {
                target: apiUrl,
                changeOrigin: true,
                secure: false,
            },
        },
    },
    build: {
        sourcemap: process.env.VITE_SOURCEMAP === 'true',
        outDir: process.env.VITE_OUTPUT_DIR || 'dist',
    },
});