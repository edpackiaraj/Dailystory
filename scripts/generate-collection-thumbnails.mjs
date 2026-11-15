import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// 1. Science Stories SVG Artwork (1200 x 750)
const scienceSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <!-- Deep Cosmic Nebula Gradient -->
    <radialGradient id="nebulaCore" cx="70%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#0284c7" stop-opacity="0.8"/>
      <stop offset="35%" stop-color="#0f766e" stop-opacity="0.6"/>
      <stop offset="70%" stop-color="#042f2e" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#020617" stop-opacity="1"/>
    </radialGradient>

    <!-- Star Glow -->
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <linearGradient id="goldBeam" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="50%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#b45309"/>
    </linearGradient>

    <linearGradient id="cyanBeam" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#67e8f9"/>
      <stop offset="50%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#0e7490"/>
    </linearGradient>
  </defs>

  <!-- Deep Background -->
  <rect width="1200" height="750" fill="#020617"/>
  <rect width="1200" height="750" fill="url(#nebulaCore)"/>

  <!-- Distant Stars Field -->
  <g fill="#ffffff" opacity="0.75">
    <circle cx="85" cy="95" r="1.5"/>
    <circle cx="190" cy="180" r="2.2" opacity="0.9"/>
    <circle cx="280" cy="80" r="1.2"/>
    <circle cx="360" cy="220" r="1.8"/>
    <circle cx="490" cy="110" r="2.5" opacity="0.95"/>
    <circle cx="580" cy="190" r="1.2"/>
    <circle cx="710" cy="70" r="2"/>
    <circle cx="820" cy="140" r="1.5"/>
    <circle cx="940" cy="90" r="2.8" opacity="0.9"/>
    <circle cx="1060" cy="160" r="1.8"/>
    <circle cx="1140" cy="80" r="2.2"/>
    
    <circle cx="120" cy="420" r="1.8"/>
    <circle cx="240" cy="510" r="1.2"/>
    <circle cx="380" cy="460" r="2"/>
    <circle cx="510" cy="580" r="1.5"/>
    <circle cx="680" cy="490" r="2.2"/>
    <circle cx="830" cy="560" r="1.4"/>
    <circle cx="990" cy="480" r="2"/>
    <circle cx="1110" cy="590" r="1.6"/>
  </g>

  <!-- Giant Rutherford-Bohr Atomic Orbitals (Center-Right) -->
  <g transform="translate(850, 380)" opacity="0.85">
    <!-- Glowing Nucleus -->
    <circle cx="0" cy="0" r="28" fill="url(#goldBeam)" filter="url(#glow)"/>
    <circle cx="0" cy="0" r="14" fill="#ffffff"/>

    <!-- Elliptical Electron Paths -->
    <ellipse cx="0" cy="0" rx="220" ry="80" fill="none" stroke="#38bdf8" stroke-width="2.5" opacity="0.7" transform="rotate(25)"/>
    <ellipse cx="0" cy="0" rx="220" ry="80" fill="none" stroke="#2dd4bf" stroke-width="2.5" opacity="0.7" transform="rotate(-35)"/>
    <ellipse cx="0" cy="0" rx="220" ry="80" fill="none" stroke="#f59e0b" stroke-width="2.5" opacity="0.6" transform="rotate(85)"/>

    <!-- Orbiting Electrons -->
    <circle cx="190" cy="65" r="7" fill="#67e8f9" filter="url(#glow)"/>
    <circle cx="-160" cy="95" r="6" fill="#fef08a" filter="url(#glow)"/>
    <circle cx="25" cy="-210" r="6.5" fill="#a7f3d0" filter="url(#glow)"/>
  </g>

  <!-- DNA Double Helix Waveform (Lower Arc) -->
  <g stroke="#38bdf8" stroke-width="3" opacity="0.45" fill="none">
    <path d="M 0 680 Q 150 630 300 680 T 600 680 T 900 680 T 1200 680"/>
    <path d="M 0 680 Q 150 730 300 680 T 600 680 T 900 680 T 1200 680" stroke="#2dd4bf"/>
    <!-- Ladder Rungs -->
    <line x1="150" y1="640" x2="150" y2="720" stroke="#fef08a" stroke-width="2.5"/>
    <line x1="300" y1="675" x2="300" y2="685" stroke="#fef08a" stroke-width="2.5"/>
    <line x1="450" y1="640" x2="450" y2="720" stroke="#fef08a" stroke-width="2.5"/>
    <line x1="750" y1="640" x2="750" y2="720" stroke="#fef08a" stroke-width="2.5"/>
    <line x1="1050" y1="640" x2="1050" y2="720" stroke="#fef08a" stroke-width="2.5"/>
  </g>

  <!-- Antique Brass Telescope & Ray of Light (Left Side) -->
  <g transform="translate(240, 480) rotate(-38)" opacity="0.9">
    <!-- Telescope Body -->
    <polygon points="0,-18 260,-28 260,28 0,18" fill="url(#goldBeam)" stroke="#fef08a" stroke-width="2"/>
    <rect x="250" y="-35" width="30" height="70" rx="6" fill="#78350f" stroke="#fef08a" stroke-width="2"/>
    <rect x="-40" y="-14" width="45" height="28" rx="4" fill="#b45309" stroke="#fef08a" stroke-width="1.5"/>
    <!-- Focus Rings -->
    <line x1="80" y1="-22" x2="80" y2="22" stroke="#fef08a" stroke-width="3"/>
    <line x1="160" y1="-25" x2="160" y2="25" stroke="#fef08a" stroke-width="3"/>

    <!-- Light Beam Shooting into Deep Space -->
    <polygon points="280,-30 750,-90 750,90 280,30" fill="url(#cyanBeam)" opacity="0.25"/>
  </g>

  <!-- Prismatic Rainbow Glass Triangle (Lower Center) -->
  <g transform="translate(540, 500)">
    <polygon points="60,0 120,100 0,100" fill="#ffffff" fill-opacity="0.15" stroke="#ffffff" stroke-width="2.5"/>
    <!-- White incident beam -->
    <line x1="-70" y1="70" x2="45" y2="55" stroke="#ffffff" stroke-width="4" filter="url(#glow)"/>
    <!-- Refracted rainbow spectrum rays -->
    <line x1="75" y1="50" x2="220" y2="15" stroke="#ef4444" stroke-width="3"/>
    <line x1="80" y1="56" x2="220" y2="30" stroke="#f97316" stroke-width="3"/>
    <line x1="85" y1="62" x2="220" y2="45" stroke="#eab308" stroke-width="3"/>
    <line x1="90" y1="68" x2="220" y2="60" stroke="#22c55e" stroke-width="3"/>
    <line x1="95" y1="74" x2="220" y2="75" stroke="#06b6d4" stroke-width="3"/>
    <line x1="100" y1="80" x2="220" y2="90" stroke="#8b5cf6" stroke-width="3"/>
  </g>

  <!-- TOP-LEFT ELEGANT TYPOGRAPHY BADGE -->
  <g transform="translate(60, 60)">
    <!-- Dark Glass Container -->
    <rect width="660" height="230" rx="24" fill="#030712" fill-opacity="0.82" stroke="#0ea5e9" stroke-width="2.5"/>
    
    <!-- Domain Tag Pill -->
    <rect x="35" y="30" width="220" height="32" rx="16" fill="#0f766e" stroke="#2dd4bf" stroke-width="1.5"/>
    <text x="145" y="52" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ccfbf1" text-anchor="middle" letter-spacing="1">100 PRIMARY DISCOVERIES</text>

    <!-- Main Title (English) -->
    <text x="35" y="112" font-family="system-ui, sans-serif" font-size="38" font-weight="900" fill="#ffffff" letter-spacing="-0.5">
      100 Authentic Science Stories
    </text>

    <!-- Tamil Title -->
    <text x="35" y="158" font-family="system-ui, sans-serif" font-size="25" font-weight="bold" fill="#38bdf8">
      100 வரலாற்று அறிவியல் கதைகள்
    </text>

    <!-- Subtitle / Authenticity Guarantee -->
    <text x="35" y="200" font-family="system-ui, sans-serif" font-size="15" fill="#94a3b8">
      Archimedes • Newton • Curie • Raman • Einstein • Kalam • JWST
    </text>
  </g>

  <!-- Bottom Right Decorative Milestone Seal -->
  <g transform="translate(1080, 650)">
    <circle cx="0" cy="0" r="48" fill="#042f2e" stroke="#2dd4bf" stroke-width="3"/>
    <circle cx="0" cy="0" r="42" fill="none" stroke="#f59e0b" stroke-dasharray="4 4" stroke-width="1.5"/>
    <text x="0" y="-8" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#2dd4bf" text-anchor="middle">100</text>
    <text x="0" y="12" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#fef08a" text-anchor="middle">STORIES</text>
    <text x="0" y="26" font-family="system-ui, sans-serif" font-size="9" font-weight="bold" fill="#94a3b8" text-anchor="middle">VERIFIED</text>
  </g>
