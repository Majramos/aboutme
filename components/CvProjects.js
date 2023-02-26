
function CvSection() {
    return (
        <div>
            <h1>Cv Section</h1>
            <p>Without CSS, every web page would be drab plain text and images that flowed straight down the page. With CSS, you can add color and background images and change the layout of your page — your web pages can feel like works of art!</p>
        </div>
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


export default function TabWrapper() {

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
                <div className="tab-panel" id="resume-panel">
                    <CvSection />
                </div>
                <div className="tab-panel" id="project-panel">
                    <ProjectsSection />
                </div>
            </div>
        </div>
    )
}
