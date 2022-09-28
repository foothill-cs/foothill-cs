export function next_to_next_wed() {
  const d1 = new Date("9/21/2022");

  let today = new Date();

  const get = (dt: Date) => {
    var d = new Date(dt.toDateString());
    d.setDate(d.getDate() + ((3 + 7 - d.getDay()) % 7));
    return d;
  };
  const calc = (x: any, x1: any) => {
    return (x - x1) / (1000 * 60 * 60 * 24);
  };

  let d2 = get(today);
  let diff = calc(d2, d1);
  if (diff % 2 == 1) {
    today.setDate(today.getDate() + 7);
    d2 = get(today);
  }
  return d2;
}

export const shortMonth = new Intl.DateTimeFormat("en-US", { month: "short" })
  .format;
