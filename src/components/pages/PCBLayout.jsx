import React from "react";
import C1 from "../../images/C1.jpg";
import C2 from "../../images/C2.jpg";
import C3 from "../../images/C3.jpg";
import C4 from "../../images/C4.jpg";
import C5 from "../../images/C5.jpg";
import C6 from "../../images/C6.jpg";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "capabilities", label: "Capabilities" },
  { id: "stackup", label: "Stackup & Materials" },
  { id: "highspeed", label: "High-Speed & SI" },
  { id: "rf", label: "RF, Cellular & GPS" },
  { id: "power", label: "Power Integrity & Thermal" },
  { id: "dfx", label: "DFM/DFT & Documentation" },
  { id: "handoff", label: "Manufacturing Handoff" },
  { id: "timeline", label: "Layout Process" },
  { id: "gallery", label: "Gallery" },
  { id: "faq", label: "FAQ" },
];

const capabilities = [
  "2–16+ layers, HDI, microvias, blind/buried vias",
  "Impedance-controlled pairs (USB 3.x, PCIe, MIPI, Ethernet, HDMI, DDRx)",
  "BGA/μBGA fan-out, length-matching & skew control",
  "Separate analog, digital, power & RF zones with clean return paths",
  "Rigid, rigid-flex, flex circuits with bend constraints",
  "EMI/EMC-aware placement, stitching vias, guard traces & filters",
  "Library with verified footprints, 3D models & assembly notes",
];

const timeline = [
  {
    step: "1. Inputs & Constraints",
    text:
      "We align on schematics, mechanicals, keep-outs, connectors, stackup, impedance, target fab/assembly house, test points, and cost goals.",
  },
  {
    step: "2. Floorplanning",
    text:
      "Critical placement first: SoC/MCU, memories, power, clocks, high-speed IOs, RF & antennas. Establish zones and routing corridors.",
  },
  {
    step: "3. Routing",
    text:
      "High-speed first (diff pairs, length match), then sensitive analog, then general signals. We control reference planes and return paths.",
  },
  {
    step: "4. Power & Thermal",
    text:
      "Dedicated power planes, star points, decoupling strategy, copper pours, thermal reliefs, heatsinks/keep-outs modeled in 3D.",
  },
  {
    step: "5. Reviews & Checks",
    text:
      "ERC/DRC, SI/PI checks, 3D interference checks, DFx reviews, manufacturing rule verification with your fab/CM.",
  },
  {
    step: "6. Outputs",
    text:
      "Fabrication & assembly packages with complete documentation, ready for proto or mass production.",
  },
];

const gallery = [
  { title: "Dense Layout Close-Up", img: "https://res.cloudinary.com/uf-552861/image/upload/v1722409863/printed_circuit_board_layout_vgmgll.jpg", blurb: "Impedance-controlled routing with length matching and clean return paths." },
  { title: "Populated Board", img: C1, blurb: "Real-world assembly showing component placement and thermal strategy." },
  { title: "3D PCB Concept", img: C2, blurb: "3D checks for connector reach, standoff heights, and keep-outs." },
  { title: "SMT Line", img: C3, blurb: "Stencil → pick & place → reflow → AOI ensures yield and repeatability." },
  { title: "SIM/eSIM Options", img: C5, blurb: "Designing for cellular: trays vs MFF2 eSIM for sealed products." },
  { title: "Enclosure Integration", img: C6, blurb: "Board mounted to chassis with correct clearances and fasteners." },
];

