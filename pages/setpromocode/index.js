import {Top_block, Input, Textarea, Button} from '../../UI/ui.js';
// import "./style/setpromocode.css";
import {Icon_link, Icon_copy, Icon_label, Icon_ruble, Icon_skidka, Icon_title, Icon_done} from "../../UI/icon.js"
import { useState } from 'react';
import style from "../../styles/setpromocode.module.css"
import Link from 'next/link.js';
import { useSession, signIn, signOut } from "next-auth/react"
import { NextAuthOptions } from 'next-auth';
import { getServerSession } from "next-auth/next"
// import { getStaticProps } from 'next/dist/build/templates/pages.js';



function  SetPromocode(){
const [spinner, setSpinner] = useState(false);
const [alertDone, setAlertDone] = useState(false);



function click_button(event){
        //alert('ok');
        event.preventDefault()
        
        //event.target[0].value 
// let url = event.target[0].value;
// let promocode = event.target[1].value;
// let title = event.target[2].value;
// let description = event.target[3].value;
// let new_cena = event.target[4].value;
// let old_cena = event.target[5].value;
// let skidka = event.target[6].value;

/*let proverka = [0,0,0,0,0];
for(let i=0; i<=7; i++){
    if(event.target[i].value.length >=1){
        proverka[i]=1;
    } else {
        console.log(proverka[i]+"Не заполнены");
    }
}*/

if(event.target[0].value.length!==0 &&  event.target[2].value.length!==0 && event.target[3].value.length!==0) {
    setSpinner(true);
        fetch("https://api.kotedze.ru/server/setpromocode/index.php", {
            method : "POST",
            body : new FormData(event.target)
        })
          .then(res => res.json())
          .then(
            (result) => {
              setSpinner(false);
              setAlertDone(true);
            },
            (error) => {
              alert('Ошибка загрузки');
              setSpinner(false);
            }
          )
} else {
    alert("Заполните поля")
}

console.log(event);
    }
//document.cookie = "hash=nLH1pGmJTBfylqE0nGGAROecvWdV6HXiZQ94R1G49H8";
//alert(document.cookie)

// const { user } = useUser({ redirectTo: '/login' });
const { data: session, status } = useSession()
const userEmail = session?.user?.email

return (
<>

<Top_block state="setpromocode"/>
{alertDone ? <AlertDone/> : null}

<div className="block_cartochka_content">

{/* <Form_setPomocode/> */}
<div className={style.block_cartochka_content}>
    <div className={style.block_forma_setpromocode}>
        <h2>Добавить промокод</h2>
    {/* <div className="set_image_block">
<div className="set_image">
<Icon_image/>
</div>
<p>Загрузить изображение</p>
    </div> */}
    <form id="setpromocode" name="setpost"  onSubmit={click_button}>
    <Input placeholder="https://skidka.ru" icon={<Icon_link/>} title="Ссылка на скидку" name="href"/>
    <Input placeholder="Promocode" icon={<Icon_copy/>} title="Промокод" name="promocode"/>
    <Input placeholder="Подписка иви на 30 дней..." icon={<Icon_title/>} title="Заголовок" name="title"/>
    <Textarea placeholder="Опешите развернуто о скидке своими словами..." title="Описание" name="description"/>
    <Input placeholder="1" icon={<Icon_label/>} title="Цена по скидке" name="new_cena"/>
    <Input placeholder="399" icon={<Icon_ruble/>} title="Цена без скидки" name="old_cena"/>
    <Input placeholder="50" icon={<Icon_skidka/>} title="Размер скидки в процентах % (не обязательно)" name="skidka"/>
    <Button />
    </form>
    </div>
    </div>
</div>
</>
);
}



function AlertDone(){
   
    
return (<>

<div className={style.alert_done_modal}>
    <div className={style.alert_done_modal_block}>
        <Icon_done/>
    <div>Скидка отправлена на модерацию</div>
    <Link href={"../"} className={style.button_alert_done_modal}>Отлично!</Link>
</div>
</div>
</>);
}
export default SetPromocode;

// export async function getStaticProps(test){
// res.status(404);
// return {
//     props : {"test":true}
//   }
// }


export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, NextAuthOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}
