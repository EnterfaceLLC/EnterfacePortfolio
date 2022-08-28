import { StyleSheet } from "react-native";

//***COMPONENTS IMPORT BELOW***//
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";

export const styles = StyleSheet.create({
  contain: {
    marginTop: 'auto',
  },
  dayList: {
    color: colors.white,
    fontSize: fonts.size.sm,
    textAlign: 'center',
    marginBottom: 7,
  },
  timeList: {
    fontFamily: fonts.fontStyle.amita,
    color: colors.ccthird,
    fontWeight: fonts.weight.semi,
    textAlignVertical: 'center',
    textAlign: 'center',
    marginHorizontal: 5,
    backgroundColor: colors.ccsecond,
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'silver'
  },
  dateList: {
    color: colors.white,
    fontSize: fonts.size.sm,
    textAlign: 'center',
    marginTop: 7,
  },
});