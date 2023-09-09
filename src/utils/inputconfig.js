import { Email, Lock, Office, PasswordHide, User } from "../assets/svgs";
import { Type_Of_ChangePassword_Field, Type_Of_ResetPassword_Field, Type_Of_Signup_Field } from "./enum";
import { string } from "./string";

const InputConfig = {
    SignUpInput: [
        {
            PlaceHolder: string.FullName,
            KeyboardType: 'default',
            ReturnKeyType: 'next',
            AutoCapitalize: 'words',
            LeftIcon: User,
            Type: Type_Of_Signup_Field.FullName
        },
        {
            PlaceHolder: string.Email,
            KeyboardType: 'email-address',
            ReturnKeyType: 'next',
            LeftIcon: Email,
            AutoCapitalize: 'none', //words 
            Type: Type_Of_Signup_Field.EmailAddress
        },
        {
            PlaceHolder: string.Password,
            SecureTextEntry: true,
            KeyboardType: 'default',
            ReturnKeyType: 'done',
            LeftIcon: Lock,
            RightIcon: PasswordHide,
            AutoCapitalize: 'none',
            Length: 20,
            Type: Type_Of_Signup_Field.Password,
            isStrengthCheck: true
        },

    ],
    SignInInput: [
        {
            PlaceHolder: string.Email,
            KeyboardType: 'email-address',
            ReturnKeyType: 'next',
            LeftIcon: Email,
            AutoCapitalize: 'none', //words 
            Type: Type_Of_Signup_Field.EmailAddress
        },
        {
            PlaceHolder: string.Password,
            SecureTextEntry: true,
            KeyboardType: 'default',
            ReturnKeyType: 'done',
            LeftIcon: Lock,
            RightIcon: PasswordHide,
            AutoCapitalize: 'none',
            Length: 20,
            Type: Type_Of_Signup_Field.Password,
            isStrengthCheck: true
        },
    ],
    InviteCode: {
        PlaceHolder: string.InviteCode,
        KeyboardType: 'default',
        ReturnKeyType: 'done',
        AutoCapitalize: 'none',
        LeftIcon: Office,
        Length: 6,
    },
    InviteCodeWithLabel: {
        PlaceHolder: string.InviteCode,
        KeyboardType: 'default',
        ReturnKeyType: 'done',
        AutoCapitalize: 'none',
        LeftIcon: Office,
        Length: 6,
        Label: string.Enter_New_ID
    },
    Email: {
        PlaceHolder: string.Email,
        KeyboardType: 'email-address',
        LeftIcon: Email,
        AutoCapitalize: 'none', //words 
        ReturnKeyType: 'done',
        Label: string.Email_Only

    },
    ForgotPassword: {
        PlaceHolder: string.Email,
        KeyboardType: 'email-address',
        ReturnKeyType: 'done',
        LeftIcon: Email,
        AutoCapitalize: 'none', //words 
    },
    FullName: {
        PlaceHolder: string.FullName,
        KeyboardType: 'default',
        ReturnKeyType: 'done',
        AutoCapitalize: 'words',
        LeftIcon: User,
        Label: string.FullName
    },
    ResetPassword: [
        {
            PlaceHolder: string.Password,
            SecureTextEntry: true,
            KeyboardType: 'default',
            ReturnKeyType: 'next',
            LeftIcon: Lock,
            RightIcon: PasswordHide,
            AutoCapitalize: 'none',
            Length: 20,
            Type: Type_Of_ResetPassword_Field.NewPassword,
            isStrengthCheck: true,
            Label: string.Enter_Password
        },
        {
            PlaceHolder: string.Password,
            SecureTextEntry: true,
            KeyboardType: 'default',
            ReturnKeyType: 'done',
            LeftIcon: Lock,
            RightIcon: PasswordHide,
            AutoCapitalize: 'none',
            Length: 20,
            Type: Type_Of_ResetPassword_Field.ConfirmPassword,
            isStrengthCheck: true,
            Label: string.Create_Password
        },
    ],
    ChangePassword: [
        {
            PlaceHolder: string.Password,
            SecureTextEntry: true,
            KeyboardType: 'default',
            ReturnKeyType: 'next',
            LeftIcon: Lock,
            RightIcon: PasswordHide,
            AutoCapitalize: 'none',
            Length: 20,
            Type: Type_Of_ChangePassword_Field.OldPassword,
            isStrengthCheck: true,
            Label: string.Enter_Old_Password
        },
        {
            PlaceHolder: string.Password,
            SecureTextEntry: true,
            KeyboardType: 'default',
            ReturnKeyType: 'next',
            LeftIcon: Lock,
            RightIcon: PasswordHide,
            AutoCapitalize: 'none',
            Length: 20,
            Type: Type_Of_ChangePassword_Field.NewPassword,
            isStrengthCheck: true,
            Label: string.Enter_Password
        },
        {
            PlaceHolder: string.Password,
            SecureTextEntry: true,
            KeyboardType: 'default',
            ReturnKeyType: 'done',
            LeftIcon: Lock,
            RightIcon: PasswordHide,
            AutoCapitalize: 'none',
            Length: 20,
            Type: Type_Of_ChangePassword_Field.ConfirmNewPassword,
            isStrengthCheck: true,
            Label: string.Confirm_Password
        },
    ]

};
export default InputConfig;
