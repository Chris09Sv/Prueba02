function towerbuilder(n){
    return Array.from({length:n},function(v,k){
        const spaces=' '.repeat(n-k-1);
        return spaces + '*'.repeat(k + k + 1) + spaces;

    }
        
        
        );
}

console.log( towerbuilder(10));

towerbuilder(5);
function towerBuilder1(nFloors) {
    var tower = [];
    for (var i = 0; i < nFloors; i++) {
      tower.push(" ".repeat(nFloors - i - 1)
               + "$".repeat((i * 2)+ 1)
               + " ".repeat(nFloors - i - 1));
    }
    return tower;
  }

console.log(towerBuilder1(10));

