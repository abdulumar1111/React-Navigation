import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale, verticalScale } from "react-native-size-matters";

const ButtonComponent = ({btnText,onPress}) => {
    return(
        <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
            <Text style={styles.btnTextStyle}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export default ButtonComponent;

const styles = StyleSheet.create({
    btnStyle:{
        backgroundColor:'#45aaf2',
        height:verticalScale(42),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:moderateScale(6),
        marginTop:verticalScale(12)
    },
    btnTextStyle:{
        color:'#fff',
        fontSize:RFValue(16),
        textTransform:'uppercase',
        fontFamily:'Poppins-Regular'
    }
})