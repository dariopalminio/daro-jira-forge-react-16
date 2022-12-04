interface IProps {
    children?: React.ReactNode;
}


const Hello: React.FC<IProps> = (props: IProps) => {


    return (
        <div>
            <h1>Hello</h1>
            {props.children}
        </div>
    );
};

export default Hello;
