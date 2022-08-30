const encrypt = (text) => {
  const result = [...text].reverse().map((el) => el.charCodeAt() + 1);
  return String.fromCharCode(...result);
};

const decrypt = (text) => {
  const result = [...text].reverse().map((el) => el.charCodeAt() - 1);
  return String.fromCharCode(...result);
};

module.exports = { encrypt, decrypt };
