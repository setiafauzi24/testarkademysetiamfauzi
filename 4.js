let string = "hari apa saja saya bisa!"
let jk =string.split(" ").join("")
let array = []; 
let result=[]
for (let i=0; i <jk.length; i++){
  array.push(jk[i])
}
const count = array =>
  array.reduce((a, b) => ({ ...a,
    [b]: (a[b] || 0) + 1
  }), {})

result.push(count(array));
console.log(count (array))
