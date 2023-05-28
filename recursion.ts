function factorials(n) {
  if (n === 1) return 1;
  return n * (n - 1);
}

const execute = () => {
  console.log('factorials. ', factorials(400));
};

export default execute;
