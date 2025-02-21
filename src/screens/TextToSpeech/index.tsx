import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TextInput,
  Keyboard,
  StyleSheet,
  ListRenderItem,
  Pressable,
  SafeAreaView,
} from "react-native";
import Tts from "react-native-tts";
import Slider from "@react-native-community/slider";

interface Voice {
  id: string;
  name: string;
  language: string;
}

const options = [
  {
    id: "en-US",
    name: "Bonjour! Comment allez-vous ?",
  },
  {
    id: "en-GB",
    name: "नमस्ते! आप कैसे हैं?",
  },
  {
    id: "es-ES",
    name: "నమస్తే! మీరు ఎలా ఉన్నారు?",
  },
  {
    id: "es-US",
    name: "Note that the Hermes bytecode format may change between different Hermes versions — an update produced for a specific version of Hermes will not run on a different version of Hermes. Starting from Expo SDK 46 (React Native 0.69), Hermes is bundled within React Native. Updating React Native version or Hermes version can be thought of in the same way as updating any other native module. So if you update the react-native version you should also update the runtimeVersion in app.json. If you don't do this, your app may crash on launch because the update may be loaded by an existing binary that uses an older Hermes version that is incompatible with the updated bytecode format. See runtimeVersion for more information.",
  },
  {
    id: "fr-FR",
    name: "നമസ്കാരം! നിങ്ങൾ എങ്ങനെ ഇരിക്കുകയാണ്?",
  },
  {
    id: "fr-CA",
    name: "My name is Maximus Decimus Meridius, commander of the Armies of the North, General of the Felix Legions, loyal servant to the true emperor, Marcus Aurelius. Father to a murdered son, husband to a murdered wife. And I will have my vengeance, in this life or the next.",
  },
  {
    id: "de-DE",
    name: "German (Germany)",
  },
];

const TextToSpeech: React.FC = () => {
  const [voices, setVoices] = useState<Voice[]>([]);
  const [ttsStatus, setTtsStatus] = useState<string>("initializing");
  const [selectedVoice, setSelectedVoice] = useState<string | null>(null);
  const [speechRate, setSpeechRate] = useState<number>(0.6);
  const [speechPitch, setSpeechPitch] = useState<number>(1);
  const [text, setText] = useState<string>("This is an example text");

  useEffect(() => {
    Tts.addEventListener("tts-start", () => setTtsStatus("started"));
    Tts.addEventListener("tts-finish", () => setTtsStatus("finished"));
    Tts.addEventListener("tts-cancel", () => setTtsStatus("cancelled"));
    Tts.setDefaultRate(speechRate);
    Tts.setDefaultPitch(speechPitch);
    Tts.setDefaultVoice("te-IN-language"); 

    Tts.getInitStatus().then(initTts);
  }, []);

  const initTts = async () => {
    const availableVoices = (await Tts.voices())
      .filter((v: any) => !v.networkConnectionRequired && !v.notInstalled)
      .map((v: any) => ({ id: v.id, name: v.name, language: v.language }));

    if (availableVoices.length > 0) {
      setSelectedVoice(availableVoices[0].id);
      try {
        await Tts.setDefaultLanguage(availableVoices[0].language);
        await Tts.setDefaultVoice("te-IN-language");
      } catch (err) {
        console.log("setDefaultLanguage error", err);
      }
    }
    console.log("availableVoices:", availableVoices);
    setVoices(availableVoices);
    setTtsStatus("initialized");
  };

  const readText = (text) => {
    Tts.stop();
    Tts.speak(text);
  };

  const onVoicePress = async (voice: Voice) => {
    try {
      await Tts.setDefaultLanguage(voice.language);
      await Tts.setDefaultVoice(voice.id);
      setSelectedVoice(voice.id);
    } catch (err) {
      console.log("setDefaultLanguage error", err);
    }
  };

  const renderItem: ListRenderItem<Voice> = ({ item }) => (
    // <Button
    //   title={`${item.language} - ${item.name || item.id}`}
    //   color={selectedVoice === item.id ? undefined : "#969696"}
    //   onPress={() => {
    //     readText(item.language);
    //     onVoicePress(item);
    //     readText(item.language);
    //   }}
    // />
    <Pressable
      onPress={() => readText(item.name)}
      className="bg-red-200 mb-2 p-1 justify-center items-center"
    >
      <Text>{item.name}</Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>React Native TTS Example</Text>
      <Button title="Read text" onPress={() => readText(text)} />
      <Text style={styles.label}>Status: {ttsStatus}</Text>
      <Text style={styles.label}>Selected Voice: {selectedVoice}</Text>

      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>Speed: {speechRate.toFixed(2)}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0.1}
          maximumValue={1.5}
          step={0.01}
          value={speechRate}
          onSlidingComplete={(value) => {
            setSpeechRate(value);
            Tts.setDefaultRate(value);
          }}
        />
      </View>

      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>Pitch: {speechPitch.toFixed(2)}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0.5}
          maximumValue={2}
          step={0.01}
          value={speechPitch}
          onSlidingComplete={(value) => {
            setSpeechPitch(value);
            Tts.setDefaultPitch(value);
          }}
        />
      </View>

      <TextInput
        style={styles.textInput}
        onChangeText={setText}
        value={text}
        onSubmitEditing={Keyboard.dismiss}
      />
      <View className="mt-3">
        <FlatList keyExtractor={(item) => item.id} data={options} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  label: {
    textAlign: "center",
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  sliderLabel: {
    textAlign: "center",
    marginRight: 20,
  },
  slider: {
    width: 200,
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginTop: 10,
    padding: 5,
  },
});

export default TextToSpeech;
