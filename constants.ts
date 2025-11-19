import { Service, Product, Review } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Car Key Programming',
    slug: 'car-key-programming',
    icon: 'Key',
    shortDescription: 'Advanced programming for transponder keys, remotes, and smart keys for all vehicle makes.',
    fullDescription: 'We provide state-of-the-art car key programming services using the latest diagnostic tools. Whether you have lost your key or need a spare, we can program a new one to your vehicle\'s immobilizer system on-site.',
    benefits: ['Mobile Service - We come to you', 'Cheaper than dealership prices', 'Works for 95% of car models', '12-Month Warranty'],
    steps: ['Vehicle Identification', 'Pin Code Extraction', 'Key Cutting', 'Transponder Programming', 'Remote Syncing']
  },
  {
    id: '2',
    title: 'Emergency Car Door Opening',
    slug: 'emergency-car-opening',
    icon: 'Unlock',
    shortDescription: 'Locked your keys in the car? Non-destructive entry methods to get you back on the road fast.',
    fullDescription: 'Our emergency technicians are available 24/7 to help when you are locked out of your vehicle. We use specialized tools to open car doors without damaging the lock, window, or paintwork.',
    benefits: ['24/7 Availability', 'Zero Damage Guarantee', '30 Minute Response Time', 'Licensed Technicians'],
    steps: ['Call Dispatch', 'Technician Arrival', 'Identity Verification', 'Safe Entry Procedure']
  },
  {
    id: '3',
    title: 'Home & Office Lockouts',
    slug: 'residential-commercial',
    icon: 'Home',
    shortDescription: 'Residential and commercial lockout services. Lock picking, drilling, and replacement.',
    fullDescription: 'Locked out of your house or office? We provide rapid entry services for all types of residential and commercial locks, including deadbolts, knob locks, and high-security electronic locks.',
    benefits: ['Rapid Response', 'High Security Upgrades Available', 'Master Key Systems', 'Licensed & Insured'],
    steps: ['Assessment of Lock Type', 'Selection of Entry Method', 'Entry Execution', 'Lock Repair/Replacement if needed']
  },
  {
    id: '4',
    title: 'Ignition Repair & Replacement',
    slug: 'ignition-services',
    icon: 'Wrench',
    shortDescription: 'Fixing stuck ignitions or replacing damaged cylinders on site.',
    fullDescription: 'If your key won\'t turn or is broken inside the ignition, our experts can repair or replace the ignition cylinder. We carry replacements for most major car brands.',
    benefits: ['On-site Repair', 'Avoid Towing Costs', 'Key Extraction Included', 'Warranty on Parts'],
    steps: ['Diagnosis', 'Disassembly', 'Cylinder Replacement/Repair', 'Reassembly & Testing']
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Toyota Smart Key Fob',
    category: 'car-keys',
    price: 149.99,
    image: 'https://picsum.photos/300/300?random=1',
    popularity: 95,
    description: 'OEM Smart key for Toyota Camry/Corolla 2018-2023.'
  },
  {
    id: '2',
    name: 'Ford Flip Key Remote',
    category: 'car-keys',
    price: 89.99,
    image: 'https://picsum.photos/300/300?random=2',
    popularity: 88,
    description: '3-Button flip key compatible with Ford F-150 and Focus.'
  },
  {
    id: '3',
    name: 'Universal Key Shell',
    category: 'housing',
    price: 15.99,
    image: 'https://picsum.photos/300/300?random=3',
    popularity: 70,
    description: 'Replacement shell for broken key casings. Blade cutting required.'
  },
  {
    id: '4',
    name: 'Honda Transponder Key',
    category: 'car-keys',
    price: 45.00,
    image: 'https://picsum.photos/300/300?random=4',
    popularity: 92,
    description: 'High-security laser cut key with ID46 chip.'
  },
  {
    id: '5',
    name: 'Key Ring Organizer',
    category: 'accessory',
    price: 12.50,
    image: 'https://picsum.photos/300/300?random=5',
    popularity: 40,
    description: 'Leather key organizer to keep your keys silent and organized.'
  },
  {
    id: '6',
    name: 'Garage Door Remote',
    category: 'remote',
    price: 35.00,
    image: 'https://picsum.photos/300/300?random=6',
    popularity: 60,
    description: 'Universal garage door opener remote.'
  }
];

export const REVIEWS: Review[] = [
  { id: 1, name: "Kasun", rating: 5, text: "Saved me at 2 AM! Fast and professional." },
  { id: 2, name: "Amjath", rating: 5, text: "Programmed my BMW key for half the dealer price." },
  { id: 3, name: "Ranga Bandara", rating: 4, text: "Good service, arrived in 40 minutes." },
  { id: 4, name: "Dilshan", rating: 5, text: "Quick response and very friendly. Highly recommended!" },
  { id: 5, name: "Tharindi", rating: 4, text: "Affordable and reliable. Fixed my smart key on-site." },
  { id: 6, name: "Niroshan", rating: 5, text: "Excellent work! Took less than 10 minutes to unlock my car." }
];


export const GALLERY_IMAGES = [
  { src: 'https://picsum.photos/800/600?random=10', title: 'BMW Key Programming' },
  { src: 'https://picsum.photos/600/800?random=11', title: 'Commercial Lock Installation' },
  { src: 'https://picsum.photos/800/800?random=12', title: 'Emergency Car Opening' },
  { src: 'https://picsum.photos/800/500?random=13', title: 'High Security Safe' },
  { src: 'https://picsum.photos/500/800?random=14', title: 'Ignition Repair' },
  { src: 'https://picsum.photos/700/700?random=15', title: 'Key Cutting Machine' },
];