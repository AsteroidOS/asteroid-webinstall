const DEVICE_NAMES = {
    bass: "LG G Watch Urbane",
    sturgeon: "Huawei Watch",
    lenok: "LG G Watch R",
    smelt: "Moto 360 2015",
    sparrow: "Asus Zenwatch 2",
    wren: "Asus Zenwatch 2",
    anthias: "Asus Zenwatch 1",
    catfish: "TicWatch Pro",
    dory: "LG G Watch",
    firefish: "Fossil Gen 4",
    ray: "Skagen Falster 2",
    sawfish: "Huawei Watch 2",
    sawshark: "Huawei Watch 2",
    skipjack: "TicWatch C2+",
    mooneye: "Ticwatch E & S",
    swift: "Asus Zenwatch 3",
};

export function getDeviceName(device) {
    return device in DEVICE_NAMES ? DEVICE_NAMES[device] : device;
}
