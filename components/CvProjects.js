

function _work() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fillRule="currentColor" className="w-3 h-3 fill-zinc-100">
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

function CvSection( cvdata ) {

    const timeline = cvdata.cvdata.timeline;

    return (
        <ol className="border-l border-zinc-500 select-none">

            {
                timeline.map((job) => {
                    return (
                        <li key={job.id}>
                            <div className="flex-start flex items-center pt-3">
                                <div className="-ml-[10px] flex mr-1 h-[20px] w-[20px] \
                                                rounded-full border-zinc-500 \
                                                dark:bg-zinc-500 items-center justify-center">
                                    { job.type === 'work' ? <_work /> : <_school /> }
                                </div>
                                <p className="text-sm italic">
                                    { job.start } - { job.end  || 'currently' }
                                </p>
                            </div>
                            <div className="mt-2 ml-4 mb-6">
                                <h4 className="mb-1.5 text-xl font-semibold">
                                    { job.title }
                                </h4>
                                <p className="mb-3 text-sm text-right">
                                    { job.where }
                                </p>
                                <p className="mb-3 text-sm whitespace-pre-wrap text-justify max-h-full">
                                    { job.description }
                                </p>
                            </div>
                        </li>
                    )
                })
            }
        </ol>
    )
}


function ProjectsSection() {
    return (
        <div>
            <h1>Projects Section</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum justo eget purus vestibulum, sed vulputate risus dapibus. Praesent a sodales lorem. Donec ante lorem, condimentum sit amet metus quis, tincidunt dignissim nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum quis nulla at tortor blandit iaculis non dapibus sem. Donec id viverra dolor. Donec ultrices turpis at ipsum dapibus ullamcorper. Fusce commodo sem vitae pharetra fermentum. Morbi placerat interdum tincidunt. In at ligula vitae neque malesuada scelerisque. Nulla facilisi. Morbi maximus in mi ut ornare. Fusce eu viverra elit. Donec laoreet at leo non sollicitudin. Duis malesuada tortor a sem pellentesque finibus. </p>
        </div>
    )
}


export default function TabWrapper( { cvdata }) {

    const tabs_class = "inline-block text-center select-none \
                        cursor-pointer grow py-2.5 mx-3 border-b-2 \
                        border-transparent hover:border-zinc-500 \
                        transition duration-300 backdrop-blur-sm \
                        backdrop-opacity-25"

    return (
        <div className="flex flex-col">
            <input className="hidden" id="resume" name="group"
                type="radio" onChange={()=>{}} />
            <input className="hidden" id="project" name="group"
                type="radio" onChange={()=>{}} />

            <div className="tabs flex justify-around shadow-lg rounded-2xl">
                <label className={ tabs_class } id="resume-tab" htmlFor="resume">
                    Resume
                </label>
                <label className={ tabs_class } id="project-tab" htmlFor="project">
                    Projects
                </label>
            </div>

            <div className="tabs-panels text-sm sm:text-base my-4 p-6 \
                            rounded-2xl backdrop-blur-sm backdrop-opacity-75">
                <div className="tab-panel overflow-y-auto max-h-[30rem] px-3" id="resume-panel">
                    <CvSection cvdata={ cvdata } />
                </div>
                <div className="tab-panel max-h-[30rem] " id="project-panel">
                    <ProjectsSection />
                </div>
            </div>
        </div>
    )
}
