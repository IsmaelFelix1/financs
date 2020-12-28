import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import firebase from "../../services/firebaseConnection";
import "react-native-gesture-handler";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.areaLogo}>
        <Image
          source={require("../../assets/img/money.png")}
          style={styles.imageLogo}
        />
      </View>
      <View style={styles.areaLogin}>
        <View style={styles.dentroAreaLogin}>
          <TextInput
            placeholder="Nome"
            style={styles.textInputName}
            autoCorrect={false}
            autoCapitalize="none"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <View style={styles.iconInputPerson}>
            <Icon name="person-outline" color="rgba(0,0,0,0.6)" size={25} />
          </View>
          <TextInput
            placeholder="Email"
            style={styles.textInputEmail}
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <View style={styles.iconInput}>
            <Icon name="mail-outline" color="rgba(0,0,0,0.6)" size={25} />
          </View>

          <TextInput
            placeholder="Senha"
            style={styles.textInputPassWord}
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <View style={styles.iconInput}>
            <Icon name="key-outline" color="rgba(0,0,0,0.6)" size={25} />
          </View>
        </View>
        <View style={styles.areaBtn}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.textBtn}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(35,66,20)",
    paddingTop: 10,
    paddingLeft: 16,
    paddingRight: 16,
  },
  areaLogo: {
    marginTop: 20,
    alignItems: "center",
  },
  imageLogo: {
    height: 150,
    width: 150,
  },
  areaLogin: {
    marginTop: 30,
    backgroundColor: "#FFF",
    borderRadius: 25,
    borderWidth: 2,
    height: 300,
  },
  dentroAreaLogin: {
    marginTop: 20,
    marginLeft: 16,
    marginRight: 16,
  },
  textInputName: {
    borderBottomColor: "rgb(35,66,20)",
    borderBottomWidth: 1,
    fontSize: 18,
  },
  textInputEmail: {
    borderBottomColor: "rgb(35,66,20)",
    borderBottomWidth: 1,
    fontSize: 18,
    marginTop: 10
  },
  iconInputPerson: {
    alignItems: 'flex-end',
    marginTop: -37
  },
  iconInput: {
    alignItems: "flex-end",
    marginTop: -37,
  },
  textInputPassWord: {
    borderBottomColor: "rgb(35,66,20)",
    borderBottomWidth: 1,
    fontSize: 18,
    marginTop: 16,
  },
  textEsqueceu: {
    margin: 16,
    color: "#rgb(35,66,20)",
    fontWeight: "bold",
  },
  areaBtn: {
    alignItems: "center",
    marginTop: 40,
    flex: 1,
  },
  btn: {
    backgroundColor: "rgb(35,66,20)",
    width: 226,
    height: 46,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textBtn: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
