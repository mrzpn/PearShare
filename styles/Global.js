import { StyleSheet } from 'react-native';
import { backgroundColor } from 'styled-system';

export const containers = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    paddingHorizontal: 16
  },
  header: {
    width: 390,
    height: 135,
  },
  header: {
    width: "100%",
    height: 135,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
);

export const fonts = StyleSheet.create({
  title: {
    position: "absolute",
    top: 67,
    fontSize: 40,
    color: '#313131',
    fontWeight: "bold",
  },
  titleWelcome: {
    position: "absolute",
    top: 67,
    fontSize: 40,
    color: '#313131',
    fontWeight: "500",
  },
  titleLogin: {
    position: "absolute",
    fontSize: 32,
    color: '#313131',
    fontWeight: "500",
    marginTop: 240,
  }
})
