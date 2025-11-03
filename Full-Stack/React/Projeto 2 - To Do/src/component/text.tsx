import React from "react";
import {cva} from "class-variance-authority";

export const textVariants = cva("font-sans text-gray-400", {
    variants: {
        variant: {
            "body-sm-bold": "text-sm leading-5 font-semibold",
            "body-md-bold": "text-base leading-6 font-normal",
            "body-md-bold-strong": "text-base leading-6 font-semibold",
        }
    }
})

interface TextProps {
    as?: keyof React.JSX.IntrinsicElements; //mapeia cada tag HTML para o seu tipo React
    className?: string;
    children?: React.ReactNode; //a tipagem assim é basicamente que pode ser qualquer coisa no parâmetro do React
    variant?: string;
}

export default function Text({
                                 as = "span",
                                 className,
                                 children,
                                 ...props
                                }: TextProps) {
    return React.createElement(
        as,
        {
            className,
            ...props,
        },
        children,
    )
}