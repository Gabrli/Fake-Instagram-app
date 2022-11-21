window.onload = () =>{


   
   const firsItem = document.createElement('div')
   const PostBtn = document.createElement('button')
  
   const PhotoElement = document.createElement('img')
   const AboutPostElements = document.createElement('p')
   const PhotoProfileBtn = document.createElement("img")
   const CommentsModal = document.createElement('div')
   const Input = document.createElement("input")
   const addInput = document.createElement('button')
   const ul = document.createElement('ul')
   const BtnCloseModalComments = document.createElement('button')
   //const TextaboutPost = document.createElement('p')


  PhotoElement.src = "photos/photoseven.jpg";
  PhotoProfileBtn.src = "photos/photoFour.jpg"
  Input.value = ""


   PostHeader.appendChild(firsItem)
   firsItem.appendChild(PostBtn)

  
   firsItem.appendChild(BtnLike)
   firsItem.appendChild(BtnComments)
   firsItem.appendChild(BtnShare)
   firsItem.appendChild(AboutPostElements)
   firsItem.appendChild(CommentsModal)
   CommentsModal.appendChild(Input)
   CommentsModal.appendChild(addInput)
   CommentsModal.appendChild(ul)
   CommentsModal.appendChild(BtnCloseModalComments)
  
   PostBtn.appendChild(PhotoProfileBtn)
   firsItem.appendChild(PhotoElement)
                                             //function which under load app create first post
   firsItem.classList.add("block")
   PostBtn.classList.add("post-profile")
   PhotoProfileBtn.classList.add("profile-photo-post")
   CommentsModal.classList.add("comments-modal")
   Input.classList.add("input-comments")
   addInput.classList.add("add-btn")
   ul.classList.add("list")
   BtnCloseModalComments.classList.add("btn-close-modal-comments")
 
   PhotoElement.classList.add("photo-element")
   AboutPostElements.classList.add("about-post-text")

   //TextaboutPost.classList.add("text-post")


   AboutPostElements.innerText = 'This my first post';
   Input.placeholder = 'new comment';
   addInput.innerText = '+';
   BtnCloseModalComments.innerText = 'X';
   //TextaboutPost.innerText = 'This my first post'





   BtnLike.addEventListener('click', () => {
    BtnLike.classList.toggle("like-btn-click")
   })

   BtnComments.addEventListener('click', ()=> {
      BtnComments.classList.toggle("like-btn-click")
      CommentsModal.classList.add("comments-modal-active")
   })
   BtnShare.addEventListener('click', ()=> {
      BtnShare.classList.toggle("like-btn-click")
   })

   addInput.addEventListener('click', ()=> {
      const newcommetItem = document.createElement('p')
      newcommetItem.innerText = Input.value
      CommentsModal.appendChild(newcommetItem)
     
      newcommetItem.classList.add("new-comment")

   })
   BtnCloseModalComments.addEventListener('click', ()=> {
      CommentsModal.classList.remove("comments-modal-active")
      BtnComments.classList.remove("like-btn-click")
   })

     
}



const BtnLike = document.querySelector(".like-btn")
const BtnComments = document.querySelector(".comment-btn")
const BtnShare = document.querySelector(".share-btn")










setTimeout(NextItem, 1000)         //wait 1 secound and onn function 'NextItem'                

function NextItem() {
  const nextItemPost = document.createElement('div')
  const NextPhotoElement = document.createElement("img")

  NextPhotoElement.src = 'photos/photoreklama.png'


  PostHeader.appendChild(nextItemPost)
  nextItemPost.appendChild(NextPhotoElement)



  nextItemPost.classList.add("ig-modal")
  NextPhotoElement.classList.add("ig-modal-photo")
                                           //function which has task create new post becouse scroll bar worked 

}

