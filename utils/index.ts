export const { format: formatNumber } = Intl.NumberFormat("en-GB", {
  notation: "compact",
  maximumFractionDigits: 1,
  maximumSignificantDigits: 2,
});

const dataSet = (arr: Array<any>) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export default dataSet;
