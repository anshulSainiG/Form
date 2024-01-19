// SignupScreen.js
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal, Pressable } from 'react-native';
import TextFieldComponent from '../component/base_text_field';
import PhoneInput from "react-native-phone-number-input";
import { CountryCode, CountryCodeProps, DateBirth, Gender, GenderProps } from '../assests/data';
import { DateBirthProps } from '../assests/data'
import CheckBox from 'react-native-check-box'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import BaseButton from '../component/base_button';
import AntDesign from 'react-native-vector-icons/AntDesign';
const SignupScreen = () => {
  const [first, setFirstName] = useState('');
  const [errorText, setErrorText] = useState('');
  const [lastName, setLastName] = useState("");
  const [isGenderViewVisible, setIsGenderViewVisible] = useState(false);
  const [selectGender, setSelectGender] = useState<GenderProps>({
    male: '',
    female: ''
  });
  const [phoneno, setPhoneno] = useState("");
  const [phoneerror, setPhoneErrror] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [countrycodeVisible, setCountryCodeVisible] = useState(false);
  const [countrycode, setCountrycode] = useState<CountryCodeProps>({
    code: '',
    dial_code: '',
    name: ''
  });
  const [visiblepassword, setVisiblePassword] = useState(false);
  const [dobvisible, setdobVisible] = useState(false);
  const [selectdob, setSelectdob] = useState<DateBirthProps>({
    id: '',
    date: '',
    month: '',
    year: ''
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [checkbox, setCheckBox] = useState(false);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  console.log("all", allFieldsFilled)




  useEffect(() => {

    //areAllFieldsFilled()
    console.log("dfgdfgff", areAllFieldsFilled)

  }, []);
  const areAllFieldsFilled = () => {
    handleLengthName();
    handlerPhone();
    handlePassword();


  }





  const handleLengthName = () => {
    if (
      (first.length > 0 && first[0] !== first[0].toUpperCase()) ||
      (lastName.length > 0 && lastName[0] !== lastName[0].toUpperCase())
    ) {
      setErrorText('Text first letter should be capitalized');
    } else if ((first.length < 2 || first.length > 50) && (lastName.length < 2 || lastName.length > 50)) {
      setErrorText('Text should be between 2 and 50 characters');
    } else {
      setErrorText('');
    }

  };


  const handleSelectGender = (prev: GenderProps) => {
    setSelectGender(prev);
    setIsGenderViewVisible(false);
  };
  const handlerPhone = React.useCallback(() => {
    if (typeof phoneno === "string") {
      if (phoneno.length === 0) {
        setPhoneErrror('Digit should be required');
      } else if (phoneno.length <= 10) {
        setPhoneErrror('Digit be required only 10 digits require');
      } else {
        setPhoneErrror("");
      }
    }
    else {
      setPhoneErrror("")
    }

  }, [phoneno]);
  const handlerCountryCode = (prev: CountryCodeProps) => {
    console.log("prev", prev)
    setCountrycode(prev);
    setCountryCodeVisible(false)

  }
  const dobHandler = (pre: DateBirthProps) => {
    console.log("pre", pre)
    setSelectdob(pre);
    setdobVisible(false)

  }
  const handlePassword = () => {
    const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,10}$/;

    if (password.length === 0) {
      setPasswordError('Password should be required 8 to 10 characters');
    } else if (!regexPass.test(password)) {
      setPasswordError("Password should include at least one uppercase letter, one special letter, and one digit.");
    } else {
      setPasswordError('');
    }
  };



  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground style={{ height: "100%", width: "100%" }} source={require("../assests/images/signup.jpg")}>
        <View style={{ marginVertical: 15 }}>
          <Text style={{ fontSize: 50, fontWeight: "bold", color: "#3c5070" }}>Sign Up</Text>
          <Text style={{ fontSize: 20 }}>Sign up with</Text>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 30 }}>
          <View style={{ width: 50, height: 50, alignItems: "center", justifyContent: "center", borderRadius: 10, elevation: 1, backgroundColor: "#feffff" }}>
            <Text style={{ fontSize: 30, color: "#64a4fc", fontWeight: "bold" }}>G</Text>
          </View>
          <View style={{ width: 50, height: 50, alignItems: "center", justifyContent: "center", borderRadius: 10, elevation: 1, backgroundColor: "#feffff", marginLeft: 50 }}>
            <Text style={{ fontSize: 30, color: "#64a4fc", fontWeight: "bold" }}>f</Text>
          </View>
        </View>
        <View style={{ marginTop: 50, marginBottom: 15 }}>
          <TextFieldComponent
            label="First Name"
            placeholder="Enter your first name"
            keyboardType='default'
            value={first}
            secureTextEntry={false}
            onChangeText={(text: string) => {
              setFirstName(text);
              handleLengthName();
            }}

            iconName=''
          />
          {first ? <Text style={{ color: "red", fontSize: 12, marginLeft: 30 }}>{errorText}</Text> : null}
          <View style={{ height: 15 }}></View>
          <TextFieldComponent
            label="Last Name"
            placeholder="Enter your last name"
            value={lastName}
            secureTextEntry={false}
            onChangeText={(text: string) => {
              setLastName(text);
              handleLengthName();
            }}

            iconName=''
          />
          {lastName ? <Text style={{ color: "red", fontSize: 12, marginLeft: 30 }}>{errorText}</Text> : null}
          <View style={{ height: 15 }}></View>
          <TextFieldComponent
            label="GENDER"
            placeholder="Select Gender"
            value={selectGender.type}
            secureTextEntry={false}
            onChangeText={() => { }}
            iconName={isGenderViewVisible ? "up" : "down"}
            onIconPress={() => setIsGenderViewVisible(!isGenderViewVisible)}
          />

          {isGenderViewVisible ? (<FlatList
            data={Gender}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={{ width: "78%", height: 50, borderWidth: 2, borderColor: "#bad8fd", alignItems: "center", justifyContent: "center", alignSelf: "center", marginTop: 0 }}>
                <Text
                  style={{ fontSize: 20, color: "#449dfb", fontWeight: "800" }} onPress={() => handleSelectGender(item)}
                >
                  {item.type}
                </Text>
              </View>
            )}
          />
          ) : false}
          <View style={{ height: 15 }}></View>
          <TextFieldComponent
            label="Dob"
            keyboardType=''
            placeholder="Enter dob "
            value={`${selectdob?.date}${selectdob?.month}${selectdob?.year}`}
            secureTextEntry={false}
            onChangeText={() => { }}
            iconName={dobvisible ? "up" : "down"}
            onIconPress={() => setdobVisible(!dobvisible)}
          />
          {
            dobvisible ? <View>
              <FlatList
                data={DateBirth}
                keyExtractor={(item, id) => id.toString()}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity style={{ flexDirection: "row", width: 280, height: 50, justifyContent: "space-between", borderWidth: 1, alignItems: "center", alignSelf: "center", borderColor: "#bad8fd" }} onPress={() => dobHandler(item)}>
                      <Text style={{ color: "#449dfb", fontSize: 20 }}>{item.date}</Text>
                      <Text style={{ color: "#449dfb", fontSize: 20 }}>{item.month}</Text>
                      <Text style={{ color: "#449dfb", fontSize: 20 }}>{item.year}</Text>
                    </TouchableOpacity>
                  )

                }} />
            </View>
              : false

          }
          <View style={{ height: 15 }}></View>

          <TextFieldComponent
            label="MobileNo."
            placeholder="Enter Phoneno."
            keyboardType='phone-pad'
            value={`${countrycode.dial_code}${phoneno}`}

            secureTextEntry={false}
            onChangeText={(text: string) => {
              console.log(text, "slkfsklf");

              setPhoneno(text);
              setCountrycode({
                code: '',
                dial_code: '',
                name: ''
              });
              handlerPhone();
            }} countryCode={countrycodeVisible ? "up" : "down"}
            onCountryHandler={() => setCountryCodeVisible(!countrycodeVisible)}
          />
          {
            countrycodeVisible ? <Modal>
              <View style={{ width: 50, alignSelf: "center" }}>
                <FlatList
                  data={CountryCode}
                  renderItem={({ item }) => {
                    return (
                      <TouchableOpacity style={{ paddingVertical: 10 }} onPress={() => handlerCountryCode(item)}>
                        <Text>
                          {item.dial_code}
                        </Text>
                      </TouchableOpacity>
                    )
                  }} />
              </View>

            </Modal>
              : false}

          {
            phoneno ?
              <View>
                < Text style={{ fontSize: 12, color: "red", marginLeft: 30 }}> {phoneerror}</Text >
              </View >
              : false
          }
          <View style={{ height: 15 }}></View>
          <TextFieldComponent
            label="Password"
            placeholder="Enter your Password"
            keyboardType='default'
            value={password}
            secureTextEntry={visiblepassword ? true : false}
            onChangeText={(text: string) => {
              setPassword(text);
              handlePassword();
            }}

            passwordIcon={visiblepassword ? "eye" : "eye-with-line"}
            onPasswordHandler={() => setVisiblePassword(!visiblepassword)}
          />
          {
            password ?
              <View>
                < Text style={{ fontSize: 12, color: "red", marginLeft: 30 }}> {passwordError}</Text >
              </View >
              : false
          }
          <View style={{ height: 15 }}></View>
          <TextFieldComponent
            label="Confirm Password"
            placeholder="Enter your Password"
            keyboardType='default'
            value={confirmPassword}
            secureTextEntry={visiblepassword ? true : false}
            onChangeText={(text: string) => {
              setConfirmPassword(text);
              handlePassword();
            }}

            passwordIcon={visiblepassword ? "eye" : "eye-with-line"}
            onPasswordHandler={() => setVisiblePassword(!visiblepassword)}
          />
          {
            confirmPassword ?
              <View>
                < Text style={{ fontSize: 12, color: "red", marginLeft: 38 }}> {confirmPasswordError}</Text >
              </View >
              : false
          }
          <View style={{ height: 10 }}></View>
          <View style={{ flexDirection: "row", marginLeft: 30 }}>
            <TouchableOpacity style={{ width: 20, height: 20, borderWidth: 2, borderRadius: 5, borderColor: "black", marginTop: 5 }} onPress={() => setCheckBox(!checkbox)}>
              {
                checkbox ? <AntDesign name="check" size={20} color={"black"} /> : false
              }

            </TouchableOpacity>
            <Text style={{ fontSize: 20, color: "black", marginLeft: 10 }}>I agree</Text>
          </View>

          <View style={{ height: 15 }}></View>
          <BaseButton title={"SignUp"} disabled={!areAllFieldsFilled} />

        </View >

      </ImageBackground >
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default SignupScreen;
