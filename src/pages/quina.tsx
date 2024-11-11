import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Ball from '../components/ball';
import { theme, styles } from '../themes/theme';
import { useLottery } from '../hooks/useContext';
import { Results } from '../types/types';

const Quina: React.FC = () => {
  const { results, loading } = useLottery();

  if (loading) {
    return <Text style={{fontSize: theme.fontSizes.text}}>Carregando...</Text>;
  }

  const resultadoQuina:Results | undefined = results?.quina;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MEGA-SENA</Text>
      <View style={styles.ballContainer}>
        {resultadoQuina?.dezenas.map((dezena:number) => (
            <Ball key={dezena} number={dezena} color={theme.colors.quina.background} text={theme.colors.quina.text} spacing={theme.spacing.medium}></Ball>
        ))}
      </View>
      <Text style={styles.subText}>{resultadoQuina?.dataPorExtenso}</Text>
    </View>
  );
};

export default Quina;