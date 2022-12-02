export function daysleft() {
  const d1 = new Date("12/10/2022");
  const d2 = new Date()
  //@ts-ignore
  const res = d2-d1;
  return (res / (1000* 24 * 60 * 60 * -1)).toFixed(0)

  // return (d2-d1);
}

export const shortMonth = new Intl.DateTimeFormat("en-US", { month: "short" })
  .format;
