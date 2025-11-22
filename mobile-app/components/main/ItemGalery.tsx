import { Loader, Star, XOctagon } from "lucide-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

export enum ItemGaleryStatus {
  PENDING = 0,
  APPROVED = 1,
  REJECTED = 2,
  DESTAQUE = 3,
}

// export enum ItemGaleryStatus {
//   PENDING = 'PENDENTE',
//   APPROVED = 'APROVADO',
//   REJECTED = 'REJEITADO',
// }

export interface ItemGalery{
  id: number;
  uri: string;
  height: number;
  status: ItemGaleryStatus;
  type: 'photo' | 'video';
}

interface ItemGaleryProps {
  uri: string;
  height: number;
  status?: ItemGaleryStatus;
  type?: 'photo' | 'video';
  onPress?: (type: 'photo' | 'video') => void;
}

export function ItemGalery({ uri, height, status, type, onPress }: ItemGaleryProps) {
  // Gerar estado aleatório se não for fornecido
  if (status === undefined) {
    const statuses = Object.values(ItemGaleryStatus);
    status = statuses[
      Math.floor(Math.random() * statuses.length)
    ] as ItemGaleryStatus;
  }

  const statusPending = () => {
    return (
      <View className="w-full h-full p-2 bg-black/50 justify-center items-center absolute">
        <Loader size={24} color="#FFFFFF" opacity={0.8} className="animate-spin" />
        <Text className="text-white text-sm font-kaiseiRegular">PENDENTE</Text>
      </View>
    );
  };

  const statusDestaque = () => {
    return (
      <View className="w-full h-full p-2 absolute flex items-end justify-start">
        <View className="bg-[#FFD700]/20  p-2 rounded-full">
          <Star size={16} color="#FFD700" fill={"#141414"} opacity={0.8} />
        </View>
      </View>
    );
  };

  const statusRejected = () => {
    return (
      <View className="w-full h-full p-2 bg-black/30 border gap-2 rounded-md border-red-500/30 justify-center items-center absolute">
        <XOctagon size={24} color="#FFFFFF" opacity={0.8} />
        <Text className="text-white text-sm font-kaiseiRegular animate-pulse">
            REJEITADO
        </Text>
      </View>
    );
  }

  return (
    <TouchableOpacity className="m-2 rounded-md overflow-hidden relative" 
      onPress={() => onPress?.(type ? type : 'photo')}>
      <Image
        source={{ uri }}
        className="w-full"
        style={{ height }}
        resizeMode="cover"
      />
      {status === ItemGaleryStatus.PENDING && statusPending()}
      {status === ItemGaleryStatus.DESTAQUE && statusDestaque()}
      {status === ItemGaleryStatus.REJECTED && statusRejected()}
    </TouchableOpacity>
  );
}
