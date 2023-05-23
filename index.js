let arr = ["#FF0000", "#00FFFF", "#0000FF"];
console.log("🚀 ~ file: index.js:2 ~ arr:", arr);

// ! hkajshdkjk jhaksdjhkjhjk jhaksjhd
// ? lkajsldkjlasdasd
// todo ;lkjlkjlkjlkjas
// * lkajsldklaksdk;
let getData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
};
console.log("🚀 ~ file: index.js:17 ~ getData ~ getData:", getData);

// TODO: fix me later
// FIXME: jaksjhj
if (true) console.log("hello");
