const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{number}</p>
          {/* <button onClick={() => remove(id)}></button> */}
        </li>
      ))}
    </ul>
  )
}

export default ContactsList
