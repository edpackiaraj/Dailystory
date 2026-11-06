#!/usr/bin/env node
/**
 * Tamil Audit Corrections Script
 * Applies systematic fixes across Cinderella (21), Paramartha Guru (100), Vikram-Vetal (100)
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const DATA_PATH = './data/ta/stories-ta.json';
let stories = JSON.parse(readFileSync(DATA_PATH, 'utf8'));

let totalFixed = 0;
const log = [];

function fix(story, field, oldVal, newVal, reason) {
  if (story[field] && story[field].includes(oldVal)) {
    story[field] = story[field].replaceAll(oldVal, newVal);
    log.push(`[${story.slug}] ${field}: "${oldVal}" → "${newVal}" (${reason})`);
    totalFixed++;
    return true;
  }
  return false;
}

function fixTitle(story, oldVal, newVal, reason) {
  return fix(story, 'title', oldVal, newVal, reason);
}
function fixSummary(story, oldVal, newVal, reason) {
  return fix(story, 'summary', oldVal, newVal, reason);
}
function fixFullText(story, oldVal, newVal, reason) {
  return fix(story, 'full_text', oldVal, newVal, reason);
}
function fixMoral(story, oldVal, newVal, reason) {
  return fix(story, 'moral', oldVal, newVal, reason);
}
function fixAll(story, oldVal, newVal, reason) {
  fixTitle(story, oldVal, newVal, reason);
  fixSummary(story, oldVal, newVal, reason);
  fixFullText(story, oldVal, newVal, reason);
  fixMoral(story, oldVal, newVal, reason);
}

// ─────────────────────────────────────────────────────────────────
// PASS 1: Fix word_count=1 for Vikram-Vetal #47-#100
// ─────────────────────────────────────────────────────────────────
let wcFixed = 0;
for (const s of stories) {
  if (s.collection === 'Vikram–Vetal' && (s.word_count === 1 || s.word_count === '1')) {
    if (s.full_text && s.full_text.length > 10) {
      const words = s.full_text.trim().split(/\s+/).length;
      s.word_count = words;
      log.push(`[${s.slug}] word_count: 1 → ${words} (recalculated from full_text)`);
      wcFixed++;
      totalFixed++;
    }
  }
}
console.log(`✅ Word count fixed: ${wcFixed} Vikram-Vetal stories`);

// ─────────────────────────────────────────────────────────────────
// PASS 2: "1 சொற்கள்" grammar — apply to reading_time display too
// (This is in the template but let's also fix any inline references)
// ─────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────
// PASS 3: Global sandhi & spelling fixes across all 3 collections
// ─────────────────────────────────────────────────────────────────

const CINDERELLA = 'Cinderella Stories';
const PARAMARTHA = 'Paramartha Guru';
const VETAL = 'Vikram–Vetal';

for (const s of stories) {
  const col = s.collection;

  // ── CINDERELLA FIXES ──────────────────────────────────────────
  if (col === CINDERELLA) {
    // Sandhi: மாயப் சூனியக்காரி → மாயச் சூனியக்காரி (#11)
    fixAll(s, 'மாயப் சூனியக்காரி', 'மாயச் சூனியக்காரி', 'sandhi correction');

    // பாதரட்சை → காலணி (#4, #20) — context-aware
    fixAll(s, 'கண்ணாடிப் பாதரட்சை', 'கண்ணாடிக் காலணி', 'Tamil word preference');
    fixAll(s, 'கண்ணாடி பாதரட்சை', 'கண்ணாடிக் காலணி', 'Tamil word preference');
    fixAll(s, 'பாதரட்சை', 'காலணி', 'Tamil word preference');

    // சிற்றத்தை → சிற்றன்னை (#14)
    fixAll(s, 'சிற்றத்தை', 'சிற்றன்னை', 'vocabulary standardization');

    // மாற்றாந்தாய் மகள் → அவளது மகள் (when paired with சிற்றன்னை) (#9)
    fixAll(s, 'சிற்றன்னையாலும் மாற்றாந்தாய் மகளாலும்', 'சிற்றன்னையாலும் அவளது மகளாலும்', 'redundant synonym');

    // Standalone மாற்றாந்தாய் → சிற்றன்னை (standardize)
    fixAll(s, 'மாற்றாந்தாய்', 'சிற்றன்னை', 'vocabulary standardization');

    // நாடோடிக் கதை → நாட்டார் கதை (#6, #16)
    fixAll(s, 'நாடோடிக் கதை', 'நாட்டார் கதை', 'correct word usage');
    fixAll(s, 'நாடோடி கதை', 'நாட்டார் கதை', 'correct word usage');

    // காவியம் → கதை in story context (#5, #8, #20)
    fixAll(s, 'நீதி காவியம்', 'நீதிக் கதை', 'genre label correction');
    fixAll(s, 'நவீன டிஸ்னி காவியம்', 'நவீன டிஸ்னி கதை', 'genre label correction');
    fixAll(s, 'நாட்டார் காவியம்', 'நாட்டார் கதை', 'genre label correction');

    // Disney brand names (#20)
    fixAll(s, 'ஜாக்-கஸ்', 'சிட்டுக்குருவிகள்', 'remove brand name');
    fixAll(s, 'பிபிடி-பாபிடி-பூ', 'மந்திர வார்த்தை', 'remove brand name');
    fixAll(s, 'லேடி டிரெமைன்', 'தீய சிற்றன்னை', 'remove brand name');

    // #15 சிரீயா pronunciation ambiguity
    fixAll(s, 'சிரீயா', 'சிரிய', 'pronunciation clarity');
  }

  // ── PARAMARTHA GURU FIXES ─────────────────────────────────────
  if (col === PARAMARTHA) {
    // #28: சீடனை குற்றவாளியாகக் → சீடனைக் குற்றவாளியாகக்
    fixAll(s, 'சீடனை குற்றவாளியாகக்', 'சீடனைக் குற்றவாளியாகக்', 'sandhi correction');
    fixAll(s, 'சீடனை குற்றவாளி', 'சீடனைக் குற்றவாளி', 'sandhi correction');

    // #34: பச்சை சாயம் → பச்சைச் சாயம்
    fixTitle(s, 'பச்சை சாயம்', 'பச்சைச் சாயம்', 'sandhi correction');
    fixAll(s, 'பச்சை சாயம்', 'பச்சைச் சாயம்', 'sandhi correction');

    // #82: வெள்ளி கரண்டி → வெள்ளிக் கரண்டி
    fixTitle(s, 'வெள்ளி கரண்டி', 'வெள்ளிக் கரண்டி', 'sandhi correction');
    fixAll(s, 'வெள்ளி கரண்டி', 'வெள்ளிக் கரண்டி', 'sandhi correction');

    // #75: நதிக்கு பெயரல்ல → நதிக்குப் பெயர் முக்கியமல்ல
    fixAll(s, 'நதிக்கு பெயரல்ல', 'நதிக்குப் பெயர் முக்கியமல்ல', 'sandhi + clarity');
    fixAll(s, 'நதிக்கு பெயர்', 'நதிக்குப் பெயர்', 'sandhi correction');

    // #6: பொலபொலத்த அவமானம் → அவமானம்
    fixAll(s, 'பொலபொலத்த அவமானம்', 'அவமானம்', 'meaningless modifier removed');

    // #6: தர்மஅடி → தர்ம அடி
    fixAll(s, 'தர்மஅடி', 'தர்ம அடி', 'word spacing');

    // #49: அமளி துமளி → அமளிதுமளி
    fixAll(s, 'அமளி துமளி', 'அமளிதுமளி', 'compound word correction');

    // #19: பனைமரத்து முட்டைக் கிளை → பனை மட்டை
    fixAll(s, 'பனைமரத்து முட்டைக் கிளை', 'பனை மட்டை', 'botanical accuracy');
    fixAll(s, 'பனைமரத்து கிளை', 'பனை மட்டை', 'botanical accuracy');

    // #96: மகாபலிபுரம் → மாமல்லபுரம்
    fixAll(s, 'மகாபலிபுரம்', 'மாமல்லபுரம்', 'Tamil place name usage');

    // #14: கழுதை லத்தி → கழுதைச் சாணம்
    fixAll(s, 'கழுதை லத்தி', 'கழுதைச் சாணம்', 'correct referent');
    fixAll(s, 'லத்தி', 'தடி', 'Tamil word preference');

    // #9: நகைச்சுவை வைபவம் → நிகழ்ச்சி
    fixAll(s, 'நகைச்சுவை வைபவம்', 'நகைச்சுவை நிகழ்ச்சி', 'correct usage');
    fixAll(s, 'வைபவம்', 'விழா', 'correct usage');

    // Vocabulary standardization for footwear
    fixAll(s, 'பாதரட்சை', 'காலணி', 'Tamil word preference');
    fixAll(s, 'பாதுகை', 'காலணி', 'vocabulary standardization');

    // Anachronism replacements
    fixAll(s, 'டீக்கடை', 'குடிசால்', 'anachronism fix');
    fixAll(s, 'வேலைநிறுத்தம்', 'மறுப்பு', 'anachronism fix');
    fixAll(s, 'கை குலுக்குதல்', 'வணக்கம் செய்தல்', 'anachronism fix');
    fixAll(s, 'தீயணைப்பு', 'நெருப்பு அணைக்கும்', 'anachronism fix');
    fixAll(s, 'அதிகாரப்பூர்வ அறிக்கை', 'பட்டயம்', 'anachronism fix');
    fixAll(s, 'ஆன்மீக வெற்றியாளர்', 'ஞானியர்', 'anachronism fix');
    fixAll(s, 'நாற்காலி', 'ஆசனம்', 'anachronism fix');

    // "பரிகாச வரலாறு" (#19)
    fixAll(s, 'பரிகாச வரலாறு', 'நகைச்சுவை நிகழ்ச்சி', 'correct usage');

    // #100: எழுபதாவது பிறந்தநாள் → பீமரத சாந்தி
    fixAll(s, 'எழுபதாவது பிறந்தநாள்', 'பீமரத சாந்தி', 'traditional usage');
  }

  // ── VIKRAM-VETAL FIXES ────────────────────────────────────────
  if (col === VETAL) {
    // #81: பிளிறிய சிங்கம் → உறுமிய சிங்கம்
    fixAll(s, 'பிளிறிய சிங்கம்', 'உறுமிய சிங்கம்', 'correct animal sound');
    fixAll(s, 'பிளிறியது', 'உறுமியது', 'correct animal sound');

    // #41: அமுதசுரபிப் பசு → காமதேனு போன்ற பசு
    fixAll(s, 'அமுதசுரபிப் பசு', 'காமதேனு போன்ற பசு', 'mythological accuracy');

    // #65: பெட்டைப் புலி → பெண்புலி
    fixAll(s, 'பெட்டைப் புலி', 'பெண்புலி', 'correct Tamil gender term');
    fixAll(s, 'குருட்டுக் குட்டிகள்', 'பார்வையற்ற குட்டிகள்', 'sensitive language');

    // #66: கொழுத்த ஆட்டைக் குட்டி → ஆட்டுக்குட்டி
    fixAll(s, 'கொழுத்த ஆட்டைக் குட்டி', 'ஆட்டுக்குட்டி', 'simplification');

    // #21: 21-வது → 21-ஆவது
    fixAll(s, '21-வது', '21-ஆவது', 'ordinal suffix correction');

    // #82: இந்துப் பெருங்கடல் → இந்தியப் பெருங்கடல்
    fixAll(s, 'இந்துப் பெருங்கடல்', 'இந்தியப் பெருங்கடல்', 'correct geographical name');
    fixAll(s, 'இந்துக் கடல்', 'இந்தியப் பெருங்கடல்', 'correct geographical name');

    // #70: Sensitive caste language
    fixAll(s, 'தீண்டப்படாத இளைஞன்', 'ஏழை இளைஞன்', 'sensitive language modernized');
    fixAll(s, 'தாழ்ந்த குலம்', 'சாதாரண குடும்பம்', 'sensitive language modernized');
    fixAll(s, 'தீண்டத்தகாத', 'சாதாரண', 'sensitive language modernized');

    // #44: Soften threat
    fixAll(s, 'நீ குதித்துச் சா', 'நீ குதி', 'soften threat');

    // Anachronism: modern names in ancient setting
    fixAll(s, 'ரமேஷ்', 'ராமன்', 'anachronism: modern name');
    fixAll(s, 'சுரேஷ்', 'சுரன்', 'anachronism: modern name');
    fixAll(s, 'ரசீது', 'ஓலை', 'anachronism fix');
    fixAll(s, 'மைல்', 'யோஜனை', 'anachronism fix');

    // Title separator standardization: " - " → "–"
    if (s.title && s.title.includes(' - ')) {
      s.title = s.title.replace(/ - /g, '–');
      log.push(`[${s.slug}] title: standardized separator " - " → "–"`);
      totalFixed++;
    }

    // "#N-வது" ordinal fix (all numbers)
    if (s.title) {
      const before = s.title;
      s.title = s.title.replace(/(\d+)-வது/g, '$1-ஆவது');
      if (s.title !== before) {
        log.push(`[${s.slug}] title: ordinal suffix corrected -வது → -ஆவது`);
        totalFixed++;
      }
    }
  }

  // ── CROSS-COLLECTION FIXES ────────────────────────────────────
  if ([CINDERELLA, PARAMARTHA, VETAL].includes(col)) {
    // "நிமிடம்" in ancient-era stories → keep only if natural Tamil word
    // (நிமிடம் is Sanskrit-derived but widely used in modern Tamil — keep)

    // "காவியம்" as genre label → "கதை"
    fixTitle(s, ' காவியம்', ' கதை', 'genre label: காவியம்→கதை');

    // "வரலாறு" misused as "incident"
    fixAll(s, 'பரிகாச வரலாறு', 'நகைச்சுவை நிகழ்ச்சி', 'correct usage');

    // Recalculate word_count from full_text if still 1
    if ((s.word_count === 1 || s.word_count === '1') && s.full_text && s.full_text.length > 20) {
      s.word_count = s.full_text.trim().split(/\s+/).length;
      log.push(`[${s.slug}] word_count: 1 → ${s.word_count} (recalculated)`);
      totalFixed++;
    }
  }
}

// ─────────────────────────────────────────────────────────────────
// PASS 4: Fix reading_time display for word_count=1 stories
// (These are shown as "1 சொற்கள்" — fix grammar "1 சொல்")
// This is a template fix not data fix — but update reading_time too
// ─────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────
// WRITE OUTPUT
// ─────────────────────────────────────────────────────────────────
writeFileSync(DATA_PATH, JSON.stringify(stories, null, 2), 'utf8');
console.log(`\n✅ Total fixes applied: ${totalFixed}`);
console.log('\n--- Change Log ---');
log.slice(0, 100).forEach(l => console.log(l));
if (log.length > 100) console.log(`... and ${log.length - 100} more`);
writeFileSync('./scripts/audit-correction-log.txt', log.join('\n'), 'utf8');
console.log('\nFull log written to scripts/audit-correction-log.txt');
