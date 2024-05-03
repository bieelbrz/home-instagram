import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsPlusSquare } from 'react-icons/bs'
import {MdOutlineExplore} from 'react-icons/md'
import {FiHeart} from 'react-icons/fi'

import { IconContext } from "react-icons";

import './style.css'

export function Header() {
    return (
        <header className="header" >

            <div className="container" >

            <img className="logo" src="https://th.bing.com/th/id/R.9c91a30140b9a7b912600cd36321ac58?rik=bO0g9%2fYElIe9Wg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-t-ze_EOgMMo%2fUy-o7z1rtDI%2fAAAAAAAAARU%2f0gO0mbcwH8E%2fs1600%2finstagram-logo%2bblack%2bon%2bwhite.png&ehk=NRzzePdX6cJPVI%2fFZ5L8CzqbweSf3XZorVOVbrWp4Gw%3d&risl=&pid=ImgRaw&r=0" />

            <div className="input-fake">
                <IconContext.Provider value={{color: '#fff'}}>
                    <AiOutlineSearch />
                </IconContext.Provider>
                
                
                <input placeholder="Pesquisar"/>
            </div>

            <div className="menu-icons">
                <IconContext.Provider value={{size: '26px', color: 'white'}}>
                <div>
                <AiFillHome />
                </div>
                <div>
                <RiMessengerLine />
                </div>
                <div>
                <BsPlusSquare /> 
                </div>
                <div>
                <MdOutlineExplore />
                </div>
                <div>
                <FiHeart />
                </div>
                </IconContext.Provider>
                <img className="img-user" src="https://avatars.githubusercontent.com/u/158102818?v=4" />
            </div>
            </div>
        </header>
    )
}