import { StyleSheet } from 'react-native';

export const containers = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    paddingHorizontal: 16
  },
  header: {
    width: "100%",
    height: 135,
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