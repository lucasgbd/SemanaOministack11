import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity, Linking  } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';

import logoimg from '../../assets/logo.png';

export default function AgendaDetalhes() {
    const navigation = useNavigation();
    const route = useRoute();

    const agenda = route.params.agenda;
    const message = `Ola ${agenda.nome}. Estou entrando em contato para lembra-lo de verificar sua agenda`;
console.log(agenda);
    function navigateBack() {
        navigation.goBack();
    }

    function sendEmail() {
        MailComposer.composeAsync({
            subject: 'Contato iDentista',
            recipients: [agenda.email],
            body: message
        });
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=3530899757405&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoimg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.agenda}>
                <Text style={[styles.agendaProperty, { marginTop: 0 }]}>Descricao:</Text>
                <Text style={styles.agendaValue}>{agenda.descricao}</Text>

                <Text style={styles.agendaProperty}>Dentista:</Text>
                <Text style={styles.agendaValue}>{agenda.nome}</Text>

                <Text style={styles.agendaProperty}>Email:</Text>
                <Text style={styles.agendaValue}>{agenda.email}</Text>

                <Text style={styles.agendaProperty}>Cidade:</Text>
                <Text style={styles.agendaValue}>{agenda.cidade}</Text>

                <Text style={styles.agendaProperty}>UF:</Text>
                <Text style={styles.agendaValue}>{agenda.uf}</Text>

            </View>

            <View style={styles.contatoBox}>
                <Text style={styles.contatoTitle}>Fale com o dentista</Text>
                <Text style={styles.contatoDescription}>Entre em contato com o dentista</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}