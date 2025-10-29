export const Card = (props) => {
  return (
    <div className='border-2 m-5 flex flex-col items-center'>
        <img className="w-32 h-40" src={props.img} alt="No img" />
        <p>Title: {props.title}</p>
        <p>Price: {props.price}</p>
        <button className='bg-red-200 rounded-md border-2 px-3 py-1 mt-2'>Add to Cart</button>
    </div>
  )
}