import MyButton from "@/components/MyButton";
import React, { useEffect } from 'react';
import { useRouter } from "expo-router";
import { StyleSheet, Text, View, Image ,TouchableOpacity} from "react-native";
import { Link } from 'expo-router';

export default function Index() {

  /* const SplashScreen = ({ navigation }) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        navigation.replace("login"); // Ensure 'Home' is spelled exactly as in App.js
      }, 3000);
      
      return () => clearTimeout(timer); // Cleanup timeout on unmount
    }, [navigation])}; */

   const router = useRouter();
   const onContinue =() => {
    router.navigate("/login")
   }
  return (
    <View style={styles.container}>
     {/*   <TouchableOpacity onPress={() => navigation.navigate('index')}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      </TouchableOpacity> */}

      
       {/* <Text style={styles.screen}>UrbanCrew</Text> */}
       {/* <MyButton title={"Get Started"} onPress={onContinue}/> */}
       <Link href={"/login"} style={styles.loginLink}>  <Image source={require('../assets/images/logo.png')} style={styles.logo} /> </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex:1,
    // marginTop:350,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff"
    
  } ,
  screen: {
    fontSize:36,
    color: "darkblue",
    textAlign: "center", 
    fontFamily: "",
    fontWeight: "bold" ,
    fontStyle:"italic"
  },
  logo:{
   width: 250,
   height: 350
  },
  loginLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },

})


// import React, { useEffect } from "react";
// import { View, Image, Text, StyleSheet } from "react-native";
// import { StackNavigationProp } from "@react-navigation/stack";
// import 

// type SplashScreenNavigationProp = StackNavigationProp <RootStackParamList, "SplashScreen">;

// type Props = {
//   navigation: SplashScreenNavigationProp;
// };

// const Index: React.FC<Props> = ({ navigation }) => {
//   useEffect(() => {
//     setTimeout(() => {
//       navigation.replace("login");
//     }, 3000); // Navigate to Login after 3 seconds
//   }, [navigation]);

//   return (
//     <View style={styles.container}>
//       <Image source={require("../assets/images/logo.png")} style={styles.logo} />
//       {/* <Text style={styles.text}>UrbanCrew</Text> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//   },
//   logo: {
//     width: 150,
//     height: 150,
//     resizeMode: "contain",
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#000",
//     marginTop: 20,
//   },
// });

// export default Index;
