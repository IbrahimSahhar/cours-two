let myPromise = new Promise((res, rej) => {
  const x = 0;
  if (x === 0) {
    res("this ok");
  } else {
    rej("this felid");
  }
});
myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
