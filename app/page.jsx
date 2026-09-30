const CHECKOUT_LINK = "https://buy.stripe.com/fZucN5gv5aNM7RM0FPes000";

const steps = [
  {
    number: "01",
    title: "SEE IT",
    text: "Know exactly where your money is going. Organize income, recurring expenses, spending and your current financial position so you can stop guessing."
  },
  {
    number: "02",
    title: "CONTROL IT",
    text: "Build a money routine you can actually maintain. Set spending boundaries, organize bills and identify the leaks keeping you from saving."
  },
  {
    number: "03",
    title: "BUILD IT",
    text: "Turn a vague goal into measurable progress. Break your first $10,000 into smaller checkpoints you can actually track."
  }
];

const included = [
  ["01", "The 90-Day Money Reset", "A practical reset to reorganize the way you handle money."],
  ["02", "Spending & Expense System", "See where your money is going before trying to save more."],
  ["03", "Savings Roadmap", "Turn your $10K goal into smaller, measurable milestones."],
  ["04", "Debt Organization", "Get balances, payments and priorities out of your head and organized."],
  ["05", "Weekly Money Check-In", "A simple routine designed to keep you aware of your finances."],
  ["06", "The $10K Roadmap", "Break the big number into clear checkpoints and keep moving."],
];

const faqs = [
  ["Is this financial advice?", "No. The system focuses on budgeting, spending organization, saving habits and financial planning. It does not provide personalized investment, tax or legal advice."],
  ["Is this a physical product?", "No. The First $10K System is a digital product delivered online after purchase."],
  ["How much does it cost?", "$9.99 one time. There is no subscription or recurring charge for the core system."],
  ["How quickly can I start?", "Immediately after checkout. Your purchase is sent to the digital delivery page."],
  ["Do I need a finance background?", "No. It is designed to be straightforward and beginner-friendly."],
];

function CTA({ className = "" }) {
  return (
    <a className={`cta ${className}`} href={CHECKOUT_LINK}>
      GET THE FIRST $10K SYSTEM <span>— $9.99</span>
      <small>LAUNCH PRICE · ONE-TIME PAYMENT · INSTANT DIGITAL ACCESS</small>
    </a>
  );
}

