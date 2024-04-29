import { Link, LinkProps } from "expo-router";

type LinkStyleButtonProps = LinkProps<string> & {
    title: string
}

export function LinkStyleButton({title, ...rest}: LinkStyleButtonProps) {

    return (
        <Link className="text-slate-300 text-center text-base font-body" {...rest}> {title} </Link>
    )
}