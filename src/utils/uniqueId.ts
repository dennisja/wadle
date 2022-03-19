let count = 0;

const uniqueId = (prefix = '') => {
  const id = `${prefix}${count}`;
  count += 1;
  return id;
};

export default uniqueId;
