const metrics = [
  { value: "50+", label: "Companies Served", description: "Across diverse industries" },
  { value: "200+", label: "Projects Delivered", description: "On time, on budget" },
  { value: "95%", label: "Client Satisfaction", description: "Consistently rated excellent" },
  { value: "15+ yrs", label: "Industry Experience", description: "Proven expertise" },
]

export function ImpactSection() {
  return (
    <section className="px-6 py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        {/* Impact Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-4">Track Record</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">Proven Success Across Industries</h2>
          <p className="text-slate-600 max-w-lg mx-auto text-balance">
            Our commitment to excellence is backed by measurable results and lasting client partnerships.
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group text-center relative overflow-hidden"
            >
              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <p className="font-display text-3xl md:text-4xl font-bold text-blue-600 mb-1 group-hover:text-blue-700 transition-colors">
                  {metric.value}
                </p>
                <p className="text-sm font-medium text-slate-700 mb-1">{metric.label}</p>
                <p className="text-xs text-slate-500">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
