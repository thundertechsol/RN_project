

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, List } from 'react-native-paper';



const MainScreen = () => {

  const navigation = useNavigation();

  const { colors } = useTheme();
  const [sampleData, setSampleData] = useState([
    {
      heading: "29 May, 2023",
      subHeading: "3 Appointements",
      icon: "calendar-outline",
      subData: [
        { id: 1, itemHeading: "Morning", itemSubHeading: '07:30 am', bgColor: '#A83E3277' },
        { id: 2, itemHeading: "Afternoon", itemSubHeading: '02:30 pm', bgColor: '#32A86677' },
        { id: 3, itemHeading: "Evening", itemSubHeading: '07:30 pm', bgColor: '#8232A877' },
      ]
    },
    {
      heading: "28 June, 2023",
      subHeading: "4 Appointements",
      icon: "calendar-outline",
      subData: [
        { id: 1, itemHeading: "Morning", itemSubHeading: '07:30 am', bgColor: '#A83E3277' },
        { id: 2, itemHeading: "Morning", itemSubHeading: '09:30 am', bgColor: '#32A86677'},
        { id: 3, itemHeading: "Afternoon",itemSubHeading: '02:30 pm', bgColor: '#8232A877' },
        { id: 4, itemHeading: "Afternoon", itemSubHeading: '04:30 pm', bgColor: '#3236A877' }
      ]
    },
    {
      heading: "05 July, 2023",
      subHeading: "5 Appointements",
      icon: "calendar-outline",
      subData: [
        { id: 1, itemHeading: "Morning", itemSubHeading: '07:30 am', bgColor: '#A83E3277' },
        { id: 2, itemHeading: "Morning", itemSubHeading: '09:30 am', bgColor: '#32A86677'},
        { id: 3, itemHeading: "Afternoon",itemSubHeading: '02:30 pm', bgColor: '#8232A877' },
        { id: 4, itemHeading: "Afternoon", itemSubHeading: '04:30 pm', bgColor: '#3236A877' },
        { id: 5, itemHeading: "Evening", itemSubHeading: '09:30 pm', bgColor: '#A83E3277' }
      ]
    }
  ])

  useEffect(() => {

  }, []);


  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.appBackground,
    }}>

      <ScrollView style={{
        flex: 1,
        width: '90%',
        marginTop: 10,
        borderRadius: 8,

      }}>
        <List.Section >
          {sampleData?.map((obj) => (
            <List.Accordion
              
              title={obj.heading}
              titleStyle={{color: 'black'}}
              description={obj.subHeading}
              descriptionStyle={{color: 'gray'}}
              left={props => <List.Icon {...props} icon={obj.icon} color='black'/>}
            >
              {obj?.subData.map((subObj) => (
                <List.Item 
                style={{
                  backgroundColor: subObj.bgColor
                }}
                title={subObj.itemHeading}
                description={subObj.itemSubHeading}
                descriptionStyle={{
                  color: 'gray'
                }}
                  onPress={() => {
                    Alert.alert(obj.heading + " " + subObj.itemHeading + " Clicked!");
                  }} />
              ))
              }


            </List.Accordion>
          ))}


        </List.Section>

      </ScrollView>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    color: 'black'
  }

});

export default MainScreen;