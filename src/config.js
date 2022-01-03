export default {
    OS_NAME: process.env.VUE_APP_OS_NAME,
    ACCENT_COLOR: "#0366d6",
    SUPPORTED_DEVICES: [
        {
            name: "Huawei Watch",
            model: "sturgeon",
        },
        {
            name: "LG G Watch",
            model: "dory",
        },
        {
            name: "LG G Watch Urbane",
            model: "bass",
        },
        {
            name: "LG G Watch R",
            model: "lenok",
        },
    ],
    RELEASE_VARIANTS: {
        stable: {
            description:
                "latest stable release",
            suffix: " stable",
        },
        nightly: {
            description: "bleeding edge nightly build without QA",
            suffix: " nightly",
        },
    },
    DONATION_LINKS: [
        {
            title: "One-time donation",
            description:
                "You can also make a one-time donation through PayPal. It doesn’t help with sustainable support, but every little bit is appreciated!",
            highlight: false,
            url: "https://paypal.me/",
            icon: "paypal",
        },
    ],
};
