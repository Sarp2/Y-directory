import * as Sentry from '@sentry/nextjs'

export function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Server-side initialization
    Sentry.init({
      dsn: "https://778d4f96bac16d28197d69185696688d@o4508495375892480.ingest.de.sentry.io/4508500298694736",
      tracesSampleRate: 1,
      debug: false,
    })
  } else if (process.env.NEXT_RUNTIME === 'edge') {
    // Edge runtime initialization
    Sentry.init({
      dsn: "https://778d4f96bac16d28197d69185696688d@o4508495375892480.ingest.de.sentry.io/4508500298694736",
      tracesSampleRate: 1,
      debug: false,
    })
  }
}