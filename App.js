import React from 'react';
import { StyleSheet, Text, View, TextInput, isTextInputFocused, ScrollView } from 'react-native';
import Search from "./src/components/icons/search.svg";
import Direction from "./src/components/icons/direction.svg";
import Transit from "./src/components/icons/transit.svg";
import Deliver from "./src/components/icons/deliver.svg";
import Accepted from "./src/components/icons/accepted.svg";
import Circle from "./src/components/icons/circle.svg"
import Add from "./src/components/icons/add.svg"
import Choice from "./src/components/icons/choice.svg"
import Email from "./src/components/icons/email.svg"
import TickMark from "./src/components/icons/tick-mark.svg"
import Person from "./src/components/icons/person.svg"
import DirectionCircle from "./src/components/icons/directioncircle.svg"



const App = () => {

  return (

    <ScrollView style={styles.container}>
      <View style={styles.firstPart}>
        <Text style={styles.date}>Saturday, Feb 21</Text>
        <View style={styles.package}>
          <Text style={styles.packageText}>Your Package</Text>
          <Add height={30} width={22} fill={"#8c3bff"} style={{ backgroundColor: "#8c3bff" }} />
        </View>

        {/* {isTextInputFocused && <Search height={25} width={20} fill={"#00FF00"} style={{ position: "absolute", top: 90, left: 30, zIndex: 0}}  />}
        {!isTextInputFocused && <Search height={25} width={20} fill={"#A9A9A9"} style={{ position: "absolute", top: 90, left: 25, zIndex: 20}} />}
    */}
        {/* <Search width={20} height={25} fill={"gray"} style={{ position: "absolute", top: 90, left: 30, zIndex: 20 }} /> */}
        <View>
          <TextInput style={styles.input} placeholder="Search" placeholderTextColor="gray"></TextInput>

        </View>
      </View>

      <View style={{ marginVertical: 30 }}>
        <View style={styles.adressPart}>
          <View style={{ flexDirection: "row" }}>
            <Direction height={30} width={22} fill={"#000000"} />
            <Text style={styles.address}>9826 6371 9902</Text>
          </View>

          <View style={styles.rightIcon}>
            <Circle style={styles.rightMargin} height={8} width={8} fill={"#DAA520"} />
            <Text style={styles.transit}>Transit</Text>
          </View>

        </View>
        <Text style={{ color: "grey", marginLeft: 60 }}>JNCK Express</Text>

        <View style={styles.circles}>
          <Circle style={{ marginLeft: 2 }} height={10} width={10} fill={"#DAA520"} />
          <View style={{height:2,width:80,backgroundColor:"#DAA520"}}></View>
          <DirectionCircle style={{marginLeft:2}} height={20} width={20} fill={"#DAA520"} />
          <View style={{ height: 2, width: 80, backgroundColor: "#d1cfcd", marginLeft:3}}></View>
          <Circle style={{ marginLeft: 2 }} height={8} width={8} fill={"#d1cfcd"} />
          <View style={{ height: 2, width: 80, backgroundColor: "#d1cfcd" }}></View>
          <Circle style={{ marginLeft: 2 }} height={8} width={8} fill={"#d1cfcd"} />
        </View>

        <View>
          <View style={styles.transitDate}>
            <Text style={styles.trackingAdress}>19 Feb, 2021</Text>
            <Text style={styles.trackingAdress}>22 Feb, 2021</Text>
          </View>
          <View style={styles.transitPlace} >
            <Text style={styles.trackingPlace}>Jakarta</Text>
            <Text style={styles.trackingPlace}>Malang</Text>
          </View>
        </View>

      </View>


      <View>
        <Text style={{ fontSize: 24, fontWeight: "bold", fontFamily: "", margin: 15, }}>Tracking</Text>

        <View style={styles.tracking}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Deliver style={styles.leftIcon} height={30} width={30} fill={"#008000"} />
            <View style={styles.adressMargin}>
              <Text style={styles.trackingId}>CKR90825567</Text>
              <Text style={styles.trackingAdress}>Jakarta - Surabaya</Text>
            </View>
          </View>
          <View style={styles.rightIcon}>
            <Circle style={styles.rightMargin} height={8} width={8} fill={"#008000"} />
            <Text style={styles.delivered}>Delivered</Text>
          </View>
        </View>

        <View style={{
          backgroundColor: '#f0fdff',
          marginLeft: 15,
          marginTop: -85,
          borderRadius: 7,
          width: "15%",
          height: 60
        }}>
        </View>


        <View style={styles.tracking}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Transit style={styles.leftIcon} height={30} width={30} fill={"#DAA520"} />
            <View style={styles.adressMargin}>
              <Text style={styles.trackingId}>TRC99470013</Text>
              <Text style={styles.trackingAdress}>Surabaya - Malang</Text>
            </View>
          </View>
          <View style={styles.rightIcon}>
            <Circle style={styles.rightMargin} height={8} width={8} fill={"#DAA520"} />
            <Text style={styles.transit}>Transit</Text>
          </View>
        </View>

        <View style={{
          elevation: 1,
          backgroundColor: "#fffdfa",
          marginLeft: 15,
          marginTop: -85,
          borderRadius: 7,
          width: "15%",
          height: 60
        }}>
        </View>


        <View style={styles.tracking}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Accepted style={styles.leftIcon} height={30} width={30} fill={"#bdbbb9"} />
            <View style={styles.adressMargin}>
              <Text style={styles.trackingId}>2377 9098 2184</Text>
              <Text style={styles.trackingAdress}>Malang - Receiver</Text>
            </View>
          </View>
          <View style={styles.rightIcon}>
            <Circle style={styles.rightMargin} height={8} width={8} fill={"#808080"} />
            <Text style={styles.accepted}>Accepted</Text>
          </View>
        </View>

        <View style={{
          elevation: 1,
          backgroundColor: '#f5f3f0',
          marginLeft: 15,
          marginTop: -85,
          borderRadius: 7,
          width: "15%",
          height: 60
        }}>
        </View>



      </View>

      <View style={styles.lastIcon}>
        <Choice style={styles.leftIcon} height={25} width={25} fill={"#DAA520"} />
        <Email style={styles.leftIcon} height={25} width={25} fill={"#DAA520"} />
        <TickMark style={styles.leftIcon} height={25} width={25} fill={"#DAA520"} />
        <Person style={styles.leftIcon} height={25} width={25} fill={"#DAA520"} />
      </View>


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,

  },
  firstPart: {
    backgroundColor: "#8c3bff",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,

    padding: 20,
  },
  date: {
    fontSize: 15,
    color: "white",
  },
  package: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  packageText: {
    fontSize: 25,
    color: "white",

  },
  plusIcon: {
    height: 25,
    width: 25,
    borderRadius: 25,
    backgroundColor: "blue",
    marginTop: 5,

  },
  textPlus: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    marginLeft: 5,
  },
  input: {
    height: 40,
    borderWidth: .5,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: "darkslateblue",
    padding: 5,
  },
  adressPart: {
    flexDirection: "row",
    alignItems: "center", // yanyana olan elemanları hizaladı
    //justifyContent:"center" merkeze alıyor
    justifyContent: "space-around"

  },
  address: {
    fontSize: 21,
    fontWeight: "bold",
    marginLeft: 10,
  },
  transit: {
    fontWeight: "bold",
    fontSize: 17,
    color: "coral",
    marginRight: 20,
  },
  circles: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginLeft: 35,
    marginRight: 34,
    alignItems: "center",
  },
  transitDate: {
    marginLeft: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    width: "80%",

  },
  transitPlace: {
    marginLeft: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",

  },
  trackingPlace: {
    fontWeight: "bold",
    fontSize: 16,
  },
  tracking: {
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // space-end 
    marginVertical: 35,


  },
  trackingId: {
    fontSize: 20,
    fontWeight: "bold",
  },
  trackingAdress: {
    color: "grey",
  },
  delivered: {
    fontWeight: "bold",
    fontSize: 17,
    color: "green",
    marginRight: 20,
  },
  accepted: {
    fontWeight: "bold",
    fontSize: 17,
    color: "grey",
    marginRight: 20,
  },
  adressMargin: {
    marginLeft: 30,
  },
  leftIcon: {
    marginLeft: 30,
  },
  rightIcon: {
    flexDirection:"row",
    alignItems:"center"
  },
  rightMargin: {
    marginRight:7,
  }, 
  lastIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  datePlace: {
    flexDirection: "row",
    justifyContent: "space-between",
  }

});

export default App;
