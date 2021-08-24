import React, { Component } from "react"
import { v4 as uuidv4 } from "uuid"
import PropTypes from "prop-types"
import styled from "./ContactForm.module.css"

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  }

  handleChange = (e) => {
    const { value, name } = e.currentTarget
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const isSuccess = this.props.onSubmit({
      name: this.state.name,
      number: this.state.number,
      id: uuidv4(),
    })

    if (isSuccess) {
      this.setState({
        name: "",
        number: "",
      })
    }
  }

  render() {
    const { name, number } = this.state
    return (
      <form className={styled.contactForm} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
            className={styled.input}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleChange}
            className={styled.input}
          />
        </label>
        <button type="submit" className={styled.button}>
          Add contact
        </button>
      </form>
    )
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
}

export default ContactForm
