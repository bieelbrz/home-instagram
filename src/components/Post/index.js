import React from 'react';
import './style.css';
import { FiMoreHorizontal, FiSend } from 'react-icons/fi';
import { BsChat, BsEmojiSmile, BsBookmark } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { LikeButton } from './like-button';

export function Post() {
    return (
        <>
            <header className="header-post" >

                <div className="infos-post" >
                    <img className="img-header-post" src="https://yt3.ggpht.com/a/AGF-l7_2e03te0VmpH5CKIo6tP6I27cQOy0O_RwncA=s900-mo-c-c0xffffffff-rj-k-no" />

                    <p className='arroba'>instituto.proa</p>
                </div>

                <div className='tres-botoes'>
                    <FiMoreHorizontal  />
                    </div>
            </header>

            <div className="img-post" >
                <img src="https://media.licdn.com/dms/image/D4D22AQGSQlwVUcghOA/feedshare-shrink_1280/0/1714087325902?e=1717632000&v=beta&t=02X0Nk3QW279tefsxzkFsMRUXbScoJju-snnWuoZKus"/>
            </div>

            <div className="footer-post" >
                <IconContext.Provider value={{size: "30px", color: 'white'}} >

                    <section className="engagement-post" >
                        <div className="icons-1" >
                            <div className="icon"><LikeButton /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        
                        <div className="icon"><BsBookmark /></div>
                        
                    </section>
                </IconContext.Provider>

                <section className="like" >
                    <span>43.231 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>instituto.proa</span> Nossos alunos da equipe 5 visitando a Bloomberg.
                    </p>
                </div>

                <div className="time-post" >
                    <time>HÁ 1 HORA</time>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px', color: 'white'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                            
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
            </div>
            <header className="header-post" >

                <div className="infos-post" >
                    <img className="img-header-post" src="https://i.pinimg.com/736x/30/73/b1/3073b16080521ce1cb3fc6d6d53a4edf.jpg" />

                    <p className='arroba'>euteto</p>
                </div>


                <div className='tres-botoes'>
                    <FiMoreHorizontal  />
                    </div>
            </header>

            <div className="img-post" >
                <img src="https://i.pinimg.com/736x/b7/ff/80/b7ff80990ea4526f72c59db4666f6978.jpg"/>
            </div>

            <div className="footer-post" >
                <IconContext.Provider value={{size: "30px", color: 'white'}} >

                    <section className="engagement-post" >
                        <div className="icons-1" >
                            <div className="icon"><LikeButton /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        
                        <div className="icon"><BsBookmark  /></div>
                        
                    </section>
                </IconContext.Provider>

                <section className="like" >
                    <span>287.948 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>euteto</span> A MINHA VITÓRIA É ÓBVIA!
                    </p>
                </div>

                <div className="time-post" >
                    <time>HÁ 4 HORAS</time>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px', color: 'white'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                            
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
            </div>
            <header className="header-post" >

                <div className="infos-post" >
                    <img className="img-header-post" src="https://i.pinimg.com/564x/71/cd/83/71cd8367479d2f2ca45f1eb9b51b90ad.jpg" />

                    <p className='arroba'>santosfc</p>
                </div>


                <div className='tres-botoes'>
                    <FiMoreHorizontal  />
                    </div>
            </header>

            <div className="img-post" >
                <img src="https://i.pinimg.com/564x/38/93/35/389335d32046afd34c6daf9e3f44bb8e.jpg"/>
            </div>

            <div className="footer-post" >
                <IconContext.Provider value={{size: "30px", color: 'white'}} >

                    <section className="engagement-post" >
                        <div className="icons-1" >
                            <div className="icon"><LikeButton /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        
                        <div className="icon"><BsBookmark /></div>
                        
                    </section>
                </IconContext.Provider>

                <section className="like" >
                    <span>300.261 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>santosfc</span> A nossa vida!!
                    </p>
                </div>

                <div className="time-post" >
                    <time>HÁ 9 HORAS</time>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px', color: 'white'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                            
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
            </div>
            
            <header className="header-post" >

                <div className="infos-post" >
                    <img className="img-header-post" src="https://th.bing.com/th/id/OIP.AhoP0k1XWFe34jK2T8v3sQAAAA?rs=1&pid=ImgDetMain" />

                    <p className='arroba'>memesparadevs</p>
                </div>


                <div className='tres-botoes'>
                    <FiMoreHorizontal  />
                    </div>
            </header>

            <div className="img-post" >
                <img src="https://i.pinimg.com/736x/64/69/ce/6469ce6d52437adfbc4f60428953bf2e.jpg"/>
            </div>

            <div className="footer-post" >
                <IconContext.Provider value={{size: "30px", color: 'white'}} >

                    <section className="engagement-post" >
                        <div className="icons-1" >
                            <div className="icon"><LikeButton /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        
                        <div className="icon"><BsBookmark /></div>
                        
                    </section>
                </IconContext.Provider>

                <section className="like" >
                    <span>43.231 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>memesparadevs</span> No mínimo suspeito.
                    </p>
                </div>

                <div className="time-post" >
                    <time>HÁ 11 HORAS</time>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px', color: 'white'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                            
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
            </div>

            <header className="header-post" >

                <div className="infos-post" >
                    <img className="img-header-post" src="https://i.pinimg.com/564x/5c/be/41/5cbe41445d8bb0303c7322daaad03163.jpg" />

                    <p className='arroba'>porsche</p>
                </div>


                <div className='tres-botoes'>
                    <FiMoreHorizontal  />
                    </div>
            </header>

            <div className="img-post" >
                <img src="https://i.pinimg.com/564x/1c/d0/0d/1cd00dfdb19973717bf494ae0f672972.jpg"/>
            </div>

            <div className="footer-post" >
                <IconContext.Provider value={{size: "30px", color: 'white'}} >

                    <section className="engagement-post" >
                        <div className="icons-1" >
                            <div className="icon"><LikeButton /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        
                        <div className="icon"><BsBookmark /></div>
                        
                    </section>
                </IconContext.Provider>

                <section className="like" >
                    <span>931.562 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>porsche</span> Flawless down to the last detail.
                    </p>
                </div>

                <div className="time-post" >
                    <time>HÁ 23 HORAS</time>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px', color: 'white'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                            
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
            </div>
            
        </>

    )
}