export class Utils {

  static formatAttributeName(name) {
    let upperCaseIndexes = [];
    for (let i = 0; i < name.length; i++) {
      const char = name[i];
      if (Utils.isUpper(char)) {
        upperCaseIndexes.push(i);
      }
    }
    let formattedAttributeName = '';
    let start = 0;
    for (let i = 0; i < upperCaseIndexes.length; i++) {
      const upperCaseIdx = upperCaseIndexes[i];
      formattedAttributeName += name.slice(start, upperCaseIdx) + ' ';
      start = upperCaseIdx;
    }
    formattedAttributeName += name.slice(start, name.length);
    return formattedAttributeName.toLowerCase();
  }

  static isUpper(char) {
    if (char == char.toUpperCase()) {
      return true;
    }
    if (char == char.toLowerCase()) {
      return false;
    }
  }

  static compareArrays(arr1, arr2) {
    if (!arr2)
      return false;

    if (arr1.length != arr2.length)
      return false;

    for (var i = 0, l = arr1.length; i < l; i++) {
      if (arr1[i] instanceof Array && arr2[i] instanceof Array) {
        if (!arr1[i].equals(arr2[i]))
          return false;
      }
      else if (arr1[i] != arr2[i]) {
        return false;
      }
    }
    return true;
  }
}
