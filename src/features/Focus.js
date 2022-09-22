import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

import { colors } from '../utils/colors';
import {spacing} from '../utils/sizes'

import { RoundedButton } from '../components/RoundedButton';

export const Focus = ({addSubjcet}) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label="Focus Item"
          onChangeText={setSubject}
          style={styles.textInput}
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50}  onPress={() => addSubjcet(subject)}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  button: {
    justifyContent: 'center',
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
});
