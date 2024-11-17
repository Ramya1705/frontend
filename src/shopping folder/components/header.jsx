import React from 'react'

const header = () => {
  return (
    <div className='headerSection'>
        <div className="left">
            <div className="title">
            </div>
        </div>
        <div className="center">
            <ul>
                <li>Woman</li>
                <li>Men</li>
                <li>children</li>
                <li>beauty</li>
                </ul>
                </div>
                <div className="search">
                    <input type="text"placeholder='search...'/>
                </div>
                <div className="right">
                    <div className="signin">
                        signin/signup
                    </div>
                    <div className="cart">
                        cart
                    </div>
                </div>

            
        </div>
    
  )
}

export default header