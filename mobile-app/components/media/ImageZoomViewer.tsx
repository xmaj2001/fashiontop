import { X } from 'lucide-react-native';
import React from 'react';
import { ActivityIndicator, Modal, TouchableOpacity, View } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

interface ImageZoomViewerProps {
  visible: boolean;
  imageUri: string;
  onClose: () => void;
}

export const ImageZoomViewer = ({ visible, imageUri, onClose }: ImageZoomViewerProps) => {

  const loadingRender = () => (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="large" color="#FFF" />
    </View>
  );

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View className="flex-1 bg-black">
        {/* Botão fechar */}
        <TouchableOpacity
          onPress={onClose}
          className="absolute top-12 left-6 z-10 bg-black/60 p-3 rounded-full"
        >
          <X size={28} color="#FFF" strokeWidth={2.5} />
        </TouchableOpacity>

        {/* Imagem com zoom */}
        <ImageViewer
          imageUrls={[{ url: imageUri }]}
          enableSwipeDown={true}
          enableImageZoom={true}
          loadingRender={loadingRender}
          onSwipeDown={onClose}
        />
      </View>
    </Modal>
  );
};
