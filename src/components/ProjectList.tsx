import { ExternalLink } from "@/components/ExternalLinkText";
import { GradientText } from "@/components/GradientText";
import { Section } from "@/components/Section";
import { Tag } from "@/components/Tag";
import { projects } from "@/site";
import { Text, View } from "react-native";

export function ProjectList() {
  return (
    <Section
      title={
        <>
          My <GradientText>Projects</GradientText>
        </>
      }
    >
      <View className="flex-col gap-6">
        {projects.map((project) => (
          <View
            key={project.name}
            className="rounded-md bg-background-element p-3"
          >
            <View className="flex-col items-start gap-y-2 md:flex-row md:items-center">
              <ExternalLink
                href={project.link}
                className="text-xl font-semibold text-text hover:text-accent"
              >
                {project.name}
              </ExternalLink>

              <View className="flex-row flex-wrap gap-2 md:ml-3">
                {project.tags.map((tag) => (
                  <Tag key={tag.label} color={tag.color}>
                    {tag.label}
                  </Tag>
                ))}
              </View>
            </View>

            <Text className="font-display mt-3 text-text-secondary">
              {project.description}
            </Text>
          </View>
        ))}
      </View>
    </Section>
  );
}
