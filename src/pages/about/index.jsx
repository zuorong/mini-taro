import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { userAdd } from '../../actions/user'
import { fetchPayOrder } from '../../actions/pay'
import './index.scss'

@connect((state) => {
  return {
    list: state.user,
    pay: state.pay
  }
}, (dispatch) => {
  return {
    onPay () {
      const data = {
        money: 10,
        type: 1,
        amount: 1000
      }
      dispatch(fetchPayOrder(data))
    }
  }
})
class Index extends Component {
  config = {
    navigationBarTitleText: '关于我们'
  }
  onSRequest = () => {
    setTimeout(() => {
      const list = [
        {
          id: 0,
          tex: 1
        },
        {
          id: 1,
          tex: 2
        }
      ]
      this.props.dispatch(userAdd(list))
    }, 1000)
  }
  render () {
    const { list, pay } = this.props
    return (
      <View className='index'>
        index
        <Button className="request" onClick={this.props.onPay}>
          支付
        </Button>
        <Button className="request" onClick={this.onSRequest}>
          action请求
        </Button>
        <View>
          {
            pay.amount
          }个
        </View>
        <View>
          {
            pay.money
          }元
        </View>
        <View>
          {
            list.map(item => {
              return (
                <Text key={item.id}>
                  {item.tex}
                </Text>
              )
            })
          }
        </View>
      </View>
    )
  }
}

export default Index
