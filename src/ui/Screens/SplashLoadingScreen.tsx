
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { ScreenNames } from "../../system/navigation/ScreenNames";
import { ActivityIndicator, Text } from 'react-native-paper';



const SplashLoadingScreen = () => {

    const navigation = useNavigation();

    const {colors} = useTheme();

    useEffect(() => {

        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [
                    {
                        name: ScreenNames.MainScreen as never,
                        params: {},
                    },
                ],
            });
        }, 2000);

    }, []);


    return (
        <View style={[styles.container, {
            backgroundColor: colors.appBackground,
        }]}>
            <Text
            variant='headlineMedium'
            style={[styles.text, {
                color: colors.textColor
            }]}>Please Wait</Text>
            
            <ActivityIndicator style={styles.indicator} size={'small'} animating={true} color={colors.textColor} />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black'
    },
    indicator: {
        marginTop: 20
    }

});

export default SplashLoadingScreen;