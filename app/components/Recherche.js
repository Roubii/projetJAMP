import React from 'react';
import { SearchBar } from 'react-native-elements';




export default class Recherche extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    let {style} = this.props;




    return (
      <SearchBar
      searchIcon={{name:'search'}}
        inputStyle={style}
        lightTheme
        placeholder="Rechercher"
        onChangeText={this.updateSearch}
        value={search}
        backgroundColor='#fff'
        inputContainerStyle={{backgroundColor: '#fff', borderRadius: 15, borderColor:'red', borderWidth: 2, borderBottomColor:'red', borderBottomWidth: 2}}
        containerStyle={{backgroundColor: 'transparent'}}
        inputStyle={{borderWidth: 0, borderColor: 'transparent', flex:1}}
      />
    );
  }
}