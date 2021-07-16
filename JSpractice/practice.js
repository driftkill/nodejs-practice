const getCurrentTime = () => {
  var d = new Date();
  return d.getTime();
};

let countItems = 0;
const startTime = getCurrentTime();

for (let i = 0; i < 50000; i++) {
  let count = 0;
  for (let j = 2; j <= i / 2; j++) {
    if (i % j === 0) {
      count++;
    }
  }
  if (count === 0 && i !== 0 && i !== 1 && i !== 2) {
    countItems++;
  }
}

const endTime = getCurrentTime();

const calculateTimeDiff = (start, end) => {
  return (end - start) / 1000;
};

console.log(
  countItems +
    " prime numbers found in " +
    calculateTimeDiff(startTime, endTime) +
    " seconds."
);
