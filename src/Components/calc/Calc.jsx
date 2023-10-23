import './Calc.css'
import { useState } from 'react'
// onClick={e => setValue(value + e.target.value)}
function Calc() {
    const [value ,setValue] = useState('')
    function equal(value) {
        try {
            setValue(eval(value));   
        } catch (error) {
            setValue('Error')
        }
    }
    return (
        <>
            <div className="container">
                <div className="calculator">
                    <form action="">
                        <div className="result">
                            <input type="text" value={value} />
                        </div>
                        <div>
                            <input type="button" className='op' value="C" onClick={e => setValue('')} />
                            <input type="button" className='op' value="DEL" onClick={e => setValue(value.slice(0,-1))} />
                            <input type="button" className='op' value="/" onClick={e => setValue(value + e.target.value)} />
                            <input type="button" className='op' value="*" onClick={e => setValue(value + e.target.value)} />
                        </div>
                        <div>
                            <input type="button" value="7" onClick={e => setValue(value + e.target.value)} />
                            <input type="button" value="8" onClick={e => setValue(value + e.target.value)} />
                            <input type="button" value="9" onClick={e => setValue(value + e.target.value)} />
                            <input type="button" className='op' value="-" onClick={e => setValue(value + e.target.value)} />
                        </div>
                        <div>
                            <input type="button" value="4" onClick={e => setValue(value + e.target.value)} />
                            <input type="button" value="5" onClick={e => setValue(value + e.target.value)} />
                            <input type="button" value="6" onClick={e => setValue(value + e.target.value)} />
                            <input type="button" className='op' value="+" onClick={e => setValue(value + e.target.value)} />
                        </div>
                        <div>
                            <input type="button" value="1" onClick={e => setValue(value + e.target.value)} />
                            <input type="button" value="2" onClick={e => setValue(value + e.target.value)} />
                            <input type="button" value="3" onClick={e => setValue(value + e.target.value)} />
                            <input type="button" className='op' value="%" onClick={e => setValue(value + e.target.value)} />
                        </div>
                        <div>
                            
                            <input type="button"  className='zero' value="0" onClick={e => setValue(value + e.target.value)} />
                            <input type="button" value="." onClick={e => setValue(value + e.target.value)} />
                            <input type="button" className='equal ' value="=" onClick={e => equal(value)} /> 
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Calc