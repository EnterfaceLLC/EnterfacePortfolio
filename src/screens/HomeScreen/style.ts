import { StyleSheet } from "react-native";

//***COMPONENTS IMPORT BELOW***//
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    alignItems: 'center',
    backgroundColor: colors.tertiary,
    borderBottomLeftRadius: 75,
    borderBottomRightRadius: 75,
    borderBottomWidth:4,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderColor: colors.accent,
    marginHorizontal: 25,
  },
  title:{
    fontSize: fonts.size.head,
    color: colors.white,
    marginTop: 15,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: colors.accent,
    marginVertical: 25,
  },
  bg: {
    backgroundColor: colors.secondary,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%'
  },
});