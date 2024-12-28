function inputNumber(number) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      return resolve(number + 1);
    }, 3000);
  });
}

async function showNumber() {
  const result1 = await inputNumber(1);
  console.info(`Result: ${result1}`);
  const result2 = await inputNumber(2);
  console.info(`Result: ${result2}`);
  const result3 = await inputNumber(3);
  console.info(`Result: ${result3}`);
}

function sleep() {
  console.info("Sleep start");
  const startTime = new Date();

  while (true) {
    if (new Date() - startTime > 3000) {
      console.info("Sleep end");
      return;
    }
  }
}

function onLoad() {
  console.info("Process start");
  //   Promise.all([inputNumber(2), inputNumber("hello"), inputNumber(6)])
  //     .then((result) => {
  //       console.info("All promises have been resolved!");
  //     })
  //     .catch(() => {
  //       console.error("Something went wrong!");
  //     })
  //     .finally(() => {
  //       console.info("End process");
  //     });

  //   asyncInputNumber(1)
  //     .then((result) => {
  //       console.log(`Result: ${result}`);
  //     })
  //     .finally(() => {
  //       console.log("End process");
  //     });

  showNumber(1);
}

onLoad();
