import React, { Component }  from 'react';
import { Layout } from 'antd';
import axios from 'axios';

const { Header, Content, Footer } = Layout;

class App extends Component{
  constructor(){
    super();
    this.state = {brand: "Ford"};

  }
  
  componentDidMount(){
    console.log('a');
    this.setState({
      brand: "test"
    })
    axios.get('./statementLotto.json')
    .then((res)=>{
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }

  render() {
    return(
    <Layout>
     <Header></Header>
        <Layout>
          <Content>
            {this.state.brand}
          </Content>
        </Layout>
      <Footer></Footer>
    </Layout>
    )
  }
}

export default App;
