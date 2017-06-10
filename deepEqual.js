function deepEqual (uno, dos) {  //console.log(uno,"---",dos);
  if ((typeof (uno) != "object" || uno === null) ||
     (typeof (dos) != "object" || dos === null)) { //console.log(uno,dos,uno===dos);
       return (uno === dos);
      }
  var unoLength = Object.keys(uno).length; //console.log("uno length" + unoLength);
  var dosLength = Object.keys(dos).length; //console.log("dos length" + dosLength);
   if (unoLength != dosLength) {
  return false;
  }
  for (var name in uno) {
    if (dos.hasOwnProperty(name)) {
      //console.log(uno[name],dos[name],(uno[name] === dos[name]));
     return deepEqual (uno[name], dos[name]);
    } else return false;
}
 //return true; 
}
