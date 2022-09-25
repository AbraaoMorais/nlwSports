import { useEffect } from 'react';
import { View, Image, FlatList } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png'
import { Gamecard } from '../../components/Gamecard';
import { Heading } from '../../components/Heading';

import { GAMES } from '../../utils/games';

import { styles } from './styles';

export function Home() {

  const API = 'https://nlwsportsbackend.herokuapp.com'
  useEffect(()=>{
    fetch(`${API}/games`)
    .then(res=>console.log(res))

  },[])

  return (
    <View style={styles.container}>
        <Image 
            source={logoImg}
            style={styles.logo}
        />

        <Heading
            title="Encontre seu duo!"
            subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
            data={GAMES}
            keyExtractor={item => item.id}
            renderItem={({item})=>(
                    <Gamecard
                        data={item}
                    />
                )
            }
            contentContainerStyle={styles.contentList}
            showsHorizontalScrollIndicator={false}
            horizontal
        />


    </View>
  );
}