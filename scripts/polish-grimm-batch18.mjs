import fs from 'fs';

const scriptPath = 'scripts/translate-grimm-batch18.mjs';
let content = fs.readFileSync(scriptPath, 'utf8');

const polish = [
  {
    target: `வரலாறு உணர்த்தியது.`,
    replacement: `வரலாறு உணர்த்தியது. வாய்மையே வெல்லும் என்பது நாடெங்கும் நிலைநாட்டப்பட்டது.`
  },
  {
    target: `ஹான்ஸ் தன் வாழ்க்கையால் உணர்த்தினான்.`,
    replacement: `ஹான்ஸ் தன் ஒப்பற்ற வாழ்க்கையால் அனைவருக்கும் உணர்த்தினான். தாய்ப்பாசமே மனிதனின் ஆகச்சிறந்த சக்தியாகும்.`
  },
  {
    target: `உலகம் போற்றியது.`,
    replacement: `உலகம் போற்றியது. நல்வினையும் தூய்மையும் என்றும் கைவிடாது.`
  },
  {
    target: `கிராமத்திற்கு உணர்த்தியது.`,
    replacement: `கிராமத்திற்கு உணர்த்தியது. உள்ளதை வைத்து நிம்மதியாக வாழ்வதே வாழ்வியல் ரகசியமாகும்.`
  },
  {
    target: `தையல்காரன் முழுமையாக உணர்ந்தான்.`,
    replacement: `தையல்காரன் முழுமையாக உணர்ந்தான். அமைதியான குடும்ப வாழ்வே சிறந்தது.`
  },
  {
    target: `வனம் வியந்து போற்றியது.`,
    replacement: `வனம் வியந்து போற்றியது. சமயோசித புத்தியே மிகச்சிறந்த வெற்றியைத் தரும்.`
  }
];

polish.forEach(p => {
  content = content.replace(p.target, p.replacement);
});

fs.writeFileSync(scriptPath, content, 'utf8');
console.log('Batch 18 polished!');
