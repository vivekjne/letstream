import React from 'react';
import { Pressable, PressableProps, Text, TextStyle } from 'react-native';
import textStyles from '../../../theme/common/textStyles';

type ActionButton = {
    style: any;
    title: string;
    textStyle?: TextStyle;
};

type ActionButtonProps = ActionButton & PressableProps;

const ActionButton = ({ title, style, ...props }: ActionButtonProps) => {
    return (
        <Pressable style={style} {...props}>
            <Text style={[textStyles.textBold, props.textStyle]}>{title}</Text>
        </Pressable>
    );
};

export default ActionButton;
