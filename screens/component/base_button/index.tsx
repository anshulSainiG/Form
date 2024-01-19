import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

type BaseButtonProps = {
    title?: string;
    disabled?: boolean;
};

const BaseButton = (props: BaseButtonProps) => {

    return (
        <TouchableOpacity
            style={{
                marginTop: 20,
                width: '80%',
                height: 55,
                alignSelf: 'center',
                borderRadius: 15,
                backgroundColor: props.disabled ? 'lightblue' : 'darkblue',
                borderColor: props.disabled ? 'lightblue' : 'darkblue',
                opacity: props.disabled ? 0.5 : 1,
            }}
            disabled={props.disabled}
        >
            <Text
                style={{
                    textAlign: 'center',
                    paddingTop: 10,
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#ffffff',
                }}
            >
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};

export default BaseButton;
