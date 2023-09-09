import React, { useEffect, useState } from 'react'
import { View, Image, Pressable } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import AppImages from '../../../assets/pngs'
import StyleConfig from '../../../assets/StyleConfig'
import { BgCamera } from '../../../assets/svgs'
import CommonToolbar from '../../../components/custom/commontoolbar'
import { string } from '../../../utils/string'
import styles from './styles'
import { editProfileList } from '../../../utils/const'
import { dummyString } from '../../../utils/dummystring'
import { FlatList } from 'react-native-gesture-handler'
import ItemEditProfile from '../../../components/custom/itemeditprofile'
import { Type_Of_Edit_Profile } from '../../../utils/enum'
import Routes from '../../../router/routes'
import * as ImagePicker from 'react-native-image-picker';
import ModalPicker from '../../../components/custom/modalpicker'



const EditProfileScreen = ({ navigation }) => {
    const [list, setList] = useState(editProfileList)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [imgUri, setImgUri] = useState('https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')

    const handleOnLeftClick = () => {
        navigation.goBack()
    }
    const handleOnModalClose = () => {
        setIsModalOpen(false)
    }
    useEffect(() => {

        list[0].title = dummyString.Person_Name
        list[1].title = dummyString.Email
        list[0].isInEdit = 0
        list[1].isInEdit = 1
        setList([...list])
    }, [])

    const handleOnIconCLick = () => {
        setIsModalOpen(true)
    }
    const handleOnSelectImage = (imgResponse) => {
        setImgUri(imgResponse.uri)
    }

    const handleEditProfileItemPress = (index) => {
        switch (index) {
            case Type_Of_Edit_Profile.Name:
                navigation.navigate(Routes.UpdateName, { isInEdit: list[index].isInEdit, currentName: list[index].title })
                break
            case Type_Of_Edit_Profile.Email:
                navigation.navigate(Routes.UpdateEmail, { isInEdit: list[index].isInEdit })
                break
            case Type_Of_Edit_Profile.ChangePassword:
                navigation.navigate(Routes.ChangePassword)
                break
        }
    }

    const renderItemEdit = (props) => {
        return (<ItemEditProfile {...props} onEditProfileItemPress={handleEditProfileItemPress} />)
    }
    return (
        <SafeAreaView style={styles.saContainer} forceInset={{ top: 'never' }}>
            <CommonToolbar
                title={string.Edit_Profile}
                isLeftButton
                leftIcon={
                    <Image style={styles.iBackIcon}
                        source={AppImages.ic_black_back} />
                }
                onLeftClickListener={handleOnLeftClick}
            />
            <Pressable style={styles.pProfileContainer}>
                <Image source={{ uri: imgUri }} style={styles.iProfile} />
                <Pressable style={styles.pIconContainer} onPress={handleOnIconCLick}>
                    <BgCamera width={StyleConfig.countPixelRatio(50)} height={StyleConfig.countPixelRatio(50)} />
                </Pressable>
            </Pressable>
            <FlatList
                keyExtractor={(item, index) => `FlatList-${index}`}
                data={list}
                overScrollMode='never'
                showsVerticalScrollIndicator={false}
                bounces={false}
                renderItem={renderItemEdit}
            />
            <ModalPicker
                isPickerModalOpen={isModalOpen}
                onSelectImage={handleOnSelectImage}
                pickerModalCloseListener={handleOnModalClose} />
        </SafeAreaView>
    )
}

export default EditProfileScreen