const chainMaker = {

  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value = '') {
    this.arr.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (typeof (position) != 'number' || !Number.isInteger(position) || position < 1 || position > this.getLength()) {
      this.arr = [];
      throw new Error("You can\'t remove incorrect link!");
    }
    this.arr.splice(position - 1, 1)
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const chain = this.arr.join('~~');
    this.arr = [];
    return chain;
  }
};

module.exports = {
  chainMaker
};
