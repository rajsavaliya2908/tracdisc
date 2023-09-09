import moment from "moment"
import { Type_Of_Location } from "./enum"


const dummyString = {
    App_Version: 'v3.0.1',
    Person_Name: 'John Doe',
    Company_Name: 'Apple Corporation Inc',
    Lat: '51.518425',
    Long: '-0.145070',
    Address: '101 Freezeland Lane, London SQ12 7DA',
    DeviceId: '55-4202',
    MacId: '23:344:343:CA',
    Email: 'johndoe98@gmail.com',
    date: 'Thu Apr 22 2021 13:57:38',
    Count: 10

}

const notificationList = [
    {
        day: 'Today',
        list: [
            {
                title: 'New version available for the app. Please update the app',
                date: '2020-04-17 09:20:43'
            },
            {
                title: 'Your last scan was unsuccessful. Please try again in few minutes',
                date: '2020-04-17 08:46:43'
            }
        ]
    },
    {
        day: 'Yesterday',
        list: [
            {
                title: 'Your device coordinates are successfully set.',
                date: '2020-04-16 09:20:43'
            }
        ]
    },
    {
        day: 'This Weekend',
        list: [
            {
                title: 'Your name update request is under review.',
                date: '2020-04-15 09:20:43'
            },
            {
                title: 'Please enable location to start using the app',
                date: '2020-04-13 08:46:43'
            }
        ]
    }

]

const historyList = [
    {
        type: Type_Of_Location.DeviceId,
        deviceid: '34-7610',
        date: moment().toDate(),
        coordinates: {
            lat: '51.518425',
            long: '-0.145070'
        }
    },
    {
        type: Type_Of_Location.Location,
        location: '101 Freezeland Lane, London SQ12 7DA',
        date: moment().toDate(),
        deviceid: '55-4323',
        macid: '23:344:343:CA'
    },
    {
        type: Type_Of_Location.Location,
        location: '101 Freezeland Lane, London SQ12 7DA',
        date: moment().toDate(),
        deviceid: '55-4323',
        macid: '23:344:343:CA'
    },
    {
        type: Type_Of_Location.DeviceId,
        deviceid: '34-7610',
        date: moment().toDate(),
        coordinates: {
            lat: '51.518425',
            long: '-0.145070'
        }
    },
    {
        type: Type_Of_Location.DeviceId,
        deviceid: '34-7610',
        date: moment().toDate(),
        coordinates: {
            lat: '51.518425',
            long: '-0.145070'
        }
    },
]






export {
    notificationList,
    dummyString,
    historyList

}