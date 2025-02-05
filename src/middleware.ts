// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(req: NextRequest) {
//   console.log(`Middleware is running: ${req.nextUrl.pathname}`);

//   return NextResponse.redirect(new URL('/', req.url)); // Redirect all requests to homepage
// }

// export const config = {
//   matcher: ['/contact', '/projects', '/another-secret'], 
// };

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const blockedPaths = ['/contact', '/projects', '/blog']; // Add pages you want to block

  if (blockedPaths.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/', req.url)); // Redirect to homepage
  }
  return NextResponse.next();
}

// Apply to all routes
export const config = {
//   matcher: ['/contact', '/projects', '/hidden'], // Same paths as blockedPaths
  matcher: '/:path*'  // Matches all paths
};