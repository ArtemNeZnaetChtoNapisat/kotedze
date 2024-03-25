import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Pagination, Content, No_content, Top_block} from "../UI/ui.js";
import Image from "next/image";
import style from "../styles/index.module.css";

//import './style/style.css';
//import './style/mobile.css';
//import  left_img from './icon/left.svg';
//import  right_img from './icon/right.svg';
//import  img from './image/ivi.png';

//import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useSearchParams } from "next/navigation";
//import {Form_setPomocode, Spinner, Blockcontent, Top_block, Banner, Burger_menu} from './UI/UI.js';
//import {Icon_left, Icon_right} from './UI/icon.js';
//import { Helmet } from 'react-helmet';
 



// JavaScript source code






function Home({result}) {
 
    function Shop_scroll(){

        function Shop_cartochka(props){
           let to = "/shop/"+props.shop;
           return(
        <>
        <Link href={to}>
        <div className={style.shop_cartochka}>
            {/* <img className="image_shop_cartochka" src={props.img} title={props.title}/> */}
            <Image  className={style.image_shop_cartochka} src={props.img} title={props.title} width={100} height={10} style={{width: '100px', height: 'auto',}} placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj2L9//38AB7sDPcyW+IQAAAAASUVORK5CYII="/>
        </div>
        </Link>
        </>
            );
        }
        
        function Cartochka_shop_all(){
            let to = "/shop/";
            return(
         <>
         <Link href={to}>
         <div className={style.shop_cartochka}>
             <div className={style.container_shop_all}>
                <div className={style.image_shop_all}>
             </div>
             <p className={style.title_image_shop_all}>Смотреть все магазины</p>
             </div>
         </div>
         </Link>
         </>
             );
         }
        
        
        function click_left(i){
            let test = document.getElementById("test").scrollLeft -= 150;
             //console.log(test)
         }
        
        function click_right(i){
           let test = document.getElementById("test").scrollLeft+=150; //scrollLeft+=150;
           //et scroll = test.scrollLeft;
            console.log(test)
        }
            return (<>
        <div className={style.block_shop} id="test">
            <button className={style.button_cartochka_left} onClick={click_left} title="Назад"></button>
        <div  className={style.shop_cartochka_block} >
        <Shop_cartochka img="https://api.kotedze.ru/image/shop/litres.png" shop="litres" title="Литрес"/>
        <Shop_cartochka img="https://api.kotedze.ru/image/shop/megamarket.png" shop="megamarket" title="Мегамаркет"/>
        <Shop_cartochka img="https://api.kotedze.ru/image/shop/y-market.png" shop="yandex-market" title="Яндекс Маркет"/>
        <Shop_cartochka img="https://api.kotedze.ru/image/shop/aliexpress.png" shop="aliexpress" title="Алиэкспресс"/>
        <Shop_cartochka img="https://api.kotedze.ru/image/shop/ozon.png" shop="ozon" title="Озон"/>
        <Shop_cartochka img="https://api.kotedze.ru/image/shop/m-video.png" shop="m-video" title="М.Видео"/>
        <Shop_cartochka img="https://api.kotedze.ru/image/shop/samokat.png" shop="samokat" title="Самокат"/>
        <Cartochka_shop_all/>
        
        </div>
        <button className={style.button_cartochka_right} onClick={click_right} title="Еще"></button>
        </div>
        </>);
        }



const [items, setItems] = useState([]);
    useEffect(() => {            
       
        
      }, [])


      const searchParams = useSearchParams()
      const page = searchParams.get('page') || 1;
    console.log(result)
    return (
       <>
       <Head>
        <title>Kotedze.ru - свежие скидки и промокоды</title>
        <meta name="description" content="Актуальные скидки, промокоды и купоны от популярных брендов, которыми вы ежедневно пользуетесь c выгодой до 100%."></meta>
        <meta name="keywords" content="Промокод, Промокоды, Литрес, Мегамаркет, Алиэкспресс, Озон, М.видео, Самокат, скидки и промокоды, купоны, купон, подписка, бесплатный промокод, Котедзе, Kotedze"></meta>
       </Head>

      <Top_block state="home"/>
            <div className="block_cartochka_content">
            <Shop_scroll/>
            {/* {result.post.length >0 ? <Post post={result.post}/> : <No_content/>} */}
            {result.post.length >0 ? result.post.map(item => (<>
       <Content key={item.ID} user_id={item.user_id} nickname={item.nickname} verefy={Number(item.verefy)}  id={item.ID} skidka={item.skidka} cena={item.new_cena} decena={item.old_cena}  description={item.description} img={item.image} title={item.title} type={Number(item.type)}/>
            </> ) ) : <No_content/>}

<Pagination getPage={page} maxPage={result.max_page}/>
            </div>
       </>
    );

    
}




export default Home;


   

export async function getServerSideProps(context) {//getStaticProps(context){  
    const page = context.query.page || 1;
    console.log(page)
      const response = await fetch("https://api.kotedze.ru/server/post/?page="+page)
      const result = await response.json();
      return {
          props : {result}
      }
  }


 /*  fetch("https://kotedze.ru/server/post/?page=1")
      .then(res => res.json())
      .then(
        (result) => {
            setItems(result.post);
          //  props.setMax_page(result.max_page);
            // setIsLoaded(true);
            // setSpinner(false);
            //result = result.post;
           
            console.log("Запрос!!!!!!!!!!");
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
        //  setError(error);
        }
      
      )*/
/*npx create-react-app app*/
























function Add_promo(props) {
    return <div className="block_content"></div>;
}






