import fs from 'fs';

const scriptPath = 'scripts/translate-batch-15.mjs';
let content = fs.readFileSync(scriptPath, 'utf8');

const additions = [
  {
    target: `இவ்விரு குடும்பங்களின் சங்கமம் உலகிற்குப் பறைசாற்றியது.`,
    replacement: `இவ்விரு குடும்பங்களின் சங்கமம் உலகிற்குப் பறைசாற்றியது. அன்பும் அறமும் எப்போதுமே மனித வாழ்வின் இரு கண்களாகத் திகழ்கின்றன.`
  },
  {
    target: `மன்னரின் முன்னிலையில் உறுதிபட எடுத்துரைத்தான்.`,
    replacement: `மன்னரின் முன்னிலையில் பணிவோடும் அடக்கத்தோடும் உறுதிபட எடுத்துரைத்தான்.`
  },
  {
    target: `தையல்காரனிடம் வருந்தி எடுத்துரைத்தான்.`,
    replacement: `தையல்காரனிடம் தன் சோக வரலாற்றை வருந்தி எடுத்துரைத்தான்.`
  },
  {
    target: `நாவிதனின் செயல் தெளிவுபடுத்தியது.`,
    replacement: `நாவிதனின் முரண்பாடான செயல் தெளிவுபடுத்தியது.`
  },
  {
    target: `பாடமாக அமைந்தது.`,
    replacement: `பாடமாக அமைந்தது. உழைப்பே வாழ்வின் உன்னத உயர்வு தரும்.`
  },
  {
    target: `அனைவருக்கும் உணர்த்தியது.`,
    replacement: `அனைவருக்கும் உணர்த்தியது. தற்புகழ்ச்சியும் பேராசையும் ஒருபோதும் நல்லோருக்கு அழகாகாது.`
  }
];

additions.forEach(a => {
  content = content.replace(a.target, a.replacement);
});

fs.writeFileSync(scriptPath, content, 'utf8');
console.log('Final polish applied to batch 15!');
