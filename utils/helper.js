const UserInfoKey="UserInfo__@@";
export const UserInfo={
    setUserInfo(info){
        window.localStorage.setItem(UserInfoKey,JSON.stringify(info));
    },
    getUserInfo(){
        let tmp=window.localStorage.getItem(UserInfoKey);
        return tmp&&JSON.parse(tmp);
    }
}