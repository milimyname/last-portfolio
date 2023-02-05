<script>
	import { Canvas, OrbitControls, T } from '@threlte/core'
	import { HTML, Float, Text  } from '@threlte/extras'
	import font from '@public/fonts/helvetiker_regular.typeface.json'
	

	import { spring } from 'svelte/motion'
	import { degToRad } from 'three/src/math/MathUtils'

	const scale = spring(1);


</script>

<div class="fixed h-screen w-screen">
	<Canvas>
		<T.PerspectiveCamera makeDefault position={[10, 0, 10]} fov={12}>
			<OrbitControls maxPolarAngle={degToRad(80)}  enableDamping enableZoom={false} target={{ y: 0.5 }} />
		</T.PerspectiveCamera>

		<!-- HTML Anchor -->
	

		<T.Mesh >
			<Float speed={0}>
				<HTML transform lookAt>
					<a href="/blog" target="_blank" rel="noopener noreferrer">
						Blog
					</a>
				</HTML>
				
			</Float>

			<!-- <Text text={value} /> -->
		</T.Mesh>


		<!-- Floor -->
	</Canvas>
</div>

