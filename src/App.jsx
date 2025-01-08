// import React from 'react'
// import Milk from './Api/Milk'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { Store } from './App/Store'

// export default function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Provider store={Store}>      
//           <Routes>
//             <Route path='/' element={<Milk/>}></Route>
//           </Routes>
//         </Provider>
//       </BrowserRouter>
//     </div>
//   )
// }

import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { Store } from './App/Store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from './Api/Header'
import Milk from './Api/Milk'
import Bread from './Api/Bread'
import Flakes from './Api/Flakes'
import Curd from './Api/Curd'


export default function App() {

  //click event
  const [isClicked_1, setIsClicked_1] = useState(false)
  const [isClicked_2, setIsClicked_2] = useState(false)
  const [isClicked_3, setIsClicked_3] = useState(false)
  const [isClicked_4, setIsClicked_4] = useState(false)
  const [isClicked_5, setIsClicked_5] = useState(false)
  const [isClicked_6, setIsClicked_6] = useState(false)
  const [isClicked_7, setIsClicked_7] = useState(false)
  const [isClicked_8, setIsClicked_8] = useState(false)

  

  const handleCategoryClick_1 = () => {
    setIsClicked_1(!isClicked_1);
  };

  const handleCategoryClick_2 = () => {
    setIsClicked_2(!isClicked_2);
  };

  const handleCategoryClick_3 = () => {
    setIsClicked_3(!isClicked_3);
  };

  const handleCategoryClick_4 = () => {
    setIsClicked_4(!isClicked_4);
  };

  const handleCategoryClick_5 = () => {
    setIsClicked_5(!isClicked_5);
  };

  const handleCategoryClick_6 = () => {
    setIsClicked_6(!isClicked_6);
  };

  const handleCategoryClick_7 = () => {
    setIsClicked_7(!isClicked_7);
  };

  const handleCategoryClick_8 = () => {
    setIsClicked_8(!isClicked_8);
  };



  return (

    <div>
      <BrowserRouter>
        <Provider store={Store}>
          
          <Header/>

          <div className="container">

            <div className="right">

              <Link to='/' style={{ textDecoration: 'none' }}>
                <div className={`category ${isClicked_1 ? 'clicked-1' : ''}`} onClick={handleCategoryClick_1}>
                  <div className={`cat-image ${isClicked_1 ? 'active-1' : ''}`}>
                    <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/922_1643384380004.png" alt="" />
                  </div>  
                  <h4>Milk</h4>
                </div>
              </Link>



              <Link to='/bread' style={{ textDecoration: 'none' }}>
                <div className={`category ${isClicked_2 ? 'clicked-2' : ''}`} onClick={handleCategoryClick_2}>
                  <div className={`cat-image ${isClicked_2 ? 'active-2' : ''}`}>
                    <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/953_1657599742631.png" alt="" />
                  </div>
                  <h4>Bread & Pav</h4>
                </div>
              </Link>


              <Link to='/flakes' style={{textDecoration:'none'}}>
                <div className={`category ${isClicked_3 ? 'clicked-3' : ''}`} onClick={handleCategoryClick_3}>
                  <div className={`cat-image ${isClicked_3 ? 'active-3' : ''}`}>
                    <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/954_1680251634382.png" alt="" />
                  </div>
                  <h4>Flakes & Kids Ceraleas</h4>
                </div>
              </Link>


              <Link to='/curd' style={{textDecoration:'none'}}>
                <div className={`category ${isClicked_5 ? 'clicked-3' : ''}`} onClick={handleCategoryClick_5}>
                  <div className={`cat-image ${isClicked_5 ? 'active-3' : ''}`}>
                    <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/123_1643384414434.png" alt="" />
                  </div>
                  <h4>Curd & Yogurt</h4>
                </div>
              </Link>

            </div>

            <div className="left">
              <Routes>
                <Route path='/' element={<Milk/>} ></Route>
                <Route path='/bread' element={<Bread/>}></Route>
                <Route path='/flakes' element={<Flakes/>}></Route>
                <Route path='/curd' element={<Curd/>}></Route>
              </Routes>
            </div>

          </div>

          <footer/>

        </Provider>
      </BrowserRouter>


    </div>
  )
}
