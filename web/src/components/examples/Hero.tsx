import Hero from '../Hero';
import heroImage from '@assets/generated_images/Hero_banner_luxury_model_e4703d83.png';
import model1 from '@assets/generated_images/Female_model_headshot_portrait_46fd5fdb.png';
import model2 from '@assets/generated_images/Male_model_professional_portrait_5413a58d.png';

export default function HeroExample() {
  const slides = [
    {
      image: heroImage,
      title: 'Modelos Profissionais',
      subtitle: 'Encontre os melhores talentos para seus eventos, videoclips e campanhas'
    },
    {
      image: model1,
      title: 'Experiência e Elegância',
      subtitle: 'Portfólio completo com os mais prestigiados modelos do mercado'
    },
    {
      image: model2,
      title: 'Contratação Simplificada',
      subtitle: 'Entre em contato direto via WhatsApp e garanta seu modelo ideal'
    }
  ];

  return <Hero slides={slides} />;
}
