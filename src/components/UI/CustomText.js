import React from "react";
import { StyleSheet, Text } from "react-native";


const CustomText = (props) => {
    return (
        <Text
            allowFontScaling={false}
            selectable={props.selectable}
            style={{ ...styles.text, ...props.style }}
        >
            {props.children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
    }
});

export default CustomText;