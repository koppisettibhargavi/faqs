import {Component} from 'react'

const plusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isButton: false}

  onclick = () => {
    this.setState(prevState => ({isButton: !prevState.isButton}))
  }

  renderImg = () => {
    const {isButton} = this.state
    const img = isButton ? minImg : plusImg
    const altText = isButton ? 'plus' : 'minus'
    return (
      <button type="button" onClick={this.onclick}>
        <img src={img} alt={altText} />
      </button>
    )
  }

  renderAnswer = () => {
    const {details} = this.props
    const {isButton} = this.state
    const {answerText} = details
    if (isButton) {
      return (
        <div>
          <p>{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {details} = this.props
    const {questionText} = details
    return (
      <li className="containerMain">
        <h1>{questionText}</h1>
        {this.renderAnswer()}
        {this.renderImg()}
      </li>
    )
  }
}
export default FaqItem
