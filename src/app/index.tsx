import {View} from "react-native";
import { Header } from "@/components/header";
import { CategoryButton } from "@/components/category-button";

export default function Home(){
    return (
        <View className="flex-1 pt-8">
            <Header title="Faça o seu pedido" cartQuantityItems={10}/>

            <View className="flex-row gap-4">
                <CategoryButton title="Lanche do dia" isSelected/>
                <CategoryButton title="Lanche do dia"/>
                <CategoryButton title="Lanche do dia"/>
            </View>
        </View>
    )
}