export default function Home() {
  return (
    <main className="lp">
      <header className="nav wrap">
        <a href="#top" className="brand-lockup">
          <span className="brand-mark">YWU</span>
          <span>
            <strong>YOUR WEALTHY UNCLE</strong>
            <small>BUILD YOUR FIRST $10K</small>
          </span>
        </a>
        <a className="nav-cta" href={CHECKOUT_LINK}>GET THE SYSTEM — $9.99</a>
      </header>

      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow">YOUR WEALTHY UNCLE · THE FIRST $10K SYSTEM</p>
          <h1>Your paycheck isn't the problem.<br /><em>Your money system is.</em></h1>
          <p className="hero-lead">A simple 90-day system to help you stop living paycheck to paycheck, take control of your spending, and work toward your first $10,000.</p>
          <div className="launch-offer"><span>LAUNCH PRICE</span><strong><s>$19.99</s> $9.99</strong><em>One-time payment. Price will increase after the launch period.</em></div>
          <CTA />
          <p className="microtrust"><span>✓</span> No subscription &nbsp;·&nbsp; <span>✓</span> Digital access &nbsp;·&nbsp; <span>✓</span> Beginner-friendly</p>
        </div>

        <div className="hero-product">
          <div className="product-glow" />
          <div className="cover-frame">
            <img src="/images/first-10k-cover.png" alt="The First $10K System cover" />
          </div>
          <div className="product-caption">THE FIRST $10K SYSTEM · DIGITAL EDITION</div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap narrow">
          <p className="eyebrow">THE PATTERN</p>
          <h2>You make money.<br /><em>So where does it keep going?</em></h2>
          <div className="pattern-grid">
            <div className="pattern-item"><b>01</b><span>Payday hits.</span></div>
            <div className="pattern-item"><b>02</b><span>Bills get paid.</span></div>
            <div className="pattern-item"><b>03</b><span>A few “small” purchases become a big number.</span></div>
            <div className="pattern-item"><b>04</b><span>Something unexpected happens.</span></div>
            <div className="pattern-item"><b>05</b><span>You tell yourself you'll save more next month.</span></div>
          </div>
          <p className="statement">Then next month looks exactly the same.</p>
          <p className="body-copy">The problem isn't that you don't care about money. <strong>Most people were never given a simple system for managing it.</strong></p>
        </div>
      </section>

      <section className="section urgency-section">
        <div className="wrap urgency-grid">
          <div>
            <p className="eyebrow">DON'T WAIT FOR THE PERFECT MONTH</p>
            <h2>Every month you stay disorganized is another month without a clear plan.</h2>
          </div>
          <div className="urgency-copy">
            <p>Waiting until you “make more money” can keep the same cycle going. Start with the money you have, build the habit, and give every paycheck a job.</p>
            <div className="urgency-points">
              <span>✓ 90-day structure</span>
              <span>✓ Practical money routines</span>
              <span>✓ Clear $10K checkpoints</span>
            </div>
            <CTA />
          </div>
        </div>
      </section>

      <section className="section market-section">
        <div className="wrap market-grid">
          <div>
            <p className="eyebrow">YOU'RE NOT ALONE</p>
            <h2>You're not the only one trying to figure this out.</h2>
            <p className="body-copy">Recent research from Credit Karma found that <strong>59% of Gen Z respondents feel financially insecure</strong>, while <strong>31% of young adults say they aren't prepared to manage their personal finances.</strong></p>
            <p className="source-note">Source: Credit Karma, 2026. Research reflects surveyed respondents and is not a statement about every young adult.</p>
          </div>
          <div className="stat-stack">
            <div className="stat-card"><strong>59%</strong><span>of surveyed Gen Z respondents feel financially insecure.</span></div>
            <div className="stat-card"><strong>31%</strong><span>of surveyed young adults say they aren't prepared to manage personal finances.</span></div>
          </div>
        </div>
      </section>

      <section className="section system-section">
        <div className="wrap">
          <div className="section-heading">
            <p className="eyebrow">THE SYSTEM</p>
            <h2>You don't need another lecture about money.<br /><em>You need a system you can actually follow.</em></h2>
            <p className="body-copy">The First $10K System turns financial organization into a simple three-part process.</p>
          </div>
          <div className="steps">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section included-section">
        <div className="wrap">
          <div className="included-head">
            <div>
              <p className="eyebrow">WHAT'S INSIDE</p>
              <h2>Everything you need to get organized.</h2>
            </div>
            <p className="body-copy">No complicated financial theory. Just practical tools and routines built around one clear objective: getting your money under control.</p>
          </div>
          <div className="included-grid">
            {included.map(([num, title, text]) => (
              <article className="included-card" key={num}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section proof-section">
        <div className="wrap">
          <div className="proof-head">
            <div>
              <p className="eyebrow">WHY THIS IS DIFFERENT</p>
              <h2>Built to be used — not just read.</h2>
            </div>
            <p className="body-copy">You are not buying another motivational PDF. You are getting a structured system for organizing your money and tracking progress toward a specific goal.</p>
          </div>
          <div className="proof-grid">
            <article><strong>01</strong><h3>Clear starting point</h3><p>Know what to look at first instead of trying to fix everything at once.</p></article>
            <article><strong>02</strong><h3>Action over theory</h3><p>Simple routines and checkpoints designed to turn information into action.</p></article>
            <article><strong>03</strong><h3>One measurable goal</h3><p>Work toward your first $10K with smaller milestones you can actually see.</p></article>
          </div>
        </div>
      </section>

      <section className="section product-truth">
        <div className="wrap truth-grid">
          <div>
            <p className="eyebrow">NO HYPE</p>
            <h2>This isn't a get-rich-quick plan.</h2>
          </div>
          <div className="truth-list">
            <div><span>×</span><p>No stock picks.</p></div>
            <div><span>×</span><p>No crypto calls.</p></div>
            <div><span>×</span><p>No “secret investment strategy.”</p></div>
            <div><span>×</span><p>No promise that you'll magically make $10,000 overnight.</p></div>
          </div>
        </div>
        <div className="wrap truth-bottom">
          <p>It's a money organization system.</p>
          <div className="truth-mantra"><span>KNOW YOUR NUMBERS.</span><span>CONTROL YOUR SPENDING.</span><span>BUILD YOUR SAVINGS.</span></div>
        </div>
      </section>

      <section className="section fit-section">
        <div className="wrap fit-grid">
          <div className="fit-card yes">
            <p className="eyebrow">THIS IS FOR YOU IF</p>
            <h2>You want your money to feel less chaotic.</h2>
            <ul>
              <li>You earn money but rarely feel like you have any left.</li>
              <li>You want to start saving but don't know where to begin.</li>
              <li>You keep restarting your budget every few months.</li>
              <li>You want a clear savings goal instead of vague motivation.</li>
              <li>You're trying to become more financially independent.</li>
            </ul>
          </div>
          <div className="fit-card no">
            <p className="eyebrow">NOT FOR YOU IF</p>
            <h2>You're looking for someone else to manage your money.</h2>
            <ul>
              <li>You want investment signals.</li>
              <li>You want a get-rich-quick scheme.</li>
              <li>You expect overnight results without changing your habits.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section offer-section" id="offer">
        <div className="wrap offer-card">
          <div className="offer-copy">
            <p className="eyebrow">YOUR FIRST $10K STARTS HERE</p>
            <h2>The First $10K System</h2>
            <p>A 90-day money reset designed to help you organize your spending, build better saving habits, manage debt, and work toward your first $10,000.</p>
            <div className="offer-badge">LAUNCH PRICING</div>
            <div className="price-row"><span className="regular-price">$19.99</span><div className="price"><span>$</span>9<span className="cents">99</span></div></div>
            <p className="price-note">Save $10 today · launch price won't last</p>
            <p className="one-time">ONE-TIME PAYMENT · NO SUBSCRIPTION</p>
            <CTA />
            <div className="offer-value">
              <span>✓ 90-day money reset</span>
              <span>✓ Spending & savings system</span>
              <span>✓ Debt organization framework</span>
              <span>✓ First $10K roadmap</span>
            </div>
          </div>
          <div className="offer-visual">
            <div className="mini-cover">
              <span>YOUR WEALTHY UNCLE</span>
              <strong>THE FIRST<br /><b>$10K</b><br />SYSTEM</strong>
              <small>A 90-DAY MONEY RESET</small>
            </div>
            <div className="access-note"><b>After checkout</b><span>Get instant access to your digital files and start your reset.</span></div>
          </div>
        </div>
      </section>

      <section className="section trust-section">
        <div className="wrap trust-grid-new">
          <div>
            <p className="eyebrow">BUILT FOR REAL LIFE</p>
            <h2>No fake success stories. Just a system you can use.</h2>
          </div>
          <div>
            <p className="body-copy">We are keeping the page honest while the product is in its launch phase: no invented customer reviews, no fake income screenshots, and no promises of guaranteed results.</p>
            <p className="trust-strong">What you can expect: a clear framework, practical tools, and immediate digital access.</p>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="wrap faq-wrap">
          <p className="eyebrow">QUESTIONS</p>
          <h2>Before you start.</h2>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}<span>+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-section">
        <div className="wrap final-card">
          <p className="eyebrow">YOUR WEALTHY UNCLE</p>
          <h2>You don't need a perfect financial life.<br /><em>You need a system you can actually follow.</em></h2>
          <p>Launch pricing: <s>$19.99</s> → <strong>$9.99</strong>.</p>
          <CTA />
          <small className="final-disclaimer">Digital product. Educational and organizational content only. Not personalized financial, investment, tax or legal advice.</small>
        </div>
      </section>

      <footer className="footer wrap">
        <div><strong>YOUR WEALTHY UNCLE</strong><span>BUILD YOUR FIRST $10K.</span></div>
        <p>© 2026 Your Wealthy Uncle. All rights reserved.</p>
      </footer>

      <a className="mobile-sticky" href={CHECKOUT_LINK}>GET THE FIRST $10K SYSTEM — $9.99 · LAUNCH PRICE</a>
    </main>
  );
}
