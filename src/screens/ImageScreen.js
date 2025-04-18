import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <Image style={styles.headerPhoto} source={require('../../assets/TDX-2025-Garden-1200.jpg')} />
            {/* Properties can be named anything you want */}
            <ImageDetail
                name="Chance"
                imageSource={require('../../assets/ChanceHoskins_2024Headshot_Square_600px.jpg')}
                employeeTitle="Technical Architect"
            />
            <ImageDetail
                name="Scott"
                imageSource={require('../../assets/ScottFenton_2024Headshot_Square_600px.jpg')}
                employeeTitle="Salesforce Consultant"
            />
            <ImageDetail
                name="Jim"
                imageSource={require('../../assets/JimBartek_2024Headshot_Square_600px.jpg')}
                employeeTitle="CEO & Business Architect"
            />
            <ImageDetail
                name="Michael"
                imageSource={require('../../assets/Michael-headshot-2025-web-e1741557416502.jpg')}
                employeeTitle="Salesforce Consultant"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    headerPhoto: {
        maxWidth: 400,
        maxHeight: 150,
        objectFit: 'contain'
    }
});

export default ImageScreen;
