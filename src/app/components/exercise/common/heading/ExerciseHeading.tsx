interface Props {
    children: any;
}

function ExerciseHeading({ children }: Props) {

    return (<h2 className='mb-3'>{children}</h2>)
}
export default ExerciseHeading;