const start = 'a'.charCodeAt(0);
const end = 'z'.charCodeAt(0);



for (let i = 0; i < 26; i++) {
  console.log(
    `.${String.fromCharCode(start + i)} {
  color: hsl(${Math.floor(360 / 25 * i)}, 100%, 50%);
}`)
}

