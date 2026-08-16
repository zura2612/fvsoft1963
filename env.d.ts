// env.d.ts
import '@opennextjs/cloudflare';

declare global {
  interface CloudflareEnv {
    MAINTENANCE_KV: KVNamespace;
  }
}

export {};