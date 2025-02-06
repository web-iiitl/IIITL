type Props = {
    children: string
}

export default function SubSubheading({children}:Props) {
    return(
        <h3 className="text-2xl text-bluedark font-bold">{children}</h3>
    );
}