'use client';

import { useEffect, useState } from "react";

const PRODUCTS = {
  first10k: {
    title: "The First $10K System",
    desc: "Your complete money system.",
    cta: "DOWNLOAD THE FIRST $10K SYSTEM",
  },
  tracker: {
    title: "The First $10K Money Tracker",
    desc: "Your simple income, expense and savings dashboard.",
    cta: "DOWNLOAD MONEY TRACKER",
  },
  reset: {
    title: "The 90-Day Money Reset",
    desc: "Your 90-day action plan.",
    cta: "DOWNLOAD THE 90-DAY RESET",
  },
};

const RESET_LINK = "https://buy.stripe.com/aFa6oHfr1cVU2xs4W5es001";
const TRACKER_LINK = "PASTE_YOUR_MONEY_TRACKER_STRIPE_LINK_HERE";

export default function PurchaseClient() {
  const [state,setState] = useState({loading:true});
  const sessionId = typeof window !== "undefined"
    ? new URLSearchParams(window.location.search).get("session_id") : null;

  useEffect(() => {
    if (!sessionId) { setState({error:"Missing purchase session."}); return; }
    fetch(`/api/purchase?session_id=${encodeURIComponent(sessionId)}`)
      .then(r => r.json().then(data => ({ok:r.ok,data})))
      .then(({ok,data}) => setState(ok ? data : {error:data.error || "Unable to verify purchase."}))
      .catch(() => setState({error:"Unable to verify purchase."}));
  }, [sessionId]);

  if (state.loading) return <main className="page"><section className="card center"><div className="mark">YWU</div><div className="eyebrow">VERIFYING YOUR PURCHASE</div><h1>One moment.</h1><p className="description">We’re confirming your payment and preparing your files.</p></section></main>;

  if (state.error) return <main className="page"><section className="card center"><div className="mark">YWU</div><div className="eyebrow">YOUR WEALTHY UNCLE</div><h1>We couldn’t verify this purchase.</h1><p className="description">{state.error}</p></section></main>;

  const products = state.products || [];
  const isResetOnly = products.length === 1 && products[0] === "reset";
  const hasMain = products.includes("first10k");
  const hasTracker = products.includes("tracker");
  const hasReset = products.includes("reset");

  return (
    <main className="page">
      <section className="card">
        <div className="mark">YWU</div>
        <div className="eyebrow">{hasReset ? "THE 90-DAY MONEY RESET" : "PURCHASE CONFIRMED"}</div>
        <h1>{hasReset ? "Your reset starts now." : "Your system is ready."}</h1>
        <p className="description">
          {hasReset ? "Your 90-day action plan is ready. Download it below and start with Day 1." : "Your purchase is confirmed. Your files are ready below."}
        </p>

        <div className="downloads">
          {products.map((key) => (
            <a className="download" key={key} href={`/api/download?session_id=${encodeURIComponent(sessionId)}&product=${key}`}>
              <span><strong>{PRODUCTS[key].title}</strong><small>{PRODUCTS[key].desc}</small></span>
              <b>↓</b>
            </a>
          ))}
        </div>

        {!isResetOnly && !hasReset && (
          <div className="upsell">
            <div className="eyebrow">NEXT STEP</div>
            <h2>Turn the system into 90 days of action.</h2>
            <p>Get <strong>The 90-Day Money Reset</strong> and follow the system week by week instead of trying to figure out what to do next.</p>
            <a className="upsellButton" href={RESET_LINK}>GET THE 90-DAY RESET — $17.99</a>
            <div className="skip">You can skip this and keep your current downloads.</div>
          </div>
        )}

        {!hasMain && !hasTracker && hasReset && (
          <p className="footer-copy">Your 90-day reset is a standalone purchase. Keep this page bookmarked.</p>
        )}

        <div className="divider" />
        <div className="brand">YOUR WEALTHY UNCLE</div>
        <div className="tagline">BUILD YOUR FIRST $10K.</div>
      </section>
    </main>
  );
}
