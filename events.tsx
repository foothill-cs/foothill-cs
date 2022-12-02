import { EventProps } from "./components/event";
import { Link } from "./components/link";

export const events: EventProps[] = [
  {
    modal: false,
    children: (
      <div>
        - <Link text="Falconhacks" href="/falconhacks" blank={false} />{" "}
        (12.10.22)
      </div>
    ),
    id: "falconhacks",
  },
];
