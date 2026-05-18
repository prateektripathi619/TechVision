import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Strategic Consulting",
    description: "Perfect for understanding your technology needs",
    price: "Starting at",
    amount: "$5K",
    period: "per project phase",
    features: ["Technology assessment", "Architecture review", "Strategy roadmap", "Team consultation", "Detailed proposal"],
    cta: "Schedule Consultation",
    highlighted: false,
  },
  {
    name: "Custom Development",
    description: "Full-scale solutions tailored to your business",
    price: "Starting at",
    amount: "$25K",
    period: "based on scope",
    features: [
      "Complete project delivery",
      "Agile development process",
      "Ongoing support included",
      "Regular progress updates",
      "Post-launch optimization",
      "Team training & documentation",
      "Maintenance support",
    ],
    cta: "Get a Quote",
    highlighted: true,
  },
  {
    name: "Enterprise Partnership",
    description: "Dedicated partnership for large-scale initiatives",
    price: "Custom",
    amount: "pricing",
    period: "based on needs",
    features: [
      "Dedicated development team",
      "Ongoing strategic guidance",
      "24/7 priority support",
      "Custom SLAs",
      "Unlimited consultations",
      "Advanced security & compliance",
      "Long-term partnership model",
    ],
    cta: "Schedule Strategic Call",
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Engagement Models</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            Flexible solutions for every scale
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-balance text-lg">
            From initial strategy to enterprise partnerships, we scale with your needs. Each engagement is custom-tailored to deliver maximum value.
          </p>
        </div>

        {/* Engagement Models Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-2xl border flex flex-col h-full ${
                plan.highlighted ? "bg-zinc-100 border-zinc-100" : "bg-zinc-900/50 border-zinc-800/50"
              }`}
            >
              {/* Plan Header */}
              <div className="mb-6">
                <h3
                  className={`font-heading text-xl font-semibold mb-2 ${
                    plan.highlighted ? "text-zinc-900" : "text-zinc-100"
                  }`}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-zinc-600" : "text-zinc-500"}`}>{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className={`text-sm mb-1 ${plan.highlighted ? "text-zinc-600" : "text-zinc-500"}`}>{plan.price}</div>
                <span
                  className={`font-display text-3xl font-bold ${plan.highlighted ? "text-zinc-900" : "text-zinc-100"}`}
                >
                  {plan.amount}
                </span>
                <span className={`text-xs block mt-1 ${plan.highlighted ? "text-zinc-600" : "text-zinc-500"}`}>{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlighted ? "text-zinc-900" : "text-zinc-400"}`} />
                    <span className={`text-sm ${plan.highlighted ? "text-zinc-700" : "text-zinc-400"}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="#contact"
                className={`block w-full py-3 px-6 text-center rounded-full font-medium text-sm transition-colors mt-auto ${
                  plan.highlighted
                    ? "bg-zinc-900 text-zinc-100 hover:bg-zinc-800"
                    : "bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
