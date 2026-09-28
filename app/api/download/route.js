import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

const files = {
  first10k: { filename: "first-10k-system.pdf", contentType: "application/pdf", description: "The First $10K System" },
  tracker: { filename: "money-tracker.xlsx", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", description: "The First $10K Money Tracker" },
  reset: { filename: "90-day-money-reset.pdf", contentType: "application/pdf", description: "The 90-Day Money Reset" },
};

async function stripeFetch(pathname) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not configured");
  const res = await fetch(`https://api.stripe.com/v1/${pathname}`, {
    headers: { Authorization: `Bearer ${key}` },
    cache: "no-store",
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error?.message || "Stripe request failed");
  return data;
}

function identify(description = "") {
  const s = description.toLowerCase();
  if (s.includes("first $10k")) return "first10k";
  if (s.includes("money tracker")) return "tracker";
  if (s.includes("90-day money reset")) return "reset";
  return null;
}

export async function GET(request) {
  try {
    const sessionId = request.nextUrl.searchParams.get("session_id");
    const product = request.nextUrl.searchParams.get("product");
    if (!sessionId || !/^cs_[A-Za-z0-9_]+$/.test(sessionId) || !files[product]) {
      return new NextResponse("Invalid request.", { status: 400 });
    }

    const session = await stripeFetch(`checkout/sessions/${encodeURIComponent(sessionId)}`);
    if (session.payment_status !== "paid") return new NextResponse("Payment not confirmed.", { status: 402 });

    const items = await stripeFetch(`checkout/sessions/${encodeURIComponent(sessionId)}/line_items?limit=100`);
    const purchased = (items.data || []).some((item) => identify(item.description) === product);
    if (!purchased) return new NextResponse("This file was not included in this purchase.", { status: 403 });

    const item = files[product];
    const fullPath = path.join(process.cwd(), "public", "downloads", item.filename);
    if (!fs.existsSync(fullPath)) return new NextResponse("File not found.", { status: 404 });

    const buffer = fs.readFileSync(fullPath);
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": item.contentType,
        "Content-Disposition": `attachment; filename="${item.filename}"`,
        "Cache-Control": "private, no-store",
      },
    });
  } catch (error) {
    return new NextResponse(error.message || "Download failed.", { status: 500 });
  }
}
