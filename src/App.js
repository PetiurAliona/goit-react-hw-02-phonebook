import React, { Component } from "react"
import ContactForm from "./components/ContactForm/ContactForm"
import Filter from "./components/Filter/Filter"
import ContactsList from "./components/ContactsList/ContactsList"

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  }

  addContact = (contact) => {
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }))
  }

  handleChange = (e) => {
    const { value, name } = e.currentTarget
    this.setState({ [name]: value })
  }

  filterContact = () => {
    const normalizedFilter = this.state.filter.toLowerCase()
    return this.state.contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter))
  }

  render() {
    const { filter, contacts } = this.state
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleChange} />
        <ContactsList contacts={this.filterContact()} />
      </>
    )
  }
}

export default App
