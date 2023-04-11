var Objects = { 'one': 1, 'two': 2, 'three': 3 };
for (var valu in Objects) {
    console.log('  ' + valu + ': ' + Objects[valu]);
}
localStorage.setItem('Objects', Objects);
var retrievedObject = localStorage.getItem('Objects');
console.log('typeof retrievedObject: ' + typeof retrievedObject);
console.log('Value of retrievedObject: ' + retrievedObject);
