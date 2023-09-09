import { LocationDashboard, EditProfileEmail, EditProfilePassword, OrganizationSettings, ScanDashboard, StatusSettings, UserSettings } from "../assets/svgs"
import { string } from "./string"

const constant = {

    //Facebook Permission
    Public_Permission: 'public_profile',
    Email_Permission: 'email',


    //Firebase error code

    Invalid_Verification_Code: 'auth/invalid-verification-code',




    //Firebase Doc and Ref
    // Users: 'Users',




    //Firebase Key



    //Firebase Query
    Less_Than: '<',
    Less_Than_Equal_To: '<=',
    Equal_To: '==',
    Greater_Than: '>',
    Greater_Than_Equal_To: '>=',
    Is_Not_Equal_To: '!=',
    Array_Contains: 'array-contains',
    Array_Contains_Any: 'array-contains-any',
    In: 'in',
    Not_In: 'not-in',

    //Manual Code
    // Number_Not_Found: 'auth/number-not-found',

}
const filterList = [
    {
        title: 'By User',
        list: [
            { title: 'Anthony Buchholz' },
            { title: 'Carl Haworth' },
            { title: 'Lloyd Barger' },
            { title: 'Steven Rodrigues' }
        ]
    },
    {
        title: 'By Time',
        list: [
            { title: 'Last 7 Days' },
            { title: 'Last 15 days' },
            { title: 'Last 30 days' },
            { title: 'Last 120 days' },
            { title: 'Custom Date', isDatePicker: true }
        ]
    },
    {
        title: 'By Type',
        list: [
            { title: 'NFC Scan' },
            { title: 'Set Coordinates' },
        ]
    }
]

const dashboardList = [
    {
        title: 'Scan NFC Tag',
        icon: ScanDashboard
    },
    {
        title: 'Set Device Coordinates',
        icon: LocationDashboard
    }
]

const settingList = [
    {
        icon: UserSettings,
        title: 'Role Profile'
    },
    {
        title: 'Account Status',
        icon: StatusSettings
    },
    {
        title: 'Organisation ID',
        icon: OrganizationSettings
    }
]

const editProfileList = [
    {
        icon: UserSettings,
        label: 'Name',
        info: string.Name_Update_Under_Review
    },
    {
        label: 'Email',
        icon: EditProfileEmail,
        info: string.Email_Update_Under_Review
    },
    {
        icon: EditProfilePassword,
        title: 'Change Password'
    }
]


export { constant, settingList, filterList, dashboardList, editProfileList }