/* eslint-disable no-undef */
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from 'path'
import eslintPlugin from "vite-plugin-eslint"
import legacy from '@vitejs/plugin-legacy'
import viteCompression from 'vite-plugin-compression'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

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
        viteCompression(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        })
    ],
    // css: {
    //     preprocessorOptions: {
    //         scss: {
    //             additionalData: `@import "~@/assets/scss/element-variables.scss";`
    //         }
    //     }
    // },
    resolve: {
        alias: {
            '@/': `${path.resolve(__dirname, 'src')}/`,
        },
    },
    server: {
        host: '0.0.0.0'
    }
})
