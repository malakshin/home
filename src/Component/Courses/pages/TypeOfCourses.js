import React from 'react'
import './TypeOfCourses.css'
const TypeOfCourses = () => {
    return (
    <>
    <div className="container">
    <div className="coursestypes">
        <div className="twotypes reverse">
            <img src="/images/type1.png" alt="صورة 1" className="typesimages"/>
            <div className="typestext-content">
                <h2>Technical</h2>
                <p>Technical are essential in today's world, as they allow you to work with technology, solve problems, and create solutions. Learning technical skills can include programming, working with hardware. </p>
                <button className="viewbtn">view</button>
            </div>
        </div>
        <div className="twotypes">
            <img src="/images/type2.png" alt="صورة 2" className="typesimages"/>
            <div className="typestext-content">
                <h2>Soft Skills</h2>
                <p>Soft skills are crucial in both personal and professional life, as they help you communicate effectively, work in teams, and manage your time. Learning soft skills involves developing abilities like leadership, problem-solving, emotional intelligence, and adaptability.</p>
                <button className="viewbtn">view</button>
            </div>
        </div>
        <div className="twotypes reverse">
            <img src="/images/type3.png" alt="صورة 3" className="typesimages"/>
            <div className="typestext-content">
                <h2>Creative Skills</h2>
                <p>Creative skills are valuable in many areas of life, as they allow you to think outside the box, solve problems in unique ways, and express yourself through various forms of art and design. </p>
                <button className="viewbtn">view</button>
            </div>
        </div>
        <div className="twotypes">
            <img src="/images/type4.png" alt="صورة 4" className="typesimages"/>
            <div className="typestext-content">
                <h2>Digital marketing</h2>
                <p>Digital marketing skills are essential in the modern business world, as they help you reach and engage with audiences online, promote products or services, and analyze market trends. Learning digital marketing involves understanding tools like social media platforms, SEO, email marketing, and content creation.</p>
                <button className="viewbtn">view</button>
            </div>
        </div>
    </div>
    </div>
        <div className="undercourses">
        <hr className="line"/>
        <p className="Technicalcourses">Technical courses</p>
        <div className="FiberOptics">
                <div className="fiberinfo">
                    <h2 className="fibertitle">Fiber Optics: Fast Data Transmission</h2>
                    <p className="fiberdis">
                        “This is an example of the context of
                        the course to be written here”
                        
                        Fiber optic cables are a type of cable that use light to transmit data over long distances. They are made of thin strands of glass or plastic fibers, which carry light signals. These cables are used for high-speed internet, telecommunications, and other data transfer applications because they provide faster and more reliable connections than traditional copper cables. Fiber optic technology works by converting electrical signals into light, which travels through the fiber with very little loss of signal. The cables are also less prone to interference, making them ideal for long-distance and high-bandwidth communications. Additionally, they are lightweight and can handle large amounts of data, making them the preferred choice for modern communication networks</p>
                    <div className="fiberdeal">
                        <div className="fibertrainer">
                            <p>trainer Name: <span className="fibertrainername">Point</span></p>
                        </div>
                        <div className="fiberprice">
                        <p>price: <span className="fibertheprice">24$</span></p>
                        </div>
                    </div>
                    <button className="fiberbuy">Buy</button>
                </div>
                <div className="fiberimg">
                    <img src="/images/fiber.png" alt="fiber img"/>
                </div>
        </div>
    </div>

</>
    )
}

export default TypeOfCourses