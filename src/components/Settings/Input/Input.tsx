import {ChangeEvent} from 'react';

type PropsType = {
    name: string
    type: string
    className: any
    value: number
    callback: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: PropsType) => {

    return (
        <div>
            <span>{props.name}</span>
            <span><input
                type={props.type}
                className={props.className}
                value={props.value}
                onChange={props.callback}
            /></span>
        </div>
    )
}