import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Ball from '../components/ball';
import { theme, styles } from '../themes/theme';
import { useLottery } from '../hooks/useContext';
import { Results } from '../types/types';

const MegaSena: React.FC = () => {
  const { results, loading } = useLottery();

  if (loading) {
    return <Text style={{fontSize: theme.fontSizes.text}}>Carregando...</Text>;
  }

  const resultadoMegaSena:Results | undefined = results?.megasena;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MEGA-SENA</Text>
      <View style={styles.ballContainer}>
        {resultadoMegaSena?.dezenas.map((dezena:number) => (
            <Ball key={dezena} number={dezena} color={theme.colors.megaSena.background} text={theme.colors.megaSena.text} spacing={theme.spacing.medium}></Ball>
        ))}
      </View>
      <Text style={styles.subText}>{resultadoMegaSena?.dataPorExtenso}</Text>
    </View>
  );
};

export default MegaSena;