import React, { Component }  from 'react';
import { Layout } from 'antd';
import { Upload, message, Button, Icon } from 'antd';

const { Header, Content, Footer } = Layout;

const props = {
  name: 'file',
  action: 'http://localhost:8080/api/import',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
    console.log(info);
  },
};

class App extends Component{
  render() {
    return(
    <Layout>
     <Header></Header>
        <Layout>
          <Content>
            <Upload {...props}>
              <Button>
                <Icon type="upload" /> Click to Upload
              </Button>
            </Upload>
          </Content>
        </Layout>
      <Footer></Footer>
    </Layout>
    )
  }
}

export default App;
