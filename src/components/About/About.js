import React from "react"

class About extends React.Component {
    render() {
        return (
            <div className="flex flex-col justify-center items-center text-font my-10 text-center" id="about">
                <h1 className="text-7xl">O mnie</h1>
                <div className="flex justify-center items-center p-6">
                    <div className="mr-2 lg:mx-6 w-2/3 lg:w-1/4">
                        <h2 className="text-4xl my-6">W kilku słowach</h2>
                        <p className="text-font-second">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <div  className="ml-2 lg:mx-6 w-1/3 lg:w-1/4">
                        <img src="images/ilona.jpg" className="object-cover rounded-full"  alt="bg"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default About