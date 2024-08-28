import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LogoPage from './Frontend/pages/Logo';
import Create from './Frontend/pages/Create';
import LoginScreen from './Frontend/pages/Login';
import HomePage from './Frontend/pages/Homepage';
import Successmsg from './Frontend/pages/Succemsg';
import Errorsmsg from './Frontend/pages/Errormsg';
import SignUp from './Frontend/pages/Signup';
import Forgetpwd from './Frontend/pages/Forgetpwd';
import Resetpwd from './Frontend/pages/Resetpwd';
import OTPScreen from './Frontend/pages/Otppwd';
import CreateEvent from './Frontend/pages/CreateEvent';
import UpcomingEvents from './Frontend/pages/Upcomingevents';
import RecentsEvents from './Frontend/pages/RecentsEvents';
import Account from './Frontend/pages/Account';
import Eventsdetails from './Frontend/pages/Eventsdetails';
import EventCategory from './Frontend/pages/Listofcategory';
import SelectHobbies from './Frontend/pages/SelectHobbies';
import Payment from './Frontend/pages/Payment';
import Music from './Frontend/Category Screens/Music';
import Sport from './Frontend/Category Screens/Sports';
import Sports from './Frontend/Category Screens/Sports';
import Art from './Frontend/Category Screens/Art';
import Theatre from './Frontend/Category Screens/Theatre';
import Tech from './Frontend/Category Screens/Tech';
import TicketSetting from './Frontend/pages/Ticketsetting';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogoPage">
        <Stack.Screen
          name="LogoPage"
          component={LogoPage}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Create"
          component={Create}
          options={{ title: 'beaware' }} 
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: 'Log in' }} 
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: 'Sign up' }} 
        />
        <Stack.Screen
          name="Forgetpwd"
          component={Forgetpwd}
          options={{ title: 'Forgot Password' }} 
        />
        <Stack.Screen
          name="OTPScreen"
          component={OTPScreen}
          options={{ title: 'Enter OTP' }} 
        />
        <Stack.Screen
          name="Resetpwd"
          component={Resetpwd}
          options={{ title: 'Reset Password' }} 
        />
        <Stack.Screen
          name="SuccessMessage"
          component={Successmsg}
          options={{ title: 'Success' }} 
        />
        <Stack.Screen
          name="ErrorMessage"
          component={Errorsmsg}
          options={{ title: 'Error' }} 
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ title: 'Beaware' }} 
        />
        <Stack.Screen
          name="CreateEvent"
          component={CreateEvent}
          options={{ title: 'Beaware' }} 
        />
        <Stack.Screen
          name="UpcomingEvents"
          component={UpcomingEvents}
          options={{ title: 'Beaware' }} 
        />
        <Stack.Screen
          name="RecentsEvents"
          component={RecentsEvents}
          options={{ title: 'Beaware' }} 
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{ title: 'Beaware' }} 
        />
        <Stack.Screen
          name="Eventsdetails"
          component={Eventsdetails}
          options={{ title: 'Beaware' }} 
        />
        <Stack.Screen
          name="EventCategory"
          component={EventCategory}
          options={{ title: 'Beaware' }} 
        />
        <Stack.Screen
          name="SelectHobbies"
          component={SelectHobbies}
          options={{ title: 'Beaware' }} 
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ title: 'Beaware' }} 
        />
        <Stack.Screen
          name="Music"
          component={Music}
          options={{ title: 'Beaware' }} 
        />
        <Stack.Screen
          name="Sports"
          component={Sports}
          options={{ title: 'Beaware' }} 
        />
        <Stack.Screen
          name="Art"
          component={Art}
          options={{ title: 'Beaware' }} 
        />
        <Stack.Screen
          name="Theatre"
          component={Theatre}
          options={{ title: 'Beaware' }} 
        />
        <Stack.Screen
          name="Tech"
          component={Tech}
          options={{ title: 'Beaware' }} 
        />
        <Stack.Screen
          name="TicketSetting"
          component={TicketSetting}
          options={{ title: 'Beaware' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
    <View >
      <LogoPage />
      <Create />
      <LoginScreen/>
      <SignUp/>
      <Forgetpwd/>
      <Resetpwd/>
      <OTPScreen/>
      <Successmsg/>
      <Errorsmsg/>
      <HomePage/>
      <CreateEvent/>
      <UpcomingEvents/>
      <RecentsEvents/>
      <Account/>
      <Eventsdetails/>
      <EventCategory/>
      <SelectHobbies/>
      <Payment/>
      <Music/>
      <Sports/>
      <Art/>
      <Theatre/>
      <Tech/>
      <TicketSetting/>
  

      {/* <Text>Finally i did it</Text> */}
      <StatusBar style="auto" />
    </View>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});