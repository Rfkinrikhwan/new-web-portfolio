import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { vercelPreset } from '@vercel/remix/vite';
import { Resend } from 'resend';

function localApiPlugin() {
  return {
    name: 'local-api',
    configureServer(server: any) {
      server.middlewares.use(async (req: any, res: any, next: any) => {
        if (req.url === '/api/send' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: any) => {
            body += chunk.toString();
          });
          req.on('end', async () => {
            try {
              const data = JSON.parse(body);
              const resend = new Resend("re_MAfcRcAD_LyBnJA374bFvEoExM8Q7Zryu");
              const result = await resend.emails.send({
                from: `${data.name} <onboarding@resend.dev>`,
                to: ['rifkinurikhwan9@gmail.com'],
                subject: data.subject || `New message from ${data.name}`,
                html: `
                  <h2>New Message from ${data.name}</h2>
                  <p><strong>From:</strong> ${data.name} (${data.email})</p>
                  <p><strong>Subject:</strong> ${data.subject}</p>
                  <p><strong>Message:</strong></p>
                  <p>${data.message}</p>
                `
              });
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              res.end(JSON.stringify({ success: true, data: result }));
            } catch (err: any) {
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 400;
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
          return;
        }
        next();
      });
    }
  };
}

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  build: {
    sourcemap: false,
  },
  plugins: [
    localApiPlugin(),
    remix({
      ssr: false,
      presets: [vercelPreset()],
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(),
  ],
});
