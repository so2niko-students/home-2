let EncryptedMessage =
  'Yesterday, we bumped into Laura. It had to happen, but you cant deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first. Yesterda2, we bumped into Laura. It had to happen, but you cant deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first. Yesterda3, we bumped into Laura. It had to happen, but you cant deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.';

function decryptMessage(message) {
  // split into sentences and push to array
  const sentencesArray = message
    .split(/[\.\!\?]+\s*/g)
    .map(str => str.replace(/[,\/#!%\^&\*;":'\_`()]/g, '')
    .trim()
    .match(/(\w+)/g));

  //console.log(sentencesArray);
  let allSentences = [];
  let wordFirstLength = [];
  let secretMessage = '';
  let wordCountRest = [];
  let mymessage;

  do {
    let firstSentence = sentencesArray.shift();
    wordFirstLength = firstSentence.map((el) => el.length);
    decrypt();
    sentencesArray.splice(0, wordFirstLength.length + 1);
  }while(sentencesArray.length > 0);

  function decrypt() {
    for (let i = 0; i < wordFirstLength.length; i++) {
      secretMessage += sentencesArray[i][wordFirstLength[i] - 1] + ' ';
    }
    mymessage = `${ mymessage } ${ secretMessage[0].toUpperCase() }${ secretMessage.slice(1).trimEnd() }.`;
  }
  return mymessage;
}

console.log(decryptMessage(EncryptedMessage));
// 'The mission has been done.' x3  //result