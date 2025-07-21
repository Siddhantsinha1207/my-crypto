export function currencyFormatter(currency) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 3,
    // style: "currency",
    // currency: "USD",
  }).format(currency);
  return formattedPrice;
}
