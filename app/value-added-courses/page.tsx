"use client"

export default function ValueAddedCoursesPage() {
  const sections = [
    {
      title: "Offshore Oil Field Courses",
      content:
        "Specialized programs aligned with offshore operations including safety, survival, and equipment handling modules based on industry standards.",
      image: "https://images.pexels.com/photos/3192669/pexels-photo-3192669.jpeg",
    },
    {
      title: "Passenger / Cruise / Yacht Courses",
      content:
        "Hospitality and onboard service training focused on passenger handling, emergency procedures, and international etiquette. Modules include guest relations, housekeeping, food & beverage service, safety briefings, crowd control, and SOLAS/STCW emergency response with practical drills. Certificates align with STCW and MLC hospitality practices; typical roles include cabin steward, F&B assistant, and guest services on cruise and yacht fleets.",
      image: "https://images.pexels.com/photos/33689/ship-boat-lake-garda-italy.jpg",
    },
    {
      title: "Inland – Near Coastal – Main Fleet Courses",
      content:
        "Foundational and advanced training for deck and engine departments operating in coastal and main fleet sectors. Topics cover seamanship, watchkeeping, basic navigation, mooring operations, engine room procedures, ISM/ISPS awareness, and bridge resource management with logbook practice. Includes practical chartwork, COLREGs, introductory ECDIS, preventive maintenance routines, and simulator-based assessments with oral evaluations.",
      image: "https://images.pexels.com/photos/13586360/pexels-photo-13586360.jpeg",
    },
    {
      title: "Project Skilled",
      content:
        "Specialized craft courses and upskilling programs for project-based maritime roles with competency-based assessment. Training includes rigging & slinging signals, welding basics, scaffolding safety, electrical LOTO, permit-to-work systems, hazard identification (JSA), and QA/QC documentation. Emphasis on PPE selection, confined space awareness, hot-work controls, and team coordination to deliver safe, on-time project outcomes.",
      image: "https://images.pexels.com/photos/8961066/pexels-photo-8961066.jpeg",
    },
    {
      title: "Management Courses",
      content:
        "Leadership, documentation, and compliance training to prepare candidates for supervisory responsibilities. Includes team communication at sea, audit readiness, incident investigation & reporting, risk assessment, voyage planning oversight, performance reviews, and regulatory record-keeping. Covers document control, KPI tracking, budgeting basics, stakeholder communication, and mock external audits to build confidence for Mate/Chief Mate leadership roles.",
      image: "https://images.pexels.com/photos/7647956/pexels-photo-7647956.jpeg",
    },
  ]

  return (
    <div className="bg-page-white">
      <div className="relative min-h-[50vh] w-full overflow-hidden bg-center bg-cover" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('https://images.pexels.com/photos/33689/ship-boat-lake-garda-italy.jpg')" }}>
        <div className="h-[260px] w-full md:h-[360px] grid place-items-center relative z-10">
          <h1 className="text-center text-5xl font-black md:text-6xl leading-tight heading-premium text-primary-cyan">
            Value Added Courses
          </h1>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 bg-section-cream">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-black md:text-4xl mb-4 leading-tight heading-premium text-dark">
            Course Categories
          </h2>
          <p className="text-base leading-relaxed md:text-lg body-premium">
            Content and layout inspired by the provided page: two-column sections on maritime-themed backgrounds. Each module has a clear overview so nothing is left blank.
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((s, i) => (
            <div key={i} className="grid items-center gap-6 rounded-lg border p-8 md:grid-cols-2 bg-white border-light-color">
              <div>
                <h3 className="mb-4 text-2xl font-bold uppercase heading-premium text-primary-cyan">
                  {s.title}
                </h3>
                <p className="text-base leading-relaxed body-premium">
                  {s.content}
                </p>
              </div>
              <div className="rounded overflow-hidden shadow-lg">
                <img 
                  src={s.image} 
                  alt={`${s.title} details`} 
                  className="h-auto w-full rounded" 
                  loading="lazy" 
                  decoding="async" 
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-base body-premium">
          A complete courses list and downloadable brochure are available on request.
        </div>
      </section>
    </div>
  )
}
