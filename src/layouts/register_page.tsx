import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { Images } from '@/interfaces/images/images_css'
import InputText from '@/components/Input_Text'
import { UserType } from '@/interfaces/types/types_user'

//IMAGES
const image = new Images()
export default class RegisterPage extends Component<any, UserType> {
    constructor(props: any) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha: '',
        };
    }

    handleInformations = (key: string, value: string) => {
        this.setState(prevState => ({
            ...prevState,
            [key]: value
        })
        )
    }
    render() {
        const { nome, email, senha } = this.state;
        const { navigation } = this.props
        return (
            <ImageBackground source={image.Background_register} resizeMode='cover' style={{ height: '100%', width: '100%', }} >
                <View style={{ backgroundColor: 'rgba(0,0,0,0.58)', height: '100%', }}>
                    <View style={{ marginTop: '15%', gap: 40, }}>
                        <View>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={image.Logo} style={{ width: 150, height: 150, }} />
                            </View>
                            <View style={{ paddingHorizontal: '5%' }}>
                                <Text style={{ color: 'white', fontSize: 20 }}>Bem-vindo ao DUCKFLIX</Text>
                                <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 20 }}>Faça seu cadastro e aproveite</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: 'center' }}>
                                <Text style={{ color: 'white', textAlign: 'center', paddingBottom: "4%", paddingHorizontal: 8, fontWeight: '600', fontSize: 18 }} >nome:</Text>
                                <InputText placeholder='Ex: Rodrigo Oliveira'
                                    onChangeText={(e) => this.handleInformations('nome', e)}
                                    value={nome} />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: 'center' }}>
                                <Text style={{ color: 'white', textAlign: 'center', paddingBottom: "4%", paddingHorizontal: 8, fontWeight: '600', fontSize: 18 }}>Email:</Text>
                                <InputText placeholder='Exemplo@gmail.com'
                                    onChangeText={(e) => this.handleInformations('email', e)}
                                    value={email} />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: 'center' }}>
                                <Text style={{ color: 'white', textAlign: 'center', paddingBottom: "4%", paddingHorizontal: 8, fontWeight: '600', fontSize: 18 }}>Senha:</Text>
                                <InputText placeholder='mínimo 6 caracteres' secureTextEntry={true}
                                    onChangeText={(e) => this.handleInformations('senha', e)}
                                    value={senha} />
                            </View>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Tab")}
                                style={{ height: 36, borderRadius: 5, backgroundColor: "#FFF607", justifyContent: 'center', width: '40%', marginHorizontal: 'auto' }}>
                                <Text style={{ fontSize: 18, fontWeight: '500', textAlign: 'center' }} >Acessar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Login")}
                                style={{ marginTop: 5 }}>
                                <Text style={{ color: 'white', fontSize: 13 }}>Já tem uma conta? Logar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}


