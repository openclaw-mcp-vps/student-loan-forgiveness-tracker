export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Federal Loan Forgiveness
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Progress Toward{" "}
          <span className="text-[#58a6ff]">Loan Forgiveness</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Automatically monitor your federal student loan payments, verify employment, and calculate your progress toward PSLF and other forgiveness programs — with deadline alerts so you never miss a step.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $11/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">For public service workers, teachers &amp; healthcare professionals</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: "📋", title: "Payment Tracking", desc: "Sync qualifying payments automatically from Federal Student Aid" },
          { icon: "🏢", title: "Employment Verification", desc: "Store and manage employer certification documents in one place" },
          { icon: "🔔", title: "Deadline Alerts", desc: "Get notified before annual certification deadlines and milestones" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$11</div>
          <p className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "PSLF &amp; IDR forgiveness tracking",
              "Automatic payment count sync",
              "Employment certification storage",
              "Deadline &amp; milestone alerts",
              "Progress dashboard &amp; reports"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What is PSLF and who qualifies?",
              a: "Public Service Loan Forgiveness (PSLF) forgives remaining federal loan balances after 120 qualifying payments while working full-time for a government or nonprofit employer. Teachers, nurses, social workers, and other public servants typically qualify."
            },
            {
              q: "How does the tracker connect to my loan data?",
              a: "We integrate with Federal Student Aid APIs to pull your payment history and loan details securely. You authorize read-only access — we never modify your loan account."
            },
            {
              q: "Can I cancel my subscription at any time?",
              a: "Yes. You can cancel anytime from your account settings. Your data remains accessible until the end of your billing period with no cancellation fees."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} Student Loan Forgiveness Tracker. Not affiliated with the U.S. Department of Education.
      </footer>
    </main>
  );
}
