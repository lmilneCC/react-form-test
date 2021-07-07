import React from 'react';
import { Form, Field } from 'react-final-form'

export default function ReactFinalForm() {
  const onSubmit = data => console.log(data);

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <Field component="select" name="title">
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
          </Field>
          < br />
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" />

          <br />
          <label htmlFor="last-name">Last Name</label>
          <Field name="lastName" component="input" />

          <br />
          <label htmlFor="age">Age</label>
          <Field component="input" type="number" />
          <br />

          <label>Gender</label>
          <br />
          <Field component="input" type="radio" name="gender" value="Spoon" />
          <label htmlFor="spoon">Spoon</label>
          <Field component="input" type="radio" name="gender" value="Table" />
          <label htmlFor="table">Table</label>
          <Field component="input" type="radio" name="gender" value="Nightstand" />
          <label htmlFor="nightstand">Nightstand</label>
          <br />

          <Field
            type="checkbox"
            name="subscribed"
            placeholder="Subscribe to Newsletter"
            component="input"
          />
          <label htmlFor="subscribed"> Subscribe to Newsletter</label>

          <button type="submit">Submit</button>
        </form>
      )}
    />
  )
}