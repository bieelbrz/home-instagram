import './style.css'
import { IoIosArrowDroprightCircle } from "react-icons/io";


export function Story() {
    return (
        
        <div className='container'>
            <div className='user-elements'>
                <div>
                    <img className='image-user-story' src='https://avatars.githubusercontent.com/u/158102818?v=4'/>
                </div>

                <span className='arroba'>Seu story</span>
            </div>

            <div className='user-elements'>
                <div>
                    <img className='image-user-story' src='https://i.pinimg.com/564x/00/17/ec/0017ec6ee49157bb0b8636dc13511843.jpg'/>
                </div>

                <span>neymarjr</span>
            </div>

            <div className='user-elements'>
                <div>
                    <img className='image-user-story' src='https://images.genius.com/593300ada7e64360f845666075dc6045.900x900x1.jpg'/>
                </div>

                <span>30praum</span>
            </div>
            <div className='user-elements'>
                <div>
                    <img className='image-user-story' src='https://www.logolynx.com/images/logolynx/13/1326946609d4436b8ebf063bf19610d3.jpeg'/>
                </div>

                <span>fcbarcelona</span>
            </div>
            <div className='user-elements'>
                <div>
                    <img className='image-user-story' src='https://avatars.githubusercontent.com/u/85498221?v=4'/>
                </div>

                <span>gussales13</span>
            </div>
            <div className='user-elements'>
                <div>
                    <img className='image-user-story' src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ff5e7a57428201.59d546b261181.jpg'/>
                </div>

                <span>travisscott</span>
            </div>
            <div className='user-elements'>
                <div>
                    <img className='image-user-story' src='https://cdn.1min30.com/wp-content/uploads/2017/06/Symbole-Playstation.jpg'/>
                </div>

                <span>playstation</span>
            </div>
            
            <div className='arrow'>
                <IoIosArrowDroprightCircle />
            </div>
        </div>
    )
}