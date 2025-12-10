import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const androidUrl = 'https://play.google.com/store/apps/details?id=com.ultimate_bond';
const iosUrl = 'https://apps.apple.com/in/app/ultimate-parenting/id6593687319';
const defaultUrl = 'https://ultimatebond.in/';

export function GET(request: NextRequest) {
  const url = new URL(request.url);
  const platformParam = (url.searchParams.get('platform') || '').toLowerCase();
  const ua = (request.headers.get('user-agent') || '').toLowerCase();

  if (platformParam === 'android') {
    return NextResponse.redirect(androidUrl);
  }
  if (platformParam === 'ios') {
    return NextResponse.redirect(iosUrl);
  }

  if (ua.includes('android')) {
    return NextResponse.redirect(androidUrl);
  }
  if (ua.includes('iphone') || ua.includes('ipad') || ua.includes('ipod')) {
    return NextResponse.redirect(iosUrl);
  }

  return NextResponse.redirect(defaultUrl);
}
