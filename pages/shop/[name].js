import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Content, No_content, Top_block } from "../../UI/ui";
import Image from "next/image";
import Head from "next/head";


function Shop(result){
   const {query} = useRouter();
  //  const params = useParams();
    const Id = query["name"];
 //   console.log(result)
    //const [spinner, setSpinner] = useState(true);
//    const [max_page, setMax_page] = useState(0);

        const [post, setPost] = useState([]);
    
    function test(){
        return (
    <>
    <div>test</div>
    </>
        );
    }
     
  
let description = `Актуальные скидки, промокоды и купоны от ${result.shop.name}, которыми вы ежедневно пользуетесь c выгодой до 100%. Мы собрали подборку из всех лучших и актуальных предложений от ${result.shop.name} на ${month()} года`;
        return(<>   
         <Head>
        <title>Скидки, промокоды и купоны от {result.shop.name} на {month()} - Kotedze.ru</title>
        <meta name="description" content={description}></meta>
        <meta name="keywords" content="Промокод, Промокоды, скидки и промокоды, купоны, купон, подписка, бесплатный промокод, подборка"></meta>
       </Head>
       <Top_block/>
    <div className="block_cartochka_content">
    <div className="container_shop_id">
        <GetShop Id={Id} post={result} shop={result}/>
            <Button  Id={Id} setPost={setPost}/>
        </div>
        {result.post.length >0 ? <Post post={result.post}/> : <No_content/>}
        
        <div className="description_shop">
            <h3>Краткая информация об интернет-магазине</h3><p dangerouslySetInnerHTML={{ __html: result.shop.description }}></p></div>
    </div>
    {/* {!spinner && max_page>1? <Pagination max_page={max_page}/> : <p>Вы посмотрели все записи.</p>} */}
      
        </>);
}









function month (){
    var date = new Date();
 let month = "";
  switch(date.getMonth()){
    case 0:
        month = "Январь";
        break;
        case 1:
            month = "Февраль";
        break;
        case 2:
            month = "Март";
        break;
        case 3:
            month = "Апрель";
        break;
        case 4:
            month = "Май";
        break;
        case 5:
            month = "Июнь";
        break;
        case 6:
            month = "Июль";
        break;
        case 7:
            month = "Август";
        break;
        case 8:
            month = "Сентябрь";
        break;
        case 9:
            month = "Октябрь";
        break;
        case 10:
            month = "Ноябрь";
        break;
        case 11:
            month = "Декабрь";
        break;
  }    
    return month+" "+date.getFullYear();
} 






//======================Component=====================================

function Button(props){ 
   // let hash = (window.location.hash==null) ? 0 : window.location.hash.substring(1); 
    
    const [type, setType] = useState(0);
    
   

    function handleChange(value) {
      props.setPost(value);
    }

 /*   useEffect(() => {      
       // window.location.hash=type; //Меняет хеш
        //console.log(hash)

        fetch("https://kotedze.ru/server/post/?shop_name="+props.Id+"&type="+type)
        .then(res => res.json())
        .then(
          (result) => {
              handleChange(result.post)
          },
          // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
          // чтобы не перехватывать исключения из ошибок в самих компонентах.
          (error) => {
            alert("Ошибка запроса! Проверьте интернет соединение и перезагрузите страницу.");
          }
        )
       
            }, [type])*/

           
                   

    return (
        <>
        <div className="user_block_button">
                <button className={type==0 ? "user_active_button" : "user_off_button"} onClick={()=>setType(0) }>Все</button>
                <button className={type==1 ? "user_active_button" : "user_off_button"} onClick={()=>setType(1)}>Промокоды</button>
                <button className={type==2 ? "user_active_button" : "user_off_button"} onClick={()=>setType(2)}>Скидки</button>
            </div>
        </>
    );
}


function Post(props){
   // console.log(props.post)
    return (<>
    {props.post.map(item => (<>
        <Content key={item.ID} user_id={item.user_id} nickname={item.nickname} verefy={Number(item.verefy)}  id={item.ID} skidka={item.skidka} cena={item.new_cena} decena={item.old_cena}  description={item.description} img={item.image} title={item.title} type={item.type}/>
    </>))}
    </>);
}

function GetShop(props){
    const [items, setItems] = useState(props.shop.shop);
   // console.log(items)
    const [loaded, setLoaded] = useState(false)
    
  

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    var info_title = [title, description];

       /* useEffect(() => {
            if (loaded) return ;
           
            fetch("https://kotedze.ru/server/shop/?name_url="+props.Id)
              .then(res => res.json())
              .then(
                (result) => {
                  //  document.title = "Промокоды и купоны "+result.shop.name+" • "+month();
                  setTitle("Скидки, промокоды и купоны от "+result.shop.name+" • на "+month())
                  setDescription("Все актуальные скидки и промокоды интернет-магазина "+result.shop.name+" на "+month()+"  проверенные скидки с выгодой до 100%");
                    setItems(result.shop);  
                   // props.setDescriptionShop(result.shop.description)
                    // setPost(result.post);
                   //props.setSpinner(false);         
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                  alert("Ошибка запроса! Проверьте интернет соединение и перезагрузите страницу.");
                }
              
              )
          }, [loaded])*/
        
         
        return (<>
         {/* <Helmet>
    <title>{info_title[0]}</title>
    <meta name="description" content={info_title[1]}></meta>
  </Helmet> */}
  
        <div className="container_info_shop_id">
            <div className="avatar_shop"><Image className="avatar_shop_image" alt="shop" src={items.image} width={100} height={100} style={{width: "100%", height:"auto"}}/></div>
            <h1 className="title_shop_id">Скидки и промокоды {items.name} • {month()}</h1>
            </div>
        </>);
      }

export default Shop;


export async function getServerSideProps({query}){
    //const page = context.query.page || 1;
  //  console.log(page)
      const response = await fetch("https://api.kotedze.ru/server/shop/?name_url="+query.name)
      const result = await response.json();
//console.log(result)
return {
    props : result
}
}