class VigenereCipheringMachine {
  constructor(direct = true) {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.direct = direct;
  }

  normalize(message, key) {
    return [message.toUpperCase(), key.toUpperCase()];
  }

  processMessage(message, key, encrypt) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    const [str, keyString] = this.normalize(message, key);
    let res = '';

    for (let i = 0, j = 0; i < str.length; i++) {
      if (!this.alphabet.includes(str[i])) {
        res += str[i];
        continue;
      }

      const letterIndex = this.alphabet.indexOf(str[i]);
      const keyIndex = this.alphabet.indexOf(keyString[j++ % keyString.length]);
      const resultIndex = encrypt
        ? (letterIndex + keyIndex) % this.alphabet.length
        : (letterIndex - keyIndex + this.alphabet.length) % this.alphabet.length;
      const resultLetter = this.alphabet[resultIndex];

      res += resultLetter;
    }

    return this.direct ? res : res.split('').reverse().join('');
  }

  encrypt(message, key) {
    return this.processMessage(message, key, true);
  }

  decrypt(message, key) {
    return this.processMessage(message, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};
