import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity  } from 'react-native';

import logoimg from '../../assets/logo.png';

import styles from './styles';
import api from '../../services/api';

export default function Agenda() {
    const [agendas, setAgendas] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigateToAgendaDetalhes(agenda) {
        navigation.navigate('AgendaDetalhes', { agenda });
    }

    async function loadAgendas(){

        if (loading){
            return;
        }

        if (total > 0 && agendas.length === total){
            return;
        }

        setLoading(true);

        const response = await api.get('agenda', {
            params: {page}
        });

        setAgendas([...agendas, ...response.data]);

        setTotal(response.headers['x-total-count']);

        setPage(page + 1);
        setLoading(false);
    };

    useEffect(() => {
        loadAgendas();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoimg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total}</Text> agendas
                </Text>
            </View>
            
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha uma das agendas abaixo.</Text>

            <FlatList 
                data={agendas}
                style={styles.agendaList}
                keyExtractor={agenda => String(agenda.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadAgendas}
                onEndReachedThreshold={0.2}
                renderItem={({item : agenda}) => (
                    <View style={styles.agenda}>
                        <Text style={styles.agendaProperty}>Descricao:</Text>
                        <Text style={styles.agendaValue}>{ agenda.descricao }</Text>

                        <Text style={styles.agendaProperty}>Dentista:</Text>
                        <Text style={styles.agendaValue}>{ agenda.nome }</Text>

                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={() => {navigateToAgendaDetalhes(agenda)}}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />
            
        </View>
    );
}