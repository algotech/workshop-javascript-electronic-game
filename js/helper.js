var Helper = {};

Helper.randomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
}

Helper.elementFromChar = function(legend, ch) {
  if (ch == " ") {
    return null;
  }

  var element = new legend[ch]();
  element.originChar = ch;

  return element;
}

Helper.charFromElement = function(element) {
  if (element == null) {
    return " ";
  }

  return element.originChar;
}
