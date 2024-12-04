import React from 'react';
import { FlatList, Text, View } from 'react-native';
import uuid from 'uuid';

const data = [
  { name: 'Item 1' },
  { name: 'Item 2' },
  { name: 'Item 3' },
];

const uniqueData = data.map(item => ({ ...item, id: uuid() }));

const App = () => {
  return (
    <View>
      <FlatList
        data={uniqueData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default App;