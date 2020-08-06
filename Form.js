import React, { useState } from 'react'
import content_EN from '~d/en/content.json'
import content_UK from '~d/uk/content.json'
import { useSelector } from 'react-redux'
import { useInput } from '~h/useInput'
import Img from '~c/general/Image'
import { dataContent } from '~u/data'
import { encode } from '~u/helpers'
import { useStaticQuery, graphql } from 'gatsby'
import Content from "~u/Content"

export function Form3() {
  const content = Content(useForm3Query())

  const { value:firstName, bind:bindFirstName, reset:resetFirstName } = useInput('');
  const { value:lastName, bind:bindLastName, reset:resetLastName } = useInput('');
  const { value:guestName, bind:bindGuest, reset:resetGuest } = useInput('');
  const [ submit, setSubmit ] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // alert(`Submitting Name ${firstName} ${lastName}`);
    // resetFirstName();
    // resetLastName();
    const discordData = {
      number: firstName,
      months: lastName,
      guest: guestName
    };

    fetch('/',{
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'Volter', ...discordData })
      
    })
    setSubmit(true);
  }

  return(
    <>
      {!submit ?
        <form className="teaser_cont_form-normal" name="Volter"
        data-netlify="true" onSubmit={handleSubmit}>
            <div className="teaser_cont_form-normal_block" >
              <label className="teaser_cont_form-normal_block_data">
                <span>
                <Img src={content.dataImage} />
                  Дата заїзду
                </span>
                <div className="teaser_cont_form-normal_block_data_outside">
                  <input
                    name="number"
                    type="date" 
                    {...bindFirstName}
                  />
                  <p>
                    {
                      firstName ? 
                          firstName.split('-').reverse().map(function(el, index) {
                            return <span key={index} >{el}</span>
                          })
                          :
                          dataContent
                      }
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
                    {...bindLastName}
                  />
                  <p>
                    {
                      lastName ? 
                          lastName.split('-').reverse().map(function(el, index) {
                                return <span key={index} >{el}</span>
                          })
                          :
                          dataContent
                      }
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
                    {...bindGuest}
                    placeholder="01"
                  />
                </div>
              </label>
            </div>

            <button className="general-button" type="submit">
                Знайти номер
            </button>
            <input type="hidden" name="form-name" value="Volter" />
        </form>
      :
        <div className="teaser_cont_thanks">
          <h2 className="teaser_cont_thanks_title">Thanks You!!!</h2>
        </div>
     }
    </>
  )
}


export const useForm3Query = () =>
useStaticQuery(graphql`
  query Form3Query {
    allFile(filter: {name: {eq: "content"}}) {
      nodes {
        childEnJson {
          dataImage
          guestsImage
        }
        childUkJson {
          dataImage
          guestsImage
        }
        sourceInstanceName
      }
    }
  }
`).allFile.nodes




function Form2() {
  const state = useSelector(props => props);
  const content = (state.languageValue === "uk" ? content_UK : content_EN);

  const { value:firstName, bind:bindFirstName, reset:resetFirstName } = useInput('2020-12-01');
  const { value:lastName, bind:bindLastName, reset:resetLastName } = useInput('2020-12-01');
  const { value:guestName, bind:bindGuest, reset:resetGuest } = useInput('01');
  const [ submit, setSubmit ] = useState(false);

  const formData = {
    number: {
      name: 'number',
      type: 'date',
      value: {firstName},
      view: [],
      bind: {...bindFirstName},
      reset: {resetFirstName},
      img: content.dataImage
    },
    months: {
      name: 'months',
      type: 'date',
      value: {lastName},
      view: [],
      bind: {...bindLastName},
      reset: {resetLastName},
      img: content.dataImage
    },
    guest: {
      name: 'guest',
      type: 'number',
      value: {guestName},
      view: [],
      bind: {...bindGuest},
      reset: {resetGuest},
      img: content.guestsImage
    }
  } 
  
  const formFields = [];

  for(let name in formData ){
    let field = formData[name];
    for(let newName in field.value ){
        field.value[newName].split('-').reverse().forEach(function(el) {
          field.view.push(el);
        })
    }

    formFields.push(
      <div className="teaser_cont_form-normal_block"  key={name}>
        <label className="teaser_cont_form-normal_block_data">
          <span>
            <Img src={field.img} />
            Дата заїзду
          </span>
          <div className="teaser_cont_form-normal_block_data_outside">
            <input
              name={field.name}
              type={field.type} 
              {...field.bind}
            />
            <p>
              {field.view.map(function(item, index) {
                  return <span key={index}>{item}</span>
              })}
            </p>
          </div>
        </label>
      </div>
    )

  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // alert(`Submitting Name ${firstName} ${lastName}`);
    // resetFirstName();
    // resetLastName();
    setSubmit(true);
  }

  return(
    <>
      {!submit ?
        <form className="teaser_cont_form-normal" onSubmit={handleSubmit}>
            {formFields}
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
    const discordData = {
      number: this.state.number.value,
      months: this.state.months.value,
      guest: this.state.guest.value
    };

    fetch('/',{
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'Volter', ...discordData })
      
    })
    this.setState({submit: true})
  }

  render() {
    let content = (this.props.langKey === "uk" ? content_UK : content_EN);
    return (
      <>
        <Form2 />
        {!this.state.submit ?
          <form className="teaser_cont_form-normal" name="Volter"
          data-netlify="true" onSubmit={this.handleSubmit} >
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
            <input type="hidden" name="form-name" value="Volter" />
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
