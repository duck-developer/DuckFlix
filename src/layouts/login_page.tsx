import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { Images } from '@/interfaces/images/images_css'
import InputText from '@/components/Input_Text'
import { UserType } from '@/interfaces/types/types_user'

//Images
const image = new Images()


export default class LoginPage extends Component<any, UserType> {
    constructor(props: any) {
        super(props);
        this.state = {
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
        const { email, senha } = this.state;
        const { navigation } = this.props
        return (
            <ImageBackground source={image.Background_login} resizeMode='repeat' style={{ height: '100%', width: '100%', }} >
                <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', height: '100%', justifyContent: "center" }}>
                    <View style={{ backgroundColor: 'rgba(0,0,0,0.3)', height: "20%", position: 'absolute', top: 0, width: '100%' }}></View>
                    <View style={{ alignItems: 'center', gap: 40 }}>

                        <View>
                            <Image source={image.Logo} style={{ width: 140, height: 140, marginBottom: -15 }} />
                            <Text style={{ color: 'white', textAlign: 'center', fontWeight: '700', fontSize: 20 }}>DUCKFLIX</Text>
                        </View>

                        <View style={{ width: 'auto' }}>
                            <View style={{ marginBottom: 12 }}>
                                <InputText placeholder='Digite o seu email...'
                                    onChangeText={(e) => this.handleInformations('email', e)}
                                    value={email} />
                                <InputText placeholder='Digite a sua senha...'
                                    onChangeText={(e) => this.handleInformations('senha', e)}
                                    value={senha}
                                    secureTextEntry={true} />
                            </View>

                            <TouchableOpacity
                                onPress={() => navigation.navigate("Tab")}
                                style={{ height: 36, borderRadius: 5, backgroundColor: "#FFF607", justifyContent: 'center' }}>
                                <Text style={{ fontSize: 18, fontWeight: '500', textAlign: 'center' }} >Acessar</Text>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity>
                                    <Text style={{ color: 'white', fontSize: 13 }}>Esqueceu a senha?</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                                    <Text style={{ color: 'white', fontSize: 13 }}>Cadastrar-se</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>

            </ImageBackground>
        )
    }
}