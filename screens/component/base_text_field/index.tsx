// TextFieldComponent.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { CountryCode } from '../../assests/data';
import Entypo from 'react-native-vector-icons/Entypo';

type textfieldProps = {
  label: string;
  value?: any;
  placeholder?: string;
  secureTextEntry?: boolean;
  onChangeText?: any;
  iconName?: string;
  onIconPress?: () => void;
  keyboardType?: string;
  countryCode?: string;
  onCountryHandler?: () => void;
  passwordIcon?: string;
  onPasswordHandler?: () => void

}

const TextFieldComponent = (props: textfieldProps) => {



  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.input}>
        {props.countryCode ? (
          <TouchableOpacity onPress={props.onCountryHandler} style={{ justifyContent: "center" }}>
            <AntDesign name={props.countryCode} size={20} color="black" />
          </TouchableOpacity>
        ) : false}
        <TextInput
          keyboardType={props.keyboardType}
          value={props.value}
          style={{ width: "85%", fontWeight: "500", marginLeft: 10, color: "#449dfb" }}
          onChangeText={props.onChangeText}
          placeholder={props.placeholder}

          secureTextEntry={props.secureTextEntry}
        />
        {props.iconName ? (
          <TouchableOpacity onPress={props.onIconPress} style={{ justifyContent: "center" }}>
            <AntDesign name={props.iconName} size={20} color="black" />
          </TouchableOpacity>
        ) : false}
        {
          props.passwordIcon ? (
            <TouchableOpacity onPress={props.onPasswordHandler} style={{ justifyContent: "center" }}>
              <Entypo name={props.passwordIcon} size={20} color="black" />
            </TouchableOpacity>
          ) : false}

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: '100%'
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#c9d1db",
    marginLeft: 30,
    fontWeight: "bold"
  },
  input: {
    height: 70,
    borderWidth: 1,
    paddingLeft: 5,
    borderColor: "#bad8fd",
    flexDirection: "row",
    width: '90%',
    marginBottom: 2,
    alignSelf: "center",
    borderRadius: 20
  },
});

export default TextFieldComponent;
