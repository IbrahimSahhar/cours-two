let eat = true;
let play = true;
let sleep = true;

let eating = new Promise((res, rej) => {
  if (eat) {
    res(" im eating");
  } else {
    rej("not eating");
  }
}).catch((err) => {
  console.log(err);
});

let playing = new Promise((res, rej) => {
  if (play) {
    res(" im playing");
  } else {
    rej("not playing");
  }
}).catch((err) => {});

let sleeping = new Promise((res, rej) => {
  if (sleep) {
    res(" im sleeping");
  } else {
    rej("not sleeping");
  }
});
eating
  .then((res) => {
    console.log(res);

    playing.then((res) => {
      console.log(res);
    });
    sleeping.then((res) => {
      console.log(res);
    });
  })
  .catch((err) => {
    console.log(err);
  });

sleeping;
