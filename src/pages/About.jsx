import React from 'react'
import { skills, experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA'
import CTA2 from '../components/CTA2'

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>
      Lalit  </span> </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>Software Engineer with a focus on front-end development. I have 
expertise in building modern websites, crafting engaging user interfaces, and an interest to learn 
and excel in areas of blockchain, AI and ML. A passion for technology, coupled with a commitment to 
excellence, has driven successful project deliveries and fostered collaborative relationships with clients and internal teams.</p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl'>

              </div>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skill.imageUrl}
                alt = {skill.name}
                className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        I studied Electronics and Communication at SRM University for my bachelor's degree 
        and pursued my master's in Wireless Telecommunication and IoT Systems at ISEP Paris. 
        I have worked for two French blockchain companies in the Defi sector and
        am currently employed as a Senior Sofware Enginner at Capgemini.
        </p>
      </div>
      <div className='mt-12 flex'>
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
            key={experience.company_name}
            date={experience.date}
            icon={
              <div className='flex justify-center items-center w-full h-full'>
                <img 
                src={experience.icon}
                alt={experience.date}
                className='w-[60%] h-[60%] object-contain'/>
              </div>
           
              }
              iconStyle={{background: experience.iconBg}}
              contentStyle = {{
                borderBottom:'8px',
              borderStyle: 'solid',
            borderBottomColor: experience.iconBg,
          boxShadow:'none'}

            }>
              <div>
                <h3 className='text-black text-xl font-poppins font-semibold'>
                  {experience.title}
                </h3>
                <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                  {experience.company_name}
                </p>
              </div>
              <ul className='my-5  list-disc ml-5 space-y-2'>
                {experience.points.map((point,index) => (
                  <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm' >
                    {point}
                  </li>
                ))}

              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

      </div>

      </div>
      <hr className='border-slate-200'/>
      <CTA2 />
     
      <h3 className='subhead-text mt-10'>Other Projects</h3>
      <div className='mt-5 mb-5 flex flex-col gap-3 text-slate-500 text-base'>
<p>
🤏 Design & Implementation of a IoT Smart Space. Detection of a coded sequence 
of characters using MATLAB. <br />
🤏 Research Power Over Ethernet lighting and automation solutions in the 
Building Management Solutions. <br />
🤏 Implementation of a MQTT to send and receive messages from ISEP's LoRa 
Server. <br />
🤏 Optical Music Recognition using Convolution Neural Networking (Machine 
Learning). <br />
🤏 Proposing a Geostationary equatorial orbit (GEO) High- throughput satellite 
(HTS) system. <br />
🤏 Code NFT marketplace using React for the UI, Moralis API and Ethereum back-end. <br />
🤏 Code a Blockchain enabled Netflix Clone using React, Moralis, IPFS and 
Ethereum/Polygon blockchain. <br />
🤏 Create a digital currency (ERC-20 Smart-Contract) token called LOL coin using 
Solidity. <br />
🤏 Build a Web3 application that lets you send/receive Ethereum into your digital 
wallet. Using React, Solidity. <br />
🤏 Build an application that secures data from IoMT devices with Blockchain. <br />
🤏 Internet of Medical Things (IoMT) Application 
using the Hyperledger blockchain framework.</p>
      </div>
 
      <hr className='border-slate-200'/>
      <CTA />
     
      </section>
  )
}

export default About