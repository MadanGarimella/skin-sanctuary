import acne from "../assets/treatments/acne.png";
import pigmentation from "../assets/treatments/pigmentation.png";
import hydrafacial from "../assets/treatments/hydrafacial.png";
import prp from "../assets/treatments/prptreatment.png";
import hair from "../assets/treatments/hairrestoration.png";
import botox from "../assets/treatments/botox.png";
import laser from "../assets/facilities/laser-equipment.png";

const sharedFaq = [
  ["Is the treatment painful?", "Most procedures are well tolerated. Numbing, cooling, or comfort measures are used when clinically appropriate."],
  ["How many sessions are required?", "Session count depends on diagnosis, severity, skin type, and treatment goals. A personalized plan is shared after consultation."],
  ["Can I return to work after treatment?", "Many treatments have minimal downtime, while laser or corrective treatments may need aftercare. Your doctor will guide you clearly."],
];

export const treatments = [
  {
    slug: "acne-treatment",
    title: "Acne Treatment",
    category: "Skin",
    image: acne,
    short: "Medical acne care for active breakouts, inflammation, and long-term skin clarity.",
    overview:
      "Acne treatment at Skin Scanctuary combines clinical diagnosis, prescription-led care, peels, device-based support, and skincare planning to reduce breakouts and prevent recurrence.",
    conditions: ["Active acne", "Clogged pores", "Inflammation", "Hormonal acne", "Post-acne marks"],
    benefits: ["Controls recurring breakouts", "Improves skin texture", "Reduces redness", "Builds a sustainable skincare routine"],
    process: ["Skin assessment", "Trigger and history review", "Customized medication or procedure plan", "Progress follow-up"],
    suitable: "Patients with persistent acne, oily skin, painful breakouts, or acne that has not improved with routine skincare.",
    results: "Visible improvement is typically progressive, with calmer skin and fewer breakouts as the plan is followed.",
    recovery: "Mild dryness or peeling may occur with active medications or peels. Sun protection and barrier care are important.",
    faqs: sharedFaq,
  },
  {
    slug: "pigmentation-treatment",
    title: "Pigmentation Treatment",
    category: "Skin",
    image: pigmentation,
    short: "Targeted care for melasma, tanning, dark spots, and uneven skin tone.",
    overview:
      "Pigmentation care focuses on identifying the cause of discoloration and using prescription skincare, peels, lasers, and strict photoprotection to improve tone safely.",
    conditions: ["Melasma", "Sun spots", "Post-inflammatory pigmentation", "Uneven skin tone", "Tanning"],
    benefits: ["Improves visible discoloration", "Enhances glow", "Supports even tone", "Reduces recurrence risk with maintenance"],
    process: ["Pigment analysis", "Skin-type safety review", "Peel or laser planning", "Maintenance protocol"],
    suitable: "Patients with stubborn spots, melasma, tanning, or pigmentation after acne, procedures, or inflammation.",
    results: "Results are gradual and depend on pigment depth, consistency, and sun protection.",
    recovery: "Temporary redness or mild peeling may occur. Daily sunscreen is essential.",
    faqs: sharedFaq,
  },
  {
    slug: "hair-restoration",
    title: "Hair Restoration",
    category: "Hair",
    image: hair,
    short: "Comprehensive plans for hair thinning, hair fall, and scalp health.",
    overview:
      "Hair restoration starts with diagnosis and combines medical therapy, scalp care, nutrition review, PRP where indicated, and long-term maintenance planning.",
    conditions: ["Hair fall", "Pattern hair loss", "Thinning", "Scalp concerns", "Weak hair density"],
    benefits: ["Addresses root causes", "Supports density", "Improves scalp health", "Creates a sustainable maintenance plan"],
    process: ["Scalp and history evaluation", "Diagnostic review", "Treatment roadmap", "Follow-up and progress tracking"],
    suitable: "Patients noticing persistent hair fall, widening partition, thinning crown, or reduced density.",
    results: "Hair improvement takes time because of the growth cycle. Consistency and follow-up are key.",
    recovery: "Most plans have minimal downtime. Procedure aftercare is explained before treatment.",
    faqs: sharedFaq,
  },
  {
    slug: "prp-therapy",
    title: "PRP Therapy",
    category: "Hair",
    image: prp,
    short: "Regenerative platelet therapy to support hair and skin rejuvenation goals.",
    overview:
      "PRP therapy uses concentrated platelets from your own blood to support tissue repair and stimulate targeted areas under medical supervision.",
    conditions: ["Hair thinning", "Early hair loss", "Dull skin", "Texture concerns", "Maintenance support"],
    benefits: ["Autologous treatment", "Supports natural repair", "Minimal downtime", "Pairs well with medical plans"],
    process: ["Consultation", "Blood draw", "Platelet preparation", "Targeted application or injections"],
    suitable: "Patients who are medically suitable and need regenerative support for hair or skin concerns.",
    results: "Results build gradually over multiple sessions and vary by concern and baseline health.",
    recovery: "Mild soreness or redness can occur briefly. Avoid harsh products as advised.",
    faqs: sharedFaq,
  },
  {
    slug: "hydrafacial",
    title: "Hydrafacial",
    category: "Aesthetics",
    image: hydrafacial,
    short: "Deep cleansing, exfoliation, hydration, and glow with minimal downtime.",
    overview:
      "Hydrafacial is a comfort-focused treatment that cleanses, exfoliates, extracts, and hydrates the skin for a refreshed appearance.",
    conditions: ["Dullness", "Congestion", "Dryness", "Rough texture", "Pre-event glow"],
    benefits: ["Instant freshness", "Hydrated feel", "Cleaner pores", "No major downtime"],
    process: ["Cleansing", "Gentle exfoliation", "Extraction", "Hydration infusion"],
    suitable: "Patients seeking a glow treatment or maintenance facial guided by skin needs.",
    results: "Skin often looks fresher immediately, with best results supported by maintenance skincare.",
    recovery: "Usually no downtime. Mild flushing may settle quickly.",
    faqs: sharedFaq,
  },
  {
    slug: "botox-fillers",
    title: "Botox & Fillers",
    category: "Aesthetics",
    image: botox,
    short: "Subtle aesthetic rejuvenation designed around natural expression and facial balance.",
    overview:
      "Injectable treatments are planned conservatively to soften lines, restore volume, or enhance proportions while preserving natural facial character.",
    conditions: ["Expression lines", "Volume loss", "Facial imbalance", "Fine lines", "Ageing concerns"],
    benefits: ["Subtle rejuvenation", "Quick appointment", "Personalized planning", "Natural-looking goals"],
    process: ["Facial assessment", "Consent and planning", "Precise injectable treatment", "Aftercare review"],
    suitable: "Adults seeking non-surgical aesthetic refinement after a suitability consultation.",
    results: "Botox results develop over days; fillers are often visible sooner with settling over time.",
    recovery: "Temporary swelling, redness, or bruising can occur. Follow aftercare carefully.",
    faqs: sharedFaq,
  },
  {
    slug: "laser-hair-reduction",
    title: "Laser Hair Reduction",
    category: "Laser",
    image: laser,
    short: "Technology-led hair reduction with skin-type aware settings and medical supervision.",
    overview:
      "Laser hair reduction targets follicles across planned sessions to reduce unwanted hair growth safely and progressively.",
    conditions: ["Unwanted hair", "Ingrown hair", "Frequent shaving irritation", "Body hair reduction", "Facial hair concerns"],
    benefits: ["Progressive reduction", "Smoother skin", "Less shaving irritation", "Planned safety settings"],
    process: ["Patch/suitability check", "Area preparation", "Laser session", "Aftercare and next-session plan"],
    suitable: "Patients seeking long-term reduction and cleared for laser treatment after skin assessment.",
    results: "Reduction improves over a series of sessions because hair grows in cycles.",
    recovery: "Mild warmth or redness may occur. Avoid sun exposure and follow laser aftercare.",
    faqs: sharedFaq,
  },
  {
    slug: "anti-aging-treatments",
    title: "Anti-Aging Treatments",
    category: "Aesthetics",
    image: botox,
    short: "Personalized skin rejuvenation for texture, firmness, fine lines, and radiance.",
    overview:
      "Anti-aging care combines skincare, peels, injectables, lasers, and regenerative options based on skin biology and aesthetic goals.",
    conditions: ["Fine lines", "Loss of firmness", "Dullness", "Uneven texture", "Photoaging"],
    benefits: ["Improves radiance", "Supports firmness", "Softens visible ageing", "Builds a maintenance plan"],
    process: ["Ageing-pattern assessment", "Treatment selection", "Procedure sessions", "Maintenance review"],
    suitable: "Patients seeking preventive or corrective rejuvenation without an overdone look.",
    results: "Results vary by treatment type and usually improve progressively with planned care.",
    recovery: "Downtime ranges from minimal to a few days depending on procedure intensity.",
    faqs: sharedFaq,
  },
  {
    slug: "scar-revision",
    title: "Scar Revision",
    category: "Skin",
    image: acne,
    short: "Structured improvement plans for acne scars, texture irregularity, and visible marks.",
    overview:
      "Scar revision uses a combination approach such as resurfacing, collagen stimulation, peels, and procedural correction where suitable.",
    conditions: ["Acne scars", "Textural scars", "Post-injury marks", "Uneven skin surface", "Atrophic scars"],
    benefits: ["Improves texture", "Supports collagen remodeling", "Softens scar visibility", "Customized combination care"],
    process: ["Scar mapping", "Treatment selection", "Session plan", "Progress documentation"],
    suitable: "Patients with stable scars who understand that scar correction is progressive improvement, not instant erasure.",
    results: "Improvement builds over sessions as skin remodels and heals.",
    recovery: "Redness, sensitivity, or peeling may occur depending on the selected procedure.",
    faqs: sharedFaq,
  },
  {
    slug: "chemical-peels",
    title: "Chemical Peels",
    category: "Skin",
    image: pigmentation,
    short: "Doctor-guided exfoliation for pigmentation, acne, texture, and glow.",
    overview:
      "Chemical peels use selected active solutions to exfoliate and renew the skin surface, chosen according to concern and skin type.",
    conditions: ["Dullness", "Acne marks", "Pigmentation", "Roughness", "Congestion"],
    benefits: ["Improves glow", "Smooths texture", "Supports pigmentation care", "Pairs well with skincare plans"],
    process: ["Skin preparation", "Peel selection", "Controlled application", "Post-peel care"],
    suitable: "Patients whose skin is prepared and suitable for peel depth and active ingredients.",
    results: "Skin appears brighter and smoother as peeling or renewal settles.",
    recovery: "Mild peeling, dryness, and sensitivity are common. Sunscreen is mandatory.",
    faqs: sharedFaq,
  },
];

export const getTreatmentBySlug = (slug) =>
  treatments.find((treatment) => treatment.slug === slug);

export const treatmentNavItems = treatments.map(({ title, slug }) => ({
  label: title,
  to: `/treatments/${slug}`,
}));

