import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { FC, useState } from "react";
import {getWMI} from '../vinService';


const StartPage: FC = () => {
  const [vinInput, setVinInput] = useState<string>("");

  function replaceWrongSymbols(strValue: string) {
    return strValue.replace(/[o,O]/g, '0')
  .replace(/[q,Q]/g, '9')
  .replace(/[i,I]/g, '1').toUpperCase();
  }
  function onInput(value: string) {
    const checkedValue = replaceWrongSymbols(value)
      setVinInput(checkedValue);
  }

  function onConfirm() {
    console.log(getWMI(vinInput));
  }


  return (
    <>
      <Text>Start Page</Text>
      <TextInput value={vinInput} onChangeText={(e) => onInput(e)} style={styles.textInput} />
      <Button title="Confirm" onPress={onConfirm} />

    </>
  );
};

export default StartPage;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#D2E8E3",
    backgroundColor: "#D2E8E3",
    borderRadius: 3,
    width: "100%",
    padding: 7,
    color: '#2C3532',
  },
});
