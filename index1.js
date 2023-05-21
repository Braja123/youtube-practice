const myDetails = {
  name: "gopal",
  gender: "male",
  address: {
    city: "bls",
    state: "odisha",
  },
};
// best case is at the time of api calling
// some data takes time to load at that time by using OC it won't give us undefined

// we have a feature called optional chaining

// so it will be very difficult to understand when we have more nested objects with lots of optional properties and sometimes that happen in the real world
// so therefore in es2020 introduced a great solution for this, which is a feature called optional chaining

// With OC if a certain property doesn't exist then "undefined" is returned immediately. So that will then avoid that kind of error that we saw earlier.

// ? How OC works
// So only if the property that is before this question mark here. So only if "monday" exist then the "open" property will read, bt if not thten immediately undefined will be returned

// if (myDetails.address) {
//   if (myDetails.address.pin) console.log("has address");
//   else console.log("no there");
// } else {
//   console.log("not address");
// }

// Here they are trying to read "pin" only happens if all of this actually exists. So if it's not null or not undefined. But if it is undefined or null then the result will be undefined immediately.

console.log(myDetails.name?.pin);

// we can have multiple OC

// by using this we can get rid of that if else statement
console.log(myDetails?.name?.pin);
