import { useEffect, useState } from 'react'
import axios from './Config/axiosConfig'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import EditIcon from '@mui/icons-material/Edit'
import Checkbox from '@mui/material/Checkbox';
import './App.css'

function App () {
  const [content, setContent] = useState('')
  const [item, setItem] = useState([])
  const [index, setIndex] = useState(null)

  const handleChange = e => {
    setContent(e.target.value)
  }

  const handleSubmit = async () => {
    try {
      if (content.trim() !== '') {
        console.log('submitting')
      const res = await axios.post('/toDo/postData',{content})  
       setItem((preve)=>([...preve,res.data.content]))
      }
      setContent('')
    } catch (error) {
      console.error('Error submitting data:', error)
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/toDo/getData');
        const contentArray = response.data.map(item => item.content );
        setItem(contentArray);
        console.log(item,"suparlekkaaa");
      } catch (error) {
        console.error('Error submitting data:', error);
      }
    }
    fetchData();
  }, []);
  

  const handleDelete = i => {
    let data = item[i]
    axios.put(`/toDo/deleteData`,{data})
    setItem(preve => preve.filter((item, index) => index !== i))

  }

  const handleEdit =(i)=>{
    setIndex(i)
    setContent(item[i])
  }

  const handleUpdate=()=>{
    if (content.trim() !== "") {

      setItem((preve)=>(preve.map((item,i)=>(
        i ==  index ? content :item
      ))))
    }
    setContent("")
    setIndex(null)
  }

  const handleDisable=()=>{
      
  }
  return (
    <>
      <div className='box'>
        <div className='headdnig'>
          <div>
          <h1>hello todo</h1>
          </div>
          
        </div>
        <div className='mainWrapper'>
          <div className='inputC'>
            <input
              value={content}
              onChange={handleChange}
              className='input'
              type='text'
            />
          </div>
          <div className='btnC'>
          { index === null ?<button onClick={handleSubmit} className='btn'>
              Submit
            </button>
            :<button onClick={handleUpdate} className='btn'>
              Update
            </button>}
          </div>
        </div>
        {item &&
          item.map((items, index) => (
            <>
              <div key={index} className='bodyWrapper'>
                <p className='ptage'>{index+1}</p>
                <input  value={items} className='listInput' type='text' />

                <div className='btnWrapper'>
                <div className='checkbox'>
                    <button
                      onClick={() => handleDisable(index)}
                      className='btn2'
                    >
                      {<Checkbox />}
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => handleDelete(index)}
                      className='btn2'
                    >
                      {<DeleteOutlineIcon />}
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => handleEdit(index)}
                      className='btn2'
                    >
                      {<EditIcon />}
                    </button>
                  </div>
                
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  )
}

export default App
