const greetings = ['Welcome', 'Willkommen', 'Hey', 'Gruezi'];

export function next() {
  let idx = Math.floor(Math.random() * greetings.length)
  return greetings[idx];
}

export function nth(n = 0) {
  return greetings[n];
}

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();