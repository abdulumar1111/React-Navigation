import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#333'
    },
    profileSpacing:{
        paddingHorizontal:moderateScale(12),
        paddingVertical:verticalScale(8)
    }
})


export default styles;