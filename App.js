import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const screenWidth = Dimensions.get('window').width;
const buttonWidth = screenWidth * 0.25;



export default class hubcenter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputNome: '',
      nome: ''
    };

    this.nomeInput = this.nomeInput.bind(this);
  }

  nomeInput() {
    if (this.state.inputNome.length <= 0) {
      alert('Digite seu nome.');
      this.setState({
        nome: ''
      })
      return;
    }

    this.setState({
      nome: ('Bem vindo, ' + this.state.inputNome)
    });
  }

  render() {
    return (

      <View style={styles.container}>

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder='Digite seu nome'
          placeholderTextColor="rgba(238, 238, 238, 0.5)"
          value={this.state.inputNome}
          onChangeText={(text) => this.setState({ inputNome: text })}
        />

        <Text style={styles.texto}>{this.state.nome}</Text>

        <TouchableOpacity
          onPress={this.nomeInput}
          style={styles.botao}>
          <Text style={styles.botaoTexto}>Alterar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    justifyContent: 'center', 
    alignItems: 'center',   
  },
  input: {
    marginTop: 50,
    height: 45,
    borderWidth: 1,
    borderColor: '#eee',
    marginHorizontal: 10,
    fontSize: 20,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    color: '#eee',width: screenWidth * 0.8, 
    alignSelf: 'center',
    textAlign: 'center', 
  },
  
  texto: {
    textAlign: 'center',
    fontSize: 25,
    paddingBottom: 50,
    paddingTop: 50,
    color: '#eee'
  },
  botao: {
    margin: 30,
    width: buttonWidth,
    height: buttonWidth,
    backgroundColor: 'transparent',
    borderColor: '#eee',
    borderWidth: 1,
    color: '#eee',
    padding: 10,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#eee',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

/*
flexDirection: 'column',
justifyContent:'center'
*/ 