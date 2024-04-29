import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, useFonts } from "@expo-google-fonts/inter"
import { Loading } from "@/components/loading";


export default function Layout() {
const [fontsLOaded] = useFonts(
    { 
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold 
    }
)

if(!fontsLOaded) return <Loading/>

    return (
        <SafeAreaView className="bg-slate-900 flex-1">
            <Slot/>
        </SafeAreaView>
    )
}