import React from 'react';
function useLayout(Layout) {
    return function (View) {
        return class WrapperLayout extends React.Component{
            render(){
                return (<Layout {...this.props}>
                    <View {...this.props}></View>
                </Layout>)
            }
        }
    }
}

export default useLayout