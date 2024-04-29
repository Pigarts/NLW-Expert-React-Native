import { TextInput, TextInputProps } from "react-native";
import colors from "tailwindcss/colors";

export function TallImput({...rest}: TextInputProps) {

    return (
        <TextInput 
        {...rest}
        className="text-white bg-slate-800 h-32 py-3 px-5 rounded-md font-body text-sm"
        multiline
        textAlignVertical="top"
        placeholderTextColor={colors.slate[400]}
        
        >

        </TextInput>
    )
}