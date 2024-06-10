import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import Negotiator from 'negotiator'
import { DEFAULT_LOCALE, LOCALE_COOKIE } from './utils/constants'

export function middleware(request: NextRequest) {

    const currentLocale = request.cookies.get(LOCALE_COOKIE)

    if (currentLocale) {
        return
    }

    const requestHeaders = new Headers(request.headers);
    const headers = Object.fromEntries(requestHeaders.entries())
    const language = new Negotiator({ headers }).language() || DEFAULT_LOCALE

    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, language)

    return response;
}

export const config = {
    matcher: '/',
}