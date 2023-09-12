import { useState } from 'react'
import { nanoid } from 'nanoid'
import ListItem from './Components/ListItem'
import './App.css'

function App() {
  const [list, setList] = useState([
    { id: nanoid(), content: "item" },
    { id: nanoid(), content: "item" },
    { id: nanoid(), content: "item" }
  ])

  let sizeTab = (list.length == 0)

  const [addList, setaddList] = useState("")

  function deleteItem(id) {
    setList(list.filter(listItem => listItem.id !== id))
  }


  function handleSubmit(e) {
    if (addList.trim() === "") {
    alert("Veuillez saisir du texte avant d'ajouter à la liste");
    return; 
  }
    e.preventDefault()
    setList([...list, { id: nanoid(), content: addList }])
    setaddList("") 
  }

  return (
    <div className='h-screen bg-slate-900'>
      <div className='max-w-4xl mx-auto pt-20 px-6'>
        <h1 className='text-3xl text-slate-100 mb-4'> TO-DO-LIST </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='to-item' className='text-xl text-slate-100 mb-4'>Add Something </label>
          <input
            type="text"
            className='mt-1 block w-full rounded'
            onChange={(e) => setaddList(e.target.value)}
            value={addList}
          />
          <button className='mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]'>
            <strong> Add + </strong>
          </button>
          <ul className='spaceList'>
          {
            sizeTab? <p className='text-xl text-slate-100 mb-4'>Aucune Tache a Faire!</p> 
            : 
            list.map(item => (
              <ListItem deleteItem={deleteItem} key={item.id} itemData={item} />))
              
          }

          </ul>
        </form>
      </div>
    </div>
  )
}

export default App
