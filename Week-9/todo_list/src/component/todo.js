import React, { useState } from 'react';
import todo from '../logo.svg';
import '../App.css';

const Todo = () => {

    const [inputData, setInputData] = useState('');

    const [items, setItems] = useState([]);

    const addItem = () => {
        if(!inputData){

        }else {
            setItems([...items, inputData]);
            setInputData('')
        }
        
    }


    //delete the items

    const deleteItem = (id) => {
        console.log(id);
        const updatedItems = items.filter((elem, ind) => {
            return ind !== id;
        });
        setItems(updatedItems)
    }

    //remove All
    const removeAll = () => {
        setItems([]);
    }

  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
            <figure>
                <img src={todo} alt='todologo' />
                <figcaption>Add your Todo Items here...</figcaption>
            </figure>

            <div className='addItems'>
                <input className='child-addItems' type="text" placeholder="Add Items to your todo list..." 
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                />
                <button className='add-btn' onClick={addItem}>Add Item</button>
            </div>

            <div className='showItems'>
                {
                    items.map((elem, ind) => {
                        return (
                            <div className='eachItem' key={ind}>
                                <h3>{ elem }</h3>
                                <button className='delete-btn' onClick={() => deleteItem(ind)}>Delete Item</button>
                            </div>
                        )
                    })
                }
                
            </div>

            <div className='showItems'>
                <button onClick={removeAll}><span>Remove List</span></button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Todo
