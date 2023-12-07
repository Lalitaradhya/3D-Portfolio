
import { Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'

import Lambo from '../models/Lambo'
import { useState, Suspense, useEffect, useRef} from 'react'
import HomeInfo from '../components/HomeInfo'
import lambosong from '../assets/lambo-idle.mp3'
import minorarp from '../assets/minor-arp.mp3'
import { soundoff, soundon } from '../assets/icons'
import Knight from '../models/Knight'
import Jesus from '../models/Jesus'
import Spartan from '../models/Spartan'
import Sky from '../models/Sky'
const Home = () => {

  const audioRef = useRef(new Audio(minorarp))
  const audioRef2 = useRef(new Audio(lambosong))
  audioRef.current.volume = 1
  audioRef2.current.volume = 0.1
  audioRef.current.loop = true


  const [isRotating,setIsRotating]= useState(false)
  const [currentStage, setCurrentStage] = useState(1)
  const [isPlayingMusic, setisPlayingMusic] = useState(false)

  useEffect(()=> {
    if(isPlayingMusic){
      audioRef.current.play()
      audioRef2.current.play()
    }
    return () => {
      audioRef.current.pause()
      audioRef2.current.pause()
    }
  },[isPlayingMusic])

//LAmbo
  const adjustLamboForScreenSize = () => {
    let screenScale = null
    let screenPosition = [0,-14,-25.8]
    let rotation = [0,4.7125,0]

    if(window.innerWidth < 768){
      screenScale = [19,19,19]
    } else {
      screenScale = [19.5,19.5,19.5];
    }
    return [screenScale,screenPosition, rotation]


  }
  const [lamboScale,lamboPosition, lamborotation] = adjustLamboForScreenSize();


//Knight
  const adjustKnightForScreenSize = () => {
    let screenScale = null
    let screenPosition = [0,0,-100]
    let rotation = [0,0,0]

    if(window.innerWidth < 768){
      screenScale = [1,1,1]
    } else {
      screenScale = [2,2,2];
    }
    return [screenScale,screenPosition, rotation]


  }
  const [knightScale,knightPosition, knightrotation] = adjustKnightForScreenSize();



//Jesus
  const adjustJesusForScreenSize = () => {
    let screenScale = null
    let screenPosition = [75,-25,-150]
    let rotation = [0,0,0]

    if(window.innerWidth < 768){
      screenScale = [9,9,9]
    } else {
      screenScale = [10,10,10];
    }
    return [screenScale,screenPosition, rotation]


  }
  const [jesusScale,jesusPosition, jesusrotation] = adjustJesusForScreenSize();

  //Spartan

  const adjustSpartanForScreenSize = () => {
    let screenScale = null
    let screenPosition = [75,-25,-10]
    let rotation = [0,0,0]

    if(window.innerWidth < 768){
      screenScale = [4,4,4]
    } else {
      screenScale = [5,5,5];
    }
    return [screenScale,screenPosition, rotation]


  }

  //Earth





  
  
  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>


      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing':'cursor-grab'} `} camera={{near: 0.1, far:1000, fov: 75,} }> 
<Suspense fallback={<Loader />}>
  <directionalLight 
  position={[-1,1,0]} intensity={5.5} />
  <directionalLight 
  position={[1,0,0]} intensity={5.5} />
  <ambientLight intensity={10}/>

  <pointLight position={[1,0,0]}  intensity={2.5}/>
 
  <spotLight  position={[-1,0,0]}  intensity={1}/>
  <hemisphereLight 
  skyColor="#b1e1ff" groundColor='#000000' intensity={1.25} />
  



  <Knight  position= {knightPosition}
  scale= {knightScale}
  rotation = {knightrotation}/>
  
  {/* replicas */}
  {/* <Knight  position= {[35,-6,-100]}
  scale= {knightScale}
  rotation = {[0,-0.8,0]}/>
  <Knight  position= {[20,-2.5,-100]}
  scale= {knightScale}
  rotation = {[0,-0.3,0]}/>
  <Knight  position= {[-20,-2.5,-100]}
  scale= {knightScale}
  rotation = {[0,0.3,0]}/>
  <Knight  position= {[-35,-6,-100]}
  scale= {knightScale}
  rotation = {[0,0.8,0]}/> */}

  {/* layer-2 */}
  {/* <Knight  position= {[-30,-1,-110]}
  scale= {knightScale}
  rotation = {[0,0.5,0]}/>
  <Knight  position= {[30,-1,-110]}
  scale= {knightScale}
  rotation = {[0,-0.5,0]}/>
  <Knight  position= {[10,-1,-110]}
  scale= {knightScale}
  rotation = {knightrotation}/>
    <Knight  position= {[-10,-1,-110]}
  scale= {knightScale}
  rotation = {knightrotation}/> */}

  {/* layer-3 */}
  {/* <Knight  position= {[-5,-1,-120]}
  scale= {knightScale}
  rotation = {knightrotation}/>
  <Knight  position= {[5,-1,-120]}
  scale= {knightScale}
  rotation = {knightrotation}/>
   <Knight  position= {[-15,-1,-120]}
  scale= {knightScale}
  rotation = {knightrotation}/>
  <Knight  position= {[15,-1,-120]}
  scale= {knightScale}
  rotation = {knightrotation}/> */}

  {/* Layer-4 */}
  {/* <Knight  position= {[-20,-1,-130]}
  scale= {knightScale}
  rotation = {knightrotation}/>
  <Knight  position= {[20,-1,-130]}
  scale= {knightScale}
  rotation = {knightrotation}/> */}



{/* Jesus */}

<Jesus  position= {[135,-170,-260]}
  scale= {[25,25,25]}
  rotation = {[0,0,0]}/>

  <Jesus  position= {[-105,-170,-350]}
  scale= {[25,25,25]}
  rotation = {[0,1.2,0]}/>

{/* layer-2 */}

{/* <Jesus  position= {[145,-65,-270]}
  scale= {jesusScale}
  rotation = {[0,0,0]}/>

  <Jesus  position= {[-125,-65,-270]}
  scale= {jesusScale}
  rotation = {[0,1.2,0]}/> */}

  {/* layer-3 */}


  {/* <Jesus  position= {[175,-62,-280]}
  scale= {jesusScale}
  rotation = {[0,0,0]}/>

  <Jesus  position= {[-155,-62,-280]}
  scale= {jesusScale}
  rotation = {[0,1.2,0]}/> */}



{/* layer-1 */}
<Spartan  position= {[-70,-80,-60]}
  scale= {[95,95,95]}
  rotation = {[0,0.5,0]}/>
  <Spartan  position= {[82,-80,-60]}
  scale= {[95,95,95]}
  rotation = {[0,-1.9,0]}/>


{/* layer-2 */}
{/* <Spartan  position= {[-100,-35,-120]}
  scale= {[80,80,80]}
  rotation = {[0,-0.3,0]}/>
  <Spartan  position= {[160,-35,-120]}
  scale= {[80,80,80]}
  rotation = {[0,-1.6,0]}/> */}



{/* layer-3 */}
{/* <Spartan  position= {[-155,-35,-120]}
  scale= {[83,83,83]}
  rotation = {[0,0.4,0]}/>
  <Spartan  position= {[210,-35,-140]}
  scale= {[80,80,80]}
  rotation = {[0,-1.4,0]}/>
 */}



      <Sky isRotating={isRotating} />
  
  
  <Lambo 
  position= {lamboPosition}
  scale= {lamboScale}
  rotation = {lamborotation}
  isRotating={isRotating}
  setIsRotating = {setIsRotating}
  setCurrentStage = {setCurrentStage}  />



  

</Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img src={!isPlayingMusic ? soundoff : soundon} 
        alt="sound" 
        className='w-10 h-10 cursor-pointer object-contain'
        onClick={()=> setisPlayingMusic(!isPlayingMusic)}/>
      </div>
    </section>
  )
}

export default Home