function spacey(array){
  let str = '';
  let new_array = [];
  for(let item of array){
    str+=item;
    new_array.push(str);
  }
  return new_array;
}
