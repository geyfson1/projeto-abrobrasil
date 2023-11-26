import { View, Text, TouchableOpacity, Image } from 'react-native';
import { estilos } from './estilos';

export function Pagamento() {
    return (
        < >
           <View style={estilos.container}>
                <TouchableOpacity style={estilos.prodContainer} onPress={() => navigation.navigate('Boleto')}>
                    <view>
                        <Image style={estilos.img} source={require('../../../assets/boleto.png')} />
                    </view>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.prodContainer} onPress={() => navigation.navigate('Cartao_de_credito')}>
                    <view>
                        <Image style={estilos.img} source={require('../../../assets/cartao-decredito.png')} />
                    </view>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.prodContainer} onPress={() => navigation.navigate('Qr_code')}>
                    <view>
                        <Image style={estilos.img} source={require('../../../assets/qr-code.png')} />
                    </view>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.prodContainer} onPress={() => navigation.navigate('Pix')}>
                    <view>
                        <Image style={estilos.img} source={require('../../../assets/pix.png')} />
                    </view>
                </TouchableOpacity>
            </View>

        </>
    )
}


