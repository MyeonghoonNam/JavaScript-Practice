const delay = (delayTime) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delayTime);
  });
};

// async & await을 사용하기 전
// const work = () => {
//   console.log('work Run !');

//   delay(1000)
//     .then(() => {
//       console.log('work 1 complete.');
//       return delay(1000);
//     })
//     .then(() => {
//       console.log('work 2 complete.');
//       return delay(1000);
//     })
//     .then(() => {
//       console.log('work 3 complete.');
//       return delay(1000);
//     })
//     .then(() => {
//       console.log('work all complete.');
//     });

//   console.log('work Running...');
// };

const work = async () => {
  console.log('work Run !');

  await delay(1000);
  console.log('work 1 complete.');

  await delay(1000);
  console.log('work 2 complete.');

  await delay(1000);
  console.log('work 3 complete.');

  await delay(1000);
  console.log('work all complete.');
};

work();
