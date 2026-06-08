import { BudgetItem, ProjectChallenge, ProjectObjective } from './types';

export const CORE_CHALLENGES: ProjectChallenge[] = [
  {
    id: 'computer-ratio',
    title: 'Extreme Device Scarcity',
    metric: '100+:1',
    metricLabel: 'Student-to-Computer Ratio',
    description: 'Many rural West Nile secondary schools have fewer than 5 functioning computers for hundreds of students. Most students study ICT entirely from a blackboard without ever typing.',
    impactLevel: 'Critical'
  },
  {
    id: 'power-grid',
    title: 'Absent Power Grid',
    metric: '85%',
    metricLabel: 'Rural Areas Without Power',
    description: 'Electricity in Maracha District is irregular, scarce, or entirely non-existent in school territories. Traditional learning stops when solar power batteries run dry or weather turns cloudy.',
    impactLevel: 'Severe'
  },
  {
    id: 'internet-costs',
    title: 'Digital Isolation',
    metric: 'Very High',
    metricLabel: 'Relative Bandwidth Cost',
    description: 'Internet connectivity is either completely physically unavailable or priced out of reach, denying students the ability to research, read open-source texts, or access national resources.',
    impactLevel: 'High'
  },
  {
    id: 'unrealistic-curriculum',
    title: 'Mandate Without Means',
    metric: '100%',
    metricLabel: 'Ugandan Exam Requirement',
    description: 'National secondary curricula demand computer literacy for official graduation exams. However, rural schools receive zero supplemental funding to build active IT infrastructure.',
    impactLevel: 'Critical'
  },
  {
    id: 'obsolete-devices',
    title: 'Obsolete & Broken Hardware',
    metric: '70%+',
    metricLabel: 'Defunct Rate',
    description: 'Where computers exist in rural administrative offices, they are often bulky CRTs with dead hard drives, lacking maintenance knowledge, support networks, or adequate security.',
    impactLevel: 'Severe'
  }
];

export const PROJECT_OBJECTIVES: ProjectObjective[] = [
  {
    id: 'obj-1',
    title: 'Construct the Dedicated Hub',
    details: 'Erect a robust, secure, state-of-the-art 280.8m² computer training center within Maracha, custom-designed to resist West Nile weather and dust.',
    metric: '280.8 m²',
    benefit: 'Provides a secure, weatherproof space for 80+ simultaneous learners.'
  },
  {
    id: 'obj-2',
    title: 'Sustain 80 Workstations',
    details: 'Equip the modern laboratory with 80 highly energy-efficient desktops specifically selected for high heat resistance and low energy overheads.',
    metric: '80 Desktops',
    benefit: 'Guarantees every single student gets a dedicated, hands-on terminal.'
  },
  {
    id: 'obj-3',
    title: 'Erect Structured Networking',
    details: 'Install dedicated 24-port switching rails, low-voltage CAT6 wiring, a central rack, and high-performance server hardware to mirror modern enterprise configurations.',
    metric: 'Gigabit LAN & Server',
    benefit: 'Teaches students enterprise networking, server administration, and file sharing.'
  },
  {
    id: 'obj-4',
    title: 'Deploy Solid backup Power',
    details: 'Integrate deep-cycle UPS setups and expandable solar battery arrays to protect sensitive logic units from West Nile’s notorious voltage swings.',
    metric: '5kVA Heavy UPS',
    benefit: 'Ensures learning continues uninterrupted during central grid failures.'
  },
  {
    id: 'obj-5',
    title: 'Provide Skills Outreach',
    details: 'Deliver real programming, networking, digital literacy, and collaborative software coursework, growing a model to reach Bugisu, western Uganda, Karamoja, and Soroti.',
    metric: '200+ Grads/Yr',
    benefit: 'Lifts entire families out of tech inequality by providing verified market-ready skillsets.'
  }
];

