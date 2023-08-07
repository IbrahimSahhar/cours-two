let eat = false;
let play = true;
let sleep = true;

let eating = new Promise((res, rej) => {
  if (eat) {
    res(" im eating");
  } else {
    rej("not eating");
  }
});

let playing = new Promise((res, rej) => {
  if (play) {
    res(" im playing");
  } else {
    rej("not playing");
  }
});
let sleeping = new Promise((res, rej) => {
  if (sleep) {
    res(" im sleeping");
  } else {
    rej("not sleeping");
  }
});

const run = async () => {
  try {
    const eat = await eating;
    console.log(eat);
    const play = await playing;
    console.log(play);
    const sleep = await sleeping;
    console.log(sleep);
  } catch (err) {}
};

run();
