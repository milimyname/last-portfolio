<script>
<<<<<<< HEAD
  import { Canvas, OrbitControls, T } from "@threlte/core";
  import { HTML, Float } from "@threlte/extras";
=======
	import { Canvas, OrbitControls, T } from '@threlte/core'
	import { HTML, Float  } from '@threlte/extras'
	

	import { spring } from 'svelte/motion'
	import { degToRad } from 'three/src/math/MathUtils'


>>>>>>> main
</script>

<div class="fixed h-screen w-screen">
  <Canvas>
    <T.PerspectiveCamera makeDefault position={[30, 0, 40]} fov={14}>
      <OrbitControls enableDamping enableZoom={false} />
    </T.PerspectiveCamera>

    <T.Mesh position={[0, 2, 0]}>
      <Float value={0.01}>
        <HTML transform>
          <a href="/blog" class=" hover:text-orange-300"> Blog Page </a>
          <a href="/blog/diaries/am-I-writer">
            <div class="bg-white p-4 rounded-lg shadow-lg ">
              <h1 class="text-2xl font-bold">Am I a writer?</h1>
              <p class="text-gray-600">
                This is how I'd like to start my first blog post.
              </p>
            </div>
          </a>
        </HTML>
      </Float>
    </T.Mesh>
  </Canvas>
</div>
