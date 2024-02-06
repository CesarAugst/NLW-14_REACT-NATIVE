import { View, FlatList, SectionList, Text } from "react-native";
import { useState } from "react";

import { CATEGORIES, MENU } from "@/utils/data/products";

import { Header } from "@/components/header";
import { CategoryButton } from "@/components/category-button";

export default function Home(){

    const [category, setCategory] = useState(CATEGORIES[0])

    function handleCategorySelected(selectedCategory: string){
        setCategory(selectedCategory);
    }

    return (
        <View className="flex-1 pt-8">
            <Header title="Faça o seu pedido" cartQuantityItems={10}/>

            <FlatList 
                data={CATEGORIES}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <CategoryButton title={item} isSelected={item === category} onPress={() => handleCategorySelected(item)}/>
                )}
                horizontal
                className="max-h-10 mt-5"
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 12, paddingHorizontal: 20}}
            />

            <SectionList 
                sections={MENU}
                keyExtractor={(item) => item.id}
                stickySectionHeadersEnabled={false}
                renderItem={({ item }) => <Text className="text-white">{item.title}</Text>}
                renderSectionHeader={({ section: { title } }) => <Text className="text-xl text-white font-heading mt-8 mb-3">{title}</Text>}
            />
        </View>
    )
}
