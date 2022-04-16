import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default class ItemComponente extends Component {
    getEstilo() {
        if (this.props.preco > 0) {
            return {color: 'green'} 
        } else if (this.props.preco == 0) {
            return {color: 'red'}
        } else {
            return {color: 'black'}
        }
    }
    
    render() {
        return(
            <View style={{margin: 5}}>
                <Text>Tarefa: {this.props.nome}</Text>
                <Text style={this.getEstilo()}>Data de termino: {this.props.preco}</Text>
                <Text >Prioridade: {this.props.quantidade}</Text>

                <View style={estilo.areaBotao}>
                    

                    <TouchableOpacity style={estilo.botao2} onPress={ () => this.props.deletar(this.props.id) }>
                    <Text style={{color: 'white'}}>Finalizar Tarefa</Text>
                    </TouchableOpacity>
                    
                                        
                </View>
            </View>
        )
    }
}

const estilo = StyleSheet.create({
    
    botao: {
      width: 100,
      backgroundColor: '#0A66F8',
      alignItems: 'center',
      justifyContent: "center",
      borderRadius: 55,
      padding: 5,
      margin: 5,
      color: 'white'
    },

    botao2: {
        width: 150,
        backgroundColor: '#db021c',
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 55,
        padding: 5,
        margin: 5,
        color: 'white'
      },
    areaBotao: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "center"
    }
  })