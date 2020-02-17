import React, { Component } from 'react';
import {
  StyleSheet, View, Text, SafeAreaView,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { ListItem, Left, Body, Right, Thumbnail } from 'native-base';

const img = '../../assets/images/icon.jpeg';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ride quick! , save big',
    message: "Use code 'pick50'  | TCA"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Skip Expence, use Rapido',
    message: "Use code 'pick100'  | TCA"
  },
];

function Item({ id, title, message, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}>
      <ListItem avatar>
        <Left>
          <Thumbnail style={{ width: 40, height: 40}} source={require('../../assets/images/icon.jpeg')} />
        </Left>
        <Body>
          <Text>{title}</Text>
          <Text>{message}</Text>
        </Body>
        <Right>
          <Text note>3:43 pm</Text>
        </Right>
      </ListItem>
    </TouchableOpacity>
  )
}


export default function Notification() {

  const [selected, setSelected] = React.useState(new Map());
  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );


  return (

    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            message={item.message}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
    </SafeAreaView>

  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  item: {
    backgroundColor: '#f9c2ff',

    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});