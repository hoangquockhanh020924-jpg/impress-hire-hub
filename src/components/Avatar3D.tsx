import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

// ============================================================
// Để dùng file GLB của bạn:
// 1. Đặt file nhanvat.glb vào thư mục: public/models/nhanvat.glb
// 2. Uncomment phần GLBModel bên dưới và comment phần StylizedCharacter
// ============================================================

// --- Uncomment đoạn này khi có file GLB ---
import { useGLTF } from "@react-three/drei";
function GLBModel() {
  const { scene } = useGLTF("/models/nhanvat.glb");
  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
}

function Head() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });
  return (
    <mesh ref={ref} position={[0, 1.6, 0]}>
      <sphereGeometry args={[0.45, 32, 32]} />
      <MeshDistortMaterial
        color="#4fd1c5"
        emissive="#0d9488"
        emissiveIntensity={0.3}
        roughness={0.3}
        metalness={0.6}
        distort={0.15}
        speed={2}
      />
    </mesh>
  );
}

function Eyes() {
  return (
    <>
      {/* Left eye */}
      <mesh position={[-0.15, 1.7, 0.38]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[-0.15, 1.7, 0.42]}>
        <sphereGeometry args={[0.035, 16, 16]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>
      {/* Right eye */}
      <mesh position={[0.15, 1.7, 0.38]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.15, 1.7, 0.42]}>
        <sphereGeometry args={[0.035, 16, 16]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>
    </>
  );
}

function Body() {
  return (
    <mesh position={[0, 0.7, 0]}>
      <capsuleGeometry args={[0.35, 0.6, 16, 32]} />
      <MeshDistortMaterial
        color="#2dd4bf"
        emissive="#0f766e"
        emissiveIntensity={0.2}
        roughness={0.4}
        metalness={0.5}
        distort={0.08}
        speed={1.5}
      />
    </mesh>
  );
}

function Arms() {
  return (
    <>
      {/* Left arm */}
      <mesh position={[-0.55, 0.8, 0]} rotation={[0, 0, 0.3]}>
        <capsuleGeometry args={[0.1, 0.5, 8, 16]} />
        <meshStandardMaterial color="#2dd4bf" roughness={0.4} metalness={0.5} />
      </mesh>
      {/* Right arm */}
      <mesh position={[0.55, 0.8, 0]} rotation={[0, 0, -0.3]}>
        <capsuleGeometry args={[0.1, 0.5, 8, 16]} />
        <meshStandardMaterial color="#2dd4bf" roughness={0.4} metalness={0.5} />
      </mesh>
    </>
  );
}

function Legs() {
  return (
    <>
      <mesh position={[-0.18, -0.1, 0]}>
        <capsuleGeometry args={[0.12, 0.4, 8, 16]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.6} metalness={0.3} />
      </mesh>
      <mesh position={[0.18, -0.1, 0]}>
        <capsuleGeometry args={[0.12, 0.4, 8, 16]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.6} metalness={0.3} />
      </mesh>
    </>
  );
}

function Glasses() {
  return (
    <group position={[0, 1.7, 0.35]}>
      {/* Frame */}
      <mesh>
        <torusGeometry args={[0.09, 0.015, 8, 32]} />
        <meshStandardMaterial color="#ffd700" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.3, 0, 0]}>
        <torusGeometry args={[0.09, 0.015, 8, 32]} />
        <meshStandardMaterial color="#ffd700" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Bridge */}
      <mesh position={[0.15, 0, 0.02]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.012, 0.012, 0.12, 8]} />
        <meshStandardMaterial color="#ffd700" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

function FloatingParticles() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  const particles = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * Math.PI * 2;
    const radius = 1.8 + Math.sin(i * 1.5) * 0.4;
    return {
      position: [Math.cos(angle) * radius, Math.sin(i * 0.8) * 0.8 + 0.8, Math.sin(angle) * radius] as [number, number, number],
      scale: 0.03 + Math.random() * 0.04,
    };
  });

  return (
    <group ref={ref}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.position}>
          <sphereGeometry args={[p.scale, 8, 8]} />
          <meshStandardMaterial
            color="#4fd1c5"
            emissive="#4fd1c5"
            emissiveIntensity={2}
          />
        </mesh>
      ))}
    </group>
  );
}

function StylizedCharacter() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef}>
        <Head />
        <Eyes />
        <Glasses />
        <Body />
        <Arms />
        <Legs />
        <FloatingParticles />
      </group>
    </Float>
  );
}

export default function Avatar3D() {
  return (
    <div className="w-56 h-56 md:w-72 md:h-72 relative">
      <Canvas
        camera={{ position: [0, 1, 4], fov: 40 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#4fd1c5" />
        <directionalLight position={[-3, 3, -3]} intensity={0.5} color="#a78bfa" />
        <pointLight position={[0, 2, 3]} intensity={0.8} color="#2dd4bf" />
        <Suspense fallback={null}>
          {/* Thay StylizedCharacter bằng GLBModel khi có file */}
          <GLBModel />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-primary/10 blur-[40px] -z-10" />
    </div>
  );
}
