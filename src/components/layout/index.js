import { Post } from '../Post'
import { Suggestions } from '../Suggestions'
import { Story } from '../story'
import './style.css'



export function Layout(){
    return(
        <>
            <div className='MainGrid'>
                <div className='firstColumn' style={{gridArea: "firstColumn"}}>
                    <div className="box" style={{margin:'30px 0'}}>
                        <Story />
                    </div>

                    <div className="box">
                        <Post />
                    </div>
                </div>

                    <div className="suggestionbox" style={{gridArea: "secondColumn"}}>
                        <Suggestions />
                    </div>
            </div>
                
        </>
    )
}