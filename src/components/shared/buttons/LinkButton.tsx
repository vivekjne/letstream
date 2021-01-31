import React from 'react';
import {
    Text,
    Pressable,
    StyleSheet,
    PressableProps,
    ViewStyle,
    TextStyle
} from 'react-native';
import { colors } from '../../../theme/colors';
import textStyles from '../../../theme/common/textStyles';

type LinkButtonType = {
    title: string;
    containerStyle?: ViewStyle;
    type?: string;
    textStyle?: TextStyle;
};

type LinkButtonProps = LinkButtonType & PressableProps;

const LinkButton = ({
    title,
    containerStyle = {},
    onPress,
    type = 'regular',
    ...props
}: LinkButtonProps) => {
    return (
        <Pressable
            android_ripple={{
                color: colors.persianGreen.light,
                borderless: false
            }}
            style={containerStyle}
            onPress={onPress}
            {...props}
        >
            <Text
                style={[
                    type === 'regular'
                        ? textStyles.textLinkRegular
                        : textStyles.textLinkSmall,
                    props.textStyle
                ]}
            >
                {title}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    alignRight: {
        alignSelf: 'flex-end'
    }
});

export default LinkButton;
