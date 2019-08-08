import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import nachos from '../data/nachos';
import ListItem, {Separator} from '../component/ListItem';

export default() => {

  return (
    <SafeAreaView>
      <ScrollView>
      {nachos.map((item, index) => (
        <React.Fragment>
          <ListItem
        key={item.id}
        name={item.name}
        onFavoritePress={() => alert('todo') }
        isFavorite={index<2}
        />
          <Separator />
        </React.Fragment>
        
      ))}
      </ScrollView>
    </SafeAreaView>
  )
};