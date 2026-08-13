// server/middleware/maintenance.ts
import { getCloudflareContext } from '@opennextjs/cloudflare';

export async function checkMaintenanceMode(): Promise<boolean> {
  try {
    // Nouvelle méthode pour récupérer les variables/bindings Cloudflare avec OpenNext
    const { env } = await getCloudflareContext();
    
    // Si on est en dev local sans le binding KV, on laisse passer
    if (!env?.MAINTENANCE_KV) {
      return false;
    }

    const isMaintenance = await env.MAINTENANCE_KV.get('MAINTENANCE_MODE');
    return isMaintenance === 'true';
  } catch (error) {
    console.error('Erreur KV Maintenance:', error);
    return false; // Fallback pour ne pas casser le site
  }
}