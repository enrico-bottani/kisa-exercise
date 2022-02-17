import { ReactElement } from 'react';
import styles from './EditorStep.module.css';

interface _InnerProps {
    marginTop?: number;
    children: ReactElement<any, any>;
}

interface Props extends _InnerProps {
    number: number;
    title: string;
    marginTop?: number;
    children: ReactElement<any, any>;
}

function EditorStepChildWrapper({ marginTop, children }: _InnerProps) {
    return (<div className={styles.EditorStepChildWrapper}>
        <div className="border-start border-2 w-100">
            <div className='ms-3'>
                {children}
            </div>
        </div>
    </div >)
}

function EditorStep({ children, title, number, marginTop }: Props) {
    if (marginTop == null) marginTop = 0;
    return (<div className={"mt-" + marginTop}>
        <h6 className={styles.EditorStep}>
            <span className={styles.EditorStepNumber}>{number}</span>{title}
        </h6>

        <EditorStepChildWrapper marginTop={marginTop}>
            {children}
        </EditorStepChildWrapper>

    </div>)
}
export default EditorStep;