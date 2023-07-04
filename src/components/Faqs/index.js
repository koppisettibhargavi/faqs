import {Component} from 'react'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="Container">
        <h1>faqs</h1>
        <ul>
          {faqsList.map(each => (
            <FaqItem details={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Faqs
