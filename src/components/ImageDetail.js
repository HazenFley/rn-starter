import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageDetail = ({ imageSource, name, employeeTitle }) => {
    // console.log(props);
    return (
        <View>
            {/* <Text>The props passed can have any name we want</Text> */}
            <Image style={styles.squarePhoto} source={imageSource} />
            <Text>
                {name} - {employeeTitle}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    squarePhoto: {
        width: 200,
        height: 200
    }
});

export default ImageDetail;
