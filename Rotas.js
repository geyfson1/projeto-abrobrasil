import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "./src/Componentes/Login"
import { Cadastrar } from "./src/Componentes/CadastrarLogin"
import { ListarProdutos } from "./src/Componentes/ListarProdutos"
import { ManterProdutos } from "./src/Componentes/ManterProdutos"
import { TuboGotejador } from "./src/Componentes/TuboGotejador"
import { Pulverizador } from "./src/Componentes/Pulverizador"
import { Sacola } from "./src/Componentes/Sacola"
import { Pagamento} from "./src/Componentes/Pagamento"

export function Rotas() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator  initialRouteName="Login">
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Cadastrar' component={Cadastrar} />
                <Stack.Screen name='ListarProdutos' component={ListarProdutos} options={{ title: 'Cadastro de Produtos', headerShown: false }} />
                <Stack.Screen name='ManterProdutos' component={ManterProdutos} options={{ title: 'Cadastrar/Atualizar Produtos' }}/>
                <Stack.Screen name='TuboGotejador' component={TuboGotejador} />
                <Stack.Screen name='Pulverizador' component={Pulverizador} />
                <Stack.Screen name='Sacola' component={Sacola} />
                <Stack.Screen name='Pagamento' component={Pagamento} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}