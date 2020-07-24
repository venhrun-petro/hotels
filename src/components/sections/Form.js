import React, { useState } from 'react'
import content_EN from '~d/en/content.json'
import content_UK from '~d/uk/content.json'
import Img from '~c/general/Image'


export default class Form extends React.Component {
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
    },
    submit: false
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
        view: viewValue.reverse()
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({submit: true})
  }

  render() {
    let content = (this.props.langKey === "uk" ? content_UK : content_EN);
    return (
      <>
        {!this.state.submit ?
          <form className="teaser_cont_form-normal" onSubmit={this.handleSubmit} >
            <div className="teaser_cont_form-normal_block">
              <label className="teaser_cont_form-normal_block_data">
                <span>
                  <Img src={content.dataImage} />
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
                  <Img src={content.dataImage} />
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
                  <Img src={content.guestsImage} />
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
          :
          <div className="teaser_cont_thanks">
            <h2 className="teaser_cont_thanks_title">Thanks You!!!</h2>
          </div>
        }
      </>
    )
  }
}
