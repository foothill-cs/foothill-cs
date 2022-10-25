export function next_to_next_wed() {
  const d1 = new Date("11/05/2022");

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
  let event_day = 35;

  let final_today = today.getDate().toString();
  let int_today = parseInt(final_today);

  let days_left = event_day - int_today;

  return days_left;
}

export const shortMonth = new Intl.DateTimeFormat("en-US", { month: "short" })
  .format;
