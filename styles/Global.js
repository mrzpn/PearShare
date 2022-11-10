import { StyleSheet } from 'react-native';

export const containers = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 844,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "center",
  },
  header: {
    position: "absolute",
    width: 390,
    height: 135,
    top: 0,
  },
});

export const fonts = StyleSheet.create({
  title: {
    position: "absolute",
    top: 67,
    fontSize: 40,
    color: '#313131',
    fontWeight: "bold",
  },
})