import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';

const CubeButton = () => {
  const mountRef = useRef(null);
  const [rotating, setRotating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0E2741');

    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Lights
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 7);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Cube geometry & materials
    const geometry = new THREE.BoxGeometry(3, 1, 0.3);

    const createTextTexture = (text) => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = 'bold 180px Arial';
      ctx.fillStyle = '#FFFFFF';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      texture.anisotropy = 16;
      return texture;
    };

    const frontMaterial = new THREE.MeshPhongMaterial({
      map: createTextTexture('Get In Tech'),
    });

    const sideMaterial = new THREE.MeshPhongMaterial({ color: '#000000' });

    const materials = [
      sideMaterial,
      sideMaterial,
      sideMaterial,
      sideMaterial,
      frontMaterial,
      sideMaterial,
    ];

    const buttonMesh = new THREE.Mesh(geometry, materials);
    scene.add(buttonMesh);

    let rotationSpeed = 0;
    let targetRotation = 0;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onClick = (event) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObject(buttonMesh);
      if (intersects.length > 0) {
        setRotating(true);

        // 2 seconds baad route navigate karein
        setTimeout(() => {
          navigate('/contact'); // ye route Contact.jsx ka path hona chahiye
        },4000);
      }
    };

    mount.addEventListener('click', onClick);

    const animate = () => {
      requestAnimationFrame(animate);

      if (rotating) {
        rotationSpeed += 0.02;
        targetRotation += 0.05;
      } else {
        rotationSpeed *= 0.95;
        targetRotation += rotationSpeed;
      }

      buttonMesh.rotation.x = targetRotation;
      buttonMesh.rotation.y = targetRotation;

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      mount.removeChild(renderer.domElement);
      mount.removeEventListener('click', onClick);
    };
  }, [rotating, navigate]);

  return (
    <div
      ref={mountRef}
      style={{ width: '100%', height: '500px', cursor: 'pointer' }}
      title="Click to rotate button"
    />
  );
};

export default CubeButton;
