/* import { View, Text , TextInput, StyleSheet} from 'react-native'
import React from 'react'
import MyButton from '@/components/MyButton'
import { useRouter } from 'expo-router'

const SignUp = () => {
    const router = useRouter();
    const onRegister = () => {
        router.navigate("/login")
    }
  return (
    <View   style={styles.container}>
    <TextInput 
       
      placeholder='Enter Your Email'
    
      style={{
        borderWidth:1,
        height:50,
        paddingHorizontal: 20,
        borderRadius:10,
      
      }}
    />
    <TextInput 
      placeholder='Enter Your '
      style={{
        borderWidth:1,
        height:50,
        paddingHorizontal: 20,
        borderRadius:10,
      }}
    />

<TextInput 
      placeholder='Enter Your Password '
      style={{
        borderWidth:1,
        height:50,
        paddingHorizontal: 20,
        borderRadius:10,
      }}
    />
      <MyButton title={"Register"} onPress={onRegister}/>
  </View>
    
  
  )
}

export default SignUp */

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RouteProp } from '@react-navigation/native';

// // Define the navigation types
// type RootStackParamList = {
//   login: undefined;
//   signUp: undefined;
// };

// type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'signUp'>;
// type SignUpScreenRouteProp = RouteProp<RootStackParamList, 'signUp'>;

// interface SignUpScreenProps {
//   navigation: SignUpScreenNavigationProp;
//   route: SignUpScreenRouteProp;
// }

// const SignUp: React.FC<SignUpScreenProps> = ({ navigation }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>LET'S GET YOU STARTED</Text>
//       <Text style={styles.createAccountText}>Create an Account</Text>

//       {/* Name Input */}
//       <TextInput style={styles.input} placeholder="Your Name" placeholderTextColor="#666" value={name} onChangeText={setName} />

//       {/* Email Input */}
//       <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#666" keyboardType="email-address" value={email} onChangeText={setEmail} />

//       {/* Password Input */}
//       <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#666" secureTextEntry value={password} onChangeText={setPassword} />

//       {/* Sign Up Button */}
//       <TouchableOpacity style={styles.signupButton}>
//         <Text style={styles.signupButtonText}>GET STARTED</Text>
//       </TouchableOpacity>

//       {/* OR Divider */}
//       <Text style={styles.orText}>Or</Text>

//       {/* Login Link */}
//       <TouchableOpacity onPress={() => navigation.navigate('login')}>
//         <Text style={styles.loginText}>
//           Already have an account? <Text style={styles.loginLink}>LOGIN HERE</Text>
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20, justifyContent: 'center' },
//   headerText: { fontSize: 14, color: '#888', textAlign: 'center' },
//   createAccountText: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
//   input: { height: 50, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, paddingHorizontal: 15, marginBottom: 15, fontSize: 16, color: '#333' },
//   signupButton: { backgroundColor: '#000', paddingVertical: 15, borderRadius: 8, alignItems: 'center', marginBottom: 20 },
//   signupButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
//   orText: { textAlign: 'center', fontSize: 16, color: '#666', marginVertical: 10 },
//   loginText: { textAlign: 'center', fontSize: 14, color: '#666' },
//   loginLink: { color: '#007BFF', fontWeight: 'bold' },
// });

// export default SignUp;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>LET'S GET YOU STARTED</Text>
      <Text style={styles.createAccountText}>Create an Account</Text>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        placeholderTextColor="#666"
        value={name}
        onChangeText={setName}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#666"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#666"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signupButton}>
      <Link href={"/Home"} style={styles.signupButtonText}>Get STARTED </Link>
        {/* <Text style={styles.signupButtonText}>GET STARTED</Text> */}
      </TouchableOpacity>

      {/* OR Divider */}
      <Text style={styles.orText}>Or</Text>

      {/* Social Sign Ups */}
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="google" size={24} color="black" />
          <Text style={styles.socialText}>Sign up with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="facebook" size={24} color="black" />
          <Text style={styles.socialText}>Sign up with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="apple" size={24} color="black" />
          <Text style={styles.socialText}>Sign up with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="mobile" size={24} color="black" />
          <Text style={styles.socialText}>Sign up with Mobile</Text>
        </TouchableOpacity>
      </View>

      {/* Login Link */}
      <Text style={styles.loginText}>
          Already have an account? {/* <Text style={styles.loginLink}>SignUp HERE</Text> */}<Link href={"/login"} style={styles.loginLink}> Login Here </Link>
        </Text>

      {/* <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.loginLink}>SignUp HERE</Text>
        </Text>
      </TouchableOpacity> */}
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  createAccountText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,

    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  signupButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginVertical: 10,
  },
  socialLoginContainer: {
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  socialText: {
    fontSize: 16,
    marginLeft: 10,
  },
  loginText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
  },
  loginLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export default SignUp;
