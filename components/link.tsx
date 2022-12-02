import NextLink from "next/link";
interface props {
  href: string;
  text: string;
  blank: boolean
  anim?:boolean
}

export const Link = (props: props) => {
  return (
    <NextLink href={props.href} passHref>
      <a
        className={`text-blue-400 italic hover:bg-slate-800 rounded-lg`}
        target={props.blank ? "_blank" : "_self"}
        rel="noopener noreferrer"
      >
        {props.text}
      </a>
    </NextLink>
  );
};
