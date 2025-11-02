import React from "react";

interface TextProps {
    as?: keyof React.JSX.IntrinsicElements; //mapeia cada tag HTML para o seu tipo React
    className?: string;
    children?: React.ReactNode; //a tipagem assim é basicamente que pode ser qualquer coisa no parâmetro do React
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