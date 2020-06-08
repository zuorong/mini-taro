import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  onAbout = () => {
    Taro.navigateTo({
      url: '/pages/about/index'
    })
  }
  onRequest = () => {
    console.log(this.props)
  }
  render () {
    return (
      <View className='index'>
        index
        <Button className="request" onClick={this.onRequest}>
          异步action请求
        </Button>
        <Button onClick={this.onAbout}>
          about
        </Button>
      </View>
    )
  }
}

export default Index
