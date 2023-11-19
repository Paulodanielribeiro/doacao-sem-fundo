import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const Home: React.FC = () => {
  const nomeOrganizacao = 'Nome da Organização';
  const tipoDoacao = 'Tipo de Doação';
  const descricao = 'Descrição/Resumo da Organização';

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{nomeOrganizacao}</Text>
      <Text style={styles.subtitle}>{tipoDoacao}</Text>
      <Text style={styles.description}>{descricao}</Text>
    </View>
  );
};

export default Home;