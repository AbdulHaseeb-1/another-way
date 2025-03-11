export default function StaticPaths({ density = 1 }: { density: number }) {
  // Create a more varied and interesting pattern
  const generatePaths = () => {
    const paths = [];
    const count = 24;

    // Create horizontal flowing paths
    for (let i = 0; i < count; i++) {
      const yPos = i * 20 - 100;
      const variance = Math.sin(i * 0.5) * 50;
      const width = 0.4 + (i % 3) * 0.2;
      const opacity = 0.05 + (i % 5) * 0.02;

      paths.push({
        id: i,
        d: `M-100 ${yPos} C${100 + variance} ${yPos - 30}, ${300 - variance} ${
          yPos + 50
        }, ${700} ${yPos + (i % 2) * 40}`,
        width: width * density,
        opacity: opacity * density,
      });
    }

    // Create some crossing vertical paths for more interest
    for (let i = 0; i < count / 2; i++) {
      const xPos = i * 60 + 50;
      const width = 0.3 + (i % 4) * 0.15;
      const opacity = 0.04 + (i % 6) * 0.01;

      paths.push({
        id: i + count,
        d: `M${xPos} -50 C${xPos + 30} 100, ${xPos - 50} 200, ${
          xPos + (i % 3) * 30
        } 400`,
        width: width * density,
        opacity: opacity * density,
      });
    }

    return paths;
  };

  const paths = generatePaths();

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            strokeLinecap="round"
          />
        ))}
      </svg>
    </div>
  );
}
