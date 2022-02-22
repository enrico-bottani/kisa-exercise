import { ReactElement } from 'react';
import styles from './EditorStep.module.css';

interface _InnerProps {
    paddingTop?: number;
    paddingBottom?: number;
    children: ReactElement<any, any>;
    positionSticky?: boolean;
}

interface Props extends _InnerProps {
    number: number;
    title: string;

}

function EditorStepChildWrapper({ paddingTop, paddingBottom, children }: _InnerProps) {

    return (<div className={styles.EditorStepChildWrapper}>
        <div className={"border-start border-2 w-100 "}>
            <div className='ms-3'>
                {children}
            </div>
        </div>
    </div >)
}

function EditorStep({ children, title, number, paddingTop, paddingBottom, positionSticky }: Props) {
    if (paddingTop === undefined) paddingTop = 0;
    if (paddingBottom === undefined) paddingBottom = 0;
    let stepClass = "";
    if (positionSticky !== undefined) stepClass = styles.StickyPreview;

    return (
        <div className={"pt-" + paddingTop + " pb-" + paddingBottom + " " + stepClass}>
            <h5 className={styles.EditorStep}>
                <span className={styles.EditorStepNumber}>{number}</span>{title}
            </h5>

            <EditorStepChildWrapper paddingTop={paddingTop} paddingBottom={paddingBottom}>
                {children}
            </EditorStepChildWrapper>

        </div>)
}
export default EditorStep;