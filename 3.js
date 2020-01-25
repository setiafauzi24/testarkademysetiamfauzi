let count=0;
function handshake(n){
  let tmp = n;
for(i=1;i<n;i++){
  count+=tmp -i
}
}
handshake(6);
console.log((count))
