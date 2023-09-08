import { defineConfig } from 'vite'
import path from 'path';

import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'assets/img',
          dest: './img',  
        },
      ],
    }),
  ]
})
