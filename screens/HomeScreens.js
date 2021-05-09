import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
 
} from 'react-native';
import { Header } from 'react-native-elements';

export default class HomeScreen extends React.Component {

constructor(){
super();
this.state = {
  text:"",
  isSearchPressed:false,
   word : "loading...",
   lexicalCategory:'',
   defination : ""

}

}
 
getword=(word)=>{
var searchkeyword = word.toLowerCase()
var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"
console.log(url)
return fetch(url)
.then((data)=>{
if(data.status === 200){

  return data.json()
  
}
else{

  return null
}

})
.then((response)=>{
var responseObject = response

if(responseObject){
var worddata = responseObject.defination[0]
var defination = worddata.description
var lexicalCategory=worddata.wordtype
this.setstate({
"word" : this.state.text,
"defination": defination,
"lexicalCategory":lexicalCategory


})


}
else{
this.setState({
  "word" : this.state.text,
  "defination": "Not Found",

})

}

})

}


render(){

  return(
    <View>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'dictionary app',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
<View>
 <TextInput 
 style= {styles.inputBox}
 onChangeText={text=>{this.setState({

   text:text,
   isSearchPressed:false,
    word : "loading...",
    lexicalCategory:'',
    example : [],
    defination : ""
 })
}}
 value = {this.state.text}
 />   
  <TouchableOpacity style={styles.searchbutton}
  
  onPress={() =>{
    this.setState({isSearchPressed :true});
    this.getword(this.state.text)


  }}>
   <Text> Search </Text> 

    </TouchableOpacity>  
    <View>
      <Text> word:{this.state.word}</Text>
      <Text>type:{this.state.lexicalCategory}</Text>
      <Text>defination:{this.state.defination}</Text>

    </View>
    </View>
</View>





)

}

}
const styles = StyleSheet.create({
  searchbutton:{
width : 120,
height:40,
borderRadius:40

  },
  inputBox:{
width: 200,
height:40,
textAlign:'center'

  },

})