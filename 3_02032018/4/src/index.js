const summer = x => x + x;
const powerer = x => x ** x;
const multiplyer = x => x * x;

const result = 3
    |> summer
    |> powerer
    |> multiplyer;

console.log(result);
console.log( multiplyer( powerer ( summer(3) ) ) );


