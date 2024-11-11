import { StyleSheet } from "react-native";

export const theme = {
    colors: {
        background: "#ffffff",
        text: "#333333",
        megaSena: {
            background: "#209869",
            text: "#ffffff",
        },
        quina: {
          background: "#260085",
          text: "#ffffff",
        },
        timemania: {
          background: "#FFF600",
          text: "#049645",
        },
        loading: "#209869",
        button: "#4287f5",
    },
    fontSizes: {
        title: 24,
        subtitle: 14,
        text: 16,
    },
    spacing: {
        small: 4,
        medium: 8,
        large: 16,
    },
};

export const styles = StyleSheet.create({
    ballContainer: {
        flexDirection: "row",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    ball: {
        borderRadius: 30,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        margin: theme.spacing.small
    },
    number: {
        fontSize: theme.fontSizes.text,
        fontWeight: "bold"
    },
    subText: {
        fontSize: theme.fontSizes.subtitle,
        color: "#5d5d5d",
        marginTop: theme.spacing.small,
    },
    title: {
        fontSize: theme.fontSizes.title,
        alignSelf: "center",
        marginBottom: theme.spacing.large,
        fontWeight: "bold",
    },
    button:{
        backgroundColor: theme.colors.button,
        paddingVertical: theme.spacing.medium,
        paddingHorizontal: theme.spacing.large,
        borderRadius: 25,
        width: 250,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#ffffff",
        fontSize: theme.fontSizes.text,
        fontWeight: "bold",
    }
});
