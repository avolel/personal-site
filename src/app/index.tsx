import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectList } from "@/components/ProjectList";
import Head from "expo-router/head";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerClassName="min-h-full"
    >
      <Head>
        <title>Andre Volel</title>
      </Head>
      <Navbar />
      <Hero />
      <ProjectList />
      <Footer />
    </ScrollView>
  );
}
