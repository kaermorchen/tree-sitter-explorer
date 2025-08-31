import { defineConfig, type ViteDevServer } from 'vite';
import react from '@vitejs/plugin-react';
import type { IncomingMessage, ServerResponse } from 'http';
import path from 'path';
import fs from 'fs';
import tailwindcss from '@tailwindcss/vite';

const wasmMiddleware = () => {
  return {
    name: 'wasm-middleware',
    configureServer(server: ViteDevServer) {
      server.middlewares.use(
        (req: IncomingMessage, res: ServerResponse, next: () => void) => {
          if (req.url && req.url.endsWith('.wasm')) {
            const wasmPath = path.join(
              __dirname,
              'public/parsers',
              path.basename(req.url)
            );
            const wasmFile = fs.readFileSync(wasmPath);
            res.setHeader('Content-Type', 'application/wasm');
            res.end(wasmFile);
            return;
          }
          next();
        }
      );
    },
  };
};

// https://vite.dev/config/
export default defineConfig({
  base: '/tree-sitter-explorer',
  plugins: [
    react({
      babel: {
        plugins: [
          [
            '@babel/plugin-proposal-decorators',
            {
              version: '2023-05',
            },
          ],
        ],
      },
    }),
    wasmMiddleware(),
    tailwindcss(),
  ],
  esbuild: {
    target: 'es2024',
  },
});
