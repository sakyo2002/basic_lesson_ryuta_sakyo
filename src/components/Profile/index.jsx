import './index.css'

export const Profile = () => {
  const imgUrl = 'https://i.imgur.com/7vQD0fPs.jpg';
  const name = 'John'
  const getBirthDay = () => {
    return new Date().toLocaleDateString()
  }

  return (
    <img src="imgUrl" className='avatar'>
    <p className='sentence'>I am John</p>
    <p className='sentence'>BirthDay: </p>
  )
}
