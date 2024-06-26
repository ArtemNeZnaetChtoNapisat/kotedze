import { useSession, signIn, signOut } from "next-auth/react"


export default function Login(){
  const { data: session, status } = useSession()
  const userEmail = session?.user?.email
    
    if (status === "loading") {
        return <p>Hang on there...</p>
      }
    
      if (status === "authenticated") {
        return (
          <>
            <p>{JSON.stringify(session)}</p>
            <button onClick={() => signOut()}>Sign out</button>
           
          </>
        )
      }
    
      return (
        <>
           <img src="https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png" />
            <div className="block_cartochka_content">
    <div className="block_auth">
        <div className="image_block_auth">
           
            {/* <Svg_logo/> */}
            <p className="text_desciption_auth">Kotedze.ru - это сайт для поиска выгодных предложений в котором пользователи могут делится скидками и промокодами - присоединяйся и ты!</p>
        </div>
    <div className="button_auth_block">
    <h1>Войдите в аккаунт</h1>
       
   

    <button id="VKIDSDKAuthButton" className="VkIdWebSdk__button VkIdWebSdk__button_reset" onClick={() => signIn("github")}>
    <div className="VkIdWebSdk__button_container">
      <div className="VkIdWebSdk__button_icon">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.54648 4.54648C3 6.09295 3 8.58197 3 13.56V14.44C3 19.418 3 21.907 4.54648 23.4535C6.09295 25 8.58197 25 13.56 25H14.44C19.418 25 21.907 25 23.4535 23.4535C25 21.907 25
           19.418 25 14.44V13.56C25 8.58197 25 6.09295 23.4535 4.54648C21.907 3 19.418 3 14.44 3H13.56C8.58197 3 6.09295 3 4.54648 4.54648ZM6.79999 10.15C6.91798 15.8728 9.92951 19.31 14.8932 19.31H15.1812V16.05C16.989 16.2332 18.3371 
           17.5682 18.8875 19.31H21.4939C20.7869 16.7044 18.9535 15.2604 17.8141 14.71C18.9526 14.0293 20.5641 12.3893 20.9436 10.15H18.5722C18.0747 11.971 16.5945 13.6233 15.1803 13.78V10.15H12.7711V16.5C11.305 16.1337 9.39237 14.3538 9.314 10.15H6.79999Z" fill="white"/>
        </svg>
      </div>
      <div className="VkIdWebSdk__button_text">
        Войти через VK ID
      </div>
    </div>
  </button>
<button className="back_auth_button" onClick={()=>window.history.back()}>Вернуться назад</button>

  <div className="text_information_auth">Продолжая, вы принимаете <a href="https://id.vk.com/terms">пользовательское соглашение</a>  и <a href="https://id.vk.com/privacy">политику конфиденциальности</a> </div>
 
    </div>
   
  
     </div>
    
</div>
        </>
      )
}