import { Stack } from "expo-router";
import Index from ".";
import Login from "./login";
import SignUp from "./signup";

export default function RootLayout() {
  

  return (
  
    <Stack screenOptions={{headerShown:false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
      
    </Stack>
   
   
  )
}

