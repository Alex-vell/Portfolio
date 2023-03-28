import React, {FC} from 'react';
import s from "./Button.module.scss";

type ButtonPropsType = {
    onClickCallback: (value: any, value2?: any) => void;
    title: string;
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
    disabled?: boolean;
}

export const Button: FC<ButtonPropsType> = ({
                                                title,
                                                onClickCallback,
                                                className,
                                                type,
                                                disabled,
                                            }) => {
    return (
        <button
            type={type || "button"}
            disabled={disabled || false}
            onClick={onClickCallback}
            className={className ? `${s.button} ${className}` : s.button}>
            {title}
        </button>
    );
};
