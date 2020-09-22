import React, {useState, ChangeEvent, FormEvent} from 'react'

interface AddInputProps {
    addInput: AddInput;
}

export const InputForm: React.FC<AddInputProps> = ({addInput}) => {
    const [newInput, setNewInput] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewInput(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addInput(newInput)
  }
    return(
    <form className="form-inline">
            <div className="input-group">
              <label id="initial-input" style={{marginBottom: '50px', fontSize: "40px"}}>Initials:</label>
              <input type="text" onChange={handleChange} value={newInput} id="inputInitials" className="form-control" style={{marginRight: '30px', marginLeft: '30px', height: "50px", width: "200px"}} aria-describedby="passwordHelpInline" placeholder="AB" />
              <button type="submit" onClick={handleSubmit} className="submit-button" style={{height: "75px", width: "100px", marginTop: "10px",  fontSize: "1rem"}}>Submit</button>
            </div>
          </form>
    )
}