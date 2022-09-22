import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes } from '../utils/sizes';
import { spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return null;

  const ListItem = ({ item }) => {
    return <Text style={styles.item}>- {item}</Text>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we focused on:</Text>
      <FlatList data={history} renderItem={ListItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1
  },

  item: {
    paddingTop: spacing.sm,
    fontSize: fontSizes.md,
    color: colors.white,
  },

  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
});
