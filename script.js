let modalBlock = document.querySelector('.modal'),
modalBlockImg = modalBlock.querySelector('img'),
worksImages = document.querySelectorAll('.works-block img');

worksImages.forEach((item) =>{
    item.addEventListener('click',()=> {
       modalBlockImg.src = item.src;
       modalBlock.classList.add('active');
    })
})
 //