import profile from '../../assets/images/profile.png'

export default function Header() {
  return (
    <div className='w-10/12 mx-auto flex justify-between items-center py-4 border-b-2'>
        <h1 className='text-4xl font-bold text-orange-500'>Knowledge Cafe</h1>
        <img src={profile} alt="" />
    </div>
  )
}
