import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import PLACES from '../consts/Places'
import Recherche from '../components/Recherche';

class SearchableList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
      items : PLACES,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    
    this.setState({ loading: true });

    let items = this.state.items;
  

    const map = items.map((x, index, items) => {
        this.setState({
        data: items,
        loading: false,});

        this.arrayholder = items;
   });
  };

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
      const itemData = `${item.societe.toUpperCase()}`;
      const textData = text.toUpperCase();
      

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  // renderHeader = () => {
  //   return (
  //     // <SearchBar
  //     //   placeholder="Type Here..."
  //     //   lightTheme
  //     //   round
  //     //   onChangeText={text => this.searchFilterFunction(text)}
  //     //   autoCorrect={false}
  //     //   value={this.state.value}
  //     // />
  //     <Recherche  onChangeText={text => this.searchFilterFunction(text)} value={this.state.value} />
  //   );
  // };

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
              // leftAvatar={{ source: { uri: item.picture.thumbnail } }}
              title={`${item.societe}`}
              subtitle={`${item.adresse} ${item.codepostal} ${item.ville}`}
            />
          )}
          keyExtractor={item => item.index}
          ItemSeparatorComponent={this.renderSeparator}
          // ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

export default SearchableList;