import React from 'react'
import { Link } from 'react-router-dom'
import image1 from "../../src/assets/gotrip_bgImage.webp"
import image2 from "../../src/assets/Blogimg/img_2.png"
import image3 from "../../src/assets/Blogimg/img_3.png"
import image4 from "../../src/assets/Blogimg/img_4.png"
import image5 from "../../src/assets/Blogimg/img_5.png"
import image6 from "../../src/assets/Blogimg/img_6.png"
import image7 from "../../src/assets/Blogimg/img_7.png"
import image8 from "../../src/assets/Blogimg/img_8.png"
import image9 from "../../src/assets/Blogimg/img_9.png"
const data = [
//   {
// id:1,
// desc: "10 European ski destinations you should visit this",
// image: image1,
// date:"May 06, 2025"
//   },
  
  {
    id:2,
    desc:"10 European ski destinations you should visit this winter",
    image: image2,
    date:"May 06, 2025"
  },
  {
    id:3,
    desc:"10 European ski destinations you should visit this",
    image: image3,
    date:"May 06, 2025"
  },
  {
    id:4,
    desc:"10 European ski destinations you should visit this",
    image: image4,
    date:"May 06, 2025"
  },
  {
    id:5,
    desc:"10 European ski destinations you should visit this",
    image: image5,
    date:"May 06, 2025"
  },
  {
    id:6,
    desc:"10 European ski destinations you should visit this",
    image: image6,
    date:"May 06, 2025"
  },
  {
    id:7,
    desc:"10 European ski destinations you should visit this",
    image: image7,
    date:"May 06, 2025"
  },
  {
    id:8,
    desc:"10 European ski destinations you should visit this",
    image: image8,
    date:"May 06, 2025"
  },
  {
    id:9,
    desc:"10 European ski destinations you should visit this",
    image: image9,
    date:"May 06, 2025"
  },

]

const  Blog = () => {
  return (
    <>
    
        <div class="container p-30">
            <div class="text-center p-10">
            <h1 class="bg-blue font-bold">Travel articles</h1>
            <p className="font-extralight" >Lorem ipsum is placeholder text commonly used in site.</p>
            </div>
            <div class="">
                <ul class="flex gap-9 justify-center pb-10  ">
                <li class="bg-pink-100 hover:bg-sky-700  font-bold p-3 border-0 rounded-md"><Link to="/">Art and culture</Link></li>
                <li class="bg-pink-100 hover:bg-sky-700  font-bold p-3 border-0 rounded-md"><Link to="/">Beaches</Link></li>
                <li class="bg-pink-100 hover:bg-sky-700  font-bold p-3 border-0 rounded-md"><Link to="/">Adventure travel</Link></li>
                <li class="bg-pink-100 hover:bg-sky-700  font-bold p-3 border-0 rounded-md"><Link to="/">Explore</Link></li>
                <li class="bg-pink-100 hover:bg-sky-700  font-bold p-3 border-0 rounded-md"><Link to="/">Air travel</Link></li>
                <li class="bg-pink-100 hover:bg-sky-700  font-bold p-3 border-0 rounded-md"><Link to="/">Food and drink</Link></li>
                </ul>
                
            </div>
            <div class="grid grid-cols-3 grid-rows-3 gap-4  ">
              <div class="  ">
                <img class="h-80  border-0 rounded-md  " src=" https://creativelayers.net/themes/gotrip-html/img/blog/grids/1.png" alt=""/>
                
                <h4 class="font-normal font-semibold  fw-500">10 European ski destinations you should visit this <br /> winter</h4>
                <br />
               <p class="font-extralight">May 06, 2025</p> 
                </div>

                {data.map((item)=> {
                  return (
                    <div key="id">
                      <img class="h-80  border-0 rounded-md  " src={item.image}/>
                      <h4 class="font-normal font-semibold  fw-500">{item.desc}</h4>
                      <p class="font-extralight">{item.date}</p> 

                    </div>
                  )
                })}
              
              {/* <div class="">
              <img class="h-80  border-0 rounded-md " src="https://creativelayers.net/themes/gotrip-html/img/blog/grids/2.png" alt=""/>
              <p class="font-normal font-semibold">Booking travel during Corona: good advice in an uncertain time</p>
              <br />
              <p class="font-extralight">May 06, 2025</p> 
              </div>

              <div class="">
              <img class="h-80  border-0 rounded-md " src="https://creativelayers.net/themes/gotrip-html/img/blog/grids/3.png" alt=""/>
              <p class="font-normal font-semibold">Where can I go? 5 amazing countries that are open right now</p>
              <br />
              <p class="font-extralight">May 06, 2025</p> 
              </div>
             
              <div class="  ">
                <img class="h-80  border-0 rounded-md  " src="https://creativelayers.net/themes/gotrip-html/img/blog/grids/4.png" alt=""/>
                
                <h4 class="font-normal font-semibold  fw-500">10 European ski destinations you should visit this <br /> winter</h4>
                <br />
               <p class="font-extralight">May 06, 2025</p> 
                </div>
              
              <div class="">
              <img class="h-80  border-0 rounded-md " src="https://creativelayers.net/themes/gotrip-html/img/blog/grids/5.png" alt=""/>
              <p class="font-normal font-semibold">Booking travel during Corona: good advice in an uncertain time</p>
              <br />
              <p class="font-extralight">May 06, 2025</p> 
              </div>

              <div class="">
              <img class="h-80  border-0 rounded-md " src="https://creativelayers.net/themes/gotrip-html/img/blog/grids/6.png" alt=""/>
              <p class="font-normal font-semibold">Where can I go? 5 amazing countries that are open right now</p>
              <br />
              <p class="font-extralight">May 06, 2025</p> 
              </div>

              <div class="  ">
                <img class="h-80  border-0 rounded-md  " src="https://creativelayers.net/themes/gotrip-html/img/blog/grids/7.png" alt=""/>
                
                <h4 class="font-normal font-semibold  fw-500">10 European ski destinations you should visit this <br /> winter</h4>
                <br />
               <p class="font-extralight">May 06, 2025</p> 
                </div>
              
              <div class="">
              <img class="h-80  border-0 rounded-md " src="https://creativelayers.net/themes/gotrip-html/img/blog/grids/8.png" alt=""/>
              <p class="font-normal font-semibold">Booking travel during Corona: good advice in an uncertain time</p>
              <br />
              <p class="font-extralight">May 06, 2025</p> 
              </div>

              <div class="">
              <img class="h-80  border-0 rounded-md " src="https://creativelayers.net/themes/gotrip-html/img/blog/grids/9.png" alt=""/>
              <p class="font-normal font-semibold">Where can I go? 5 amazing countries that are open right now</p>
              <br />
              <p class="font-extralight">May 06, 2025</p> 
              </div> */}

</div>
        
            
            
        </div>
    
    </>

  )


}

export default Blog;

