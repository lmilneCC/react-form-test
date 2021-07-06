import React from "react";
import { useForm } from "react-hook-form";

export default function ReactHookForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Title</label>
      <select name="title" {...register("title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>
      < br />
      <label htmlFor="first-name">First Name</label>
      <input type="text" name="first-name" {...register("firstName", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
      <br />
      <label htmlFor="last-name">Last Name</label>
      <input {...register("lastName", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
      <br />
      <label htmlFor="age">Age</label>
      <input type="number" name="age" {...register("age", { min: 18, max: 100 })} />
      <br />

      <label>Gender</label>
      <br />
      <input {...register("gender", { required: true })} type="radio" name="gender" value="Spoon" />
      <label htmlFor="spoon">Spoon</label>
      <input {...register("gender", { required: true })} type="radio" name="gender" value="Table" />
      <label htmlFor="table">Table</label>
      <input {...register("gender", { required: true })} type="radio" name="gender" value="Nightstand" />
      <label htmlFor="nightstand">Nightstand</label>
      <br />
      <input
        type="checkbox"
        name="subscribed"
        placeholder="Subscribe to Newsletter"
        {...register}
      />
      <label htmlFor="subscribed"> Subscribe to Newsletter</label>
      <input type="submit" />

    </form>
  );
}