import React, { useState } from 'react';
import { Image } from "expo-image";
import { Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {WebView} from "react-native-webview";

export default function app(){
  const [showWebView, setShowWebView] = useState(false);
  return(
    <ScrollView contentContainerStyle={{ padding: 32, gap: 16 }}>
<Image source="https://github.com/Eric-Pinheiro.png" style={{width:100, height:100, borderRadius:100}}/>
<Text style={{fontSize:24}}>Éric Pinheiro</Text>
<TouchableOpacity
        style={styles.button}
        onPress={() => setShowWebView(true)}
      >
        <Text style={styles.buttonText}>Ver meu GitHub</Text>
      </TouchableOpacity>
<Modal visible={showWebView} animationType="slide">
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setShowWebView(false)}
          >
            <Text style={styles.closeText}>Fechar</Text>
          </TouchableOpacity>
          <WebView source={{ uri:"https://github.com/Eric-Pinheiro"}} />
        </View>
      </Modal>
      <Pressable
      style={styles.button}
      onPress={() => alert('Bu!')}
    >
      <Text style={styles.buttonText}>Um botão!?</Text>
    </Pressable>
  </ScrollView>
)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#1E88E5',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#000',
    padding: 10,
    alignItems: 'center',
  },
  closeText: {
    color: '#fff',
    fontSize: 16,
  },
});