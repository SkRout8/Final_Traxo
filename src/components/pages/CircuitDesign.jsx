import React from "react";
import C1 from "../../images/C1.jpg";
import C2 from "../../images/C2.jpg";
import C3 from "../../images/C3.jpg";
import C4 from "../../images/C4.jpg";
import C5 from "../../images/C5.jpg";
import C6 from "../../images/C6.jpg";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "pcb-design", label: "PCB Design" },
  { id: "proto-iteration", label: "Prototype & Iteration" },
  { id: "manufacturing", label: "Manufacturing (SMT/Through-Hole)" },
  { id: "testing", label: "Testing & Validation" },
  { id: "dfx", label: "DFx & Reliability" },
  { id: "comms", label: "Connectivity (SIM/eSIM, GPS)" },
  { id: "enclosure", label: "Mechanical & Enclosure" },
  { id: "gallery", label: "Gallery" },
  { id: "faq", label: "FAQ" },
];

const timeline = [
  {
    step: "1. Requirements",
    detail:
      "We define functional specs, interfaces, power budget, target BOM, compliance needs, and reliability goals. Clear specs reduce redesign risk later.",
  },
  {
    step: "2. Schematic",
    detail:
      "We capture the circuit using proven reference designs (MCU/SoC, power, RF, sensors), add protections, and confirm footprints & availability.",
  },
  {
    step: "3. PCB Layout",
    detail:
      "Layer stackup, controlled impedance, power integrity, return paths, thermal reliefs, design rules, and placement for manufacturability and serviceability.",
  },
  {
    step: "4. Prototype",
    detail:
      "Low-volume builds validate electrical behavior, firmware bring-up, and mechanical fit. Fast turn PCBs let us iterate quickly.",
  },
  {
    step: "5. EVT/DVT/PVT",
    detail:
      "Engineering, Design, and Production validation phases harden the product: test plans, fixtures, automated checks, and pilot runs.",
  },
  {
    step: "6. Scale",
    detail:
      "Finalize test coverage, yield tracking, CM onboarding, SPC dashboards, and supply risk mitigation for volume production.",
  },
];

const gallery = [
  {
    title: "Populated PCB",
    img: C1,
    text:
      "A production-ready PCB populated with ICs, passives, connectors, and thermal management. Copper traces route signals and power between components.",
  },
  {
    title: "3D PCB Concept",
    img: C2,
    text:
      "A 3D render used to verify placement, keep-out zones, and connector accessibility before committing to fabrication.",
  },
  {
    title: "SMT Line",
    img: C3,
    text:
      "Automated line: stencil printer → pick & place → reflow oven → AOI. Ensures throughput, consistency, and traceability.",
  },
  {
    title: "Signal Integrity Close-up",
    img: C4,
    text:
      "High-density routing with attention to impedance, length matching, and low-noise power delivery for high-speed interfaces.",
  },
  {
    title: "SIM Form Factors",
    img: C5,
    text:
      "Mini/Micro/Nano SIM vs eSIM. eSIM is soldered on-board and provisioned remotely, ideal for sealed or ruggedized devices.",
  },
  {
    title: "Tracker PCB in Enclosure",
    img: C6,
    text:
      "GPS/Cellular tracker PCB mounted on standoffs inside a mechanical enclosure with proper clearances and fastening strategy.",
  },
];