window.addEventListener('scroll', ()=> {

   const random = Math.floor(Math.random()*5 + 1)

 

   const newItem = document.createElement('div')
   const NewPostBtn = document.createElement('button')

   const NewLikeBtn = document.createElement('button')
   const NewCommentsBtn = document.createElement('button')
   const NewShareBtn = document.createElement('button')
   const ScrollPostTextElement = document.createElement('p')
   const PhotoProfileBtnScroll = document.createElement('img')
  
  
   

   

   PostHeader.appendChild(newItem)
   newItem.appendChild(NewPostBtn)
   newItem.appendChild(NewLikeBtn)
  
   newItem.appendChild(NewCommentsBtn)

 
  

   NewPostBtn.appendChild(PhotoProfileBtnScroll)
   newItem.appendChild(NewShareBtn)
   newItem.appendChild(ScrollPostTextElement)
  
                       //function which when user scrolling app create new post
  
   NewLikeBtn.innerText = '❤'
   NewCommentsBtn.innerText = '☁'
   NewShareBtn.innerText = '➤'
   
 
  

   newItem.classList.add("block")
   NewPostBtn.classList.add("post-profile")

 
   NewLikeBtn.classList.add("new-like-btn")
   NewCommentsBtn.classList.add("new-comments-btn")
   NewShareBtn.classList.add("new-share-btn")
   ScrollPostTextElement.classList.add("about-post-text-scroll")
   PhotoProfileBtnScroll.classList.add("profile-photo-post")




   NewLikeBtn.addEventListener('click', ()=> {
      NewLikeBtn.classList.toggle("like-btn-click")
   })

   NewCommentsBtn.addEventListener('click', ()=> {
      NewCommentsBtn.classList.toggle("like-btn-click")
      CommentsModal.classList.add("comments-modal-active")
   })

   NewShareBtn.addEventListener('click', ()=> {
      NewShareBtn.classList.toggle("like-btn-click")
     
   })
   



   if(random === 1){
      const  NewPhotoElement = document.createElement('img')

      NewPhotoElement.src = 'photos/photofins.jpg'
      PhotoProfileBtnScroll.src = 'photos/photofins.jpg'

      newItem.appendChild(NewPhotoElement)
      ScrollPostTextElement.innerText = 'Hello my name is Bella and I can take you photo'
      NewPhotoElement.classList.add("photo-element")
      
   }
   else if(random === 2){
      const  NewPhotoElement = document.createElement('img')

      NewPhotoElement.src = 'photos/photoFour.jpg'
      PhotoProfileBtnScroll.src = 'photos/photoFour.jpg'


      newItem.appendChild(NewPhotoElement)
      ScrollPostTextElement.innerText = 'Did you make a new adventer'
      NewPhotoElement.classList.add("photo-element")
      
   }
   else if(random === 3){
      const  NewPhotoElement = document.createElement('img')

      NewPhotoElement.src = 'photos/photofive.jpg'
      PhotoProfileBtnScroll.src = 'photos/photofive.jpg'


      newItem.appendChild(NewPhotoElement)
      ScrollPostTextElement.innerText = 'I was cooking when your tv crashed'
      NewPhotoElement.classList.add("photo-element")
   }
   else if(random === 4){
      const  NewPhotoElement = document.createElement('img')

      NewPhotoElement.src = 'photos/photoThree.jpg'
      PhotoProfileBtnScroll.src = 'photos/photoThree.jpg'


      newItem.appendChild(NewPhotoElement)
      ScrollPostTextElement.innerText = 'I like read my notebook and I thing is not bad'
      NewPhotoElement.classList.add("photo-element")
   }
   else if(random === 5) {
      const  NewPhotoElement = document.createElement('img')

      NewPhotoElement.src = 'photos/photoeight.jpg'
      PhotoProfileBtnScroll.src = 'photos/photoeight.jpg'


      newItem.appendChild(NewPhotoElement)
      ScrollPostTextElement.innerText = 'How are you ? I feel happy !'
      NewPhotoElement.classList.add("photo-element")
   }
   else{
      const  NewPhotoElement = document.createElement('img')

      NewPhotoElement.src = 'photos/photofive.jpg'
      PhotoProfileBtnScroll.src = 'photos/photofive.jpg'


      newItem.appendChild(NewPhotoElement)
      ScrollPostTextElement.innerText = 'I today not have idea'
      NewPhotoElement.classList.add("photo-element")

   }
   
})




const body = document.querySelector('body')
const PostHeader = document.querySelector('.post-header')   //downloding elements of 'home.html'