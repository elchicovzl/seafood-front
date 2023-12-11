import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { i18n } from './i18n-config';

import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(request: NextRequest): string | undefined {
    // Negotiator expects plain object so we need to transform headers
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    // Use negotiator and intl-localematcher to get best locale
    let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
    // @ts-ignore locales are readonly
    const locales: string[] = i18n.locales;
    return matchLocale(languages, locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
    // // If you have one
    if (
        [
            '/manifest.json',
            '/favicon.ico',
            '/images/bg.png',
            '/images/roll.png',
            '/images/logo.png',
            '/images/patternbg.jpg',
            '/images/fish.jpg',
            '/images/sushi2.jpg',
            '/images/icon1.png',
            '/images/icon2.png',
            '/images/bgsection.jpg',
            '/images/fishbg.png',
            '/images/sushi3.jpg',

            '/images/banersushi.jpg',

            '/images/ma1.jpg',
            '/images/ma2.jpg',
            '/images/ma3.jpg',
            '/images/ma4.jpg',
            '/images/ma5.jpg',
            '/images/ma6.jpg',
            '/images/ma7.jpg',


            // Your other files in `public`
        ].includes(pathname)
    )
        return;

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);

        // e.g. incoming request is /products
        // The new URL is now /en-US/products
        return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));
    }
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ['/((?!_next).*)'],
};
