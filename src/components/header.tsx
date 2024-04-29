import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";

type Headerprops = {
    title: string
    cartQauntity?: number
}

export function Header({title, cartQauntity = 0}: Headerprops) {


    return (
        
        <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
            <View className="flex-1 ">
                <Image source={require("@/assets/logo.png")} className="h-6 w-32 "/>
                <Text className="text-xl text-white font-heading mt-2">{title}</Text>

            </View>

            <TouchableOpacity className="relative">
                <View className="bg-lime-300 h-6 rounded-full items-center 
                justify-center top-2 z-10 -right-3.5">
                    <Text className="text-slate-900 font-bold text-xs">
                        {cartQauntity}
                    </Text>
                </View>
                <Link href={"/cart"}>
                <Feather name="shopping-bag" color={colors.white} size={24}/>
                </Link>
            </TouchableOpacity>

        </View>
    )
}