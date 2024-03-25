import React from "react";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Top_block } from "../../UI/ui";


function Shop(result){   

function Shops(props){
    const [items, setItems] = useState([]);
    
function Cartochka_shop(props){
return (<>
<Link href={"/shop/"+props.shop}>
<div className="cartochka_shop">
    <Image width={100} height={10} style={{width: '100px', height: 'auto',}} className="shop_image_cartochka" src={props.image} alt={props.shop}/>
</div>
</Link>
    </>);
}

console.log(result.shop)

    return(<>
    <Head>
    <title>Скидки и промокоды от известных магазинов и сервисов</title>
        <meta name="description" content="Выберите магазин или сервис, от котрого хотите найти выгодную скидку или промокод. Актуальные скидки, промокоды и купоны от популярных брендов, которыми вы ежедневно пользуетесь."></meta> 
    </Head>
   
    <div className="banner_title_shop">
    <h1 className="title_shops">Онлайн магазины и сервисы</h1>
    </div>
    <div className="container_shop">
        {result.shop.map(item=>(<>
            <Cartochka_shop key={item.ID} image={item.image} shop={item.name_url}/>
            </>))}
        
    </div>
    </>);
}




    return (<>
     <Top_block state="shop"/>
    <div className="block_cartochka_content">
 <Shops/>
    </div>
    </>);
}


export default Shop;

export async function getServerSideProps({query}){
    //const page = context.query.page || 1;
  //  console.log(page)
      const response = await fetch("https://api.kotedze.ru/server/shop/")
      const result = await response.json();
//console.log(result)
return {
    props : result
}
}