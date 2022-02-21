interface Props {
    children: any;
}

function ContainerRow({ children }: Props) {
    return (<div className="container"><div className="row">{children}</div></div>);
}

export default ContainerRow;