</svg>
`;

// 2. Witty Debates SVG Artwork (1200 x 750)
const debatesSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <!-- Parliamentary / Assembly Chamber Gradient -->
    <radialGradient id="chamberGlow" cx="40%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#7c2d12" stop-opacity="0.85"/>
      <stop offset="40%" stop-color="#451a03" stop-opacity="0.9"/>
      <stop offset="75%" stop-color="#1c1005" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#0a0502" stop-opacity="1"/>
    </radialGradient>

    <!-- Gold Foil Gradient -->
    <linearGradient id="debateGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef3c7"/>
      <stop offset="35%" stop-color="#f59e0b"/>
      <stop offset="80%" stop-color="#b45309"/>
      <stop offset="100%" stop-color="#78350f"/>
    </linearGradient>

    <!-- Amber Glow -->
    <filter id="amberGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Deep Background -->
  <rect width="1200" height="750" fill="#0a0502"/>
  <rect width="1200" height="750" fill="url(#chamberGlow)"/>

  <!-- Classical Parliamentary Pillars / Architecture (Background) -->
  <g fill="#291407" opacity="0.65">
    <!-- Left Pillar -->
    <rect x="780" y="80" width="45" height="540" rx="4"/>
    <rect x="765" y="60" width="75" height="25" rx="3" fill="#451a03"/>
    <rect x="765" y="620" width="75" height="30" rx="3" fill="#451a03"/>

    <!-- Middle Pillar -->
    <rect x="910" y="80" width="45" height="540" rx="4"/>
    <rect x="895" y="60" width="75" height="25" rx="3" fill="#451a03"/>
    <rect x="895" y="620" width="75" height="30" rx="3" fill="#451a03"/>

    <!-- Right Pillar -->
    <rect x="1040" y="80" width="45" height="540" rx="4"/>
    <rect x="1025" y="60" width="75" height="25" rx="3" fill="#451a03"/>
    <rect x="1025" y="620" width="75" height="30" rx="3" fill="#451a03"/>

    <!-- Arch Linking Pillars -->
    <path d="M 760 80 Q 845 20 930 80 Q 1015 20 1100 80" stroke="#78350f" stroke-width="6" fill="none"/>
  </g>

  <!-- Scales of Justice (Center-Right Symbol of Balance & Truth) -->
  <g transform="translate(930, 260)" stroke="url(#debateGold)" stroke-width="3" fill="none">
    <!-- Center Mast -->
    <line x1="0" y1="0" x2="0" y2="180" stroke-width="5"/>
    <circle cx="0" cy="0" r="10" fill="#f59e0b"/>
    <polygon points="-25,180 25,180 35,200 -35,200" fill="url(#debateGold)"/>

    <!-- Horizontal Beam -->
    <line x1="-120" y1="20" x2="120" y2="10" stroke-width="4"/>

    <!-- Left Pan -->
    <line x1="-120" y1="20" x2="-150" y2="90" stroke-width="2"/>
    <line x1="-120" y1="20" x2="-90" y2="90" stroke-width="2"/>
    <path d="M -160 90 Q -120 120 -80 90 Z" fill="#b45309" stroke-width="2"/>

    <!-- Right Pan -->
    <line x1="120" y1="10" x2="90" y2="80" stroke-width="2"/>
    <line x1="120" y1="10" x2="150" y2="80" stroke-width="2"/>
    <path d="M 80 80 Q 120 110 160 80 Z" fill="#b45309" stroke-width="2"/>
  </g>

  <!-- Parliamentary Orator's Podium & Vintage Microphone (Lower Right) -->
  <g transform="translate(760, 420)">
    <!-- Wooden Podium Body -->
    <polygon points="80,120 220,120 240,330 60,330" fill="#381a08" stroke="#9a3412" stroke-width="3"/>
    <!-- Angled Desk Top -->
    <polygon points="50,120 250,120 230,80 70,80" fill="#54240c" stroke="#f59e0b" stroke-width="2"/>

    <!-- Leather Constitution / Law Book on Desk -->
    <polygon points="100,105 180,100 200,115 120,120" fill="#b91c1c" stroke="#fbbf24" stroke-width="2"/>
    <line x1="150" y1="102" x2="160" y2="117" stroke="#fbbf24" stroke-width="1.5"/>

    <!-- Vintage Chrome Ribbon Microphone -->
    <line x1="150" y1="80" x2="150" y2="10" stroke="#d4d4d8" stroke-width="5"/>
    <ellipse cx="150" cy="10" rx="16" ry="24" fill="#52525b" stroke="#f4f4f5" stroke-width="3" filter="url(#amberGlow)"/>
    <line x1="138" y1="5" x2="162" y2="5" stroke="#f4f4f5" stroke-width="1.5"/>
    <line x1="138" y1="12" x2="162" y2="12" stroke="#f4f4f5" stroke-width="1.5"/>
    <line x1="138" y1="19" x2="162" y2="19" stroke="#f4f4f5" stroke-width="1.5"/>

    <!-- Speech Resonance Sound Waves Emitting from Mic -->
    <path d="M 120 -5 A 40 40 0 0 0 120 25" fill="none" stroke="#f59e0b" stroke-width="2.5" opacity="0.8"/>
    <path d="M 105 -15 A 60 60 0 0 0 105 35" fill="none" stroke="#f59e0b" stroke-width="2" opacity="0.5"/>
    <path d="M 90 -25 A 80 80 0 0 0 90 45" fill="none" stroke="#f59e0b" stroke-width="1.5" opacity="0.3"/>
  </g>

  <!-- Ancient Quill and Scroll of Wisdom (Lower Center-Left) -->
  <g transform="translate(420, 520)">
    <!-- Unrolled Parchment Scroll -->
    <path d="M 0 60 Q 80 40 160 60 Q 140 110 160 160 Q 80 140 0 160 Z" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
    <!-- Scroll Text Lines -->
    <line x1="25" y1="75" x2="135" y2="75" stroke="#92400e" stroke-width="2" stroke-linecap="round"/>
    <line x1="25" y1="95" x2="120" y2="95" stroke="#92400e" stroke-width="2" stroke-linecap="round"/>
    <line x1="25" y1="115" x2="130" y2="115" stroke="#92400e" stroke-width="2" stroke-linecap="round"/>
    <line x1="25" y1="135" x2="90" y2="135" stroke="#92400e" stroke-width="2" stroke-linecap="round"/>

    <!-- Glass Inkpot -->
    <ellipse cx="190" cy="140" rx="16" ry="12" fill="#1e1b4b" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="184" y="122" width="12" height="10" fill="#312e81"/>

    <!-- White Feather Quill -->
    <path d="M 190 126 C 210 90 260 20 280 0 C 265 25 240 70 210 110 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
    <line x1="190" y1="126" x2="280" y2="0" stroke="#cbd5e1" stroke-width="1.5"/>
  </g>

  <!-- TOP-LEFT ELEGANT TYPOGRAPHY BADGE -->
  <g transform="translate(60, 60)">
    <!-- Dark Amber Glass Container -->
    <rect width="660" height="230" rx="24" fill="#0f0702" fill-opacity="0.88" stroke="#d97706" stroke-width="2.5"/>
    
    <!-- Leadership Tag Pill -->
    <rect x="35" y="30" width="230" height="32" rx="16" fill="#78350f" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="150" y="52" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#fef3c7" text-anchor="middle" letter-spacing="1">HISTORIC WIT &amp; WISDOM</text>

    <!-- Main Title (English) -->
    <text x="35" y="112" font-family="system-ui, sans-serif" font-size="36" font-weight="900" fill="#ffffff" letter-spacing="-0.5">
      Witty Debates of World Leaders
    </text>

    <!-- Tamil Title -->
    <text x="35" y="158" font-family="system-ui, sans-serif" font-size="25" font-weight="bold" fill="#fbbf24">
      உலகத் தலைவர்களின் சுவையான விவாதங்கள்
    </text>

    <!-- Subtitle / Leaders List -->
    <text x="35" y="200" font-family="system-ui, sans-serif" font-size="15" fill="#fed7aa">
      Anna • Periyar • Kalaignar • Ambedkar • Gandhi • Lincoln • Churchill
    </text>
  </g>

  <!-- Bottom Right Decorative Milestone Seal -->
  <g transform="translate(1080, 650)">
    <circle cx="0" cy="0" r="48" fill="#451a03" stroke="#f59e0b" stroke-width="3"/>
    <circle cx="0" cy="0" r="42" fill="none" stroke="#fde047" stroke-dasharray="4 4" stroke-width="1.5"/>
    <text x="0" y="-8" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#fef3c7" text-anchor="middle">125+</text>
    <text x="0" y="12" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#f59e0b" text-anchor="middle">DEBATES</text>
    <text x="0" y="26" font-family="system-ui, sans-serif" font-size="9" font-weight="bold" fill="#fed7aa" text-anchor="middle">CURATED</text>
  </g>
</svg>
`;

