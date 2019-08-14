import React from 'react';
import { SafeAreaView, KeyboardAvoidingView, FlatList,} from 'react-native';

import nachos from '../data/nachos';
import ListItem, {Separator} from '../component/ListItem';
import AddItem from '../component/AddItem'

export default() => {

  return (
    <SafeAreaView style={{ flex: 1}}>
      <KeyboardAvoidingView
      style={{ flex: 1}}
      behavior= 'padding'
      >
     <AddItem />
      <FlatList
      data={nachos}
      renderItem={({item, index}) => (
          <ListItem
        name={item.name}
        onFavoritePress={() => alert('todo') }
        isFavorite={index<5}
        />
        )}
        keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <Separator />} 
          />
      </KeyboardAvoidingView>

    </SafeAreaView>
  )
};
