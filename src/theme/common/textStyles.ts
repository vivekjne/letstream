import { StyleSheet } from 'react-native';
import { colors } from '../colors';

const textStyles = StyleSheet.create({
    textRegular: {
        fontSize: 16,
        color: colors.white
    },
    textBold: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold'
    },
    textHeading1: {
        fontSize: 40,
        color: colors.white,
        fontWeight: 'bold'
    },
    textHeading2: {
        fontSize: 24,
        color: colors.white,
        fontWeight: 'bold'
    },
    textHeading3: {
        fontSize: 18,
        color: colors.white,
        fontWeight: 'bold'
    },
    textLinkRegular: {
        color: colors.persianGreen.regular,
        fontSize: 14
    },
    textLinkSmall: {
        color: colors.persianGreen.regular,
        fontSize: 12
    }
});

export default textStyles;
