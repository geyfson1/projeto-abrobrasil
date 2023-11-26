import { View, Text, TouchableOpacity, Image } from 'react-native';
import { estilos } from './estilos';

export function Pulverizador({navigation}) {
    return (
        <View style={estilos.container}>
            <Image style={{ width: 300, height: 300 }} source={{ uri: 'https://www.instaagro.com/media/catalog/product/cache/bc47d7e9ba5dbb251b9d69beaf87b1e7/j/a/jacto-xp-12-2.jpg' }} />
            <Text>
                Pulverizador Costal Manual Xp12 Jacto - 12l {'\n'} R$ 252,51 à vista {'\n'} 10x de R$ 25,30 sem juros
            </Text>
            <View>
                <TouchableOpacity style={{ width: 300, height: 50, marginTop: 10, backgroundColor: 'green', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('Pagamento')}><Text>Comprar</Text></TouchableOpacity>
                
                <TouchableOpacity style={{ width: 300, height: 50, marginTop: 10, borderColor: 'black', borderWidth: 1, borderRadius: 5, justifyContent: 'center', alignItems: 'center'  }} onPress={() => navigation.navigate('Sacola')}><Text>Adicionar a sacola</Text></TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', flexWarp: 'warp', margin: 20 }}>
                <Text style={estilos.text}>Avaliações</Text>
                <Text style={estilos.text}>Informaçôes</Text>
                <Text style={estilos.text}>Formas de pagamento</Text>
            </View>
            <Text style={estilos.text}>
                O Jacto XP é pulverizador costal manual mais leve da Jacto, o que possibilita alta performance com menos esforço e fadiga. Possui design ergonômico e material resistente, ideal tanto para pequenas como grandes áreas de pulverização.
            </Text>

        </View>
    )
}