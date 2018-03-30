const values = [10, 20, 30];
const URLs = [
  'https://kodaktor.ru/api/m/',
  'https://kodaktor.ru/api/MS2/',
  'https://kodaktor.ru/api/MS3/',
];

(async () => {
  const r = {
    result: "10"
  };
  
  const myInit = {
    method: 'GET',
    headers: {'content-type': 'application/json'}
  };
  
  for (let i = 0; i < URLs.length; i++) {
    let value = URLs[i] + values[i] + '/' + r.result;
    const x = await fetch(value, myInit)
      .then(response => response.json());
      r.result = x.result;
  }

  document.body.innerHTML = `<h1>${r.result}</h1>`;
})();