import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import { Icon_back, Icon_copy, Svg_verefy } from "../../UI/icon";
import { Top_block } from "../../UI/ui";

function Promocode({result}){

   
const [items, setItems] = useState(result);

let user = "/user/"+result.user_id

let description = `Бесплатная акция от известного магазина ${result.description}`;

function buttonCopy(){
  navigator.clipboard.writeText(result.promocode) 
  .then(() => {
    alert("Промокод скопирован!") 
  })
}
return (<>
<Head>
    <title>{items['title']}</title>
    <meta name="description" content={description}></meta>
    <meta name="author" content={result.nickname}></meta>
    <meta name="keywords" content="Промокод, Промокоды, скидки и промокоды, купоны, купон, подписка, бесплатный промокод, подборка"></meta>
</Head>
<Top_block/>
     <div className="block_cartochka_content">
            <div className="post_block_content">
        <button className="back_button" onClick={()=>window.history.back()}><Icon_back/><p>Назад</p></button>
       
        <div className="content_title">
          <div className="block_image">
          <div className="image">
            {/* <img className="image" src={items['image']}/> */}
            <Image placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj2L9//38AB7sDPcyW+IQAAAAASUVORK5CYII=" src={items['image']} alt="Изображение магазина" className="image_dec" width={300} height={300} style={{width:"100%", height:"auto"}} />
            <Image src={items['image']} alt="Изображение магазина" className="image_mob" width={150} height={150} style={{width:"100%", height:"auto"}} placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj2L9//38AB7sDPcyW+IQAAAAASUVORK5CYII="/>
        </div>
          </div>
       

        <div className="block_title">
        <h1 className="title"><span>{items['title']}</span></h1>
        {/* <div className="block_cena"><p>{Number(items.skidka)==0 ? items['new_cena']+"₽" : items['skidka']+"%"}</p> {(Number(items['type'] ) && Number(items['old_cena'])!=0 )?<del>{items['old_cena']}₽</del> :null}</div> */}
        <div className="button">
       { !items['promocode']=="" ? <button className="button_copycode" onClick={()=>buttonCopy(items['promocode'])}>{items['promocode']} <Icon_copy/></button> : null}
        <a href={items.url} className="button_href"><span>К скидке</span></a>
        </div>
        <div className="user_button">  <Link href={user}><div className="user_button_adaptive"><div className="avatar_block"><Image placeholde="blur" alt="Пользователь" src={items['user_image']} width={40} height={40} style={{width: "100%", height:"auto",}}/></div><p>{items['nickname']} {Number(items['verefy']) ? <Svg_verefy/> : null}</p>  </div></Link> </div> </div> 
        
        </div>

        <div className="post_block_content">
            <div className="block_description">
               <div className="title_block_content">Подробности о промокоде</div>
                <div className="description">
                {items['description']}
                <br/>
                {/* Опубликовано: {datePost(items['reg_date'])} */}
                </div>
               <div className="info_description">
               Если вы перейдете по ссылке или купите товар из публикации, сайт (Kotedze.ru) может получить комиссию от магазина, но это никак не влияет на то, какие скидки публикуются на сайте
               </div>
                </div>
            </div>
        </div>  

       

       
            
         
           
            </div>
</>);
}

export default Promocode;


export async function getServerSideProps({params}){  
  //const {query} = useRouter();
console.log(params)
if(params.id!=="test"){
  const response = await fetch("https://api.kotedze.ru/server/post/?post="+params.id)
  const result = await response.json();

  return {
    props : {result}
}
}
}