export default function PCBLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full">
                Traxo India Automation
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                PCB Layout Services — Precision, Performance & Manufacturability
              </h1>
              <p className="mt-4 text-gray-600 text-lg">
                We transform schematics into production-ready PCBs. Our layouts
                balance signal integrity, thermal behavior, EMI/EMC compliance, and
                cost — optimized for your fabrication and assembly partners.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#overview" className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
                  Explore Our Approach
                </a>
                <a href="/contact" className="px-5 py-2.5 rounded-xl bg-white border border-gray-200 font-semibold text-gray-800 hover:border-gray-300 transition">
                  Get a Layout Quote
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl shadow-2xl overflow-hidden ring-1 ring-gray-200 bg-white">
                <img src="https://res.cloudinary.com/uf-552861/image/upload/v1722409863/printed_circuit_board_layout_vgmgll.jpg" alt="High-density layout" className="w-full h-[340px] object-cover" />
              </div>
              <div className="hidden md:block absolute -bottom-6 -left-6 w-48 rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvlNxJdYmhJTvm-MSR4Uw-WjqTtl0rrp-PPQ&s' alt="Assembled PCB" className="w-full h-40 object-cover" />
              </div>
              <div className="hidden md:block absolute -top-6 -right-6 w-40 rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200">
                <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-nD6LHu0Pkgzk7JJATKHNaBl4uxguHU6A6wuqenBKo4JpH5gv90LmHUzt2Bz_5nHVadVi9R8jOzeouCfUpy2kiplnQLxDkNO0l4xFmVaKvoOgKYweGYmr-Jd_CBlvgnunUejrZhCVU4A/s640/pcb_layout.png' alt="3D layout" className="w-full h-40 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* TOC */}
          <aside className="lg:col-span-3">
            <div className="sticky top-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-900">On this page</h3>
                <ul className="mt-3 space-y-2">
                  {toc.map((t) => (
                    <li key={t.id}>
                      <a
                        href={`#${t.id}`}
                        className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:text-indigo-700 hover:bg-indigo-50"
                      >
                        {t.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-2xl p-5 shadow-md">
                <h4 className="font-semibold">Have constraints to meet?</h4>
                <p className="mt-1 text-sm text-indigo-100">
                  Share stackup, impedance, enclosure and fab rules — we’ll map a plan.
                </p>
                <a
                  href="/contact"
                  className="mt-3 inline-block bg-white text-indigo-700 font-semibold px-4 py-2 rounded-xl hover:bg-indigo-50"
                >
                  Contact Traxo
                </a>
              </div>
            </div>
          </aside>

          {/* MAIN */}
          <div className="lg:col-span-9 space-y-20">
            {/* Overview */}
            <section id="overview" className="scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-last md:order-first">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Overview</h2>
                  <p className="mt-3 text-gray-600">
                    PCB layout is where a design becomes real. At Traxo, we plan
                    placement and routing around signal integrity, power integrity,
                    thermal behavior, EMC, and assembly constraints. The result is a
                    board that boots on first spin, passes validation, and scales to
                    production without surprises.
                  </p>
                </div>
                <div className="order-first md:order-last rounded-xl overflow-hidden shadow ring-1 ring-gray-200">
                  <img src={C1} alt="Overview image" className="w-full h-72 object-cover" />
                </div>
              </div>
            </section>

            {/* Capabilities */}
            <section id="capabilities" className="scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="rounded-xl overflow-hidden shadow ring-1 ring-gray-200">
                  <img src={C4} alt="Capabilities close-up" className="w-full h-72 object-cover" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Capabilities</h2>
                  <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
                    {capabilities.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                </div>
              </div>
            </section>

            {/* Stackup */}
            <section id="stackup" className="scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-last md:order-first">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Stackup & Materials</h2>
                  <p className="mt-3 text-gray-600">
                    We collaborate with your fab to lock a stackup early: FR-4, high-Tg,
                    low-loss laminates, controlled dielectric, copper weights, prepregs
                    and cores. We define target impedances, via structures, and
                    manufacturable rules to avoid respins.
                  </p>
                </div>
                <div className="order-first md:order-last rounded-xl overflow-hidden shadow ring-1 ring-gray-200">
                  <img src={C2} alt="3D stack and materials" className="w-full h-72 object-cover" />
                </div>
              </div>
            </section>

            {/* High-speed & SI */}
            <section id="highspeed" className="scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="rounded-xl overflow-hidden shadow ring-1 ring-gray-200">
                  <img src={C4} alt="High-speed routing" className="w-full h-72 object-cover" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">High-Speed & Signal Integrity</h2>
                  <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
                    <li>Length matching, skew budgets, and diff-pair constraints.</li>
                    <li>Reference planes & return-path control for low loop area.</li>
                    <li>Via stubs minimization (backdrill/microvias) for eye margin.</li>
                    <li>Clock routing, terminations, and crosstalk mitigation.</li>
                    <li>SI reviews for DDRx, PCIe, USB, MIPI, HDMI, Ethernet.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* RF */}
            <section id="rf" className="scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-last md:order-first">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">RF, Cellular & GPS</h2>
                  <p className="mt-3 text-gray-600">
                    We follow vendor app notes for 50Ω traces, keep-outs under antennas,
                    π-matching networks, and clean ground references. For cellular we
                    support SIM tray or MFF2 eSIM with remote provisioning. GPS layouts
                    prioritize low noise, LNA placement, and sky-view constraints.
                  </p>
                </div>
                <div className="order-first md:order-last grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden shadow ring-1 ring-gray-200">
                    <img src={C5} alt="SIM & eSIM options" className="w-full h-60 object-cover" />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow ring-1 ring-gray-200">
                    <img src={C6} alt="Tracker board" className="w-full h-60 object-cover" />
                  </div>
                </div>
              </div>
            </section>

            {/* Power & Thermal */}
            <section id="power" className="scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="rounded-xl overflow-hidden shadow ring-1 ring-gray-200">
                  <img src={C1} alt="Power integrity" className="w-full h-72 object-cover" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Power Integrity & Thermal</h2>
                  <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
                    <li>Decoupling strategy based on target impedance across bands.</li>
                    <li>Star points, wide pours, Kelvin sensing for regulators.</li>
                    <li>Thermal vias, copper slugs, heatsinks & airflow planning.</li>
                    <li>EMI filters and ground stitching for noisy domains.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* DFx */}
            <section id="dfx" className="scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-last md:order-first">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">DFM/DFT & Documentation</h2>
                  <p className="mt-3 text-gray-600">
                    We design for fab & assembly from the start: annular rings, mask
                    slivers, copper-to-edge, paste apertures, panelization, fiducials,
                    test points, and fixture access. Complete fab & assembly drawings
                    reduce back-and-forth and speed up builds.
                  </p>
                </div>
                <div className="order-first md:order-last rounded-xl overflow-hidden shadow ring-1 ring-gray-200">
                  <img src={C3} alt="DFM/DFT and AOI" className="w-full h-72 object-cover" />
                </div>
              </div>
            </section>

            {/* Manufacturing Handoff */}
            <section id="handoff" className="scroll-mt-24">
              <div className="rounded-2xl bg-white shadow ring-1 ring-gray-200 p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Manufacturing Handoff</h2>
                <p className="mt-3 text-gray-600">
                  You receive a clean, production-ready package that your fabricator
                  and CM can use immediately.
                </p>
                <div className="mt-4 grid md:grid-cols-2 gap-4 text-gray-700">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Gerber/ODB++, drill & stackup notes</li>
                    <li>Assembly files: centroid (PnP), paste, assembly drawings</li>
                    <li>BOM with alternates & lifecycle notes</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Readme & build notes for fab/CM</li>
                    <li>Test point map & fixtures guidance</li>
                    <li>3D STEP models for enclosure checks</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Timeline */}
            <section id="timeline" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Layout Process</h2>
              <ol className="mt-6 relative border-l border-gray-200">
                {timeline.map((t, i) => (
                  <li key={i} className="ml-6 mb-8">
                    <span className="absolute -left-2 flex h-4 w-4 items-center justify-center">
                      <span className="h-3 w-3 rounded-full bg-indigo-600"></span>
                    </span>
                    <h3 className="font-semibold text-gray-900">{t.step}</h3>
                    <p className="text-gray-600">{t.text}</p>
                  </li>
                ))}
              </ol>
            </section>

            {/* Gallery */}
            <section id="gallery" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Gallery</h2>
              <p className="mt-2 text-gray-600">Snapshots from layout to manufacturing.</p>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.map((g, i) => (
                  <figure
                    key={i}
                    className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition ring-1 ring-gray-200"
                  >
                    <img src={g.img} alt={g.title} className="w-full h-48 object-cover" />
                    <figcaption className="p-4">
                      <h3 className="font-semibold text-gray-900">{g.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{g.blurb}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">FAQ</h2>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-5 shadow ring-1 ring-gray-200">
                  <h3 className="font-semibold text-gray-900">Which CAD tools do you use?</h3>
                  <p className="mt-2 text-gray-600">
                    We adapt to your stack—Altium, KiCad, Allegro, or EasyEDA—while
                    preserving DRC rules, libraries, and version control practices.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow ring-1 ring-gray-200">
                  <h3 className="font-semibold text-gray-900">Can you work with my fab/CM rules?</h3>
                  <p className="mt-2 text-gray-600">
                    Yes. Share your manufacturer’s capabilities (trace/space, drills,
                    stackups), and we’ll tailor DFM to those limits from day one.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow ring-1 ring-gray-200">
                  <h3 className="font-semibold text-gray-900">Do you provide pre-compliance guidance?</h3>
                  <p className="mt-2 text-gray-600">
                    We design with EMC/EMI in mind and suggest pre-scan tests to
                    improve first-pass success at the lab.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow ring-1 ring-gray-200">
                  <h3 className="font-semibold text-gray-900">What’s needed to start?</h3>
                  <p className="mt-2 text-gray-600">
                    Schematics (or draft), mechanicals (STEP/DXF), key IC datasheets,
                    interface speeds, power budget, preferred fab/CM, and deadlines.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 p-8 text-white shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold">Let’s layout your next board.</h3>
                  <p className="mt-2 text-indigo-100">
                    Share constraints and timelines. We’ll propose stackup, rules, and
                    a plan to hit performance and cost targets.
                  </p>
                </div>
                <div className="md:text-right">
                  <a
                    href="/contact"
                    className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50"
                  >
                    Start a Project
                  </a>
                </div>
              </div>
            </section>
          </div>
          {/* /MAIN */}
        </div>
      </section>
    </div>
  );
}
