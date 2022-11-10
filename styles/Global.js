import { Stylesheet } from 'react-native';

const containers = StyleSheet.create({
    container: {
      flex: 1,
      width: 390,
      height: 844,
      flexDirection: "column",
      overflow: "scrollY",
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
    suggested: {
      position: "absolute",
      width: 390,
      height: 200,
      top: 135,
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "space-between",
    },
    nearYou: {
      position: "absolute",
      width: 390,
      height: 240,
      top: 335,
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "space-between",
    },
    expiring: {
      position: "absolute",
      width: 390,
      height: 190,
      top: 565,
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "space-between",
    },
    tile3: {
      width: 115,
      height: 140,
      alignSelf: "flex-end",
      marginBottom: 10,
    },
    tile2: {
      width: 185,
      height: 185,
      alignSelf: "flex-end",
      marginBottom: 10,
    },
});

const fonts = StyleSheet.create({
    title: {
      position: "absolute",
      top: 67,
      fontSize: 40,
      color: '#313131',
      fontWeight: "bold",
    },
    subtitle: {
      position: "absolute",
      width: 275,
      height: 36,
      top: 14,
      fontSize: 20,
      color: '#313131',
      fontWeight: "bold",
    },
    tileTitle: {
      fontSize: 20,
      fontWeight: "bold",
      paddingBottom: 2,
    },
})