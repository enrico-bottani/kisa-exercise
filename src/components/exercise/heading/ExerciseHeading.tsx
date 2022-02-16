interface Props {
    children: any;
}

function ExerciseHeading({ children }: Props) {

    return (<h1 className='mb-3'>{children}</h1>)
}
export default ExerciseHeading;