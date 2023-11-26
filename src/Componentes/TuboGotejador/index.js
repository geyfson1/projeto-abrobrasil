import { View, Text, TouchableOpacity, Image } from 'react-native';
import { estilos } from './estilos';

export function TuboGotejador({navigation}) {
    return (
        <View style={estilos.container}>
            <Image style={{ width: 300, height: 300 }} source={{ uri: 'https://www.instaagro.com/media/catalog/product/cache/bc47d7e9ba5dbb251b9d69beaf87b1e7/t/u/tubo-gotejador-turbo-excel-1.6-lh-20cm-2000m---naandanjain_1.jpg' }} />
            <Text>
                Tubo Gotejador Turbo Excel {'\n'} 17mm 8mil 1.6 L/h 20cm 2000m {'\n'} R$ 793,12
            </Text>
            <View>
                <TouchableOpacity style={{ width: 300, height: 50, marginTop: 10, backgroundColor: 'green', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('Pagamento')}><Text>Comprar</Text></TouchableOpacity>
                
                <TouchableOpacity style={{ width: 300, height: 50, marginTop: 10, borderColor: 'black', borderWidth: 1, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('Sacola')}><Text>Adicionar a sacola</Text></TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', flexWarp: 'warp', margin: 20 }}>
                <Text style={estilos.text}>Avaliações</Text>
                <Text style={estilos.text}>Informaçôes</Text>
                <Text style={estilos.text}>Formas de pagamento</Text>
            </View>
            <Text style={estilos.text}>
                Excelente desempenho hidráulico, permitindo instalações de laterais mais longas. Inovadora linha de tubo gotejadores planos com o gotejador de labirinto mais avançado do mercado: durabilidade máxima, precisão e resistência ao entupimento.
            </Text>

        </View>
    )
}