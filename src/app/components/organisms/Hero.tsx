
interface HeroProps {
  title: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ title, description }) => (
  <div
    className="text-center  text-white"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-3xl font-bold">{title}</h1>
    <p className="mt-4">{description}</p>
  </div>
);

export default Hero;
