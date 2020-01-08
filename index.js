class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9\s-']+/g, '');
  }

  static titleize(str) {
    const words = str.split(' ');
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let newStr = "";
    let i = 0;

    if (str.slice(0, 2) === "a ") {
      newStr += 'A';
      i = 1;
    }

    for (i; i < words.length; i++) {

      if (!exceptions.includes(words[i].toLowerCase())) {
        newStr += ` ${this.capitalize(words[i])}`;
      } else {
        newStr += ` ${words[i]}`;
      }
    }

    return newStr.trim();
  }
}
