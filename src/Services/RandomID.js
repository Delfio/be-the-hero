const crypt = require('crypto');

module.exports = {
  async generateHex() {
    const id = crypt.randomBytes(8).toString('HEX');

    return id;
  }
}