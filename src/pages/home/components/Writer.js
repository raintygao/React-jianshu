import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { WriterWrapper,WriterItem} from '../style';

class Writer extends PureComponent {
  render() {
    return (
      <WriterWrapper>
        {
          this.props.list.toJS().map((item) => (
            <WriterItem key={item.nickname}>
              <img className='img' src={item.avatar_source} alt='icon'/>
              <span className='watch'>+ 关注</span>
              <h1 className='name'>{item.nickname}</h1>
              <p className='info'>写了{item.total_wordage}字，有{item.total_likes_count}人喜欢</p>
            </WriterItem>
          ))
        }
      </WriterWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'writerList'])
})


export default connect(mapState, null)(Writer);

