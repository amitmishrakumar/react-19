import { useTransition } from "react";





function UseTransition_hook() {
    const [pending, startTransition] = useTransition();

    const handleTans = () => {
        startTransition(async () => {
            await new Promise(res => setTimeout(res, 5000))
        })
    }



    return (
        <div>
            <h1> UseTransition_hook  </h1>

            {
      pending?
      <img style={{width:"100px"}} src="https://res.cloudinary.com/bytesizedpieces/image/upload/v1656084931/article/a-how-to-guide-on-making-an-animated-loading-image-for-a-website/animated_loader_gif_n6b5x0.gif" alt="" srcset="" />
      :null
    }


            <button disabled={pending} onClick={handleTans}>  click me </button>
        </div>
    )
}
export default UseTransition_hook;  