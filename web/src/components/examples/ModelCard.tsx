import ModelCard from '../ModelCard';
import model1 from '@assets/generated_images/Female_model_headshot_portrait_46fd5fdb.png';

export default function ModelCardExample() {
  const model = {
    id: '1',
    name: 'Isabella Silva',
    image: model1,
    height: 175,
    categories: ['Editorial', 'Passarela', 'Comercial'],
    experience: 'Profissional'
  };

  return (
    <div className="w-80">
      <ModelCard model={model} onClick={() => console.log('Model clicked')} />
    </div>
  );
}
