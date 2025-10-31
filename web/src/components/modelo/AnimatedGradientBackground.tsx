export default function AnimatedGradientBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-purple-900 to-pink-800 animate-gradient-shift bg-[length:400%_400%]" />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}