async function run() {
  const storiesDir = path.resolve('public', 'images', 'stories');
  if (!fs.existsSync(storiesDir)) {
    fs.mkdirSync(storiesDir, { recursive: true });
  }

  // Write SVGs
  const scienceSvgPath = path.join(storiesDir, 'science-stories.svg');
  const debatesSvgPath = path.join(storiesDir, 'witty-debates.svg');
  fs.writeFileSync(scienceSvgPath, scienceSvg.trim(), 'utf8');
  fs.writeFileSync(debatesSvgPath, debatesSvg.trim(), 'utf8');
  console.log('Saved SVGs: science-stories.svg & witty-debates.svg');

  // Convert to WebP (1200 x 750, high quality 90)
  const scienceWebpPath = path.join(storiesDir, 'science-stories.webp');
  const debatesWebpPath = path.join(storiesDir, 'witty-debates.webp');

  await sharp(Buffer.from(scienceSvg))
    .resize(1200, 750)
    .webp({ quality: 90 })
    .toFile(scienceWebpPath);
  console.log('Generated:', scienceWebpPath, fs.statSync(scienceWebpPath).size, 'bytes');

  await sharp(Buffer.from(debatesSvg))
    .resize(1200, 750)
    .webp({ quality: 90 })
    .toFile(debatesWebpPath);
  console.log('Generated:', debatesWebpPath, fs.statSync(debatesWebpPath).size, 'bytes');

  // Also create a copy named science-discovery.webp for backward compatibility
  const scienceDiscoveryWebp = path.join(storiesDir, 'science-discovery.webp');
  fs.copyFileSync(scienceWebpPath, scienceDiscoveryWebp);
  console.log('Created copy: science-discovery.webp');
}

run().catch(console.error);
