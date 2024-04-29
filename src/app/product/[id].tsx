import { Button } from "@/components/button";
import { LinkStyleButton } from "@/components/linkStyleButton";
import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/formatCurrency";
import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { useCartStore } from "@/stores/cart";

export default function Product() {
    const cartStore = useCartStore()
    const {id} = useLocalSearchParams() 
    const product = PRODUCTS.filter((item) => item.id === id)[0]
    const navigate = useNavigation()

    function handleAddButton() {
        cartStore.add(product)
        navigate.goBack()
    }

    return (
        <View className="flex-1 h-full">
            <ScrollView className="flex-1 h-full">

            
            <Image
                className="h-52 w-full" 
                source={product.cover}
                resizeMode="cover"
            />
            <View className="p-5  flex-1">
            <Text className="text-slate-100 text-2xl font-heading ">{ product.title }</Text>
            <Text className="text-lime-400 text-2xl font-heading my-2">{formatCurrency(product.price)}</Text>
            <Text className="text-slate-400 font-body text-base leading-6 mb-6">{product.description}</Text>
            
                {
                    product.ingredients.map((ingredient) => (
                        <Text className="text-slate-400 font-body text-base leading-6" key={ingredient}> {"\u2022"} {ingredient} </Text>
                        ))
                }
            
            </View>
            </ScrollView>
            <View className=" p-5 pb-8 gap-5" >
                <Button onPress = {handleAddButton} >
                    <Button.Icon>
                        <Feather name="plus-circle" size={24}/>
                    </Button.Icon>
                    <Button.Text>
                        <Text>Adicionar.</Text>
                    </Button.Text>
                </Button>
                <LinkStyleButton href="/" title={"Voltar ao cardapio."} />
            </View>
        </View>
    )
}