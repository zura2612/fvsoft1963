// proxy.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { checkMaintenanceMode } from './lib/maintenance';

/* Ne pas intercepter les assets statiques, API et images
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};*/
// Filtre pour ne pas intercepter les API, les assets Next.js et les fichiers statiques du dossier /public
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)',
  ],
};

export async function proxy(request: NextRequest) {
  const isMaintenance = await checkMaintenanceMode();
  console.log("proxy.ts: isMaintenance=", isMaintenance);
  if (isMaintenance) {
    return new NextResponse(
      `<!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <title>Maintenance en cours | fvsoft1963</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <style>
          body { font-family: system-ui, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background: #0a0a0a; color: #fff; margin: 0; }
          h1 { font-size: 2rem; font-weight: 500; }
        </style>
      </head>
      <body>
        <div>
          <h1>🛠 Site en maintenance</h1>
          <p>Une mise à jour est en cours. Je reviens très vite.</p>
        </div>
      </body>
      </html>`,
      {
        status: 503,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Retry-After': '3600'
        }
      }
    );
  }
  
  return NextResponse.next();
}