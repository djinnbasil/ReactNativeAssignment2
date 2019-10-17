import React, {
  useState,
  useEffect,
} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  FlatList,
  Linking
} from 'react-native';



import { SocialIcon } from 'react-native-elements'


const ArtistsScreen = (props) => {

   navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  function Card1(){

  }
  const [ artists, setArtists ] = useState([]);
  const [ dataLoaded, setDataLoaded ] = useState(false);
  
  useEffect(() => {
    if (!dataLoaded) {
      fetch('https://thawing-hollows-21222.herokuapp.com/artists')
        .then(res => res.json())
        .then(({ data }) => {
          setArtists(data);
          setDataLoaded(true);
        });
    }
  });
  const handlepress = (link) => {

  }
  const keyExtractor = (item) => {
    return `${ item.id }`;
  }

  return (
    
    <FlatList
      data={ artists }
      keyExtractor={ keyExtractor }
      renderItem={({ item }) => {
        return (
        //  <View>
          //  <Text>{ item.name }</Text>
          //</View>
          /*<View class="card text-white bg-dark" style="width: 18rem;float:left;">
  <Image class="card-img-top" source={{uri: "game8.jpg"}} alt="Card image cap"></Image>
  <View class="card-body">
    <Text class="card-title">{item.name}</Text>
    <Text class="card-text">{item.bio}</Text>
    
<Button href={item.website} class="btn btn-primary" title=" Go to Website">Go somewhere</Button>
    
  </View>
</View>*/

 /*<View style={{ alignSelf: 'stretch', height: 200, flexDirection: 'row', margin: 5 }}>
<Image
  style={{ width:600,height:100,flexDirection: 'row' }}
  source={{ uri: 'https://media.npr.org/assets/img/2013/10/23/edmclassical_wide-a8488203c823c5c6389c34c26d5a103c107bcf5c-s800-c85.jpg' }}
/>
<View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', alignSelf: 'flex-end' }}>
  <Text style={{ color: 'white', fontSize: 20, margin: 6 }}>{item.name}</Text>
  <Text style={{ color: 'white', margin: 6 }}>{item.name}</Text>
</View>
</View>*/

<View style={{ flex: 1, alignItems: "center", justifyContent: "center" ,backgroundColor:"#0a0a09",borderWidth:10,borderColor:"red"}}>
        <View style={{ backgroundColor: "#0a0a09", borderRadius: 10, overflow: "hidden" }}>
          <View>
            <Image
              source={{ uri: 'https://media.npr.org/assets/img/2013/10/23/edmclassical_wide-a8488203c823c5c6389c34c26d5a103c107bcf5c-s800-c85.jpg' }}
              style={{
                
                height: 135,
                width: 600
              }}
            />
          </View>
          <View style={{width: 600,alignItems:"center" }}>
            <Text style={{ color: '#e07204',paddingLeft:20, paddingTop: 5,fontSize:50 }}>{item.name}</Text>
            <View style={{flexDirection: 'row',borderRadius:9,padding:10 }} >
              <View style={{ width:100,flexDirection: 'row' }}>
            <Button
         onPress={ ()=>{ Linking.openURL(item.website)}}
         title = "Go to Website"
         color = "black"
         
         style={{borderRadius:30}}
         
      />
      </View>
     
<SocialIcon
  button
  type='medium'
  style={{width:40,height:40}}
  onPress={ ()=>{ Linking.openURL(item.website)}}
  iconColor="red"
  iconStyle={{backgroundColor:"black",width:40,height:40,padding:5}}
/>

<SocialIcon
  button
  type='instagram'
  style={{width:40,height:40}}
  iconColor="red"
  onPress={ ()=>{ Linking.openURL(item.instagram)}}
  iconStyle={{backgroundColor:"black",width:40,height:40,padding:5}}
/>
<SocialIcon
  
  button
  type='facebook'
  style={{width:40,height:40}}
  iconColor="red"
  onPress={ ()=>{ Linking.openURL(item.facebook)}}
  iconStyle={{backgroundColor:"black",width:40,height:40,padding:5}}
/>

<SocialIcon
  type='twitter'
  style={{width:40,height:40}}
  onPress={ ()=>{ Linking.openURL(item.twitter)}}
  iconColor="red"
  iconStyle={{backgroundColor:"black",width:40,height:40,padding:5}}
/>

<SocialIcon
  type='youtube'
  style={{width:40,height:40}}
  onPress={ ()=>{ Linking.openURL(item.twitter)}}
  iconColor="red"
  iconStyle={{backgroundColor:"black",width:40,height:40,padding:5}}
/>
      </View>
     


          </View>
        </View>
      </View>
        );
      }}
    />
  );
}

export default ArtistsScreen;

ArtistsScreen.navigationOptions = {
  title: 'Artists1',
};
