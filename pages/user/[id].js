import React from "react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Svg_verefy, Icon_back } from "../../UI/icon";
import Image from "next/image";
import { No_content } from "../../UI/ui";
import Head from "next/head";

function User(result){
    const [state, setState] = useState(true);
    const [modal, setModal] = useState(false);

    function active_buttun(state){
        setState(true);
    }

    
  /*  function Setting(props){
        
       
        const [exit, setExit] = useState(false);

        
        

        function Setting_form () {
            const [value, setValue] = useState("Артем Б.");
            const [disabled, setDisabled] = useState(true);
            function  handleChange(event) {
                setValue(event.target.value);
                console.log(event.target.value);
              }
            return (<>
    <p>Ваш аватар</p>
            <div className="setting_edit_image">
                <div className="setting_image_block"><img className="setting_image_block" src={aavatar}/></div>
                <label className="input-file">
                <input type="file"></input>
                <span class="input-file-btn">Изменить аватарку</span>    
                </label>
            
            </div>
    
                <p>Ваш псевдоним</p>
                <div className="setting_edit_text">
            <input type="text" disabled={disabled} value={value} onChange={handleChange}></input>
            <button className="setting_button_edit" onClick={()=>setDisabled(false)}>Изменить псевдоним</button>
            <button className="setting_button_exit" onClick={()=>setExit(true)}>Выйти с акканта</button>
            </div>
            </> );
        }

        function exits(){
            document.cookie = "hash=0; max-age=0";
            document.location = "../";
        }
        function Setting_exit(){
           return (
            <>
            <p className="setting_exit_description">Вы уверены что хотите выйти с аккаунта?</p>
            <div className="setting_button_exit_block">
            <button className="setting_button_exit_back" onClick={()=>setExit(false)}>Остаться</button> <button className="setting_button_exit_done" onClick={()=>exits()}>Выйти</button>
            </div>
            </>
           );
        }
    return(
    <>
    <div className="modal_setting_active" >
    
        <div className="setting_block">
            
           <div className="setting_block_button_close"> 
           <h3 className='tittle_modal'>Настройки аккаунта</h3>
           <button className="setting_close_button_modal" onClick={()=>setModal(false)}><img src={close}/></button>
           </div>

          {exit ? <Setting_exit/> : <Setting_form/> }
    <div >
       
        
        </div>
        </div>
    </div>
    </>
    );
    }*/

   
const [error, setError] = useState(null);
const [items, setItems] = useState([]);
const [isLoaded, setIsLoaded] = useState(false);
const [spinner, setSpinner] = useState(true);
 /*   useEffect(() => {
    if(id!=null){
      // let coock = document.cookie = "user=John; max-age=7776000";
      // let coock = document.cookie;
       // console.log(coock.user);

        fetch("https://kotedze.ru/server/user/?id="+id)
          .then(res => res.json())
          .then(
            (result) => {
                setItems(result['user']);
                // setIsLoaded(true);
                console.log('test')
                setSpinner(false);
                document.title = result.user['nickname']+" - Kotedze.ru скидки пользователя";
            },
            // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
            // чтобы не перехватывать исключения из ошибок в самих компонентах.
            (error) => {
              setError(error);
            }
          
          )
        } else if(getCookie("hash")!=undefined) {
            fetch("https://kotedze.ru/server/user/?myaccount=true")
          .then(res => res.json())
          .then(
            (result) => {
                setItems(result['user']);
                setSpinner(false);
                // setIsLoaded(true);
               // document.title = result.user['nickname']+" - Kotedze.ru скидки пользователя";
            },
            // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
            // чтобы не перехватывать исключения из ошибок в самих компонентах.
            (error) => {
              setError(error);
            }
          
          )
        }
      }, [])*/


    
    
    let title = `Информация пользователя ${result.user.nickname} - Kotedze.ru`;
    let description = `Все скидки пользователя ${result.user.nickname} которые он опубликовал на сайте Kotedze.ru`;
    
   return (
    <>
   {/* {modal ? <Setting /> : ""} */}
   <Head>
   <title>{title}</title>
    <meta name="description" content={description}></meta>
    <meta name="author" content={result.user.nickname}></meta>
   </Head>
    <div className="block_cartochka_content">
        <div className="user_block_content">
            <div className="button_top_user"><button className="back_button" onClick={()=>window.history.back()}><Icon_back/>Назад</button>{/*<button className="setting_button" onClick={()=>setModal(true)}> <img src="setting"/></button>*/}</div>
            <div className='user_top_block_content'>
                {/* <img width={200} height={200} className="image_avatar_user" src={result.user.image}/>  "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg" */}
                <div className="image_avatar_user">
                <Image src={result.user.image}  alt="Изображение пользователя" width={100} height={100} style={{width:"100px", height:"auto"}}/>
                </div>
                <p>{result.user.nickname} {Number(result.user.verefy) ? <Svg_verefy /> : null}</p>
            </div>
            <div className="user_block_button">
                <button className={state ? "user_active_button" : "user_off_button"} onClick={active_buttun}>Промокоды</button><button className={!state ? "user_active_button" : "user_off_button"} onClick={()=>setState(false)}>Скидки</button>
            </div>
        </div>
        <No_content/>
    </div>
    </>
   ); 
}

export default User;

export async function getServerSideProps({query}){
    console.log(query.id)
    const response = await fetch("https://api.kotedze.ru/server/user/?id="+query.id);
    const result = await response.json();
return {
    props:result
}
}