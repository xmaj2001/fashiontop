import { HeaderGalery } from "@/components/headers/HeaderGalery";
import { BottomBar } from "@/components/main/BottomBar";
import { ItemGalery, ItemGaleryStatus } from "@/components/main/ItemGalery";
import { ImageZoomViewer } from "@/components/media/ImageZoomViewer";
import MasonryList from "@react-native-seoul/masonry-list";
import { useState } from "react";
import { View } from "react-native";

export default function GaleryScreen() {
  const [selectedItem, setSelectedItem] = useState<ItemGalery | null>(null);

  const data = Array.from({ length: 30 }).map((_, index) => ({
    id: index + 1,
    uri: `https://picsum.photos/800/500?random=${index + 1}`,
    height: Math.floor(Math.random() * 100) + 80, // Random height between 50 and 150
    status: ItemGaleryStatus.APPROVED,
    type: "photo",
  }));

  return (
    <View className="flex-1 bg-[#141414]">
      {/* Header bar */}
      <HeaderGalery />

      {/* Main content */}
      <View className="flex-1">
        <View className="w-full px-4 mt-4 h-full">
          <MasonryList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            contentContainerStyle={{ paddingBottom: 10, gap: 4 }}
            onEndReached={() => console.log("onEndReached")}
            renderItem={({ item }: any) => (
              <ItemGalery
                uri={item.uri}
                height={item.height}
                onPress={() => setSelectedItem(item)}
              />
            )}
          />
        </View>
      </View>

      {/* Bottom Bar */}
      <BottomBar />
      {/* <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} /> */}
      {selectedItem && selectedItem.type === "photo" ? (
        <ImageZoomViewer
          visible={true}
          imageUri={selectedItem.uri}
          onClose={() => setSelectedItem(null)}
        />
      ) : null}
    </View>
  );
}
