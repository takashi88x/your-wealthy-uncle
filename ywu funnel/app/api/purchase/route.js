import { NextResponse } from "next/server";

async function stripeFetch(path) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not configured");
  const res = await fetch(`https://api.stripe.com/v1/${path}`, {
    headers: { Authorization: `Bearer ${key}` },
    cache: "no-store",
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error?.message || "Stripe request failed");
  return data;
}

function identify(description = "") {
  const s = description.toLowerCase();
  if (s.includes("first $10k") || s.includes("first $10k system")) return "first10k";
  if (s.includes("money tracker")) return "tracker";
  if (s.includes("90-day money reset")) return "reset";
  return null;
}

export async function GET(request) {
  try {
    const sessionId = request.nextUrl.searchParams.get("session_id");
    if (!sessionId || !/^cs_[A-Za-z0-9_]+$/.test(sessionId)) {
      return NextResponse.json({ error: "Invalid session." }, { status: 400 });
    }

    const session = await stripeFetch(
      `checkout/sessions/${encodeURIComponent(sessionId)}`
    );

    if (session.payment_status !== "paid") {
      return NextResponse.json({ error: "Payment is not confirmed." }, { status: 402 });
    }

    const items = await stripeFetch(
      `checkout/sessions/${encodeURIComponent(sessionId)}/line_items?limit=100`
    );

    const products = [...new Set(
      (items.data || []).map((item) => identify(item.description)).filter(Boolean)
    )];

    return NextResponse.json({
      paid: true,
      products,
      email: session.customer_details?.email || null,
      total: session.amount_total,
      currency: session.currency,
    }, { headers: { "Cache-Control": "no-store" }});
  } catch (error) {
    return NextResponse.json({ error: error.message || "Unable to verify purchase." }, { status: 500 });
  }
}
