import { View, Text, TouchableOpacity, Image, TextInput } from "react-native"
import { estilos } from "./estilos"
import { useEffect, useState } from "react"


export function Sacola({ navigation }) {
    const [CEP, setCEP] = useState('')

    return (
        < >
            <View style={estilos.container}>
                <View style={estilos.prodContainer}>
                    <Image style={estilos.img} source={{ uri: 'https://www.instaagro.com/media/catalog/product/cache/bc47d7e9ba5dbb251b9d69beaf87b1e7/j/a/jacto-xp-12-2.jpg' }} />
                    <View>
                        <Text>Pulverizador Costal Manual {'\n'} Xp12 Jacto - 12l</Text>
                        <Text>R$ 252,51 à vista </Text>
                        <Text>10x de R$ 25,30 sem juros</Text>
                    </View>
                </View>
                <View style={estilos.prodContainer}>
                    <Image style={estilos.img} source={{ uri: 'https://www.instaagro.com/media/catalog/product/cache/bc47d7e9ba5dbb251b9d69beaf87b1e7/l/a/laguna-peixes_vermelho__2.jpg' }} />
                    <View>
                        <Text>Ração Para Peixe Laguna Carnívoros {'\n'} 40 6-8 mm Adm - 25kg</Text>
                        <Text>R$ 163,22 à vista </Text>
                        <Text>10x de R$ 16,35 sem juros</Text>
                    </View>
                </View>
                <View style={estilos.prodContainer}>
                    <Image style={estilos.img} source={{ uri: 'https://www.instaagro.com/media/catalog/product/cache/bc47d7e9ba5dbb251b9d69beaf87b1e7/f/e/fertilizante-revitalizador-para-gramados-vithal---5kg_1.jpg' }} />
                    <View>
                        <Text>Fertilizante Revitalizador Para {'\n'}Gramados Vithal - 5kg</Text>
                        <Text>R$ 78,40 à vista </Text>
                        <Text>10x de R$ 7,84 sem juros</Text>
                    </View>
                </View>
                <View style={estilos.prodContainer}>
                    <Image style={estilos.img} source={{ uri: 'https://www.instaagro.com/media/catalog/product/cache/bc47d7e9ba5dbb251b9d69beaf87b1e7/t/u/tubo-gotejador-turbo-excel-1.6-lh-20cm-2000m---naandanjain_1.jpg' }} />
                    <View>
                        <Text>Tubo Gotejador Turbo Excel 17mm {'\n'} 8mil 1.6  L/h 20cm 2000m - {'\n'} Naandanjain</Text>
                        <Text>R$ 793,12 à vista </Text>
                        <Text>10x de R$ 79,35 sem juros</Text>
                    </View>
                </View>
                <Text>
                    Informe o CEP
                </Text>
                <TextInput
                    label="CPF"
                    value={CEP}
                    onChangeText={setCEP}
                    mode="outlined"
                    placeholder='60.879-098'
                    style={estilos.textinput}
                />

                <TouchableOpacity style={estilos.botao2}>
                    <View>
                        <Image source={require('../../../assets/casa.png')} style={{ width: 30, height: 30 }} />
                    </View>
                    <View>
                        <Text>Receber em casa</Text>
                        <Text>23 dias úteis</Text>
                    </View>
                    <View>
                        <Text>R$ 1.287,25</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botao3}>
                    <View>
                        <Image source={require('../../../assets/barraca.png')} style={{ width: 30, height: 30 }} />
                    </View>
                    <View>
                        <Text>Retirada na loja</Text>
                        <Text>2 horas ápos confirmação de {'\n'} pagamento</Text>
                    </View>
                    <View>
                        <Text>Grátis</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botao4} onPress={() => navigation.navigate('Pagamento')}>
                    <View>
                        <Text>Ir para pagamento</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </>
    )
}