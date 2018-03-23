const echo = console.log;

const $ig = new class {
  constructor($first = 'Yaroslav', $second = 'Slepukhin') {
    this.first = $first;
    this.second = $second;
  }
  getFullName() { return 'Mr. ' + this.first + ' ' + this.second;}
};

echo($ig.getFullName()); // Mr. Yaroslav Slepukhin
