import { createFileRoute } from '@tanstack/react-router';
import React from 'react';
import ModelDetailPage from '@/pages/modelos/ModeloPage';

// Componente placeholder para a tela de detalhes
const ModelDetailScreen: React.FC = () => {
  // Acesso ao parâmetro dinâmico da rota
  const { modeloId } = Route.useParams();

  return (
   <ModelDetailPage/>
  );
};

// Configuração da Rota Dinâmica
export const Route = createFileRoute('/modelos/$modeloId')({
  // Garante que a rota só seja carregada se o usuário estiver logado
//   beforeLoad: ({ context }) => {
//     const auth = context.auth;
//     if (!auth.userId) {
//       throw new Navigate({ to: '/auth' });
//     }
//     return { auth };
//   },
  // Validação dos parâmetros (zod, etc., seria usado aqui em um projeto real)
  parseParams: (params) => ({
    modeloId: params.modeloId,
  }),
  // O componente principal da rota
  component: ModelDetailScreen,
});
