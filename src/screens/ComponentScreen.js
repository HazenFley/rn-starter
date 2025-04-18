import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = 'Konnichi wa';
    const arrayNumbers = [1, 2, 3, 4, 5, 6];
    const jsObjectsFail = { color: 'blue' }; //this does not work, no JS objects
    const jsxTextElementExample = <Text style={styles.secondaryTextStyling}>This allows us to pass JSX objects!</Text>;

    // returning all of this inside parens allows multi line statements
    // Alternatively we could remove the parens, but the first <View> must be on the same line, no break
    return (
        <View>
            <Text style={styles.textStyle}>Component Screen</Text>
            <Text>Some additional text goes here, just without styling</Text>
            <Text style={styles.secondaryTextStyling}>{greeting}</Text>
            <Text style={styles.secondaryTextStyling}>{arrayNumbers}</Text>
            {jsxTextElementExample}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    secondaryTextStyling: {
        fontSize: 20
    }
});

export default ComponentsScreen;
