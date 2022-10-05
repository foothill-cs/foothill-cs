interface props {
    href: string;
    text:string
}


export const Link = (props:props) =>{
    return(
        <a href={props.href} className="text-blue-400 italic" target={"_blank"} rel="noopener noreferrer">
          {props.text}
        </a>
    )
}