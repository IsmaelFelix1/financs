import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import firebase from '../../services/firebaseConnection';

export default function login() {
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
          <Text style={styles.textoLogin}>Login</Text>
          <TextInput placeholder="Email" style={styles.textInputEmail} />
          <View style={styles.iconInput}>
            <Icon name="mail-outline" color="rgba(0,0,0,0.6)" size={25} />
          </View>

          <TextInput placeholder="Senha" style={styles.textInputPassWord} />
          <View style={styles.iconInput}>
            <Icon name="key-outline" color="rgba(0,0,0,0.6)" size={25} />
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.textEsqueceu}>Esqueceu Senha?</Text>
        </TouchableOpacity>
        <View style={styles.areaBtn}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.textBtn}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.areaFooter}>
        <Text style={styles.textFooter}>Você não tem conta?</Text>
        <TouchableOpacity>
          <Text style={[styles.textFooter, styles.textFooterCadastro]}>Cadastra-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(35,66,20)",
    padding: 16,
  },
  areaLogo: {
    marginTop: 30,
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
    marginLeft: 16,
    marginRight: 16,
  },
  textoLogin: {
    textAlign: "center",
    paddingTop: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  textInputEmail: {
    borderBottomColor: "rgb(35,66,20)",
    borderBottomWidth: 1,
    fontSize: 18,
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
    marginTop: 10,
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
  areaFooter: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 26,
  },
  textFooter: {
    fontSize: 17,
  },
  textFooterCadastro: {
      color: '#FFF',
      fontWeight: 'bold',
      marginTop: 10
  }
});
