const take = (l, iter) => {
  let response = [];
  
  for(const a of iter) {
    response.push(a);

    if(response.length === l) return response;
  }

  return response;
}