export default function CircuitDesign() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full">
                Circuit Design & Manufacturing
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                Circuit Design
              </h1>
              <p className="mt-4 text-gray-600 text-lg">
                We design, prototype, validate, and manufacture robust electronic
                products—balancing performance, compliance, and cost. Explore our
                full workflow below.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#overview" className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
                  Explore Process
                </a>
                <a href="#faq" className="px-5 py-2.5 rounded-xl bg-white border border-gray-200 font-semibold text-gray-800 hover:border-gray-300 transition">
                  Common Questions
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl shadow-2xl overflow-hidden ring-1 ring-gray-200 bg-white">
                <img src='https://www.nextpcb.com/uploads/images/202305/08/1683512037-9351-APuhEC.png' alt="High-density PCB close-up" className="w-full h-[340px] object-cover" />
              </div>
              <div className="hidden md:block absolute -bottom-6 -left-6 w-48 rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTMSIBkMRPAnMp5V-VylZMR1keQi9EQPBOkw&s' alt="Populated PCB" className="w-full h-40 object-cover" />
              </div>
              <div className="hidden md:block absolute -top-6 -right-6 w-40 rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200">
                <img src='https://i.redd.it/y8sntdeb3pq61.png' alt="3D PCB concept" className="w-full h-40 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Sidebar TOC */}
          <aside className="lg:col-span-3">
            <div className="sticky top-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-900">On this page</h3>
                <ul className="mt-3 space-y-2">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:text-indigo-700 hover:bg-indigo-50"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-2xl p-5 shadow-md">
                <h4 className="font-semibold">Need a custom board?</h4>
                <p className="mt-1 text-sm text-indigo-100">
                  Share your requirements—MCU, RF, power, sensors, or high-speed.
                </p>
                <a
                  href="/contact"
                  className="mt-3 inline-block bg-white text-indigo-700 font-semibold px-4 py-2 rounded-xl hover:bg-indigo-50"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="lg:col-span-9 space-y-20">
            {/* Overview */}
            <div id="overview" className="scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-last md:order-first">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Overview</h2>
                  <p className="mt-3 text-gray-600">
                    Circuit design is the disciplined process of turning requirements
                    into safe, manufacturable electronic hardware. It spans
                    specification, schematic capture, PCB layout, prototyping,
                    validation, compliance, and scalable production. We emphasize
                    signal integrity, power integrity, thermal performance, testability,
                    and supply resilience to ensure your product ships on time and
                    stays in production.
                  </p>
                </div>
                <div className="order-first md:order-last">
                  <div className="rounded-xl overflow-hidden shadow ring-1 ring-gray-200">
                    <img src='https://damassets.autodesk.net/content/dam/autodesk/draftr/7836/circuits-tinkercad-thumb-1172x660.jpg' alt="Populated PCB overview" className="w-full h-72 object-cover" />
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="mt-10">
                <ol className="relative border-l border-gray-200">
                  {timeline.map((t, i) => (
                    <li key={i} className="ml-6 mb-8">
                      <span className="absolute -left-2 flex h-4 w-4 items-center justify-center">
                        <span className="h-3 w-3 rounded-full bg-indigo-600"></span>
                      </span>
                      <h3 className="font-semibold text-gray-900">{t.step}</h3>
                      <p className="text-gray-600">{t.detail}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* PCB Design */}
            <div id="pcb-design" className="scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="rounded-xl overflow-hidden shadow ring-1 ring-gray-200">
                  <img src={C4} alt="Signal integrity routing" className="w-full h-72 object-cover" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">PCB Design</h2>
                  <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
                    <li>Layer stackups with impedance control for high-speed buses.</li>
                    <li>Placement for thermal paths, decoupling, and EMI containment.</li>
                    <li>Return-path integrity and ground strategies (splits/planes).</li>
                    <li>DFM rules: annular rings, solder mask slivers, copper-to-edge.</li>
                    <li>Libraries with verified footprints and 3D models.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Prototype & Iteration */}
            <div id="proto-iteration" className="scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-last md:order-first">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Prototype & Iteration</h2>
                  <p className="mt-3 text-gray-600">
                    We de-risk early with fast prototypes: validate power trees,
                    interfaces, clocks, RF performance, and EMI. Firmware bring-up
                    verifies boot, peripherals, and power states. Issues feed back into
                    quick layout spins until requirements are satisfied.
                  </p>
                </div>
                <div className="order-first md:order-last rounded-xl overflow-hidden shadow ring-1 ring-gray-200">
                  <img src={C2} alt="3D PCB prototype render" className="w-full h-72 object-cover" />
                </div>
              </div>
            </div>

            {/* Manufacturing */}
            <div id="manufacturing" className="scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="rounded-xl overflow-hidden shadow ring-1 ring-gray-200">
                  <img src={C3} alt="SMT manufacturing line" className="w-full h-72 object-cover" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Manufacturing (SMT & Through-Hole)
                  </h2>
                  <p className="mt-3 text-gray-600">
                    For volume, we rely on automated lines: paste printing,
                    high-speed pick-and-place, reflow, wave/selective soldering,
                    AOI/X-ray, and ICT/FCT. Panelization, fiducials, test points, and
                    labeling ensure yield and traceability.
                  </p>
                  <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
                    <li>Stencil design for optimal paste volume and apertures.</li>
                    <li>Reflow profiles tuned to component thermal mass.</li>
                    <li>AOI rulesets for polarity, skew, tombstoning, bridges.</li>
                    <li>MSL handling and ESD-safe workflows end-to-end.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Testing & Validation */}
            <div id="testing" className="scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-last md:order-first">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Testing & Validation</h2>
                  <p className="mt-3 text-gray-600">
                    We design for verification from day one: boundary scan, bed-of-nails
                    access, golden samples, and automated test scripts. Validation covers
                    functional tests, power/thermal, RF, environmental stress, and EMC
                    pre-scan to reduce surprises at certification.
                  </p>
                  <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
                    <li>ICT/FCT fixtures with barcodes for traceability.</li>
                    <li>Yield dashboards and failure Pareto tracking.</li>
                    <li>HALT/HASS to uncover latent reliability issues.</li>
                  </ul>
                </div>
                <div className="order-first md:order-last rounded-xl overflow-hidden shadow ring-1 ring-gray-200">
                  <img src={C4} alt="Automated testing focus" className="w-full h-72 object-cover" />
                </div>
              </div>
            </div>

            {/* DFx */}
            <div id="dfx" className="scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="rounded-xl overflow-hidden shadow ring-1 ring-gray-200">
                  <img src={C1} alt="Design for reliability" className="w-full h-72 object-cover" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">DFx & Reliability</h2>
                  <p className="mt-3 text-gray-600">
                    DFx (Design for Manufacture, Assembly, Test, Cost, Service) guides
                    component choices, footprints, and routing. We prioritize lifecycle
                    availability, second sources, derating, and thermal margins to
                    prevent field failures and supply shocks.
                  </p>
                </div>
              </div>
            </div>

            {/* Connectivity */}
            <div id="comms" className="scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-last md:order-first">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Connectivity (SIM/eSIM, GPS)</h2>
                  <p className="mt-3 text-gray-600">
                    For cellular devices we support Mini/Micro/Nano SIM trays and eSIM
                    (soldered MFF2) with remote provisioning. RF layout follows vendor
                    app notes: 50Ω traces, keep-outs under antennas, matching networks,
                    and low-loss stackups. GPS designs consider sky visibility, LNA
                    placement, and noise isolation from digital domains.
                  </p>
                </div>
                <div className="order-first md:order-last grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden shadow ring-1 ring-gray-200">
                    <img src={C5} alt="SIM and eSIM formats" className="w-full h-60 object-cover" />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow ring-1 ring-gray-200">
                    <img src={C6} alt="Tracker PCB in housing" className="w-full h-60 object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* Enclosure */}
            <div id="enclosure" className="scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="rounded-xl overflow-hidden shadow ring-1 ring-gray-200">
                  <img src={C6} alt="Board mounted with standoffs" className="w-full h-72 object-cover" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Mechanical & Enclosure Integration</h2>
                  <p className="mt-3 text-gray-600">
                    We co-design electronics and mechanics: board outline, mounting
                    holes, keep-outs, connector reach, gasket lines, and thermal paths.
                    Early 3D checks avoid interference and ensure maintainability and IP
                    rating targets.
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div id="gallery" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Image Gallery</h2>
              <p className="mt-2 text-gray-600">
                A few visuals from design, manufacturing, connectivity, and integration.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.map((g, i) => (
                  <figure
                    key={i}
                    className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition ring-1 ring-gray-200"
                  >
                    <img src={g.img} alt={g.title} className="w-full h-48 object-cover" />
                    <figcaption className="p-4">
                      <h3 className="font-semibold text-gray-900">{g.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{g.text}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div id="faq" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">FAQ</h2>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-5 shadow ring-1 ring-gray-200">
                  <h3 className="font-semibold text-gray-900">How do you keep costs under control?</h3>
                  <p className="mt-2 text-gray-600">
                    We design to a target BOM, prefer stocked components with second
                    sources, panelize efficiently, and optimize test coverage to reduce
                    rework. Early DFx reviews prevent cost surprises in production.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow ring-1 ring-gray-200">
                  <h3 className="font-semibold text-gray-900">Can you help with certifications?</h3>
                  <p className="mt-2 text-gray-600">
                    Yes—EMC/EMI, safety (e.g., IEC/UL), cellular/RF, and environmental.
                    We plan pre-compliance tests and layout safeguards to improve pass
                    rates on the first attempt.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow ring-1 ring-gray-200">
                  <h3 className="font-semibold text-gray-900">What files do you deliver?</h3>
                  <p className="mt-2 text-gray-600">
                    Schematics, layout, Gerber/ODB++, drill, pick-and-place, BOM with
                    alternates, assembly drawings, 3D models, test procedures, and
                    production notes.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow ring-1 ring-gray-200">
                  <h3 className="font-semibold text-gray-900">Do you support firmware too?</h3>
                  <p className="mt-2 text-gray-600">
                    We provide board bring-up, bootloaders, drivers, and production
                    test firmware. Application development is available on request.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 p-8 text-white shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold">Ready to build your next device?</h3>
                  <p className="mt-2 text-indigo-100">
                    Send us your idea or schematic. We’ll review feasibility, risks,
                    and a draft plan—no obligation.
                  </p>
                </div>
                <div className="md:text-right">
                  <a
                    href="/contact"
                    className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* /Main content */}
        </div>
      </section>
    </div>
  );
}
