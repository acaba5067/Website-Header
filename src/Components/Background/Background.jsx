import './Background.css'
import video1 from '../../assests/video1.mp4'
import img1 from '../../assests/image1.png'
import img2 from '../../assests/image2.png'
import img3 from '../../assests/image3.png'

export const Background = ({playStatus,heroCount}) => {
 if(playStatus)
 {
  return(
    <video className='background' autoPlay loop muted>
      <source src={video1} type='video/mp4' />
    </video>
  )
 }
 else if(heroCount===0)
 {
  return <img src={img1} className='background fade-in'/>
 }
 else if(heroCount===1)
  {
   return <img src={img2} className='background fade-in'/>
  }
  else if(heroCount===2)
    {
     return <img src={img3} className='background fade-in'/>
    }
}
