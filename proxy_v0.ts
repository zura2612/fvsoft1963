// proxy.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  return NextResponse.next();
}

// Le matcher reste strictement identique
export const config = {
  matcher: ['/dashboard/:path*'],
};