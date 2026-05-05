export function ReviewsSection() {
  return (
    <section className="py-16 bg-muted/40">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          What clients are saying
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border">
            <p className="mb-4">
              &ldquo;I finally feel like I can breathe again. Everything was explained so clearly and I wasn&apos;t judged at all.&rdquo;
            </p>
            <p className="text-sm font-semibold">&ndash; Client</p>
          </div>
          <div className="p-6 rounded-2xl border">
            <p className="mb-4">
              &ldquo;Professional, kind and patient. I wish I reached out sooner.&rdquo;
            </p>
            <p className="text-sm font-semibold">&ndash; Client</p>
          </div>
          <div className="p-6 rounded-2xl border">
            <p className="mb-4">
              &ldquo;From stress and confusion to having a plan. Highly recommend.&rdquo;
            </p>
            <p className="text-sm font-semibold">&ndash; Client</p>
          </div>
        </div>
        <a
          href="https://www.google.com/search?q=debt+counsellor+port+elizabeth+reviews"
          target="_blank"
          className="inline-block mt-6 underline"
        >
          Read more reviews on Google
        </a>
      </div>
    </section>
  )
}