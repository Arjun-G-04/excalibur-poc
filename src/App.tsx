import { Engine, PointerScope, Loader } from 'excalibur'
import { useEffect } from 'react'
import { TiledMapResource } from '@excaliburjs/plugin-tiled'

function App() {
  useEffect(() => {
    const game = new Engine({
      canvasElementId: 'game',
      pointerScope: PointerScope.Canvas,
      width: 800,
      height: 800,
    })
    // const tiledMapResource = new TiledMapResource("/src/assets/map.tmx")
    // console.log(tiledMapResource)
    // const loader = new Loader([tiledMapResource]);
    // game.start(loader).then(() => {
    //   tiledMapResource.addTiledMapToScene(game.currentScene);
    // })

    return () => {
      game.stop()
    }
  }, [])

  return (
    <>
      <div className='flex flex-col justify-center items-center text-white bg-black h-screen w-screen'>
        <span className='text-2xl'>Excalibur POC</span>
        <canvas id="game"></canvas>
      </div>
    </>
  )
}

export default App
