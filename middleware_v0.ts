// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { checkMaintenanceMode } from './server/middleware/maintenance';

// Ne pas intercepter les requêtes vers les assets statiques et l'API
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export async function middleware(request: NextRequest) {
  const isMaintenance = await checkMaintenanceMode();

  if (isMaintenance) {
    return new NextResponse(
      `<!DOCTYPE html>
      <html lang="fr">
      <head>
          <meta charset="UTF-8">
          <title>Maintenance en cours | fvsoft1963</title>
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
        headers: { 'Content-Type': 'text/html; charset=utf-8', 'Retry-After': '3600' } 
      }
    );
  }

  return NextResponse.next();
}