import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import eslintPlugin from "vite-plugin-eslint"
import legacy from '@vitejs/plugin-legacy'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
    base: "/",
    plugins: [
        vue(),
        legacy({
            targets: ["ie >= 11"],
            additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
        }),
        eslintPlugin(),
        viteCompression()
    ],
    server: {
        host: '0.0.0.0'
    }
})
