import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import useLogger from './hooks/useLogger';
import useInput from './hooks/useInput';



function App() {
const [value, setValue] =useLocalStorage('name','msk')

 const [bindInput,val,inputype,reSet] = useInput('senthil')
console.log(bindInput);
console.log(val);
const handleChange =(event)=>{
setValue (event.target.value);
}
useLogger(value)
  return (
    <div className="App">
      <label >{value}</label> 
     <input type="text" value={value} onChange={handleChange} />  //normal input
     <input {...inputype} {...val} {...bindInput} /> //custom Hooks
    </div>
  );
}

export default App;
