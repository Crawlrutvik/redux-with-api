
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchTodods } from './redux/slice/todo';

function App() {
  const dispatch = useDispatch()
  const state = useSelector((state)=>state)
  console.log('state:sss ', state.todo.data);
  if(state.todo.isLoading){
    return <h1>Loading...</h1>
  }
  return (
    <>
    <h1>Hello</h1>
    <button  onClick={ ()=>dispatch(fetchTodods())}> Click me </button>
      {
       state.todo.data?.map((e)=>{
        console.log('e: ', e);
        return<li>{e.title}</li>
        
       })
      }
    
    </>
  );
}

export default App;
