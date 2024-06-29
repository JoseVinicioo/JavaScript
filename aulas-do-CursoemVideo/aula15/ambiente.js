var nuns = [4,6,3,7,4,2]
/*for (var i = 0; i < nuns.length; i++){
    console.log(`Na posição ${i}, temos ${nuns[i]}`)
}*/
console.log(`=-=-=-=-=-=-=-=-=-=-=`)
nuns.sort()
console.log(`Agora em ordem, temos: `)
for (var pos in nuns){
    console.log(`Na posição ${pos}, temos ${nuns[pos]}`)
}