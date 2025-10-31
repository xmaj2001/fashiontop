import { useState } from 'react';
import ModelProfile from '../ModelProfile';
import { Button } from '@/components/ui/button';
import model1 from '@assets/generated_images/Female_model_headshot_portrait_46fd5fdb.png';
import model2 from '@assets/generated_images/Female_model_full_body_21051402.png';
import model3 from '@assets/generated_images/Diverse_model_professional_shot_35a0f71f.png';

export default function ModelProfileExample() {
  const [isOpen, setIsOpen] = useState(false);

  const model = {
    id: '1',
    name: 'Isabella Silva',
    images: [model1, model2, model3],
    height: 175,
    weight: 58,
    measurements: '86-61-91 cm',
    experience: 'Profissional (5 anos)',
    categories: ['Editorial', 'Passarela', 'Comercial', 'Videoclip'],
    portfolio: '/portfolio.pdf',
    availability: 'Disponível',
    bio: 'Modelo profissional com ampla experiência em editoriais de moda, desfiles e campanhas publicitárias. Trabalhou com marcas renomadas e possui portfólio internacional.'
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Ver Perfil do Modelo
      </Button>
      {isOpen && (
        <ModelProfile model={model} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}
