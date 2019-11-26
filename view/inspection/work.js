import React from 'react';
import { NavBar, Icon, ImagePicker } from 'antd-mobile';

class Work extends React.Component {

  constructor(parameter) {
    super(parameter)
    this.state = {
      files: [{
        url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
        id: '2121',
      }, {
        url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
        id: '2122',
      }],
      multiple: false,
    }
  }

  render() {
    const { leverOneCategory = '', history = {} } = this.props;
    let lst = []
    for (let index = 0; index < 100; index++) {
      lst[index] = index;

    }
    const { files } = this.state;
    return (
      <div style={{ paddingTop: 50 }}>
        <NavBar
          style={{ position: "fixed", width: '100%', top: 0 }}
          mode="dark"
          icon={<Icon type="left" />}
          rightContent={[
            <Icon key="1" type="ellipsis" />,
          ]}
          onLeftClick={() => history.goBack()}
        >本次检查</NavBar>
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 7}
          multiple={this.state.multiple}
        />
      </div>
    );
  }

  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  }
}

export default Work