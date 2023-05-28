//your JS code here. If required.
function customSortingFunction(string) {
  // Remove "a", "an", and "the" from the string using regular expressions
  let modifiedString = string.replace(/\b(a|an|the)\b/gi, "");
  // Remove leading and trailing whitespaces
  modifiedString = modifiedString.trim();
  return modifiedString;
}

function sortArrayOfStrings(strings) {
  return strings.sort(function (a, b) {
    const modifiedA = customSortingFunction(a);
    const modifiedB = customSortingFunction(b);
    if (modifiedA < modifiedB) {
      return -1;
    }
    if (modifiedA > modifiedB) {
      return 1;
    }
    return 0;
  });
}

// Example usage:
const strings = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const sortedStrings = sortArrayOfStrings(strings);
const ul = document.getElementById("bands");
sortedStrings.forEach((v) => {
  ul.innerHTML += `<li>${v}</li>`;
});
