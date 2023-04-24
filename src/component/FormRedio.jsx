import React, {useState} from "react";
const Forms = () => {
  const [check, setCheck] = useState({
    male: false,
    female: false,
    other: false,
  })
  const checkHandler = (event) => {
    const checked = event.target.value;
    if(checked==='male'){
      setCheck({
        male: true,
        female: false,
        other: false,
      })
    }
    if(checked==='female'){
      setCheck({
        male: false,
        female: true,
        other: false,
      })
    }
    if(checked==='other'){
      setCheck({
        male: false,
        female: false,
        other: true,
      })
    }
  }
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(check);
  }
  return <>
    <form onSubmit={submitHandler}>
      <label htmlFor='male'>Male</label>
      <input
        type='radio'
        name='gender'
        id='male'
        value={'male'}
        checked={check.male}
        onChange={checkHandler}
      />
      <label htmlFor='female'>Female</label>
      <input
        type='radio'
        name='gender'
        id='female'
        value={'female'}
        checked={check.female}
        onChange={checkHandler}
      />
      <label htmlFor='other'>Other</label>
      <input
        type='radio'
        name='gender'
        id='other'
        value={'other'}
        checked={check.other}
        onChange={checkHandler}
      /><br />
      <input type='submit' value='Submit' />
    </form>
  </>;
};
export default Forms;