export const BUDGET_ITEMS: BudgetItem[] = [
  // Phase 1 - Construction
  {
    id: 'blocks',
    name: 'Concrete Blocks',
    quantityCount: 2358,
    unitName: 'pcs',
    unitPriceUGX: 3500,
    totalCostUGX: 8253000,
    category: 'construction',
    description: 'Double-pressed structural hollow core blocks for solid, load-bearing defensive walls.'
  },
  {
    id: 'cement',
    name: 'Cement (50kg)',
    quantityCount: 472,
    unitName: 'bags',
    unitPriceUGX: 32500,
    totalCostUGX: 15340000,
    category: 'construction',
    description: 'High-grade Portland Pozzolana cement for casting robust foundations, lintels, and columns.'
  },
  {
    id: 'sand',
    name: 'Plaster & Core Sand',
    quantityCount: 37.76,
    unitName: 'm³',
    unitPriceUGX: 88000,
    totalCostUGX: 3322880,
    category: 'construction',
    description: 'Fine river sand free of organic matter, imperative for durable mortar joints and interior plastering.'
  },
  {
    id: 'aggregate',
    name: 'Aggregate Stone',
    quantityCount: 75.52,
    unitName: 'm³',
    unitPriceUGX: 105000,
    totalCostUGX: 7929600,
    category: 'construction',
    description: 'Graded granite gravel to provide reinforced tensile strength to structural floor slabs and columns.'
  },
  {
    id: 'rebar',
    name: 'Reinforcing Rebar',
    quantityCount: 5035,
    unitName: 'kg',
    unitPriceUGX: 4000,
    totalCostUGX: 20140000,
    category: 'construction',
    description: 'High-tensile steel rebars to support the structural base plate and load pillars against shear stress.'
  },
  {
    id: 'roof',
    name: 'G30 Corrugated Roof Sheets',
    quantityCount: 142,
    unitName: 'pcs',
    unitPriceUGX: 76000,
    totalCostUGX: 10792000,
    category: 'construction',
    description: 'Heavy gauge, heat-treated anti-rust iron roofing to keep delicate electrical workstations bone dry.'
  },
  {
    id: 'tiles',
    name: 'Heavy Duty Floor Tiles',
    quantityCount: 280.8,
    unitName: 'm²',
    unitPriceUGX: 50000,
    totalCostUGX: 14040000,
    category: 'construction',
    description: 'Easy-to-clean, dust-resistant commercial grade floor tiles to protect servers and logic units.'
  },
  {
    id: 'windows',
    name: 'Secure Steel Frame Windows',
    quantityCount: 10,
    unitName: 'pcs',
    unitPriceUGX: 300000,
    totalCostUGX: 3000000,
    category: 'construction',
    description: 'Reinforced safety-locked casement windows to handle ventilation while ensuring 100% anti-theft security.'
  },
  {
    id: 'doors',
    name: 'Reinforced Metal Exterior Doors',
    quantityCount: 6,
    unitName: 'pcs',
    unitPriceUGX: 350000,
    totalCostUGX: 2100000,
    category: 'construction',
    description: 'Welded steel plate heavy-duty doors with high-security deadbolts guarding key technical entrances.'
  },

  // Phase 2 - Equipment
  {
    id: 'desks',
    name: 'Custom Student Workstation Desks',
    quantityCount: 80,
    unitName: 'units',
    unitPriceUGX: 150000,
    totalCostUGX: 12000000,
    category: 'equipment',
    description: 'Solid wood computer desks equipped with grommets and integrated keyboard sliding rails.'
  },
  {
    id: 'chairs',
    name: 'Ergonomic Student Chairs',
    quantityCount: 80,
    unitName: 'units',
    unitPriceUGX: 100000,
    totalCostUGX: 8000000,
    category: 'equipment',
    description: 'Durable, breathable task chairs designed to support good posture during long practical workshops.'
  },
  {
    id: 't-desks',
    name: 'Instructor Demonstration Desks',
    quantityCount: 3,
    unitName: 'units',
    unitPriceUGX: 250000,
    totalCostUGX: 750000,
    category: 'equipment',
    description: 'Spacious main desks commanding a full line-of-sight to student terminals to assist visual teaching.'
  },
  {
    id: 't-chairs',
    name: 'Padded Instructor Chairs',
    quantityCount: 3,
    unitName: 'units',
    unitPriceUGX: 150000,
    totalCostUGX: 450000,
    category: 'equipment',
    description: 'Padded executive fabric chairs for full-day mentorship staff and visiting community leaders.'
  },
  {
    id: 'rack',
    name: 'Professional Sever Rack (12U)',
    quantityCount: 1,
    unitName: 'unit',
    unitPriceUGX: 1200000,
    totalCostUGX: 1200000,
    category: 'equipment',
    description: 'Secure wall-mount enclosure protecting routers, switches, servers, and localized storage banks.'
  },
  {
    id: 'ups',
    name: 'Deep-Cycle UPS Backup (5kVA)',
    quantityCount: 1,
    unitName: 'unit',
    unitPriceUGX: 3500000,
    totalCostUGX: 3500000,
    category: 'equipment',
    description: 'Heavy duty uninterruptible power system to bridge the gap during blackouts and protect silicon boards.'
  },
  {
    id: 'pcs',
    name: 'Energy-Efficient Intel Desktop PCs',
    quantityCount: 80,
    unitName: 'units',
    unitPriceUGX: 2500000,
    totalCostUGX: 200000000,
    category: 'equipment',
    description: 'Low-voltage Intel logic PCs equipped with solid-state drives, LED monitors, and legal operating licenses.'
  },
  {
    id: 'switches',
    name: 'Managed Gigabit Switches (24-Port)',
    quantityCount: 4,
    unitName: 'units',
    unitPriceUGX: 800000,
    totalCostUGX: 3200000,
    category: 'equipment',
    description: 'Enterprise switches with VLAN routing, supporting ultra-stable internal student-to-server networks.'
  },
  {
    id: 'cablings',
    name: 'CAT6 Low-Loss Structured Cabling Rail',
    quantityCount: 1,
    unitName: 'system',
    unitPriceUGX: 4000000,
    totalCostUGX: 4000000,
    category: 'equipment',
    description: 'Rolls of high-quality copper cabling, patch panels, faceplates, and localized conduit piping.'
  }
];

export const EXCHANGE_RATE_UGA = 3750; // 1 USD = 3750 UGX approx (for helpful conversions)
