function calculateTotal(totals) {
  const total = totals.reduce((pValue, cValue) => {
    return cValue[0] + pValue;
  }, 0);
  return total;
}

function calculatePromo(totals) {
    const totalPromo = totals.reduce((pValue, cValue) => {
      if (cValue[1]) {
        return cValue[0] - cValue[1] + pValue;
      }
      return 0 + pValue;
    }, 0);

    return totalPromo;
}

module.exports = {
  calculateTotal,
  calculatePromo,
};


