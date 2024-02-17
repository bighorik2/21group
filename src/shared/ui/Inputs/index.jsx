import './style.css'

export const Input = ({ value, onChange, title }) => (
  <div className={`input`}>
    <label htmlFor="input" className="label-normal">{title}</label>
    <input type="text" name="input" className='text-norm' onChange={onChange} value={value} />
  </div>
)

