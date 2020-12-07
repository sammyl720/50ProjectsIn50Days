const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-texts')

setTimeout(() => {
  getData()
}, 2500);
function getData(){
  header.innerHTML = `<img src='https://images.unsplash.com/photo-1504707748692-419802cf939d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='laptop' />`
  title.innerHTML = `Lorem ipsum dolor sit amet.`
  excerpt.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, iste!'
  profile_img.innerHTML = `<img src='https://randomuser.me/api/portraits/men/45.jpg' alt='profile' />`
  name.innerHTML = 'John Doe'
  date.innerHTML = 'Oct 8th, 2020'
  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}