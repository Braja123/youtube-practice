const text =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

// replace(pattern, replacement)

// let result = text.replace("dog", "cat");
// let result = text.replace("dog", "cat das");
// let result = text.replace("lazy dog", "energetic cat");
// let result = text.replace("lazy dog", "cat");
// let result = text.replace("over the lazy dog", "upper that energetic cat");

// let result = text.replace(/l/g, "K");

// ? The following example uses the global flag (g) to replace all occurrences of the JS in the str by the
// let result = text.replace(/dog/g, "cat");

// ? If you want to ignore cases for searching and replacement, you can use the ignore flag (i) in the regular
// let result = text.replace(/the/gi, "that");

// let result = text.replace(/dog/gi, (match) => {
//   return match.toUpperCase();
// });

// !replaceAll

// ? In this case the behavior of replaceAll() is entirely encoded by the @@replace method, and therefore will have the same result as replace()
// let result = text.replaceAll("dog", "cat");
// let result = text.replaceAll(/the/gi, "cat");

// the main use case
// let result = text.replace("was", "were").replace("really", "awesome");

let result = text.replace("dog", (match) => {
  return a.toUpperCase();
});

console.log(result);
// console.log(text);

// hello world from the console example above is equivalent to the following example from the console example above with the same result as replace

document.querySelector("#example").addEventListener("click", () => {
  console.log(
    text.replace("dog", (match) => {
      return a.toUpperCase();
    })
  );
});
