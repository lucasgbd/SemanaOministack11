import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Agenda from './pages/Agenda';
import AgendaDetalhes from './pages/AgendaDetalhes';
import Dentista from './pages/Dentista';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Agenda" component={Agenda} />
                <AppStack.Screen name="AgendaDetalhes" component={AgendaDetalhes} />
                <AppStack.Screen name="Dentista" component={Dentista} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}