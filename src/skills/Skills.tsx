import React from "react";
import s from './Skills.module.scss'
/*import {Skill} from "./skill/Skill";
import jsImg from './../assets/image/skillsImg/js_img.png'
import tsImg from './../assets/image/skillsImg/ts_img.png'
import htmlImg from './../assets/image/skillsImg/html_img.png'
import cssImg from './../assets/image/skillsImg/css_img.png'
import reactImg from './../assets/image/skillsImg/react_img.png'
import reduxImg from './../assets/image/skillsImg/redux_img.png'
import reduxThunkImg from '../assets/image/skillsImg/reduxThunk_img.png'
import restAPIImg from './../assets/image/skillsImg/restAPI_img.png'
import axiosImg from './../assets/image/skillsImg/axios_img.png'
import storybookImg from '../assets/image/skillsImg/storybook_img.png'
import MUIImg from './../assets/image/skillsImg/MUI_img.png'
import sassImg from './../assets/image/skillsImg/sass_img.png'*/
import laptopImg from './../assets/image/skillsImg/Laptop_logo.png'
import designImg from './../assets/image/skillsImg/icon-design.png'
import appImg from './../assets/image/skillsImg/icon-phone.png'
import testImg from './../assets/image/skillsImg/icon-test.png'
import {Title} from "../common/components/title/Title";
/*import {Link} from "react-scroll";*/
import {SkillContainer} from "./SkillContainet";


export const Skills = () => {
   /* const js = {
        backgroundImage: `url(${jsImg})`
    }
    const ts = {
        backgroundImage: `url(${tsImg})`
    }
    const html = {
        backgroundImage: `url(${htmlImg})`
    }
    const css = {
        backgroundImage: `url(${cssImg})`
    }
    const react = {
        backgroundImage: `url(${reactImg})`
    }
    const redux = {
        backgroundImage: `url(${reduxImg})`
    }
    const reduxThunk = {
        backgroundImage: `url(${reduxThunkImg})`
    }
    const restAPI = {
        backgroundImage: `url(${restAPIImg})`
    }
    const axios = {
        backgroundImage: `url(${axiosImg})`
    }
    const storybook = {
        backgroundImage: `url(${storybookImg})`
    }
    const mui = {
        backgroundImage: `url(${MUIImg})`
    }
    const sass = {
        backgroundImage: `url(${sassImg})`
    }*/
    const laptop = {
        backgroundImage: `url(${laptopImg})`
    }
    const design = {
        backgroundImage: `url(${designImg})`
    }
    const app = {
        backgroundImage: `url(${appImg})`
    }
    const test = {
        backgroundImage: `url(${testImg})`
    }


    return (
        <div id={'section2'} className={s.skillsBlock}>


            <div className={s.skillsContainer}>

                {/*<Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>up</Link>*/}

                <Title text={'Skills'}/>
                <div className={s.skills}>
                    <SkillContainer title={'Web Development'} style={laptop}/>
                    <SkillContainer title={'App Development'} style={app}/>
                    <SkillContainer title={'Testing'} style={test}/>
                    <SkillContainer title={'Web Design'} style={design}/>
                </div>
                {/*<div className={s.skills}>
                    <Skill title={'JS'} description={'JSs saf asf asf '} style={js}/>
                    <Skill title={'TS'} description={'asf asf asaa aaa a a'} style={ts}/>
                    <Skill title={'HTML'} description={'sdf asdssssssssssss'} style={html}/>
                    <Skill title={'CSS'} description={'sdf asdssssssssssss'} style={css}/>
                    <Skill title={'React'} description={'sdf asdssssssssssss'} style={react}/>
                    <Skill title={'Redux'} description={'sdf asdssssssssssss'} style={redux}/>
                    <Skill title={'Redux-thunk'} description={'sdf asdsssss'} style={reduxThunk}/>
                    <Skill title={'Rest API'} description={'sdf asdssssssssssss'} style={restAPI}/>
                    <Skill title={'Axios'} description={'sdf asdssssssssssss'} style={axios}/>
                    <Skill title={'Storybook'} description={'sdf asdssssssssssss'} style={storybook}/>
                    <Skill title={'Material UI'} description={'sdf asdssssssssssss'} style={mui}/>
                    <Skill title={'Sass'} description={'sdf asdssssssssssss'} style={sass}/>
                </div>*/}
            </div>
        </div>
    )
}


