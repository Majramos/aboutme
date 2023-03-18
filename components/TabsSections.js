import Link from 'next/link';
import { ButtonBase } from '../components/Buttons';


function _work() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fillRule="currentColor" className="w-3 h-3">
            <path fillRule="evenodd" d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z" clipRule="evenodd" />
            <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
        </svg>
    )
}


function _school() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fillRule="currentColor" className="w-3 h-3">
            <path fillRule="evenodd" d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 01-1.084 3.45 26.503 26.503 0 00-1.281-.78A5.487 5.487 0 006 12v-.54z" clipRule="evenodd" />
        </svg>
    )
}


function _development() {
    return (
        <div className="tooltip">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 sm:w-6 h-5 sm:h-6">
                <path fillRule="evenodd" d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                <path d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012zM6 4.586l2.33 2.33a.452.452 0 01-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 01-.447-.276l-1.7-3.402a.5.5 0 01.093-.577l.49-.49a.5.5 0 01.577-.094l3.402 1.7A.5.5 0 016 3.31v1.277z" />
            </svg>
            <span className="tooltiptext">development</span>
        </div>
    )
}


function _production() {
    return (
        <div className="tooltip">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 sm:w-6 h-5 sm:h-6">
                <path fillRule="evenodd" d="M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="tooltiptext">production</span>
        </div>
    )
}


function _buildCvSection( job ) {
    return (
        <li key={job.id}>
            <div className="flex-start flex items-center pt-3">
                <div className="-ml-[10px] flex mr-1 h-[20px] w-[20px] \
                                rounded-full items-center \
                                justify-center cv-icon">
                    { job.type === 'work' ? <_work /> : <_school /> }
                </div>
                <p className="text-xs sm:text-sm italic">
                    { job.start } - { job.end  || 'currently' }
                </p>
            </div>
            <div className="mt-2 ml-4 mb-6">
                <h4 className="mb-1.5 text-lg sm:text-xl font-semibold">
                    { job.title }
                </h4>
                <p className="mb-3 text-xs sm:text-sm text-right">
                    { job.where }
                </p>
                <p className="mb-3 text-xs sm:text-sm whitespace-pre-wrap \
                              text-justify max-h-full">
                    { job.description }
                </p>
            </div>
        </li>
    )
}


function CvSection( cvdata ) {

    const timeline = cvdata.cvdata.timeline;

    return (
        <ol className="border-l border-zinc-500 select-none">
            { timeline.map(_buildCvSection) }
        </ol>
    )
}


function _buildProjTags( tag, index ) {
    return (
        <span key={tag+index}
            className="project-tag inline-block rounded-full px-2 py-1 \
                       text-[0.6rem] sm:text-xs font-semibold mx-1 my-2">
            #{ tag }
        </span>
    )
}


function _buildProjSection( proj ) {
    return (
        <div key={ proj.id }
            className="project-card flex flex-col justify-between rounded-xl p-4 \
                       shadow-lg hover:shadow-xl border hover:border-2 border-dashed m-2 \
                       transition duration-[250ms] hover:scale-[1.05]">

            <div>
                <h5 className="mb-2 text-lg sm:text-xl font-medium leading-tight">
                    { proj.name }
                </h5>
                <p className="text-xs sm:text-sm mb-3">
                    { proj.description }
                </p>
            </div>
            <div>
                <div className="flex flex-wrap pt-2 pb-2">
                    { proj.tags.map((tag, index) => _buildProjTags(tag, index)) }
                </div>
                <div className="flex items-center justify-between mx-5">
                    { proj.state === 'production' ? <_production /> : <_development /> }
                    <Link href={ proj.url } legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer">
                            <ButtonBase extra="text-xs sm:text-sm px-3 py-1">
                                Visit
                            </ButtonBase>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}


function ProjectsSection( _projects ) {

    const projects = _projects.projects.projects;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 \
                        gap-2 justify-evenly select-none">
            { projects.map( _buildProjSection ) }
        </div>
    )
}


function SkillsSection( cvdata ) {

    const skills = cvdata.cvdata.skills;

    const levelsbase = "project-tag inline-block rounded-full \
                        font-semibold m-2 transition duration-[250ms] \
                        hover:scale-110 py-1 ";

    const levels = {
        1: levelsbase+"px-2 text-xs", // being developed
        2: levelsbase+"px-3 text-sm",  // basic
        3: levelsbase+"px-4 text-base", // intermediate
        4: levelsbase+"px-5 text-lg",  // advanced
        5: levelsbase+"px-6 text-xl", // expert
    }

    return (
        <div className="flex flex-wrap justify-center content-center items-center select-none">
            { skills.map(
                (skill) => (
                    <span key={ skill.id } className={ levels[skill.level] }>
                        { skill.name }
                    </span>
                ))
            }
        </div>
    )
}


export default function TabWrapper( { props }) {

    const tabs_class = "inline-block text-center text-sm sm:text-base select-none \
                        cursor-pointer grow py-2.5 mx-3 border-b-2 \
                        border-transparent hover:border-zinc-500 \
                        transition duration-300 backdrop-blur-sm \
                        backdrop-opacity-25"

    return (
        <div className="flex flex-col">
            <input className="hidden" id="resume" name="group"
                type="radio" onChange={()=>{}} />
            <input className="hidden" id="skills" name="group"
                type="radio" onChange={()=>{}} />
            <input className="hidden" id="project" name="group"
                type="radio" onChange={()=>{}} />

            <div className="tabs flex justify-around shadow-lg rounded-2xl backdrop-opacity-75 backdrop-blur-sm">
                <label className={ tabs_class } id="resume-tab" htmlFor="resume">
                    Resume
                </label>
                <label className={ tabs_class } id="skills-tab" htmlFor="skills">
                    Skills
                </label>
                <label className={ tabs_class } id="project-tab" htmlFor="project">
                    Projects
                </label>
            </div>

            <div className="tabs-panels text-sm sm:text-base my-1 p-6 \
                            rounded-2xl backdrop-blur-sm backdrop-opacity-75 shadow-lg">
                <div
                    className="tab-panel overflow-y-auto max-h-[30rem] px-3"
                    id="resume-panel">
                    <CvSection cvdata={ props.cvdata } />
                </div>
                <div
                    className="tab-panel overflow-y-auto max-h-[30rem] px-3"
                    id="skills-panel">
                    <SkillsSection cvdata={ props.cvdata } />
                </div>
                <div
                    className="tab-panel overflow-y-auto max-h-[30rem] px-3"
                    id="project-panel">
                    <ProjectsSection projects={ props.projects } />
                </div>
            </div>
        </div>
    )
}
