export function ProcessSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          What happens next
        </h2>
        <p className="mb-10">
          Getting started is simple. Here&apos;s exactly what to expect:
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="p-6 border rounded-2xl">
            <h3 className="font-semibold mb-2">1. Reach out</h3>
            <p>
              Send a WhatsApp or visit our North End office. We&apos;ll start with a quick, friendly chat.
            </p>
          </div>
          <div className="p-6 border rounded-2xl">
            <h3 className="font-semibold mb-2">2. Understand your situation</h3>
            <p>
              We go through your income, expenses and debt so you can clearly see where you stand.
            </p>
          </div>
          <div className="p-6 border rounded-2xl">
            <h3 className="font-semibold mb-2">3. Create a plan</h3>
            <p>
              We help you put a realistic plan in place and deal with your creditors step by step.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/27627884609"
            className="px-6 py-3 rounded-2xl bg-primary text-white font-semibold"
          >
            Start on WhatsApp
          </a>
          <a
            href="#north-end"
            className="px-6 py-3 rounded-2xl border font-semibold"
          >
            Visit North End Office
          </a>
        </div>
      </div>
    </section>
  )
}