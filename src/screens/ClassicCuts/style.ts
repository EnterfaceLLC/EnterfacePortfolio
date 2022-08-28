import { StyleSheet } from "react-native";

//***THEME IMPORTS BELOW***//
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.ccprime,
  },
  linear: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%'
  },
  header:{
    alignSelf: 'center',
    alignItems: 'center',
    width: '80%',
    backgroundColor: colors.ccsecond,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderRightWidth: 3,
    borderLeftWidth: 3,
    borderColor: colors.ccthird,
    paddingVertical: 15,
  },
  title:{
    fontFamily: 'Amita_400Regular',
    fontSize: fonts.size.xl,
    color: colors.white,
  },
  highlight: {
    color: colors.ccthird
  },
  img: {
    width: 150,
    height: 160,
    marginVertical: 5,
  },
  address:{
    fontSize: fonts.size.reg,
    color: colors.white
  },
  phone: {
    fontSize: fonts.size.reg,
    fontWeight: fonts.weight.bold,
    color: colors.white,
    marginTop: 5
  },
  body:{
    marginVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center'

  },
  name: {
    fontFamily: 'Amita_400Regular',
    fontSize: fonts.size.lg, 
    color: 'white'
  },
  barber: {
    width: 250,
    height: 250,
    borderRadius: 25,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'silver'
  },
  bioTitle:{
    fontFamily: fonts.fontStyle.amita,
    fontSize: fonts.size.md,
    color: colors.ccthird
  },
  bio: {
    textAlign: 'center',
    lineHeight: 20,
    marginVertical: 10,
    color: 'white'
  },
  button: {
    marginTop: 15,
    marginBottom: 25
  },
  foot: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 30
  },
  schedule: {
    fontFamily: fonts.fontStyle.amita,
    fontSize: fonts.size.md,
    color: colors.ccthird,
    marginBottom: 10
  },

  ///SERVICE SCREEN STYLES///
  modalPg:{
    flex: 1,
    backgroundColor: colors.ccprime
  },
  serviceTitle: {
    fontFamily: fonts.fontStyle.amita,
    fontSize: fonts.size.head,
    color: colors.white
  },
  titleContain: {
    paddingHorizontal: 15,
    borderBottomWidth: 4,
    borderBottomColor: 'silver'
  },
  serviceImg: {
    width: '100%',
    height: 350,
  },
  serviceInfo: {
    borderColor: 'silver',
    borderTopWidth: 7,
  },
  serviceBanner: {
    backgroundColor: colors.ccsecond,
    padding: 8
  },
  banner: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  bannerTxt: {
    color: colors.white
  },
  serviceContain:{
    flexDirection: 'row',
    marginVertical: 15
  },
  serviceTask:{
    paddingLeft: 25,
    width: '50%'
  },
  serviceTxt: {
    color: colors.ccthird,
    fontFamily: fonts.fontStyle.amita,
    fontSize: fonts.size.md
  },
  servicePrice: {
    width: '20%'
  },
  servicePriceTxt: {
    fontFamily: fonts.fontStyle.amita,
    fontSize: fonts.size.md,
    color: colors.white,
  },
  serviceLinks: {
    width: '30%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});