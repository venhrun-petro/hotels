/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import teaserJson from '../../../content/content.json'

// eslint-disable-next-line react/react-in-jsx-scope
// eslint-disable-next-line react/prefer-stateless-function
export default class Teaser extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    number: {
      value: '',
      view: ['01', '12', '2020']
    },
    months: {
      value: '',
      view: ['01', '12', '2020']
    },
    guest: {
      value: '',
      view: []
    }
  }

  handleInputChange = event => {
    const { target } = event
    const { value } = target
    const { name } = target
    const viewValue = []
    value.split('-').forEach(function(el) {
      viewValue.push(el)
    })
    this.setState({
      [name]: {
        value,
        view: viewValue
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <section className="teaser">
        <img className="teaser_img" src={teaserJson.teaserImage} alt="teaser" />
        <div className="container-small">
          <div className="teaser_cont">
            <h1 className="teaser_cont_title">
              ВІТАЄМО У ЛЬВОВІ!
              <span className="teaser_cont_title-red">
                Готель VOLTER чекає на Вас
              </span>
            </h1>
            <form className="teaser_cont_form-normal">
              <div className="teaser_cont_form-normal_block">
                <label className="teaser_cont_form-normal_block_data">
                  <span>
                    <img src={teaserJson.dataImage} alt="data" />
                    Дата заїзду
                  </span>
                  <div className="teaser_cont_form-normal_block_data_outside">
                    <input
                      type="date"
                      name="number"
                      value={this.state.number.value}
                      onChange={this.handleInputChange}
                      required
                    />
                    <p>
                      {this.state.number.view.map(function(item, index) {
                        return <span key={index}>{item}</span>
                      })}
                    </p>
                  </div>
                </label>
              </div>
              <div className="teaser_cont_form-normal_block">
                <label className="teaser_cont_form-normal_block_data">
                  <span>
                    <img src={teaserJson.dataImage} alt="data" />
                    Дата виїзду
                  </span>
                  <div className="teaser_cont_form-normal_block_data_outside">
                    <input
                      type="date"
                      name="months"
                      value={this.state.months.value}
                      onChange={this.handleInputChange}
                      required
                    />
                    <p>
                      {this.state.months.view.map(function(item, index) {
                        return <span key={index}>{item}</span>
                      })}
                    </p>
                  </div>
                </label>
              </div>
              <div className="teaser_cont_form-normal_block">
                <label className="teaser_cont_form-normal_block_data">
                  <span>
                    <img src={teaserJson.guestsImage} alt="data" />
                    Гості
                  </span>
                  <div className="teaser_cont_form-normal_block_data_outside">
                    <input
                      type="number"
                      name="guest"
                      value={this.state.guest.value}
                      onChange={this.handleInputChange}
                      placeholder="01"
                      required
                    />
                  </div>
                </label>
              </div>
              <button className="general-button" type="submit">
                Знайти номер
              </button>
            </form>
          </div>
        </div>
      </section>
    )
  }
}
