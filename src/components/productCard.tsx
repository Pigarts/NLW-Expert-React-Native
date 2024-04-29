import { Image, ImageProps, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { forwardRef } from "react";
import { formatCurrency } from "@/utils/functions/formatCurrency";

type ProductDataProps = {
    title: string
    description: string 
    thumbnail: ImageProps
    quantity?: number 
    price?: number 
}

type ProductCardProps = TouchableOpacityProps & {

    data: ProductDataProps

}

export const ProductCard = forwardRef<TouchableOpacity, ProductCardProps>( ( { data, ...rest }, ref ) => {
    return (
        <TouchableOpacity
        ref={ref}
        className="w-full flex-row items-center pb-4"
        {...rest}>
            <Image source={data.thumbnail} className="h-20 w-20 rounded-md"/>
            <View className="flex-1 ml-3">
                <View className="flex-row">
                <Text className="text-slate-100 font-subtitle flex-1 text-base">{data.title}</Text>
                {
                    data.quantity && 
                    (
                        <Text 
                            className="text-slate-400 font-subtitle text-base">
                            {`X ${data.quantity}`}
                        </Text>
                    )
                }

                </View>
                <Text className="text-slate-400 font-subtitle text-xs leading-5 mt-0.5 ">{data.description}</Text>
            </View>
        </TouchableOpacity>
    )
})