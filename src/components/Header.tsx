import logo from '../assets/logo.svg'
import homeNav from '../assets/icon-nav-home.svg'
import moviesNav from '../assets/icon-nav-movies.svg'
import seriesNav from '../assets/icon-nav-tv-series.svg'
import bookmarkNav from '../assets/icon-nav-bookmark.svg'
import avatar from '../assets/image-avatar.png'

const Header = () => {
  return (
    <header className='bg-semidarkblue flex w-full p-4 items-center justify-between'>
        <img src={logo} alt="logo" className='w-6 h-5'/>
        <div className='flex gap-6 items-center'>
            <img src={homeNav} alt="home" className='w-4 h-4'/>
            <img src={moviesNav} alt="movies" className='w-4 h-4' />
            <img src={seriesNav} alt="series" className='w-4 h-4'/>
            <img src={bookmarkNav} alt="bookmark" className='w-4 h-4' />
        </div>
        <div className='border border-solid border-white rounded-full'>
            <img src={avatar} alt="avatar" className='w-6 h-6' />
        </div>
    </header>
  )
}

export default Header

