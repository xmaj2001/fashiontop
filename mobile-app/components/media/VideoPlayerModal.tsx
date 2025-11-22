import { Pause, Play, X } from 'lucide-react-native';
import React, { useRef, useState } from 'react';
import { ActivityIndicator, Modal, TouchableOpacity, View } from 'react-native';
import Video, { VideoRef } from 'react-native-video';

interface VideoPlayerModalProps {
  visible: boolean;
  videoUri: string;
  onClose: () => void;
}

export const VideoPlayerModal = ({ visible, videoUri, onClose }: VideoPlayerModalProps) => {
  const videoRef = useRef<VideoRef>(null);
  const [paused, setPaused] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View className="flex-1 bg-black justify-center">
        {/* Botão fechar */}
        <TouchableOpacity
          onPress={onClose}
          className="absolute top-12 left-6 z-10 bg-black/60 p-3 rounded-full"
        >
          <X size={28} color="#FFF" strokeWidth={2.5} />
        </TouchableOpacity>

        {/* Vídeo */}
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setPaused(!paused)}
          className="flex-1 justify-center items-center"
        >
          <Video
            ref={videoRef}
            source={{ uri: videoUri }}
            className="w-full h-full"
            resizeMode="contain"
            paused={paused}
            onLoad={() => setLoading(false)}
            repeat={true}
            controls={false} // usamos controles customizados
          />

          {/* Indicador de loading */}
          {loading && (
            <View className="absolute inset-0 justify-center items-center">
              <ActivityIndicator size="large" color="#FFD700" />
            </View>
          )}

          {/* Play/Pause no centro */}
          <View className="absolute inset-0 justify-center items-center pointer-events-none">
            {paused ? (
              <Play size={80} color="#FFF" fill="#FFF" className="opacity-80" />
            ) : (
              <Pause size={80} color="#FFF" fill="#FFF" className="opacity-80" />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};