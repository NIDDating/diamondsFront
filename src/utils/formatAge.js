const formatAge = (age) => {
  if (age > 9 && age < 100) {
    let lastDigit = parseInt((age + "")[1]);

    if (lastDigit === 1) {
      return `${age} год`;
    } else if (lastDigit === 2 || lastDigit === 3 || lastDigit === 4) {
      return `${age} года`;
    } else {
      return `${age} лет`;
    }
  } else {
    return age;
  }
}

export default formatAge;