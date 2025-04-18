import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    // props is always given, so we usually set it as the first received property
    // we can see all the available properties passed
    // console.log('Homescreen props', props);
    // one of the important ones is the navigation prop
    // console.log(props.navigation);

    // Destructuring the `props`
    // Instead of referencing `props.navigation.navigate` every time
    // Which would require `const HomeScreen = props => {`
    // We can just get the navigation since that is all we are using
    // Mark it with the brackets like above, then you can directly reference
    return (
        <View>
            <Text style={styles.text}>Ya boy Chance</Text>
            <Text style={styles.text}>Makin An App</Text>

            {/* Buttons are nice, but not very customizable */}
            {/* But they come with default styling */}
            <Button
                title="Go to Component Screen"
                onPress={() => {
                    // console logs will show up in the terminal
                    console.log('Go to Component Screen Button pressed');
                    // props.navigation.navigate('Components');
                    navigation.navigate('Components');
                }}
            />

            <Button
                title="Go to List Page"
                onPress={() => {
                    // console logs will show up in the terminal
                    console.log('Go to List Screen Button pressed');
                    // props.navigation.navigate('List');
                    navigation.navigate('List');
                }}
            />

            {/* The better way to handle things is this component */}
            <TouchableOpacity
                onPress={() => {
                    // console logs will show up in the terminal
                    console.log('Go to List Screen Button pressed');
                    // props.navigation.navigate('List');
                    navigation.navigate('List');
                }}
            >
                {/* Clicking on this will cause it to fade out for a moment, showing interaction */}
                <Text>Go to List Page</Text>
                <Text>Everything inside is one button</Text>
                <Text>Useful for like photos, maybe</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;
