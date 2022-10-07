import React from 'react'

const Input = ({type,name,label}) => {
  return (
    <div class="form__group field">
        <input required="" placeholder="Name" class="form__field" type={type} name={name}/>
        <label class="form__label" for="name">{label}</label>
    </div>
  )
}

export default Input
