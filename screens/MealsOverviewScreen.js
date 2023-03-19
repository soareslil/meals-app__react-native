import { useLayoutEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import MealItem from '../components/MealItem';

import { CATEGORIES, MEALS } from '../data/dummy-data';

function MealsOverviewScreen({ route, navigation }){

   const catId = route.params.categoryId;

   const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
   })

   useLayoutEffect(()=> {
    const categoryTitle = CATEGORIES.find(
        (category)=> category.id === catId
        ).title;

        navigation.setOptions({
         title: categoryTitle
        });

    },[catId, navigation])


   function renderMEalItem(itemData){

        const item = itemData.item;

        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        }

        return <>
            <MealItem {...mealItemProps} />
        </>
   };

    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={displayedMeals}
                    keyExtractor={(item) => item.id}
                    renderItem={renderMEalItem}
                />
            </View>
        </>
    )
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 16,

    },
    name: {},
    name: {},
    name: {},
})