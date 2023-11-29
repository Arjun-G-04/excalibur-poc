import { Engine, PointerScope, Loader, Actor, Color, Vector } from 'excalibur'
import { useEffect } from 'react'
import { TiledMapResource } from '@excaliburjs/plugin-tiled'

function App() {
  useEffect(() => {
    const game = new Engine({
      canvasElementId: 'game',
      pointerScope: PointerScope.Canvas,
      width: 480,
      height: 480,
    })

    const player = new Actor({
      name: "player",
      width: 8,
      height: 8,
      color: Color.Red,
    })

    player.pos = new Vector(480-16*6.5, 480-16)
    const velocity = 64;
    window.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'w':
          player.vel.y = -velocity;
          break;
        case 's':
          player.vel.y = velocity;
          break;
        case 'a':
          player.vel.x = -velocity;
          break;
        case 'd':
          player.vel.x = velocity;
          break;
        default:
          break;
      }
    })

    window.addEventListener('keyup', (e) => {
      switch(e.key) {
        case 'w':
          player.vel.y = 0;
          break;
        case 's':
          player.vel.y = 0;
          break;
        case 'a':
          player.vel.x = 0;
          break;
        case 'd':
          player.vel.x = 0;
          break;
        default:
          break;
      }
    })

    const tiledMapResource = new TiledMapResource("/src/assets/map.tmx")
    // console.log(tiledMapResource)
    const loader = new Loader([tiledMapResource]);
    game.start(loader).then(() => {
      tiledMapResource.addTiledMapToScene(game.currentScene);
      game.add(player);
      game.currentScene.camera.strategy.lockToActor(player)
      game.currentScene.camera.zoom = 2
    })

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
