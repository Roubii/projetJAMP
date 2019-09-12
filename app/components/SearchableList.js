import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import PLACES from '../consts/Places'
import Recherche from './Recherche';

class SearchableList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: PLACES,
      error: null,
    };

    this.arrayholder = PLACES;
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.societe.toUpperCase()} ${item.ville.toUpperCase()}`;
      const textData = text.toUpperCase();
      

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
      placeholder="Rechercher"
      backgroundColor='#fff'
      inputContainerStyle={{backgroundColor: '#fff', borderRadius: 15, borderColor:'red', borderWidth: 2, borderBottomColor:'red', borderBottomWidth: 2}}
      containerStyle={{backgroundColor: 'transparent'}}
      inputStyle={{borderWidth: 0, borderColor: 'transparent', flex:1}}
       lightTheme
       round
       onChangeText={text => this.searchFilterFunction(text)}
       autoCorrect={false}
       value={this.state.value}
      />
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              title={`${item.societe}`}
              subtitle={`${item.adresse} ${item.codepostal} ${item.ville}`}
            />
          )}
          keyExtractor={(item, index) => String(index)}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

export default SearchableList;