import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const employeeArray = [
    { name: 'Chance' },
    { name: 'Scott' },
    { name: 'Jim' },
    { name: 'Carissa' },
    { name: 'Matt' },
    { name: 'Tanya' },
    { name: 'Ryan' },
    { name: 'Michael' }
];

// keys must be strings! Must be unique.
const employeeArrayWithKey = [
    { name: 'Chance Hoskins', key: 'CH' },
    { name: 'Scott Fenton', key: 'SF' },
    { name: 'Jim Bartek', key: 'JB' },
    { name: 'Carissa Bartek', key: 'CB' },
    { name: 'Matt Irwin', key: 'MI' },
    { name: 'Tanya Morant', key: 'TM' },
    { name: 'Ryan Miller', key: 'RM' },
    { name: 'Michael Olawunmi', key: 'MO' }
];

const ListScreen = () => {
    return (
        <View>
            <Text style={styles.header}>List Screen</Text>
            <FlatList
                // requires `data` and `renderItem` props

                data={employeeArray}
                // you would think this would work, but the element is not just the objet in the array
                // renderItem={(element) => {
                //     element === { item: {name: 'Chance' }, index: 0}
                // }}>

                // this example has no key!
                renderItem={({ item }) => {
                    return <Text>{item.name}</Text>;
                }}

                // using FlatList without a key will mean it will delete the ENTIRE array if any changes happen
                // better to use a key, which improves performance
            ></FlatList>

            <Text style={styles.header}>List with Key</Text>
            <FlatList
                data={employeeArrayWithKey}
                renderItem={({ item }) => {
                    return <Text>{item.name}</Text>;
                }}
                keyExtractor={employee => employee.key}
            ></FlatList>

            <Text style={styles.header}>Horizontal List</Text>
            <FlatList
                horizontal={true}
                data={employeeArrayWithKey}
                renderItem={({ item }) => {
                    return <Text>{item.name}</Text>;
                }}
                keyExtractor={employee => employee.key}
            ></FlatList>

            <Text style={styles.header}>Horizontal Disabled Scroll</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={employeeArrayWithKey}
                renderItem={({ item }) => {
                    return <Text>{item.name}</Text>;
                }}
                keyExtractor={employee => employee.key}
            ></FlatList>

            <Text style={styles.header}>List with Styling</Text>
            <FlatList
                data={employeeArrayWithKey}
                renderItem={({ item }) => {
                    return <Text style={styles.textStyle}>{item.name}</Text>;
                }}
                keyExtractor={employee => employee.key}
            ></FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 30
    },
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;
