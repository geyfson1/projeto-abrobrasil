import { View, Text, TouchableOpacity, Image, TextInput } from "react-native"
import { estilos } from "./estilos"
import { BotaoProduto } from "../BotaoProduto"
import { useEffect, useState } from "react"
import { buscarProdutos, pegarProdutoTempoReal } from "../../servicos/firestore"
import { CardProduto } from "../CardProduto"
import { Cabecalho } from '../Cabecalho'
import { Pulverizador } from "../Pulverizador"


export function ListarProdutos({ navigation }) {
    const [produtos, setProdutos] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    async function carregarProdutos() {
        setRefreshing(true)
        const produtosFirestore = await buscarProdutos()
        setProdutos(produtosFirestore)
        setRefreshing(false)
    }
    useEffect(() => {
        carregarProdutos()
        pegarProdutoTempoReal(setProdutos)
    }, [])

    return (
        < >
            <View style={estilos.container}>
                <Image style={estilos.img2} source={{ uri: 'https://img.freepik.com/fotos-gratis/uma-planta-crescendo-no-solo-com-o-sol-brilhando-sobre-ela_1340-38891.jpg?w=1380&t=st=1698060956~exp=1698061556~hmac=d9b40e6217295829379167b642e8a48600e66994cf6100f9767402b10759904c' }} />
                <TextInput
                    label="Pesquisar"
                    mode="outlined"
                    style={estilos.textinput}
                />
                <Text style={{ color: 'white' }}>Produtos de excelente qualidade!</Text>
            </View>
            <View style={{ backgroundColor: 'white'     }}>
                <Text style={{ paddingLeft: '50px' }} >
                    Ofertas especiais {'\n'} Os melhores preços
                </Text>
            </View>
            <View style={estilos.container}>
                <TouchableOpacity style={estilos.prodContainer} onPress={() => navigation.navigate('TuboGotejador')}>
                    <Image style={estilos.img} source={{ uri: 'https://www.instaagro.com/media/catalog/product/cache/bc47d7e9ba5dbb251b9d69beaf87b1e7/t/u/tubo-gotejador-turbo-excel-1.6-lh-20cm-2000m---naandanjain_1.jpg' }} />
                    <Text>Tubo Gotejador Turbo {'\n'} Excel 17mm 8mil 1.6 {'\n'} L/h 20cm 2000m</Text>
                    <Image style={estilos.imgEstrela} source={{ uri: 'https://www.instaagro.com/jacto-pulverizador-costal-manual-xp12-jacto-12l' }} />
                    <Text>R$ 793,12</Text>
                </TouchableOpacity >
                <TouchableOpacity style={estilos.prodContainer} onPress={() => navigation.navigate('Pulverizador')}>
                    <Image style={estilos.img} source={{ uri: 'https://www.instaagro.com/media/catalog/product/cache/bc47d7e9ba5dbb251b9d69beaf87b1e7/j/a/jacto-xp-12-2.jpg' }} />
                    <Text>Pulverizador Costal {'\n'} Manual Xp12 {'\n'} Jacto - 12l</Text>
                     <Image style={estilos.imgEstrela} source={{ uri: 'https://www.instaagro.com/jacto-pulverizador-costal-manual-xp12-jacto-12l' }} />
                    <Text>R$ 252,51</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.prodContainer}>
                    <Image style={estilos.img} source={{ uri: 'https://www.instaagro.com/media/catalog/product/cache/bc47d7e9ba5dbb251b9d69beaf87b1e7/f/e/fertilizante-revitalizador-para-gramados-vithal---5kg_1.jpg' }} />
                    <Text>Fertilizante Revitalizador {'\n'} Para Gramados {'\n'} Vithal - 5kg</Text>
                    <Text>R$ 78,40</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.prodContainer}>
                    <Image style={estilos.img} source={{ uri: 'https://www.instaagro.com/media/catalog/product/cache/bc47d7e9ba5dbb251b9d69beaf87b1e7/l/a/laguna-peixes_vermelho__2.jpg' }} />
                    <Text>Ração Para Peixe {'\n'} Laguna Carnívoros 40 {'\n'} 6-8 mm Adm - 25kg</Text>
                    <Text>R$ 163,22</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ bottom: 0 }} onPress={() => navigation.navigate('Sacola')}>
                    <Image style={{ width: 50, height: 50, borderRadius: 10 }} source={require('../../../assets/btnSacola.png')}/>
                </TouchableOpacity>
            </View>

        </>
    )
}