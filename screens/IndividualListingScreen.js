import React from 'react';
import { StyleSheet, Text, View, Modal, Image } from 'react-native';

import { containers, fonts  } from '../styles/Global';

import OrangeButton from '../components/OrangeButton';
import IconButton from '../components/BackButton';
import CloseButton from '../components/CloseButton';

export default function IndividualListingScreen() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const quantity = 3;
  const item = 'Pears';
  const title = `${item} (${quantity})`;
  const foodImg = '../assets/pears.jpg';
  const price = "$5";
  const dist = '5 - 10km';
  const exp = '10/8/2022';
  const info = `${price} • ${dist} • exp ${exp}`
  const profile = '../assets/pears.jpg';
  const profileName = "Calvin Venturo"
  const itemDesc = '3 leftover European pears purchased from Woolworths about a week ago.'
  return (
    <View style={[containers.container, {alignItems: 'flex-start'}]}>
      <View style={[containers.header, {flexDirection: 'row'}]}>
        {/* Title */}
        <Text style={fonts.title}>{title}</Text>
        <IconButton src='../assets/back-arrow.png' onPress={() => {}} />
      </View>
      <Image source={require(foodImg)} style={{width: 380, height: 250, borderRadius: 10}} />
      <Text
          style={{fontWeight: 'bold', fontSize: 25, textAlign: 'center'}}
      >{info}</Text>
      <View style={[styles.center, {marginVertical: 20, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}]}>
        <Image source={require(profile)} style={{width: 100, height: 100, borderRadius: 50, marginRight: 20}} />
        <Text style={{fontWeight: 'bold', fontSize: 25}}>{profileName}</Text>
      </View>
      <Text style={{fontWeight: 'bold', fontSize: 25}}>Item Description</Text>
      <Text style={{fontSize: 20}}>{itemDesc}</Text>
      <View style={{width: '100%', marginVertical: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <OrangeButton label='Request' onPress={() => setModalVisible(true)} />
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start', width: '100%'}}>
              <View style={{width: '80%', flexDirection: 'row', justifyContent: "flex-start"}}>
                <Text style={{fontSize: 30, color: '#313131', fontWeight: "bold", marginVertical: 10}}>Request Made!</Text>
              </View>
              <View style={{width: '20%', flexDirection: 'row', justifyContent: "flex-end"}}>
                <CloseButton onPress={() => setModalVisible(!modalVisible)} />
              </View>
            </View>
            <View style={{width: '100%', alignContent: "left"}}>
              <Text style={styles.modalLabel}>{title}</Text>
              <Text style={[styles.modalLabel, {marginBottom: 10}]}>{info}</Text>
              <Text>Request for {title} has been made to the vendor "{profileName}!"</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  nearYou: {
    width: '100%',
    height: 400,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tile2: {
    width: '100%',
    height: 400,
    top: 34,
  },
  tileTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 2,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalView: {
    margin: 20,
    width: '90%',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalLabel: {
    fontWeight: 'bold',
    fontSize: 20
  }
});
