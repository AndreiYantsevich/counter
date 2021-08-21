import style from './Input.module.css'

type PropsType = {

}

export const Input = (props: PropsType) => {

    return (
        <div className={style.container}>
            <div>max value:<input type="number"/></div>
            <div>start value:<input type="number"/></div>
        </div>
    )
}