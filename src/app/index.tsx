import { View, FlatList, SectionList, Text} from "react-native"
import { Header } from "@/components/header"
import { CatecoryButton } from "@/components/categotyButton"
import { CATEGORIES, MENU, ProductProps } from "@/utils/data/products"
import { useEffect, useRef, useState } from "react"
import { ProductCard } from "@/components/productCard"
import { Link } from "expo-router"
import * as cartInMemory from "@/stores/helpers/cartInMemory"
import { useCartStore } from "@/stores/cart";


export default function Home() {
    const cartStore = useCartStore()
    const [categotySelected, setCategotySelected] = useState(CATEGORIES[0])
    const sectionListRef = useRef<SectionList<ProductProps>>(null)
    const itensInCart = cartStore.products.length

    function handleSelectedCategory(item: string) {
        setCategotySelected(item)
    }

    useEffect(() => {
        const sectionIndex = CATEGORIES.findIndex((category) => category === categotySelected )
                if(sectionListRef.current) {
                    sectionListRef.current.scrollToLocation({
                        animated: true,
                        sectionIndex,
                        itemIndex: 0
                    })
                }

    }, [categotySelected])

    return (
        <View className="pt-8 flex-1">
            <Header title="Cardapio" cartQauntity={itensInCart}/>
    
            <FlatList
            className="max-h-10 mt-5 px-4"
            data={CATEGORIES}
            keyExtractor={(item) => item}
            renderItem={({item}) => <CatecoryButton onPress={() => {handleSelectedCategory(item)}} title={item} isSelected={item === categotySelected} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{gap: 12}}
            />

            <SectionList 
            className="flex-1 px-4 mt-4"
            ref={sectionListRef}
            sections={MENU}
            keyExtractor={(item) => item.id}
            renderSectionHeader={({section: {title}}) => (
                <Text className="text-xl text-white font-heading">{title}</Text>
            )}
            renderItem={({item}) => (
                <Link href={`/product/${item.id}`} asChild>
                    <ProductCard data={item}/>
                </Link>
            )}
            contentContainerStyle={{paddingBottom: 100}}
            
            />
        </View>
    )
}