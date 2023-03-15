const cats = ['Milo','Otis','Garfield'] 

function destructivelyAppendCat(name) {
   cats.push(name);
   return cats;
}

function destructivelyPrependCat(name){
  cats.unshift(name);
  return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop();
  return cats
}

function destructivelyRemoveFirstCat(){
    cats.shift();
  return cats;
}

function appendCat(name){
  const random1= [...cats,name];
  return random1;
}

function prependCat(name){
  const random2=[name, ...cats];
  return random2
}

function removeLastCat(){
  const cats1= cats.slice(0,cats.length-1);
  return cats1;
}

function removeFirstCat(){
    var cats2= cats.slice(1)
    return cats2
  }