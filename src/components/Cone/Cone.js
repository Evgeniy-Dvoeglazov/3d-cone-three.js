export default function Cone() {
  return (
    <mesh>
      <coneGeometry attach='geometry' args={[1, 3, 7]}/>
      <meshLambertMaterial attach='material' color='green' emissive='black'/>
    </mesh>
  );
}
