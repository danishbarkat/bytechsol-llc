import { next } from '@vercel/edge';

export default function middleware(request: Request) {
    console.log(`[Middleware] ${request.method} ${request.url}`);

    // Basic Bot Protection
    const userAgent = request.headers.get('user-agent') || '';
    if (!userAgent || userAgent.toLowerCase().includes('bot') || userAgent.toLowerCase().includes('crawler') || userAgent.toLowerCase().includes('spider')) {
        // Allow benign bots if needed, for now block all as requested "no data crawling"
        // Note: This is a very broad block and might block legitimate tools.
        // For true "no crawling", this combined with robots.txt is strong.
        console.log(`[Middleware] Blocked potential bot: ${userAgent}`);
        return new Response('Access Denied', { status: 403 });
    }

    const response = next();

    // Security Headers
    response.headers.set('x-dns-prefetch-control', 'off');
    response.headers.set('strict-transport-security', 'max-age=63072000; includeSubDomains; preload');
    response.headers.set('x-xss-protection', '1; mode=block');
    response.headers.set('x-frame-options', 'SAMEORIGIN');
    response.headers.set('x-content-type-options', 'nosniff');
    response.headers.set('referrer-policy', 'origin-when-cross-origin');
    response.headers.set('content-security-policy', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self';");

    response.headers.set('x-custom-header', 'valid-middleware');
    return response;
}

export const config = {
    matcher: '/:path*',
};
