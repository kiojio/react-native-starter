import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './mainButton.styles';

const MainButton = ({ title, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.button}
  >
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

MainButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default MainButton;
