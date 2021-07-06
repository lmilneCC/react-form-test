import React from "react";
import { Formik, Form, Field } from 'formik';

function validateName(value) {
  let error;
  if (!value) {
    error = "Required"
  }
  else if (/^[A-Za-z]+$/i.test(value)) {
    error = 'Invalid character used.';
  } else if (value.length > 20) {
    error = 'Too many characters used'
  }
  return error;
}

function validateAge(value) {
  let error;
  if (value < 18 || value > 100) {
    error = "Please enter and age between 18 and 100"
  }
  return error;
}

export default function FormikForm() {
  return (
    <Formik
      initialValues={{
        title: 'Mr',
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        subscribed: false
      }}
      onSubmit={values => console.log(values)}
    >
      {({ errors, touched, isValidating }) => (<Form>
        <label htmlFor="title">Title</label>
        <Field as="select" name="title">
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </Field>
        < br />
        <label htmlFor="firstName">First Name</label>
        <Field type="text" name="firstName" validate={validateName} />
        {errors.firstName && touched.firstName && <div>{errors.firstName}</div>}
        <br />
        <label htmlFor="lastName">Last Name</label>
        <Field type="text" name="lastName" validate={validateName} />
        {errors.lastName && touched.lastName && <div>{errors.lastName}</div>}
        <br />
        <label htmlFor="age">Age</label>
        <Field type="number" name="age" validate={validateAge} />
        <br />

        <label>Gender</label>
        <br />
        <Field type="radio" name="gender" value="spoon" />
        <label htmlFor="spoon">Spoon</label>
        <Field type="radio" name="gender" value="table" />
        <label htmlFor="table">Table</label>
        <Field type="radio" name="gender" value="nightstand" />
        <label htmlFor="nightstand">Nightstand</label>
        <br />
        <Field
          type="checkbox"
          name="subscribed"
          placeholder="Subscribe to Newsletter"
        />
        <label htmlFor="subscribed"> Subscribe to Newsletter</label>
        <button type="submit">Submit</button>
      </Form>)}
    </Formik>
  )
}