let str = 'Ajith';
let str1 = 'Actor';
let movie = 'Vethalam';

let res = str + 'is an ' + str1 + 
'and he is acting in "' + movie + '"';

let res1 = `${str} is an ${str1}
and he is acting in "${movie}"`;

let template = `
  <div>
    <span>${str}</span>
  </div>
`;