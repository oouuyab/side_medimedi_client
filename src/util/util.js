export const getCombinations = (list) => {
  const combinations = [];

  for (let i = 0; i < list.length - 1; i++) {
    for (let j = i + 1; j < list.length; j++) {
      combinations.push({ group: [list[i], list[j]] });
    }
  }

  return combinations;
};
