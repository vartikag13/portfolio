import './index.scss'
import BakedBread from '../../assets/images/bread.jpeg'

const Bakery = () => {
  return (
    <div className='container container-bakery home-page'>
      <div className='text-zone'>
        <h1 className='bakery-name'>TheCrookedPan</h1>
        <h2>My love for baking started while searching for a new hobby. After many half cooked breads baked in my crooked pan, I finally perfected this art. Or so I think - you be the judge!</h2>
        <a target='_blank' rel='noreferrer' href='https://www.instagram.com/the_crooked_pan/?igsh=MXZza213ZnExaGtkYg%3D%3D&utm_source=qr' className='flat-button'>ORDER HERE</a>
      </div>
      <img className='imageRight' src={BakedBread} alt='Beautiful baked bread'/>

    </div>
  )
}

export default Bakery;