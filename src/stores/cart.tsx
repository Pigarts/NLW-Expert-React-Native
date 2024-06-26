import { ProductProps } from "@/utils/data/products"
import { create } from "zustand"
import * as cartInMemory from "@/stores/helpers/cartInMemory"
import { createJSONStorage, persist } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"

export type ProductCartProps = ProductProps & {
    quantity: number
}

type StateProps = {
    products: ProductCartProps[],
    add: (product: ProductProps) => void
    remove: (productId: string) => void
    clear: () => void

}

export const useCartStore = create(persist<StateProps>(
    (set) => ({
    products: [],
    
    add: (product:ProductProps) => 
        set((state) => ({products: cartInMemory.add(state.products, product)
    })),

    remove: (productId: string) => 
        set((state) => ({products: cartInMemory.removve(state.products, productId)
    })),

    clear: () => 
        set((state) => ({products: cartInMemory.clear(state.products)
    })),
}),{
    name: "nlw-e:cart",
    storage: createJSONStorage(() => AsyncStorage)
}
))