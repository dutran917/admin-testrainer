import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { cookies } = request;
  const tokenAdmin = cookies.get('accessTokenAdmin');
  const path = request.nextUrl.pathname;

  if (!tokenAdmin && path !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  if (tokenAdmin && path === '/login') {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ['/', '/login', '/user-management'],
};
