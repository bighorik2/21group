import  './style.css'

export const Input = ({value,onChange,title}) =>  (
    <div className={`input`}>
      <label for="input" className="label-normal">{title}</label>
      <input type="text" name="input" onChange={onChange} value={value}/>
    </div>
  )

