# Your Wealthy Uncle — Sales Funnel

This version fixes the purchase flow:
- Main Payment Link can offer Money Tracker as a Stripe cross-sell/order bump.
- After payment, Stripe redirects with `?session_id={CHECKOUT_SESSION_ID}`.
- The server verifies the Checkout Session with Stripe and reads the purchased line items.
- The buyer only sees/downloads products actually included in that session.
- Main purchase page presents the 90-Day Money Reset as the post-purchase upsell.
- The 90-Day Reset Payment Link should redirect back to the same `/download?session_id={CHECKOUT_SESSION_ID}` route.

## Vercel environment variable
Add:
`STRIPE_SECRET_KEY` = your LIVE Stripe secret key.

Never put this key in client-side code or GitHub.

## Stripe setup
1. On the MAIN product, configure Money Tracker as a Stripe cross-sell/order bump.
2. Main Payment Link after-payment redirect:
`https://YOUR-VERCEL-DOMAIN/download?session_id={CHECKOUT_SESSION_ID}`
3. Money Tracker standalone Payment Link can use the same redirect if retained.
4. 90-Day Reset Payment Link after-payment redirect:
`https://YOUR-VERCEL-DOMAIN/download?session_id={CHECKOUT_SESSION_ID}`
5. In `app/download/PurchaseClient.jsx`, replace the two placeholder Stripe URLs:
`RESET_LINK`
`TRACKER_LINK`
with your actual links.

## Important
The download endpoint checks the paid Checkout Session and only serves a file when that product is present in the session. This is substantially safer than exposing the raw static files directly.
For robust fulfillment independent of the browser, add a `checkout.session.completed` webhook later.
