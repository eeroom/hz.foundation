const userInfoKey = "UserInfo__@@";
const helper = {
    localStorage: {
        setUserInfo(info) {
            window.localStorage.setItem(userInfoKey, JSON.stringify(info));
        },
        getUserInfo() {
            let tmp = window.localStorage.getItem(userInfoKey);
            return tmp && JSON.parse(tmp);
        }
    }
}

export default helper;