import { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
    children: ReactNode
}

type ButtonTextProps = {
    children: ReactNode
}

type ButtonIconProps = {
    children: ReactNode
}

function Button({children , ...rest}: ButtonProps) {
    return (
        <TouchableOpacity
        {...rest}
        activeOpacity={0.9}
        className=" h-12 bg-lime-400 rounded-md items-center justify-center flex-row"
        >
            {children}
        </TouchableOpacity>
    )
};

function ButtonText({children , ...rest}: ButtonTextProps) {
    return (
        <Text {...rest}
        className=" text-black font-heading text-base mx-2">
            {children}
        </Text>
    )
};

function ButtonIcon({children}: ButtonIconProps) {
    return children
};

Button.Text = ButtonText;
Button.Icon = ButtonIcon;

export {Button}