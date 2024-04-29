import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { TallImput } from "@/components/imput";
import { LinkStyleButton } from "@/components/linkStyleButton";
import { ProductCard } from "@/components/productCard";
import { useCartStore } from "@/stores/cart";
import { ProductProps } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/formatCurrency";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { Alert, Linking, ScrollView, Text, View } from "react-native";

export default function Cart() {
    const inCart = useCartStore()
    const [adress, setAdress] = useState("")
    const navigate = useNavigation()
    const PHONE_NUMBER = "5585985045992"
    const total = formatCurrency(inCart.products.reduce((total, product) => total + product.price * product.quantity, 0)) 

    function handleRemoveItem(product: ProductProps) {
        Alert.alert(
                "Alterar", `Modificar: ${product.title}?`, 
                [
                    {
                        text: "remover 1",
                        onPress: () => (inCart.remove(product.id)) 
                    },
                    {
                        text: "Adicionar 1",
                        onPress: () => (inCart.add(product)) 
                    },
                    {
                        text: "Cancelar"
                    },
                ]
            )
    }

    function handleSend() {
        if(inCart.products.length === 0) {
            return  Alert.alert("Opa 🛑", "É preciso ter items no carrinho para realizar um pedido")
          }
        if(adress.trim().length === 0) {
          return  Alert.alert("Quase lá", "Preencha o campo de endereço para que possamos realizae sua entrega")
        }
        const oeder = inCart.products.map((product) => 
        `\n ${product.quantity} X - Produto: ${product.title}`)
        const message = 
        `🎉 NOVO PEDIDO 
        \nPEDIDO: ${oeder}
        \nEmtregar em:\n${adress}`

        console.log("🎉 NOVO PEDIDO ")
        Linking.openURL(`http://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${message}`)
        inCart.clear()
        navigate.goBack()
    }
    return (
        <View className="pt-8 flex-1 ">
            <Header title="Seu carrinho." cartQauntity={inCart.products.length }/>
            <View className="p-5 flex-1 " >
            <ScrollView>
                {
                    inCart.products.length > 0 ?
                    inCart.products.map((product) => (
                            <ProductCard onPress={() => handleRemoveItem(product)} key={product.id} data={product}/>

                   
                        )) 
                    :
                        <Text className="text-xl font-body text-slate-500">Nenum item no carrinho.</Text>
                    }</ScrollView>
            </View> 
            

            
            <View className="gap-5 px-5 mb-5 ">
            <View className="flex-row gap-2  border-t border-slate-700">
                <Text className="text-xl text-white">Total:</Text>
                <Text className="text-xl text-lime-300">{total}</Text>
            </View>
                <TallImput
                 onChangeText={setAdress}
                 placeholder="Endereço para entrega"
                 />
                <Button onPress={handleSend}>
                    <Button.Text>
                        <Text>Concluir</Text>
                    </Button.Text>
                    <Button.Icon>
                        <Feather name="arrow-right-circle" size={24}/>
                    </Button.Icon>
                </Button>
                <LinkStyleButton href="/" title={"Voltar ao cardapio."} />
            </View>
            
        </View>
    )
}