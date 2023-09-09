import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Routes from './routes';
import SplashScreen from '../screens/auth/splash';
import SignUpScreen from '../screens/auth/signup';
import LoginScreen from '../screens/auth/login';
import ConfirmEmailScreen from '../screens/auth/confirmemail';
import InviteCodeScreen from '../screens/auth/invitecode';
import ApproveAccountScreen from '../screens/auth/approveaccount';
import ForgotPasswordScreen from '../screens/auth/forgotpassword';
import PasswordRecoveryScreen from '../screens/auth/passwordrecovery';
import ResetPasswordScreen from '../screens/auth/resetpassword';
import ResetSuccessScreen from '../screens/auth/resetsuccess';
import HomeScreen from '../screens/home';
import HistoryScreen from '../screens/history';
import SettingsScreen from '../screens/settings'
import TabBar from './tabbar';
import FilterScreen from '../screens/history/filter';
import HistoryDetailScreen from '../screens/history/historydetail';
import NfcInfoScreeen from '../screens/home/nfcinfo';
import ScanSuccessScreen from '../screens/home/scansuccess';
import ScanUnSuccessScreen from '../screens/home/scanunsuccess';
import ScanAgainInfoScreen from '../screens/home/scanagaininfo';
import AddDeviceIdScreen from '../screens/home/adddeviceid';
import DeviceIdUnSuccessScreen from '../screens/home/deviceidunsuccess';
import ScanAfterAddIdScreen from '../screens/home/scanafteraddid';
import AddLocationNameScreen from '../screens/home/addlocationname';
import AlreadySetCoordinateScreen from '../screens/home/alreadysetcoordinate';
import ConfirmCoordinateScreen from '../screens/home/confirmcoordinate';
import EditProfileScreen from '../screens/settings/editprofile';
import UpdateNameScreen from '../screens/settings/updatename';
import UpdateEmailScreen from '../screens/settings/updateemail';
import ConfirmNameChangeScreen from '../screens/settings/confirmnamechange';
import RequestSubmitScreen from '../screens/settings/requestsubmit';
import UpdaterOganizationScreen from '../screens/settings/updateorganization';
import ConfirmOrganizationChangeScreen from '../screens/settings/confirmorganizationchange';
import NewCodeSubmitScreen from '../screens/settings/newcodesubmit';
import ChangePasswordScreen from '../screens/settings/changepassword';
import NotificaionScreen from '../screens/home/notification';

const Stack = createStackNavigator();
const HistoryStack = createStackNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HistoryStackScreen() {
    return (
        <HistoryStack.Navigator headerMode='none' initialRouteName={Routes.History}>
            <HistoryStack.Screen name={Routes.History} component={HistoryScreen} />

        </HistoryStack.Navigator>
    );
}


function HomeStackScreen() {
    return (
        <HomeStack.Navigator headerMode='none' initialRouteName={Routes.Home}>
            <HomeStack.Screen name={Routes.Home} component={HomeScreen} />
        </HomeStack.Navigator>
    );
}


function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator headerMode='none' initialRouteName={Routes.Settings}>
            <SettingsStack.Screen name={Routes.Settings} component={SettingsScreen} />
        </SettingsStack.Navigator>
    );
}




function TabNavigator() {
    return (
        <Tab.Navigator tabBarOptions={{ safeAreaInsets: { top: 'never' } }} tabBar={(props) => <TabBar {...props} />} initialRouteName={Routes.Home}>
            <Tab.Screen name={Routes.History} component={HistoryScreen} />
            <Tab.Screen name={Routes.Home} component={HomeScreen} />
            <Tab.Screen name={Routes.Settings} component={SettingsScreen} />
        </Tab.Navigator>
    )
}

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none' initialRouteName={Routes.Notification}>
                <Stack.Screen name={Routes.Splash} component={SplashScreen} />
                <Stack.Screen name={Routes.SignUp} component={SignUpScreen} />
                <Stack.Screen name={Routes.Login} component={LoginScreen} />
                <Stack.Screen name={Routes.ConfirmEmail} component={ConfirmEmailScreen} />
                <Stack.Screen name={Routes.InviteCode} component={InviteCodeScreen} />
                <Stack.Screen name={Routes.ApproveAccount} component={ApproveAccountScreen} />
                <Stack.Screen name={Routes.ForgotPassword} component={ForgotPasswordScreen} />
                <Stack.Screen name={Routes.PasswordRecovery} component={PasswordRecoveryScreen} />
                <Stack.Screen name={Routes.ResetPassword} component={ResetPasswordScreen} />
                <Stack.Screen name={Routes.ResetSuccess} component={ResetSuccessScreen} />
                <Stack.Screen name={Routes.Dashboard} component={TabNavigator} />
                <Stack.Screen name={Routes.Filter} component={FilterScreen} />
                <Stack.Screen name={Routes.HistoryDetail} component={HistoryDetailScreen} />
                <Stack.Screen name={Routes.NfcInfo} component={NfcInfoScreeen} />
                <Stack.Screen name={Routes.ScanSuccess} component={ScanSuccessScreen} />
                <Stack.Screen name={Routes.ScanUnSuccess} component={ScanUnSuccessScreen} />
                <Stack.Screen name={Routes.ScanAgainInfo} component={ScanAgainInfoScreen} />
                <Stack.Screen name={Routes.AddDeviceId} component={AddDeviceIdScreen} />
                <Stack.Screen name={Routes.DeviceIdUnSuccess} component={DeviceIdUnSuccessScreen} />
                <Stack.Screen name={Routes.ScanAfterAddIdScreen} component={ScanAfterAddIdScreen} />
                <Stack.Screen name={Routes.AddLocationName} component={AddLocationNameScreen} />
                <Stack.Screen name={Routes.AlreadySetCoordinate} component={AlreadySetCoordinateScreen} />
                <Stack.Screen name={Routes.ConfirmCoordinate} component={ConfirmCoordinateScreen} />
                <Stack.Screen name={Routes.EditProfile} component={EditProfileScreen} />
                <Stack.Screen name={Routes.UpdateName} component={UpdateNameScreen} />
                <Stack.Screen name={Routes.UpdateEmail} component={UpdateEmailScreen} />
                <Stack.Screen name={Routes.ConfirmNameChange} component={ConfirmNameChangeScreen} />
                <Stack.Screen name={Routes.RequestSubmit} component={RequestSubmitScreen} />
                <Stack.Screen name={Routes.UpdateOrganization} component={UpdaterOganizationScreen} />
                <Stack.Screen name={Routes.ConfirmOrganizationChange} component={ConfirmOrganizationChangeScreen} />
                <Stack.Screen name={Routes.NewCodeSubmit} component={NewCodeSubmitScreen} />
                <Stack.Screen name={Routes.ChangePassword} component={ChangePasswordScreen} />
                <Stack.Screen name={Routes.Notification} component={NotificaionScreen} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;