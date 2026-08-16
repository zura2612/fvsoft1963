// lib/maintenance.ts
import { getCloudflareContext } from '@opennextjs/cloudflare';

export async function checkMaintenanceMode(): Promise<boolean> {
  try {
    // Nouvelle méthode pour récupérer les variables/bindings Cloudflare avec OpenNext
    const { env } = await getCloudflareContext();
    
    /* Si on est en dev local sans le binding KV, on laisse passer
    if (!env?.MAINTENANCE_KV) {
      return false;
    }*/

    // Typer explicitement le KV Namespace
    const kv = (env as unknown as { MAINTENANCE_KV?: KVNamespace }).MAINTENANCE_KV;
    if (!kv) { return false; }
    const isMaintenance = await kv.get('MAINTENANCE_MODE');
    //const isMaintenance = await env.MAINTENANCE_KV.get('MAINTENANCE_MODE');
    //console.log("maintenance.ts: isMaintenance=", isMaintenance);
    return isMaintenance === 'true';
  } catch (error) {
    console.error('Erreur KV Maintenance:', error);
    return false; // Fallback pour ne pas casser le site
  }
}