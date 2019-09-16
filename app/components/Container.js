import React from 'react';
import { StyleSheet,View, ScrollView } from 'react-native';

export default class  Container extends React.Component {
    state = {
        screenHeight: 0,
    }; 
    onContentSizeChange = (contentWidth )
    render() {
        const scrollEnabled = false;
        return (
            <ScrollView 
                style={{ flex: 1}} 
                contentContainerStyle={StyleSheet.ScrollView}>
                <View style={StyleSheet.content}> 
                    {this.props.children}
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    Container: { flex: 1, backgroundColor: '#fff',
 }, 
 scrollview: { flexGrow: 1, }
})